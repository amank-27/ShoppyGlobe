import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'; // import useSelector

function Header() {
  const cartCount = useSelector((state) => state.cart.items.length); // get cart count from Redux store

  return (
    <header className="bg-[#097271] text-[peachpuff] p-4">
    <div className="container mx-auto flex justify-between bg-[#097271]">
      <Link to="/" className="text-sm bg-[#097271]">Home</Link>
      <h1 className='text-purple-900 bg-[#097271] text-xl font-extrabold'> ShoppyGlobe</h1>
      <nav className='bg-[#097271]'>
      <Link to="/searchproduct" className="mr-4 bg-[#097271] text-sm">Search Products</Link> {/* link to SearchProducts */}
      <Link to="/cart" className="mr-4 bg-[#097271] text-sm">Cart ({cartCount})</Link>
      <Link to="/checkout" className='text-sm bg-[#097271]'>Checkout</Link>
      </nav>
    </div>
    </header>
  );
}

export default Header;
