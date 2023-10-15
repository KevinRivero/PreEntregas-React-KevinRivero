import React, { useEffect, useState } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {getFirestore, doc, getDoc} from 'firebase/firestore'

export const ItemDetailContainer = () => {


  const [item, setItem] = useState([])
  const {id} = useParams()

 

  useEffect(() => {
    const queryDb = getFirestore()
    const queryDoc = doc(queryDb, 'items', id)
    getDoc(queryDoc).then(res => setItem({id:res.id, ... res.data()}))
  },[id])

  return (
    <div className='container'>
      <ItemDetail item={item}/>
    </div>
  )
}
