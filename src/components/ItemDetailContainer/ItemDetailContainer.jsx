import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import products from '../../../products.json'

export const ItemDetailContainer = () => {


  const [item, setItem] = useState([])
  const {id} = useParams()

  const fetchData = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(products.find(product => product.id === parseInt(id) ))
      }, 500);
    }) 
  }

  useEffect(() => {
    fetchData()
    .then(res => setItem(res))
    console.log('id ' + id);
  },[id])

  return (
    <div className='container'>
      <ItemDetail item={item}/>
    </div>
  )
}
