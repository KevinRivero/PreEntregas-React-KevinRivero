import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { useCartContext } from '../Context/CartContext'

export const CartWidget = ({}) => {

  const { totalProducts} = useCartContext()

  return (
    <div>
        <button type="button" className="btn btn-primary position-relative">
        <i className="fa-solid fa-cart-shopping"></i> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{totalProducts()}</span>
</button>
    </div>
    
    
  )
}
