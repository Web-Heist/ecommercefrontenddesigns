import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HPage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import { CartProvider } from './CartContext';
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { WishlistProvider } from "./components/context/WishlistContext";
import Wishlist from "./components/WishlistPage";

const App = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HPage />} />
            <Route path="/list" element={<ProductList />} />
            <Route path="/details" element={<ProductDetails />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist"  element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<h2 style={{ textAlign: 'center' }}>404: Page not found</h2>} />
          </Routes>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;