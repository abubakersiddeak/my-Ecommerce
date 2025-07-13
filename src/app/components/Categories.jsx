import React from "react";
import {
  Smartphone,
  Headphones,
  Laptop,
  Watch,
  Camera,
  Gamepad2,
  Home,
  Shirt,
} from "lucide-react";

const Categories = ({ selectedCategory, onCategorySelect }) => {
  const categories = [
    { id: "all", name: "All", icon: Home, color: "from-gray-500 to-gray-600" },
    {
      id: "Sports",
      name: "Sports",
      icon: () => (
        <img src="/13034.jpg" alt="Sports" className="w-full h-full rounded" />
      ),
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "fashion",
      name: "Fashion",
      icon: Shirt,
      color: "from-pink-500 to-pink-600",
    },
    {
      id: "audio",
      name: "Audio",
      icon: Headphones,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "computers",
      name: "Computers",
      icon: Laptop,
      color: "from-green-500 to-green-600",
    },
    {
      id: "wearables",
      name: "Wearables",
      icon: Watch,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: "cameras",
      name: "Cameras",
      icon: Camera,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      id: "gaming",
      name: "Gaming",
      icon: Gamepad2,
      color: "from-red-500 to-red-600",
    },
  ];

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            Browse Categories
          </h2>
          <p className="text-gray-600">Find exactly what you're looking for</p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => onCategorySelect(category.id)}
                  className={`flex-shrink-0 flex flex-col items-center p-4 rounded-2xl transition-all duration-200 min-w-[80px] ${
                    isSelected
                      ? "bg-indigo-600 text-white shadow-lg scale-105"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 ${
                      isSelected
                        ? "bg-white/20"
                        : `bg-gradient-to-r ${category.color}`
                    }`}
                  >
                    {typeof Icon === "function" ? (
                      <Icon />
                    ) : (
                      <Icon className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <span className="text-xs font-medium text-center">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className={`group flex flex-col items-center p-6 rounded-2xl transition-all duration-200 ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-lg scale-105"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100 hover:scale-105"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all ${
                    isSelected
                      ? "bg-white/20"
                      : `bg-gradient-to-r ${category.color} group-hover:scale-110`
                  }`}
                >
                  {typeof Icon === "function" ? (
                    <Icon />
                  ) : (
                    <Icon className="w-6 h-6 text-white" />
                  )}
                </div>
                <span className="text-sm font-medium text-center">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
