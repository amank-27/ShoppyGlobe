import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../utils/cartSlice'; // import removeFromCart action

function Cart() {
  const cart = useSelector((state) => state.cart.items); // get cart items from Redux store
  const dispatch = useDispatch(); // initialize dispatch hook

  // handling removing item from the cart
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // dispatch removeFromCart action
  };

  // calculating the total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
  <div>
    <h2 className="text-2xl font-bold">Cart</h2>
    {cart.length === 0 ? ( <p>Your cart is empty</p>) : (
    <div>
     {cart.map((item) => (
     <div key={item.id} className="flex justify-between p-4 border-b">
      <div>
      <h3>{item.title}</h3>
       <p>Quantity: {item.quantity}</p>
       <p>${item.price} each</p>
  </div>
  <div>
      <button onClick={() => handleRemoveFromCart(item.id)} // Call handleRemoveFromCart on click
      className="bg-red-500 text-white p-2 rounded">
       Remove
      </button>
  </div>
 </div>
  ))}
 <div className="mt-4">
   <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
 </div>
</div>
  )}
  </div>
  );
}

export default Cart;
