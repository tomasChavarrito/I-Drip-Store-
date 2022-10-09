import React, {useState} from 'react'
import { useCartContext } from '../../Context/CartContext'
import ItemCount from '../ItemCount'
import { Link } from 'react-router-dom'
import {PhoneM2} from '../props/props';
import './itemDetail.css'



 export const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart]= useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }

  return (
        <div className="detalle">
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
       </div>
  )
}

export default ItemDetail
