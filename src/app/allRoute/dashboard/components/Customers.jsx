import React, { useState } from "react";
import {
  Search,
  UserPlus,
  Edit,
  Trash2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Filter,
  Star,
} from "lucide-react";

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      joinDate: "2023-08-15",
      totalOrders: 12,
      totalSpent: "$1,299.99",
      status: "Active",
      rating: 4.8,
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 (555) 987-6543",
      location: "Los Angeles, CA",
      joinDate: "2023-09-20",
      totalOrders: 8,
      totalSpent: "$899.50",
      status: "Active",
      rating: 4.6,
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "+1 (555) 456-7890",
      location: "Chicago, IL",
      joinDate: "2023-07-10",
      totalOrders: 15,
      totalSpent: "$2,199.99",
      status: "VIP",
      rating: 4.9,
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      phone: "+1 (555) 321-9876",
      location: "Miami, FL",
      joinDate: "2023-10-05",
      totalOrders: 5,
      totalSpent: "$549.99",
      status: "Active",
      rating: 4.7,
      avatar:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      id: 5,
      name: "David Brown",
      email: "david@example.com",
      phone: "+1 (555) 654-3210",
      location: "Houston, TX",
      joinDate: "2023-06-22",
      totalOrders: 3,
      totalSpent: "$299.99",
      status: "Inactive",
      rating: 4.2,
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
    {
      id: 6,
      name: "Lisa Garcia",
      email: "lisa@example.com",
      phone: "+1 (555) 789-0123",
      location: "Phoenix, AZ",
      joinDate: "2023-11-12",
      totalOrders: 7,
      totalSpent: "$699.99",
      status: "Active",
      rating: 4.5,
      avatar:
        "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
    },
  ];

  const statusOptions = ["all", "Active", "VIP", "Inactive"];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "VIP":
        return "bg-purple-100 text-purple-800";
      case "Inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm);
    const matchesStatus =
      statusFilter === "all" || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Customers
          </h1>
          <p className="text-slate-600 mt-1">
            Manage your customer relationships
          </p>
        </div>
        <button className="mt-4 md:mt-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center space-x-2 shadow-lg shadow-purple-500/25">
          <UserPlus className="w-5 h-5" />
          <span>Add Customer</span>
        </button>
      </div>

      {/* Stats Cards */}
      {/* ... (no changes needed in JSX structure) */}

      {/* Filters */}
      {/* ... (no changes needed in JSX structure) */}

      {/* Customers Grid */}
      {/* ... (no changes needed in JSX structure) */}

      {/* No results */}
      {filteredCustomers.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 text-lg mb-2">No customers found</div>
          <p className="text-slate-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Customers;
