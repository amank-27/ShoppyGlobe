import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../utils/cartSlice'; 

// using props to pass data from parent components to child components,
function ProductItem(props) {  
  const dispatch = useDispatch(); 

  const handleAddToCart = () => {
    dispatch(addToCart(props.product)); // access product from props
  };

  return (
    <div className="bg-white shadow-md shadow-cyan-900 rounded-lg overflow-hidden">
    <img src={props.product.images[0]} alt={props.product.title}
    className="w-full h-48 object-cover" />
    <div className="p-4">
   <h2 className="text-xl text-cyan-700 font-bold">{props.product.title}</h2>
  <p className="text-purple-900 mt-2">${props.product.price}</p>
  <button onClick={handleAddToCart} // call handleAddToCart when clicked 
className="mt-3 w-full bg-purple-500 text-white p-2 rounded">
   Add to Cart
</button>
  <Link to={`/products/${props.product.id}`} className="mt-2 block text-purple-500">
     View Details
    </Link>
 </div>
  </div>
);
}

export default ProductItem;
