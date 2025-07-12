import React, { useState } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  Star,
  Filter,
  SortAsc,
} from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: "$299.99",
      stock: 45,
      rating: 4.8,
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      status: "Active",
    },
    {
      id: 2,
      name: "Premium Smartphone Case",
      category: "Accessories",
      price: "$24.99",
      stock: 128,
      rating: 4.6,
      image:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      status: "Active",
    },
    {
      id: 3,
      name: "Ergonomic Laptop Stand",
      category: "Office",
      price: "$89.99",
      stock: 32,
      rating: 4.7,
      image:
        "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      status: "Active",
    },
    {
      id: 4,
      name: "Portable Bluetooth Speaker",
      category: "Electronics",
      price: "$129.99",
      stock: 0,
      rating: 4.9,
      image:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      status: "Out of Stock",
    },
    {
      id: 5,
      name: "Gaming Mechanical Keyboard",
      category: "Electronics",
      price: "$159.99",
      stock: 18,
      rating: 4.5,
      image:
        "https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      status: "Active",
    },
    {
      id: 6,
      name: "Smart Fitness Watch",
      category: "Wearables",
      price: "$249.99",
      stock: 67,
      rating: 4.4,
      image:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      status: "Active",
    },
  ];

  const categories = [
    "all",
    "Electronics",
    "Accessories",
    "Office",
    "Wearables",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Products
          </h1>
          <p className="text-slate-600 mt-1">Manage your product inventory</p>
        </div>
        <button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 shadow-lg shadow-blue-500/25">
          <Plus className="w-5 h-5" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="flex space-x-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>

            <button className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">Filter</span>
            </button>

            <button className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors flex items-center space-x-2">
              <SortAsc className="w-4 h-4" />
              <span className="hidden sm:inline">Sort</span>
            </button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div
                className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                  product.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.status}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-semibold text-slate-800 mb-2">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-slate-600">
                    {product.rating}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-slate-800">
                  {product.price}
                </span>
                <span
                  className={`text-sm ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </span>
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>View</span>
                </button>
                <button className="bg-slate-100 text-slate-600 py-2 px-3 rounded-lg hover:bg-slate-200 transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button className="bg-red-100 text-red-600 py-2 px-3 rounded-lg hover:bg-red-200 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 text-lg mb-2">No products found</div>
          <p className="text-slate-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
