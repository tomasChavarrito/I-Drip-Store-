import React, {useState} from 'react'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'
import {PhoneM2} from '../props/props';



 const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart]= useState(false);

  const onAdd = (quantity) => {
    setGoToCart(true);
  }

  return (
        <>
        <PhoneM2
         name={data.title}
         dato={data.dato}
         marca={data.marca}
         precio={data.price}
         image={data.image}
         />
        {
          goToCart
            ? <Link to='/cart'>Terminar Compra</Link>
            : <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        }
       </>
  )
}

export default ItemDetail
