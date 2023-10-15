import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemList } from '../ItemList/ItemList';
import {getFirestore, collection, getDocs, where, query, getDoc} from 'firebase/firestore'
import './ItemListContainer.css'

export const ItemListContainer = ({}) => {

  const [item, setItem] = useState([])
  const {id} = useParams()
 
  
  useEffect(()=>{

    const queryDb = getFirestore()
    const queryCollection = collection(queryDb, 'items')
    if(id){
      const queryFilter = query(queryCollection, where('categoria', '==', id))
      getDocs(queryFilter).then((res) => setItem(res.docs.map(product => ({id:product.id, ...product.data()}))))
    }else{
      getDocs(queryCollection).then((res) => setItem(res.docs.map(product => ({id:product.id, ...product.data()}))))
    }
  

  },[id])
  
  return (

    <div className='container'>
      <ItemList item={item}/>
</div>
  )
}
