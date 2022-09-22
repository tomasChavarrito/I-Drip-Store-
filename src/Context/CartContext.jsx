import React, { useState, useContext} from 'react'
export const CartContext = React.createContext([]);

export const useCartContext = () => useContext (CartContext);

export const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map(product => {
        return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
      }));
    } else {
      setCart ([ ...cart, { ...item, quantity }]);
    }
  }

  console.log('carrito:' ,cart);

  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext