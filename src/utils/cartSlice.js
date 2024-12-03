import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 items: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  addToCart: (state, action) => {
  const product = action.payload;
  const existingItem = state.items.find(item => item.id === product.id);
  if (existingItem) {
        // if the product is already in the cart, increase the quantity
        existingItem.quantity += 1;
      } else {
        // otherwise, add the new product to the cart with quantity 1
        state.items.push({ ...product, quantity: 1 });
      }
    },
 removeFromCart: (state, action) => {
 const productId = action.payload;
 const existingItem = state.items.find(item => item.id === productId);

if (existingItem) {
  // if quantity is greater than 1, decrease it
 if (existingItem.quantity > 1) {
  existingItem.quantity -= 1;
   } else {
// If quantity is 1, remove the item from the cart
 state.items = state.items.filter(item => item.id !== productId);
   }
  }
 },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
