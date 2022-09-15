import React from 'react'
import ItemCount from '../ItemCount'
import {PhoneM2} from '../props/props';


 const ItemDetail = ({data}) => {
  return (
        <>
        <PhoneM2
         name={data.title}
         dato={data.dato}
         marca={data.marca}
         precio={data.price}
         image={data.image}
         />
        <ItemCount initial={1} stock={10}/>
       </>
  )
}

export default ItemDetail
