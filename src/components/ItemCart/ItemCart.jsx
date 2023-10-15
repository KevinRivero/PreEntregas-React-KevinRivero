import React from 'react'
import './ItemCart.css'
import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const ItemCart = ({ item }) => {

    const {productPrice, deleteItem} = useCartContext()

    const subTotal = productPrice(item.id)

    return ( 
        <div className='container card d-flex contenedorItemCart'>
            <div className='image'>
                <Link to={"/item/" + item.id}><img src={item.link} alt="" /></Link>
            </div>
            <div className='product'>
                <div className='description'>
                    <p>{`${item.nombre}. ${item.descripcion}`}</p>
                </div>
                <div className='options'>
                    <p onClick={() => deleteItem(item.id)}>Eliminar</p>
                </div>
            </div>
            <div className='count'>
                <p className='card unidades'>{`${item.cantidad} unidades`}</p>
                <p className='stock'>{item.stock} disponibles</p>
            </div>
            <div className='itemprice'>
                <p>${subTotal}</p>
            </div>
        </div>
        
    )
}

export default ItemCart