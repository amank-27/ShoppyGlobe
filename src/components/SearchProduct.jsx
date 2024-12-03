import React, { useState, useEffect } from 'react';
import useFetch from '../utils/useFetch';
import ProductItem from './ProductItem';

function SearchProduct() {
  const [searchTerm, setSearchTerm] = useState(''); // state to store the search input
  const { data, loading, error } = useFetch('https://dummyjson.com/products'); // fetch all products
  const [filteredProducts, setFilteredProducts] = useState([]); // state to store filtered products

  // Filter products based on the search term
  useEffect(() => {
    if (data) {
      const filtered = data.products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) 
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, data]); // update filtered products when searchTerm or data changes

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // update search term on input change
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
<div className="p-4">
 <h2 className="text-2xl text-cyan-800 font-bold mb-4">Search Products</h2>
<div className="mb-4 w-1/3">
 <input type="text" className="p-2 w-full border border-cyan-700 rounded" placeholder="Search for products..."
  value={searchTerm} onChange={handleSearchChange} // Handle input change
/></div>
<div className="grid grid-cols-3 gap-4">
 {filteredProducts.length === 0 ? ( <div>No products found</div>) : 
 (filteredProducts.map((product) => (
 <ProductItem key={product.id} product={product} />
  ))
 )}
   </div>
    </div>
  );
}

export default SearchProduct;
