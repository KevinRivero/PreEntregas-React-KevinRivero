import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../../../products.json'
import { ItemList } from '../ItemList/ItemList';

export const ItemListContainer = ({}) => {

  const [item, setItem] = useState([])
  const {id} = useParams()

  let nn = []

  useEffect(()=>{
   nn = id ? products.filter(product => product.categoria === id) : products
    setItem(nn)
  },[id])
  
  return (

    <div className='container '>
      <p>Esto se está ejecutando antes que el setTimeOut del useEffect</p>
      <ItemList item={item}/>
</div>
  )
}
