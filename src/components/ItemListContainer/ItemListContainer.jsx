import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../../../products.json'
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css'

export const ItemListContainer = ({}) => {

  const [item, setItem] = useState([])
  const {id} = useParams()
  let nn = []
  console.log(id);

  useEffect(()=>{
   nn = id != undefined ? products.filter(product => product.categoria === id) : products
   console.log(nn);
    setItem(nn)
  },[id])
  

  return (

    <div className='container'>
      <p>Esto se está ejecutando antes que el setTimeOut del useEffect</p>
      <ItemList item={item}/>
</div>
  )
}
