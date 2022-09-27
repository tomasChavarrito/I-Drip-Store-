import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Navbar from './components/navegate/Navbar'
import {ItemListCointainer} from './components/ItemListCointainer/index';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';
import React from 'react';
import {CartProvider} from './Context/CartContext'
import Cart from './components/Cart/cart';


export const CartContext = React.createContext('');
console.log('CartContext: ', CartContext);


const App = () => {
  
  
  return (
    <div className="App">


        <Router>

        <CartProvider value='IDS'>

        <Navbar/>
           <h1> ~I Drip Store~</h1>

        <Routes>
          <Route path='/inicio' element={<ItemListCointainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListCointainer />} />
          <Route path='/' element={<ItemListCointainer />} />            {/*Lista de entrada de productos en la pagina, no borrar */}
          <Route path='/cart' element={<Cart />} />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        </Routes>

        </CartProvider>

        </Router>


      </div>
  );
}

export default App;