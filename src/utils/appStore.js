import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // import the cartReducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // add cart reducer to the store
  },
});

export default store;
