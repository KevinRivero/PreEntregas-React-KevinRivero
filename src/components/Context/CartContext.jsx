import React, { useState, createContext, useContext } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addItem = (item, quantity) => {
    console.log('item id ' + item.id );
    if (isInCart(item.id)) {
      setCart( cart.map((product) => {
        return product.id === item.id ? {...product, cantidad: product.cantidad + quantity } : product
      }))
     
    } else {
      setCart([...cart, { ...item, cantidad: quantity }])
    }
  }

  const isInCart = (id) => {
    return cart.some(product => product.id === id)
  }

  const deleteItem = (id) => {
    setCart(cart.filter(product => product.id !== id))
  }

  const removeList = () => {
    setCart([])
  }

  const totalProducts = () => {
    return cart.reduce((acumulador, valorActual) => acumulador + valorActual.cantidad, 0)

  }

  const productPrice = (id) => {
    if(!isInCart){
      return null
    }
    const itemSubtotal = cart.find((product )=> product.id === id)
    return itemSubtotal.cantidad * itemSubtotal.precio
  }


  const totalPrice = () => {
    return cart.reduce((acumulador, valorActual) => 
      acumulador + valorActual.cantidad * valorActual.precio, 0)
    
  }


  return (
    <CartContext.Provider value={{ addItem, deleteItem, cart, removeList, totalPrice, totalProducts, productPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider



