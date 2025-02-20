// src/CartContext.js
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load the cart from localStorage when the app mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      console.log("Loaded cart from localStorage:", parsedCart);
      setCart(parsedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Cart updated:", cart);
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      let updatedCart;
      if (existing) {
        updatedCart = prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        updatedCart = [...prev, { ...item, quantity: 1 }];
      }
      console.log("Item added:", item, "Updated cart:", updatedCart);
      return updatedCart;
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      );
      console.log(`Updated quantity for ${id} by ${delta}:`, updatedCart);
      return updatedCart;
    });
  };

  const removeItem = (id) => {
    setCart((prev) => {
      const updatedCart = prev.filter((item) => item.id !== id);
      console.log(`Removed item ${id}:`, updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    console.log("Clearing cart.");
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
