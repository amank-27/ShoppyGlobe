import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
    <Header />
    <div className="container mx-auto p-4">
    <Outlet /> {/* this will render the child route components */}
   </div>
    </div>
  );
}

export default App;
