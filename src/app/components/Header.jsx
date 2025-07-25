"use client";
import React, { useState } from "react";
import { Search, ShoppingCart, User, Menu, X, Heart } from "lucide-react";
import Image from "next/image";

const Header = ({
  cartItemsCount,
  onCartClick,
  searchTerm,
  onSearchChange,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r rounded-xl flex items-center justify-center shadow-lg">
              <Image
                src={"/WEwork.svg"}
                width={100}
                height={100}
                alt="weal logo"
              />
            </div>
            <div>
              <span className="xl:text-2xl text-xl font-extrabold text-blue-900  ">
                <span>WEAL</span> <span className="text-green-900">B</span>
                <span className="text-red-600">D</span>
              </span>
              <p className="text-xs text-gray-500">Online Store</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, brands, categories..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-sm"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search */}
            <button className="md:hidden p-2.5 cursor-pointer rounded-xl hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Wishlist */}
            <button className="hidden cursor-pointer sm:flex p-2.5 rounded-xl hover:bg-gray-100 transition-colors relative">
              <Heart className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative cursor-pointer p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {cartItemsCount > 9 ? "9+" : cartItemsCount}
                </span>
              )}
            </button>

            {/* Profile */}
            <button className="hidden cursor-pointer sm:flex w-9 h-9  rounded-xl items-center justify-center shadow-lg">
              <User className="w-5 h-5 " />
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-1">
                {["Categories", "Deals", "New Arrivals", "Best Sellers"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
