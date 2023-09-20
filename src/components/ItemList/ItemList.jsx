import React from 'react'
import {Item} from '../Item/Item'


export const ItemList = ({ item }) => {
  return (
    <div>
      <div className='row row-cols-2 align-items-center justify-content-between'>
        {item.map((product) => {
          return (<Item key={product.id} item={item} />
          )
        })}
      </div>
    </div>
  )
}
