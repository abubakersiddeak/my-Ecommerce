"use client";
import React, { useState, useMemo } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

export default function Home() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const addToCart = (product) => {
    if (!product.inStock) return;

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const cartStats = useMemo(
    () => ({
      totalItems: cartItems.reduce((total, item) => total + item.quantity, 0),
      totalPrice: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    }),
    [cartItems]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={cartStats.totalItems}
        onCartClick={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main>
        <Hero />
        <Categories
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <ProductGrid
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          onAddToCart={addToCart}
        />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        totalPrice={cartStats.totalPrice}
      />
    </div>
  );
}
