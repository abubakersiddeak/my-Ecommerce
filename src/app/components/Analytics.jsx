import React from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  Calendar,
  BarChart3,
} from "lucide-react";

const Analytics = () => {
  const metrics = [
    {
      title: "Revenue Growth",
      value: "+24.5%",
      trend: "up",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
      description: "vs last month",
    },
    {
      title: "Order Rate",
      value: "+12.3%",
      trend: "up",
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-600",
      description: "vs last month",
    },
    {
      title: "Customer Growth",
      value: "+8.7%",
      trend: "up",
      icon: Users,
      color: "from-purple-500 to-pink-600",
      description: "vs last month",
    },
    {
      title: "Return Rate",
      value: "-2.1%",
      trend: "down",
      icon: Package,
      color: "from-red-500 to-orange-600",
      description: "vs last month",
    },
  ];

  const salesData = [
    { month: "Jan", revenue: 45000, orders: 120 },
    { month: "Feb", revenue: 52000, orders: 145 },
    { month: "Mar", revenue: 48000, orders: 132 },
    { month: "Apr", revenue: 61000, orders: 178 },
    { month: "May", revenue: 55000, orders: 156 },
    { month: "Jun", revenue: 67000, orders: 189 },
    { month: "Jul", revenue: 72000, orders: 203 },
    { month: "Aug", revenue: 69000, orders: 195 },
    { month: "Sep", revenue: 78000, orders: 221 },
    { month: "Oct", revenue: 82000, orders: 234 },
    { month: "Nov", revenue: 89000, orders: 256 },
    { month: "Dec", revenue: 95000, orders: 278 },
  ];

  const topCategories = [
    { name: "Electronics", sales: 45, color: "bg-blue-500" },
    { name: "Accessories", sales: 28, color: "bg-green-500" },
    { name: "Clothing", sales: 18, color: "bg-purple-500" },
    { name: "Home & Garden", sales: 9, color: "bg-orange-500" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Analytics
          </h1>
          <p className="text-slate-600 mt-1">Track your business performance</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <button className="bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>Last 30 days</span>
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2">
            <BarChart3 className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`flex items-center space-x-1 ${
                    metric.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{metric.value}</span>
                </div>
              </div>
              <div className="text-xl font-bold text-slate-800 mb-1">
                {metric.title}
              </div>
              <div className="text-slate-600 text-sm">{metric.description}</div>
            </div>
          );
        })}
      </div>

      {/* Revenue Chart */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800">Revenue Overview</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Revenue</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-slate-600">Orders</span>
            </div>
          </div>
        </div>

        <div className="h-80 flex items-end space-x-2">
          {salesData.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full flex flex-col items-center space-y-1">
                <div
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
                  style={{ height: `${(data.revenue / 100000) * 200}px` }}
                  title={`Revenue: $${data.revenue.toLocaleString()}`}
                ></div>
                <div
                  className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg transition-all duration-300 hover:from-green-600 hover:to-green-500"
                  style={{ height: `${(data.orders / 300) * 80}px` }}
                  title={`Orders: ${data.orders}`}
                ></div>
              </div>
              <div className="text-xs text-slate-600 mt-2">{data.month}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Categories */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-6">
            Top Categories
          </h2>
          <div className="space-y-4">
            {topCategories.map((category, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-800">
                      {category.name}
                    </span>
                    <span className="text-sm text-slate-600">
                      {category.sales}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${category.color}`}
                      style={{ width: `${category.sales}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-medium text-slate-800">
                  New order received
                </div>
                <div className="text-sm text-slate-600">
                  Order #12847 - $299.99
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-slate-800">
                  New customer registered
                </div>
                <div className="text-sm text-slate-600">John Doe joined</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Package className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <div className="font-medium text-slate-800">
                  Product updated
                </div>
                <div className="text-sm text-slate-600">
                  Wireless Headphones - Stock: 45
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-4 h-4 text-orange-600" />
              </div>
              <div>
                <div className="font-medium text-slate-800">Order shipped</div>
                <div className="text-sm text-slate-600">
                  Order #12845 to Mike Johnson
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
