import React, { useState } from 'react'
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import { useCartContext} from '../Context/CartContext';



export const ItemDetail = ({item}) => {

  const [goCart, setGoCart] = useState(false)
  const {addItem} = useCartContext()

  const onAdd = (quantityToAdd) => {
      setGoCart(true)
      addItem(item,quantityToAdd)
  }

  return (
    <div className='container'>
      <div className='d-flex align-items-center mt-4 justify-content-start fondo'>
        <div className='d-flex contenedor-imagen'>
          <img src={item.link} className='imagen-principal' alt="Imagen del producto" />
        </div>
        <div className='descripcion'>
            <h2 className='tittle mt-2 mb-4'>{item.nombre}</h2>
            <p className='price'>$ {item.precio}</p>
            <p className='mb-4'>{item.descripcion}</p>
            {goCart ? <Link to={'/cart'}><button type="button" className="btn btn-primary" >Terminar compra</button></Link>: <ItemCount stockProduct= {item.stock} initial={0} onAdd={onAdd}/>}
            <p className='card-subtitle mt-1'>Stock disponible:  {item.stock}</p>
        </div>
      </div>
    </div>
  )
}
