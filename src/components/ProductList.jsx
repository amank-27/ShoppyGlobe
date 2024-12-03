import React from 'react';
import ProductItem from './ProductItem';
import useFetch from '../utils/useFetch';
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../utils/cartSlice'; 

function ProductList() {
  const { data, loading, error } = useFetch('https://dummyjson.com/products');// using useFetch
  const dispatch = useDispatch(); 

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // dispatch addToCart action to Redux
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

 return (
    <>
  <div className='text-cyan-700 font-bold text-xl mb-2 shadow-sm shadow-cyan-900'>Welcome to the ShoppyGlobe Store!!</div>
  <div className="grid grid-cols-3 gap-4">
  {data.products.map((product) => (
    <ProductItem key={product.id} product={product} addToCart={handleAddToCart} />
  ))}
  </div>
  </>
);
}

export default ProductList;
