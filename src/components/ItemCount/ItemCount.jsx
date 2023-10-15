import React, { useContext, useState } from 'react'


export const ItemCount = ({stockProduct,initial, onAdd}) => {

  const [counter, setCounter] = useState(initial)
  

  

  const incrementar = () => {
    if (counter < stockProduct) {
      setCounter(counter + 1)
    }
  }

  const decrementar = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }
 

  return (
    <div>
      <div className="btn-group" role="group" aria-label="Basic outlined example">
        <button type="button" className="btn btn-outline-primary" disabled={counter<=1} onClick={decrementar}>-</button>
        <button type="button" className="btn btn-outline-primary">{counter}</button>
        <button type="button" className="btn btn-outline-primary" onClick={incrementar}>+</button>
        <button type="button" disabled={counter>0 ? false : true} className="btn btn-primary addCart" onClick={() => onAdd(counter)} >Agregar al Carrito</button>
        
      </div>
    </div>
  )
}
