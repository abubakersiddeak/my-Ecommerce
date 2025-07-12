"use client";
import React, { useState } from "react";
import {
  Search,
  Eye,
  Edit,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  Filter,
  Download,
} from "lucide-react";

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const orders = [
    {
      id: "#12847",
      customer: "John Doe",
      email: "john@example.com",
      product: "Wireless Headphones",
      quantity: 2,
      total: "$599.98",
      status: "Delivered",
      date: "2024-01-15",
      paymentMethod: "Credit Card",
    },
    {
      id: "#12846",
      customer: "Jane Smith",
      email: "jane@example.com",
      product: "Smartphone Case",
      quantity: 1,
      total: "$24.99",
      status: "Processing",
      date: "2024-01-14",
      paymentMethod: "PayPal",
    },
    {
      id: "#12845",
      customer: "Mike Johnson",
      email: "mike@example.com",
      product: "Laptop Stand",
      quantity: 1,
      total: "$89.99",
      status: "Shipped",
      date: "2024-01-13",
      paymentMethod: "Credit Card",
    },
    {
      id: "#12844",
      customer: "Sarah Wilson",
      email: "sarah@example.com",
      product: "Bluetooth Speaker",
      quantity: 1,
      total: "$129.99",
      status: "Delivered",
      date: "2024-01-12",
      paymentMethod: "Debit Card",
    },
    {
      id: "#12843",
      customer: "David Brown",
      email: "david@example.com",
      product: "Gaming Keyboard",
      quantity: 1,
      total: "$159.99",
      status: "Cancelled",
      date: "2024-01-11",
      paymentMethod: "Credit Card",
    },
    {
      id: "#12842",
      customer: "Lisa Garcia",
      email: "lisa@example.com",
      product: "Fitness Watch",
      quantity: 1,
      total: "$249.99",
      status: "Pending",
      date: "2024-01-10",
      paymentMethod: "PayPal",
    },
  ];

  const statusOptions = [
    "all",
    "Pending",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="w-4 h-4" />;
      case "Shipped":
        return <Truck className="w-4 h-4" />;
      case "Processing":
        return <Clock className="w-4 h-4" />;
      case "Cancelled":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Orders
          </h1>
          <p className="text-slate-600 mt-1">
            Manage and track customer orders
          </p>
        </div>
        <button className="mt-4 md:mt-0 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2 shadow-lg shadow-green-500/25">
          <Download className="w-5 h-5" />
          <span>Export Orders</span>
        </button>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/60 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search orders by customer, ID, or product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="flex space-x-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status === "all" ? "All Status" : status}
                </option>
              ))}
            </select>

            <button className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">More Filters</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50/80 border-b border-slate-200/60">
              <tr>
                <th className="text-left p-4 font-semibold text-slate-800">
                  Order ID
                </th>
                <th className="text-left p-4 font-semibold text-slate-800">
                  Customer
                </th>
                <th className="text-left p-4 font-semibold text-slate-800 hidden md:table-cell">
                  Product
                </th>
                <th className="text-left p-4 font-semibold text-slate-800 hidden sm:table-cell">
                  Date
                </th>
                <th className="text-left p-4 font-semibold text-slate-800">
                  Total
                </th>
                <th className="text-left p-4 font-semibold text-slate-800">
                  Status
                </th>
                <th className="text-left p-4 font-semibold text-slate-800">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className={`border-b border-slate-200/60 hover:bg-slate-50/50 transition-colors ${
                    index % 2 === 0 ? "bg-white/50" : "bg-slate-50/30"
                  }`}
                >
                  <td className="p-4">
                    <div className="font-semibold text-slate-800">
                      {order.id}
                    </div>
                    <div className="text-xs text-slate-500 md:hidden">
                      {order.product}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-medium text-slate-800">
                      {order.customer}
                    </div>
                    <div className="text-xs text-slate-500">{order.email}</div>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <div className="font-medium text-slate-800">
                      {order.product}
                    </div>
                    <div className="text-xs text-slate-500">
                      Qty: {order.quantity}
                    </div>
                  </td>
                  <td className="p-4 hidden sm:table-cell">
                    <div className="text-sm text-slate-600">{order.date}</div>
                    <div className="text-xs text-slate-500">
                      {order.paymentMethod}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-800">
                      {order.total}
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {getStatusIcon(order.status)}
                      <span>{order.status}</span>
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button className="bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="bg-slate-100 text-slate-600 p-2 rounded-lg hover:bg-slate-200 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 text-lg mb-2">No orders found</div>
          <p className="text-slate-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/60 shadow-sm">
          <div className="text-2xl font-bold text-slate-800">156</div>
          <div className="text-sm text-slate-600">Total Orders</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/60 shadow-sm">
          <div className="text-2xl font-bold text-green-600">89</div>
          <div className="text-sm text-slate-600">Delivered</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/60 shadow-sm">
          <div className="text-2xl font-bold text-blue-600">34</div>
          <div className="text-sm text-slate-600">Processing</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200/60 shadow-sm">
          <div className="text-2xl font-bold text-red-600">8</div>
          <div className="text-sm text-slate-600">Cancelled</div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
