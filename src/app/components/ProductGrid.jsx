import React, { useMemo } from "react";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";

const ProductGrid = ({ selectedCategory, searchTerm, onAddToCart }) => {
  const allProducts = [
    {
      id: 1,
      name: "Wireless Pro Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      category: "audio",
      rating: 4.8,
      reviews: 1247,
      badge: "Best Seller",
      inStock: true,
    },
    // ... baki products gula একই রকম
  ];

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const getBadgeStyle = (badge) => {
    switch (badge) {
      case "Best Seller":
        return "bg-black text-white";
      case "Limited":
        return "bg-black text-white";
      case "New":
        return "bg-black text-white";
      case "Sale":
        return "bg-black text-white";
      case "Popular":
        return "bg-black text-white";
      default:
        return "bg-black text-white";
    }
  };

  return (
    <section className="py-8 lg:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              {selectedCategory === "all"
                ? "All Products"
                : `${
                    selectedCategory.charAt(0).toUpperCase() +
                    selectedCategory.slice(1)
                  } Products`}
            </h2>
            <p className="text-gray-600 mt-1">
              {filteredProducts.length} products found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          <select className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or browse different categories
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {product.badge && (
                    <div
                      className={`absolute top-0 left-0 px-2 py-1 rounded-lg rounded-l-none text-xs font-bold ${getBadgeStyle(
                        product.badge
                      )}`}
                    >
                      {product.badge}
                    </div>
                  )}

                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white text-gray-900 px-4 py-2 rounded-xl font-semibold">
                        Out of Stock
                      </span>
                    </div>
                  )}

                  <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  {product.originalPrice && (
                    <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
                      -
                      {Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )}
                      %
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => onAddToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                      product.inStock
                        ? "bg-black text-white hover:shadow-lg hover:scale-105"
                        : "bg-gray-200 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {product.inStock ? (
                      <>
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </>
                    ) : (
                      <span>Out of Stock</span>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
