import React from 'react';

//to show items inside the cart and price 
function CartItem({ item }) {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div>{item.title}</div>
      <div>{item.quantity} x ${item.price}</div>
    </div>
  );
}

export default CartItem;
