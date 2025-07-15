import React from "react";
import {
  TrendingUp,
  DollarSign,
  ShoppingBag,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  Star,
  Eye,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$124,563",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Total Orders",
      value: "1,429",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingBag,
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Total Customers",
      value: "892",
      change: "+23.1%",
      trend: "up",
      icon: Users,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Products Sold",
      value: "2,847",
      change: "-2.4%",
      trend: "down",
      icon: Package,
      color: "from-orange-500 to-red-600",
    },
  ];

  const recentOrders = [
    {
      id: "#12847",
      customer: "John Doe",
      product: "Wireless Headphones",
      amount: "$299",
      status: "Delivered",
    },
    {
      id: "#12846",
      customer: "Jane Smith",
      product: "Smartphone Case",
      amount: "$45",
      status: "Processing",
    },
    {
      id: "#12845",
      customer: "Mike Johnson",
      product: "Laptop Stand",
      amount: "$89",
      status: "Shipped",
    },
    {
      id: "#12844",
      customer: "Sarah Wilson",
      product: "Bluetooth Speaker",
      amount: "$129",
      status: "Delivered",
    },
    {
      id: "#12843",
      customer: "David Brown",
      product: "Tablet Screen",
      amount: "$199",
      status: "Processing",
    },
  ];

  const topProducts = [
    {
      name: "Wireless Headphones",
      sales: 234,
      revenue: "$69,660",
      rating: 4.8,
    },
    { name: "Smartphone Case", sales: 189, revenue: "$8,505", rating: 4.6 },
    { name: "Laptop Stand", sales: 156, revenue: "$13,884", rating: 4.7 },
    { name: "Bluetooth Speaker", sales: 142, revenue: "$18,318", rating: 4.9 },
    { name: "Tablet Screen", sales: 98, revenue: "$19,502", rating: 4.5 },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200  rounded-xl p-6 ">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Welcome back, Admin!
            </h1>
            <p className="text-blue-900 text-sm md:text-base">
              Here's what's happening with your store today.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">{new Date().getDate()}</div>
              <div className="text-sm text-blue-900">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`flex items-center space-x-1 text-sm ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-1">
                {stat.value}
              </div>
              <div className="text-slate-600 text-sm">{stat.title}</div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">Recent Orders</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
              <span>View All</span>
              <Eye className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-slate-800">
                        {order.id}
                      </div>
                      <div className="text-sm text-slate-600">
                        {order.customer}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {order.product}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-slate-800">
                    {order.amount}
                  </div>
                  <div
                    className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-800"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {order.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">Top Products</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1">
              <span>View All</span>
              <TrendingUp className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="font-semibold text-slate-800">
                    {product.name}
                  </div>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="text-sm text-slate-600">
                      {product.sales} sales
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-slate-600">
                        {product.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-slate-800">
                    {product.revenue}
                  </div>
                  <div className="text-xs text-slate-500">Revenue</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 shadow-sm">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-200 text-left">
            <Package className="w-6 h-6 text-blue-600 mb-2" />
            <div className="font-semibold text-slate-800">Add Product</div>
            <div className="text-xs text-slate-600">Create new product</div>
          </button>
          <button className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:from-green-100 hover:to-green-200 transition-all duration-200 text-left">
            <ShoppingBag className="w-6 h-6 text-green-600 mb-2" />
            <div className="font-semibold text-slate-800">Process Orders</div>
            <div className="text-xs text-slate-600">Manage orders</div>
          </button>
          <button className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-200 text-left">
            <Users className="w-6 h-6 text-purple-600 mb-2" />
            <div className="font-semibold text-slate-800">View Customers</div>
            <div className="text-xs text-slate-600">Customer management</div>
          </button>
          <button className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:from-orange-100 hover:to-orange-200 transition-all duration-200 text-left">
            <TrendingUp className="w-6 h-6 text-orange-600 mb-2" />
            <div className="font-semibold text-slate-800">Analytics</div>
            <div className="text-xs text-slate-600">View reports</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
