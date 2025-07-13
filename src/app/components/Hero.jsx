import React from "react";
import { ArrowRight, Star, Shield, Truck, Headphones } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>We don’t just sell products — We build trust.</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Discover Amazing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Products Daily
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg">
                Shop the latest trends with unbeatable prices, fast shipping,
                and exceptional customer service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 font-semibold">
                <span>Start Shopping</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl hover:border-indigo-300 hover:shadow-md transition-all duration-200 font-semibold">
                View Deals
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {/* <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Secure</div>
                <div className="text-xs text-gray-500">SSL Protected</div>
              </div> */}

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Fast</div>
                <div className="text-xs text-gray-500">Free Shipping</div>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-2">
                  <Headphones className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Support</div>
                <div className="text-xs text-gray-500">24/7 Help</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/8942321.jpg"
                alt="Shopping Experience"
                className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
              />

              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">50K+</div>
                    <div className="text-xs text-gray-500">Happy Customers</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">4.9★</div>
                  <div className="text-xs text-gray-500">Store Rating</div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl transform rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
