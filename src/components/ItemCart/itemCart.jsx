import React from 'react'
import './itemCart.css'
import { useCartContext } from '../../Context/CartContext'

const ItemCart = ({product}) => {
  const { removeProduct } = useCartContext();
  return (
    <div className= 'itemCart'>
        <img src={product.image} alt={product.title} />
        <div>
            <p>Celular: {product.title}</p>
            <p> Cantidad: {product.quantity}</p>
            <p> Precio u.: {product.price}</p>
            <p> Subtotal: u$d{product.quantity * product.price} </p>
            <button onClick={() => removeProduct(product.id)}> Eliminar </button>
        </div>
    </div>
  )
}

export default ItemCart