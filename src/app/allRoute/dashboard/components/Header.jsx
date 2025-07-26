import React from "react";
import { Menu, Search, Bell, MessageSquare, User } from "lucide-react";

const Header = ({ setSidebarOpen, sidebarOpen }) => {
  return (
    <header className="bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm h-16 flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="cursor-pointer lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search products, orders, customers..."
            className="w-80 pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <button className="cursor-pointer md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <Search className="w-5 h-5" />
        </button>

        <div className="relative">
          <button className="cursor-pointer p-2 rounded-lg hover:bg-slate-100 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>

        <button className="cursor-pointer p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <MessageSquare className="w-5 h-5" />
        </button>

        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
