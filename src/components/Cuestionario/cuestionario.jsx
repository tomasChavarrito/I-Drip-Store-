import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import { useState } from 'react';
import { addDoc, collection, serverTimestamp} from 'firebase/firestore';
import { db } from '../../Firebase/config';
import './cuestionario.css'

export const Cuestionario = () => {
    const [cliente, setCliente] = useState({name:"", email:"", phone:"", adress:"", card:""})
    const [idPedido, setIdPedido] = useState("");
    const [carga, setCarga] = useState (false);
    const { cart, totalPrice } = useCartContext();
   
     const handleClick= async (e) => {
        e.preventDefault();


        const order = {
            buyer: {
                 name: cliente.name,
                 email: cliente.email,
                 phone: cliente.phone,
                 adress: cliente.adress,
                 card: cliente.card
           },
           items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
           date: serverTimestamp(),
           total: totalPrice(),
         }

        const pedido = await addDoc (collection (db, 'orders'), order);
        setCarga(true);
        setIdPedido(pedido.id);
      }
    

  return (
    <div className="cuestionario">
    {carga ? (
        <div className="orden">
          <h2>Gracias por su compra</h2>
          <p>
            Su numero de orden es <p className="nOrden">{idPedido}</p> En breve
            nos comunicaremos con usted para confirmar su pedido
          </p>
        </div>
      ) :(<div>
        <form className="row g-3">
    <div className="col-md-6">
           <label for="inputEmail4" className="form-label">Email</label>
           <input onChange={(e) => setCliente({...cliente, email:e.target.value})}  type="email" className="form-control" id="inputEmail4" />
    </div>
    <div className="col-md-6">
           <label for="inputPassword4" className="form-label">Apellido, Nombre</label>
           <input onChange={(e) => setCliente({...cliente, name:e.target.value})} type="text" className="form-control" id="inputPassword4" />
    </div>
    <div className="col-12">
           <label for="inputAddress" className="form-label">Direccion</label>
           <input onChange={(e) => setCliente({...cliente, adress:e.target.value})} type="text" className="form-control" id="inputAddress"  />
    </div>
    <div className="col-md-6">
           <label for="inputCity" className="form-label">Telefono</label>
           <input onChange={(e) => setCliente({...cliente, phone:e.target.value})} type="number" className="form-control" id="inputCity" />
    </div>
    <div className="col-md-2">
           <label for="inputZip" className="form-label">Card</label>
           <input onChange={(e) => setCliente({...cliente, card:e.target.value})} type="text" className="form-control" id="inputZip" />
    </div>
    
         <button className="boton" onClick={(e) => handleClick(e)}> Confirmar compra </button>
    </form>
    </div>)}
     </div>
  )
}
export default Cuestionario;

