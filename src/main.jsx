import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/appStore'; 

// Lazy load components
const App = React.lazy(() => import('./App'));
const ProductList = React.lazy(() => import('./components/ProductList'));
const ProductDetails = React.lazy(() => import('./components/ProductDetails'));
const Cart = React.lazy(() => import('./components/Cart'));
const Checkout = React.lazy(() => import('./components/Checkout'));
const NotFound = React.lazy(() => import('./components/NotFound'));
const SearchProduct = React.lazy(() => import('./components/SearchProduct'));


const root = ReactDOM.createRoot(document.getElementById('root'));
// define the routing configuration
const appRouter = createBrowserRouter([
  {
   path: "/",
   element: (
  <Suspense fallback={<div>Loading app...</div>}>
   <App />
 </Suspense>
   ),
 children: [
   {
  path: "/",
  element: (
 <Suspense fallback={<div>Loading products...</div>}>
 <ProductList />
</Suspense>
   ),
  },
  {
 path: "products/:id",
element: (
 <Suspense fallback={<div>Loading product details...</div>}>
  <ProductDetails />
</Suspense>
 ),
},
 {
path: "cart",
element: (
<Suspense fallback={<div>Loading cart...</div>}>
<Cart />
</Suspense>
 ),
 },
 {
 path: "checkout",
element: (
<Suspense fallback={<div>Loading checkout...</div>}>
<Checkout />
 </Suspense>
 ),
 },
 {
 path: "searchproduct",
element: (
<Suspense fallback={<div>Loading search...</div>}>
 <SearchProduct />
</Suspense>
 ),
 },
{
path: "*",
 element: (
<Suspense fallback={<div>Loading page...</div>}>
  <NotFound />
 </Suspense>
   ),
    },
  ],
  },
]);

root.render(
  <Provider store={store}> 
    <RouterProvider router={appRouter} />
  </Provider>
);
