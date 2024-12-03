import React from 'react';
import { useSelector } from 'react-redux'; // import useSelector

function Checkout() {
  const cart = useSelector((state) => state.cart.items); // get cart items from Redux store

  // calculating total price by multiplying price
  const totalPrice = cart.reduce( (total, item) => total + item.price * item.quantity,0 );
 return (
  <div>
    <h2 className="text-2xl font-bold">Checkout</h2>
    {cart.map((item) => (
  <div key={item.id} className="flex justify-between p-4 border-b">
    <span>{item.title}</span>
    <span>{item.quantity} x ${item.price}</span>
    <span>${(item.price * item.quantity).toFixed(2)}</span> {/* display total price for the item */}
  </div>
  ))}
  <h3 className="text-xl font-bold mt-4">Total: ${totalPrice.toFixed(2)}</h3>
  </div>
  );
}

export default Checkout;
