import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'
import ItemCart from '../ItemCart/itemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: 'Tomás',
      email: 'tomichava@gmail.com',
      phone: '221-123-4567',
      adress: 'Avenida Siempre Viva 123',
      card: '1234 5678 1357 2468 (999)'
    },
    items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
    total: totalPrice(),
  }

  const  handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection (db, 'orders');
    addDoc(ordersCollection, order)
      .then(({ id }) => console.log(id))
  }



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

      <button onClick={handleClick}> Confirmar compra </button>
    </>
  )
}

export default Cart