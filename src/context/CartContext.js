// import React, { createContext, useState } from "react";

// // Create the context
// export const CartContext = createContext();

// // CartProvider component
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Add to cart function
//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   // Remove from cart function
//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
