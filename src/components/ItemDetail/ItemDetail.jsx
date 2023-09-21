import React from 'react'
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemDetail = ({item}) => {

  return (
    <div className='container fondo'>
      <div className='row d-flex row-col-2 align-items-center mt-4'>
        <div className='col-7 d-flex'>
          <img src={item.link} className='img-fluid' alt="" />
        </div>
        <div className='col-5 d-flex text-center flex-column'>
            <h2 className='tittle mt-2 mb-4'>{item.nombre}</h2>
            <p className='mb-4 price'>$ {item.precio}</p>
            <p className='mb-4'>{item.descripcion}</p>
            <ItemCount stockProduct= {10}/>
        </div>
      </div>
    </div>
  )
}
