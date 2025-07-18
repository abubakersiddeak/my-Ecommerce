import React from "react";
import {
  ShoppingCart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Shield,
  Truck,
  RotateCcw,
  Headphones,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Trust Badges */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold">Free Shipping</div>
                <div className="text-sm text-gray-200">On orders over $50</div>
              </div>
            </div> */}

            {/* <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold">Secure Payment</div>
                <div className="text-sm text-gray-200">SSL Protected</div>
              </div>
            </div> */}

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold">Easy Returns</div>
                <div className="text-sm text-gray-200">30-day policy</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold">24/7 Support</div>
                <div className="text-sm text-gray-200">Always here to help</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="w-10 h-10 bg-gradient-to-r bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Image
                src={"/WEwork.svg"}
                width={100}
                height={100}
                alt="weal logo"
              />
            </div>
            <div>
              <span className="xl:text-2xl text-xl font-extrabold text-blue-500  ">
                <span>WEAL</span> <span className="text-green-500">B</span>
                <span className="text-red-500">D</span>
              </span>
              <p className="text-xs text-gray-200">Online Store</p>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              Your trusted destination for premium products with unbeatable
              prices and exceptional service.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <MapPin className="w-4 h-4" />
                <a href="https://www.google.com/maps/place/WEAL/@23.5169625,90.2165641,3a,75y/data=!3m8!1e2!3m6!1sAF1QipNUgR43MfhmDBPfD1uKpBflIL246Af5sruGqgKY!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipNUgR43MfhmDBPfD1uKpBflIL246Af5sruGqgKY%3Dw114-h86-k-no!7i8160!8i6120!4m7!3m6!1s0x37559b0037c9c143:0xbafc08ccd0fc6c16!8m2!3d23.5168302!4d90.2166198!10e5!16s%2Fg%2F11wqj4qd51?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D">
                  Bikrampur Shopping Mall,
                  <br />
                  Balasur, Sreenagor, Munshigonj
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <Phone className="w-4 h-4" />
                <span>+8801403000212</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-200">
                <Mail className="w-4 h-4" />
                <span>wealbd2024@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Contact",
                "FAQ",
                "Size Guide",
                "Track Order",
                "Careers",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {[
                "Help Center",
                "Returns & Exchanges",
                "Shipping Info",
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-200 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-200 text-sm mb-4">
              Get the latest deals and updates delivered to your inbox.
            </p>

            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                />
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-r-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
                  <Mail className="w-4 h-4" />
                </button>
              </div>

              <div className="flex space-x-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-200">
              © 2025 WEAL BD. All rights reserved.
            </div>

            {/* <div className="flex items-center space-x-6">
              <span className="text-sm text-gray-200">
                Secure payments powered by:
              </span>
              <div className="flex items-center space-x-2">
                {["Visa", "MC", "PayPal", "Apple"].map((payment) => (
                  <div
                    key={payment}
                    className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-200"
                  >
                    {payment}
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
