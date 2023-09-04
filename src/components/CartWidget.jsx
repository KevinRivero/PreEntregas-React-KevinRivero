import React from 'react'
import 'font-awesome/css/font-awesome.min.css'

export const CartWidget = ({cantidadItems}) => {
  return (
    <div>
        <button type="button" class="btn btn-primary position-relative">
        <i class="fa-solid fa-cart-shopping"></i> <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">{cantidadItems}</span>
</button>
    </div>
    
    
  )
}
