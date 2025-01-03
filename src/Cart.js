// import React, { useContext } from "react";
// const Cart = () => {
//   const { cart, removeFromCart, totalPrice } = useContext(CartContext);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p className="text-gray-600">The cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex justify-between items-center border-b py-2"
//             >
//               <span>{item.title}</span>
//               <span>${item.price.toFixed(2)}</span>
//               <button
//                 className="bg-red-500 text-white px-2 py-1 rounded"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="mt-4 text-right">
//             <h3 className="text-lg font-semibold">
//               Total: ${totalPrice.toFixed(2)}
//             </h3>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
