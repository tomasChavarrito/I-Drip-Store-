import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import ItemCart from '../ItemCart/itemCart';

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0){
    return(
      <>
          <p>No hay elementos en el carrito</p>
          <Link to='/inicio'>Ir a tienda</Link>
      </>
    );
  }
  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p> Total: u$d{totalPrice()} </p>
    </>
  )
}

export default Cart