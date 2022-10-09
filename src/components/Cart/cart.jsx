import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import ItemCart from '../ItemCart/itemCart';
import './cart.css'

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();



  if (cart.length === 0){
    return(
      <div className="tituloCart">
          <p>No hay elementos en el carrito</p>
          <Link to='/inicio'>Ir a tienda</Link>
      </div>
    );
  }
  return (
    <div className="carrito">
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <p> Total: u$d{totalPrice()} </p>

      <Link to='../Cuestionario'> Confirmar compra </Link>
    </div>
  )
}

export default Cart