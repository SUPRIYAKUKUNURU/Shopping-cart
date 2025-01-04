import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Table } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="container my-4">
      <h2 style={{textAlign:"center"}}>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
          <Button variant="warning" onClick={clearCart}>
            Clear Cart
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
