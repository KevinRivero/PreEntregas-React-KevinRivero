import React, { useState } from 'react'
import { useCartContext } from '../Context/CartContext'
import './Checkout.css'
import { addDoc, collection, doc, getFirestore, updateDoc, getDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'



const Checkout = () => {


  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [emailConfirmacion, setEmailConfirmacion] = useState('')
  const [error, setError] = useState('')
  const [ordenId, setOrdenId] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [greetings, setGreetings] = useState(false)
  const { cart, deleteItem, totalPrice,removeList } = useCartContext()


  const formHandler = (event) => {
    event.preventDefault()
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError('Por favor, completa todos los campos')
      return ''
    }
    if (email !== emailConfirmacion) {
      setError('Los email no coinciden')
      return ''
    }

    const total = totalPrice()
    const orden = {
      items: cart.map(product => ({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
        cantidad: product.cantidad
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    }

    Promise.all(
      orden.items.map(async (product) => {
        const db = getFirestore()
        const productRef = doc(db, 'items', product.id)
        const productDoc = await getDoc(productRef)
        const stockActual = productDoc.data().stock

        await updateDoc(productRef, { stock: stockActual - product.cantidad })
      })
    ).then(() => {

      const db = getFirestore()
      addDoc(collection(db, 'orders'), orden)
        .then((docRef) => {
          setOrdenId(docRef.id)
          setGreetings(true)
          deleteItem(docRef.id)
        })
        .catch((error) => {
          console.log('Error en creacion de orden', error);
          setError('Error en orden')
        })
    })
      .catch((error) => {
        console.log('No se puede actualizar el stock', error);
        setError('No se actualizo el stock')
      })

    setNombre('')
    setApellido('')
    setTelefono('')
    setEmail('')
    setEmailConfirmacion('')
    setMensaje('')
    
  }


  if (greetings == false) {
    return (

      <div className='container checkout-final'>
        <div className='card subContainer'>
          <h2>Ingresa tus datos para terminar tu compra!</h2>
          <form className='formControl' onSubmit={formHandler} >
            <div className='inputs'>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input type="phone" className="form-control" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="emailConfirmacion" className="form-label">Confirmar email</label>
                <input type="email" className="form-control" id="emailConfirmacion" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary" onClick={removeList}>Terminar compra!</button>
            </div>
          </form>
        </div>
      </div>
    )
  } else {
    return(
      <div className="container checkout-final">
        <div className="card subContainer">
          <h2 className='titulo-h2'>Tu compra se efectuó correctamente!</h2>
         <h3>Tu número de orden es: {ordenId}</h3>
        <Link to={'/'}> <button type="button" className="btn btn-primary mt-3">Volver a la página principal</button></Link>
        </div>
      </div>
  )}

}

export default Checkout