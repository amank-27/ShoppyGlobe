import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../utils/cartSlice'; 

function ProductDetails() {
  const { id } = useParams(); // get the product ID from the URL
  const { data, loading, error } = useFetch(`https://dummyjson.com/products/${id}`); // use useFetch
  const dispatch = useDispatch(); // initialize dispatch hook

  // handling adding product to the cart
  const handleAddToCart = () => {
    dispatch(addToCart(data)); // dispatch the addToCart action with the product data
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;

  return (
  <div className="bg-white p-4">
  <h2 className="text-2xl font-bold">{data.title}</h2>
 {/* display product image */}
  <img src={data.images[0]} alt={data.title} className="w-full h-64 object-cover mt-4"/>
  <p className="mt-2">${data.price}</p>
  <p className="mt-4">{data.description}</p>
 <button onClick={handleAddToCart} // add to cart when clicked
  className="mt-3 bg-blue-500 text-white p-2 rounded">
   Add to Cart
  </button>
  </div>
  );
}

export default ProductDetails;
