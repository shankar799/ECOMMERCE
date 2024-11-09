import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';  // Home page component
import Register from './Pages/Register';  // Register page component
import Login from './Pages/Login';  // Login page component
import Cart from './Pages/Cart';  // Cart page component
import Product from './Pages/Product'; // Product page component
import ProductList from './Pages/ProductList'; // Product list page component
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>  {/* Wrap the Routes with Router */}
    <ScrollToTop /> {/* This will handle scrolling to top on route change */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home page route */}
        <Route path="/register" element={<Register />} />  {/* Register page route */}
        <Route path="/login" element={<Login />} />  {/* Login page route */}
        <Route path="/cart" element={<Cart />} />  {/* Cart page route */}
        <Route path="/productList" element={<ProductList />} /> {/* Product list page route */}
        <Route path="/product" element={<Product />} /> {/* Product page route with dynamic parameter */}
      </Routes>
    </Router>

  );
};

export default App;
