import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../../../products.json'
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css'

export const ItemListContainer = ({}) => {

  const [item, setItem] = useState([])
  const {id} = useParams()
 
  const fetchData = () => {
    return new Promise((resolve, reject) => {

      if(products.length === 0){
        reject(new Error('No hay productos para mostrar'))
      }
      setTimeout(() => {
        resolve(id ? products.filter(product => product.categoria === id) : products)
      }, 500);
    })
  }

  useEffect(()=>{

   fetchData()
    .then(res => setItem(res))
    .catch(rej => console.log(rej.message))

  },[id])
  
  return (

    <div className='container'>
      <ItemList item={item}/>
</div>
  )
}
