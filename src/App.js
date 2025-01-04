import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>Shopping Cart</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;