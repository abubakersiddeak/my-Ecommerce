import React from "react";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";

const FeaturedProducts = ({ onAddToCart }) => {
  const featuredProducts = [
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
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 249.99,
      originalPrice: 329.99,
      image:
        "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      category: "wearables",
      rating: 4.6,
      reviews: 892,
      badge: "Limited Edition",
    },
    {
      id: 3,
      name: "Gaming Mechanical Keyboard",
      price: 159.99,
      image:
        "https://images.pexels.com/photos/1472443/pexels-photo-1472443.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      category: "gaming",
      rating: 4.9,
      reviews: 2156,
      badge: "New Arrival",
    },
    {
      id: 4,
      name: "Professional Camera",
      price: 899.99,
      originalPrice: 1199.99,
      image:
        "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      category: "cameras",
      rating: 4.7,
      reviews: 634,
      badge: "Sale",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Handpicked premium products with the latest technology and design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badge */}
                {product.badge && (
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                      product.badge === "Best Seller"
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                        : product.badge === "Limited Edition"
                        ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
                        : product.badge === "New Arrival"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white"
                        : "bg-gradient-to-r from-red-500 to-orange-600 text-white"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-slate-600" />
                  </button>
                  <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Eye className="w-4 h-4 text-slate-600" />
                  </button>
                </div>

                {/* Discount Badge */}
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

              <div className="p-6">
                <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-slate-700">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-slate-500">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-slate-800">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-slate-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span className="font-semibold">Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
