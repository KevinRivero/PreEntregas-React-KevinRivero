import React from 'react'
import {Item} from '../Item/Item'
import './ItemList.css'


export const ItemList = ({ item }) => {
  return (
    <div>
      <div className='row row-cols-2 align-items-center justify-content-between item-list'>
        {item.map((product) => {
          return (<Item key={product.id} product={product} />
          )
        })}
      </div>
    </div>
  )
}
