import React, { useEffect, useState } from 'react'
import ItemCart from '../ItemCart/ItemCart'
import { useCartContext } from '../Context/CartContext'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = () => {

    const {cart,totalProducts, totalPrice, removeList} = useCartContext()
       

    if(cart.length === 0){
        return (
            <div className="container card carrito-vacio">
                <p>No has agregado ningún producto al carrito todavía!</p>
                <Link to={'/'}> <button type="button" className="btn btn-primary carrito-button" >Buscá tu producto!</button></Link>
            </div>
        )
    }else{
        return (
            <div className='container d-flex cart'>
                <div className='d-flex contenedorProducts'>
                {cart.map(product => {
                    return <ItemCart key={product.id} item={product}/>
                })}
                </div>
                <div className='card contenedorTotal'>
                        <h2>Resumen de compra</h2>
                        <div className='resume products'>
                            <p>Productos</p>
                            <p>{totalProducts()} unidades</p>
                    </div>
                    <div className='resume total'>
                            <p>Total</p>
                            <p className='resume-total'>${totalPrice()}</p>
                    </div>
                    <Link to={'/checkout'}> <button type="button" className="btn btn-primary" >Continuar compra</button> </Link>
                    <p className='resume-clean' onClick={removeList}>Limpiar carrito</p>
                </div>
            </div>
          )
    }


  
}

export default Cart