import React, { useState } from 'react'

export const ItemCount = ({stockProduct}) => {

  const [counter, setCounter] = useState(1)
  const [stock, setStock] = useState(stockProduct)

  const incrementar = () => {
    if (counter < stock) {
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
        <button type="button" className="btn btn-outline-primary" onClick={decrementar}>-</button>
        <button type="button" className="btn btn-outline-primary">{counter}</button>
        <button type="button" className="btn btn-outline-primary" onClick={incrementar}>+</button>
      </div>
    </div>
  )
}
