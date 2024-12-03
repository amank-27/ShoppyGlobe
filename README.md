# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
<div className='flex justify-center items-center w-[90vw] h-[70vh]'>Welcome to the ShoppyGlobe Store</div>
  <div className="grid grid-cols-3 gap-4">
      {data.products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={handleAddToCart} />
      ))}
    </div>