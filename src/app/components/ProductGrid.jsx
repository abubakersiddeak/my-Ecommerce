"use client";
import React, { useMemo, useState } from "react";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});
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
  {
    id: 2,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://diamu.com.bd/wp-content/uploads/2024/06/Manchester-City-Home-Authentic-Jersey-2024-25.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://ruperhat.com/wp-content/uploads/2025/05/Bangladesh-Football-Official-Home-Jersey.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 4,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://rufc.in/wp-content/uploads/2023/08/BlueStripes_1024x1024@2x.webp",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/16/o3AvmwOd_009710745cbc4a9081ac6e4b75bcbcc8.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://www.superkicks.in/cdn/shop/files/IMG_1835_572b36ae-c91e-4193-b871-7ebd83afad58.jpg?v=1752239830&width=533",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 7,
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
  {
    id: 8,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image: "https://www.slazenger.com/images/products/85114403_h.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },

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
  {
    id: 2,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://diamu.com.bd/wp-content/uploads/2024/06/Manchester-City-Home-Authentic-Jersey-2024-25.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://ruperhat.com/wp-content/uploads/2025/05/Bangladesh-Football-Official-Home-Jersey.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 4,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://rufc.in/wp-content/uploads/2023/08/BlueStripes_1024x1024@2x.webp",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/16/o3AvmwOd_009710745cbc4a9081ac6e4b75bcbcc8.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://www.superkicks.in/cdn/shop/files/IMG_1835_572b36ae-c91e-4193-b871-7ebd83afad58.jpg?v=1752239830&width=533",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 7,
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
  {
    id: 8,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image: "https://www.slazenger.com/images/products/85114403_h.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
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
  {
    id: 2,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://diamu.com.bd/wp-content/uploads/2024/06/Manchester-City-Home-Authentic-Jersey-2024-25.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://ruperhat.com/wp-content/uploads/2025/05/Bangladesh-Football-Official-Home-Jersey.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 4,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://rufc.in/wp-content/uploads/2023/08/BlueStripes_1024x1024@2x.webp",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/16/o3AvmwOd_009710745cbc4a9081ac6e4b75bcbcc8.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://www.superkicks.in/cdn/shop/files/IMG_1835_572b36ae-c91e-4193-b871-7ebd83afad58.jpg?v=1752239830&width=533",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 7,
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
  {
    id: 8,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image: "https://www.slazenger.com/images/products/85114403_h.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
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
  {
    id: 2,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://diamu.com.bd/wp-content/uploads/2024/06/Manchester-City-Home-Authentic-Jersey-2024-25.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://ruperhat.com/wp-content/uploads/2025/05/Bangladesh-Football-Official-Home-Jersey.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 4,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://rufc.in/wp-content/uploads/2023/08/BlueStripes_1024x1024@2x.webp",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/16/o3AvmwOd_009710745cbc4a9081ac6e4b75bcbcc8.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://www.superkicks.in/cdn/shop/files/IMG_1835_572b36ae-c91e-4193-b871-7ebd83afad58.jpg?v=1752239830&width=533",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 7,
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
  {
    id: 8,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image: "https://www.slazenger.com/images/products/85114403_h.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
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
  {
    id: 2,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://diamu.com.bd/wp-content/uploads/2024/06/Manchester-City-Home-Authentic-Jersey-2024-25.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://ruperhat.com/wp-content/uploads/2025/05/Bangladesh-Football-Official-Home-Jersey.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 4,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://rufc.in/wp-content/uploads/2023/08/BlueStripes_1024x1024@2x.webp",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/16/o3AvmwOd_009710745cbc4a9081ac6e4b75bcbcc8.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://www.superkicks.in/cdn/shop/files/IMG_1835_572b36ae-c91e-4193-b871-7ebd83afad58.jpg?v=1752239830&width=533",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 7,
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
  {
    id: 8,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image: "https://www.slazenger.com/images/products/85114403_h.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
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
  {
    id: 2,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://diamu.com.bd/wp-content/uploads/2024/06/Manchester-City-Home-Authentic-Jersey-2024-25.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://ruperhat.com/wp-content/uploads/2025/05/Bangladesh-Football-Official-Home-Jersey.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 4,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://rufc.in/wp-content/uploads/2023/08/BlueStripes_1024x1024@2x.webp",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/16/o3AvmwOd_009710745cbc4a9081ac6e4b75bcbcc8.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://www.superkicks.in/cdn/shop/files/IMG_1835_572b36ae-c91e-4193-b871-7ebd83afad58.jpg?v=1752239830&width=533",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 7,
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
  {
    id: 8,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image: "https://www.slazenger.com/images/products/85114403_h.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
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
  {
    id: 2,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://diamu.com.bd/wp-content/uploads/2024/06/Manchester-City-Home-Authentic-Jersey-2024-25.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://ruperhat.com/wp-content/uploads/2025/05/Bangladesh-Football-Official-Home-Jersey.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 4,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://rufc.in/wp-content/uploads/2023/08/BlueStripes_1024x1024@2x.webp",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/16/o3AvmwOd_009710745cbc4a9081ac6e4b75bcbcc8.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://www.superkicks.in/cdn/shop/files/IMG_1835_572b36ae-c91e-4193-b871-7ebd83afad58.jpg?v=1752239830&width=533",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 7,
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
  {
    id: 8,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image: "https://www.slazenger.com/images/products/85114403_h.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
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
  {
    id: 2,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://diamu.com.bd/wp-content/uploads/2024/06/Manchester-City-Home-Authentic-Jersey-2024-25.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://ruperhat.com/wp-content/uploads/2025/05/Bangladesh-Football-Official-Home-Jersey.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 4,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://rufc.in/wp-content/uploads/2023/08/BlueStripes_1024x1024@2x.webp",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/16/o3AvmwOd_009710745cbc4a9081ac6e4b75bcbcc8.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://www.superkicks.in/cdn/shop/files/IMG_1835_572b36ae-c91e-4193-b871-7ebd83afad58.jpg?v=1752239830&width=533",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 7,
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
  {
    id: 8,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image: "https://www.slazenger.com/images/products/85114403_h.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
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
  {
    id: 2,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://diamu.com.bd/wp-content/uploads/2024/06/Manchester-City-Home-Authentic-Jersey-2024-25.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://ruperhat.com/wp-content/uploads/2025/05/Bangladesh-Football-Official-Home-Jersey.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 4,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://rufc.in/wp-content/uploads/2023/08/BlueStripes_1024x1024@2x.webp",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/16/o3AvmwOd_009710745cbc4a9081ac6e4b75bcbcc8.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://www.superkicks.in/cdn/shop/files/IMG_1835_572b36ae-c91e-4193-b871-7ebd83afad58.jpg?v=1752239830&width=533",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 7,
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
  {
    id: 8,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image: "https://www.slazenger.com/images/products/85114403_h.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
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
  {
    id: 2,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://diamu.com.bd/wp-content/uploads/2024/06/Manchester-City-Home-Authentic-Jersey-2024-25.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://ruperhat.com/wp-content/uploads/2025/05/Bangladesh-Football-Official-Home-Jersey.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 4,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://rufc.in/wp-content/uploads/2023/08/BlueStripes_1024x1024@2x.webp",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/16/o3AvmwOd_009710745cbc4a9081ac6e4b75bcbcc8.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://www.superkicks.in/cdn/shop/files/IMG_1835_572b36ae-c91e-4193-b871-7ebd83afad58.jpg?v=1752239830&width=533",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 7,
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
  {
    id: 8,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image: "https://www.slazenger.com/images/products/85114403_h.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
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
  {
    id: 2,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://diamu.com.bd/wp-content/uploads/2024/06/Manchester-City-Home-Authentic-Jersey-2024-25.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://ruperhat.com/wp-content/uploads/2025/05/Bangladesh-Football-Official-Home-Jersey.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 4,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://rufc.in/wp-content/uploads/2023/08/BlueStripes_1024x1024@2x.webp",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 5,
    name: "Wireless Pro Headphones",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2025/JUNE/16/o3AvmwOd_009710745cbc4a9081ac6e4b75bcbcc8.jpg",
    category: "audio",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 6,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image:
      "https://www.superkicks.in/cdn/shop/files/IMG_1835_572b36ae-c91e-4193-b871-7ebd83afad58.jpg?v=1752239830&width=533",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: 7,
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
  {
    id: 8,
    name: "Wireless Pro Headphones",
    price: 399.99,
    originalPrice: 399.99,
    image: "https://www.slazenger.com/images/products/85114403_h.jpg",
    category: "Sports",
    rating: 4.8,
    reviews: 1247,
    badge: "Best Seller",
    inStock: true,
  },
];

const ProductGrid = ({ selectedCategory, searchTerm, onAddToCart }) => {
  // pagination Start
  const [currentpage, setCurrentpage] = useState(1);
  const itemPerPage = 36;
  const indexOfLastItem = itemPerPage * currentpage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(allProducts.length / itemPerPage);
  const handleNext = () => {
    if (currentpage < totalPage) setCurrentpage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentpage > 1) setCurrentpage((prev) => prev - 1);
  };

  const filteredProducts = useMemo(() => {
    return currentItems.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);
  const totalProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      return matchesCategory;
    });
  }, [selectedCategory]);

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
    <section className="py-8 lg:py-12 bg-[#FAF9F6]">
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
              {totalProducts.length} products found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          <select className="px-4 py-2 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 ">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or browse different categories
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white  border-l-gray-500 overflow-hidden  shadow-sm hover:shadow-lg hover:shadow-amber-100 transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="cursor-pointer w-full h-50 md:h-78 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {product.badge && (
                    <div
                      className={`absolute top-0 left-0 px-2 py-1 rounded-lg rounded-l-none rounded-tr-none text-xs font-bold ${getBadgeStyle(
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
                    <button className="cursor-pointer w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="cursor-pointer w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  ) > 0 && (
                    <div className="absolute bottom-0 right-0 bg-red-500 text-white px-2 py-1   text-xs font-bold">
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

                <div className=" md:p-4">
                  <h3
                    className={`${poppins.className} text-[10px] md:text-xl px-2 md:px-0 py-1 md:py-0 text-gray-900 md:mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2`}
                  >
                    {product.name}
                  </h3>
                  {/* 
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
                  </div> */}

                  <div className="px-2 md:px-0 flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="md:text-xl font-bold text-gray-900">
                        TK: {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => onAddToCart(product)}
                    disabled={!product.inStock}
                    className={`w-full py-3 px-4  font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                      product.inStock
                        ? "bg-black text-white hover:shadow-lg hover:scale-105 cursor-pointer"
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
      <div className=" mt-15 flex items-center justify-center gap-5">
        <button
          onClick={handlePrev}
          className=" font-extrabold py-3 px-6  cursor-pointer  text-black hover:scale-110"
        >
          {" "}
          &lt; Back
        </button>
        <p className="text-cyan-500">Page No: {currentpage}</p>
        <button
          onClick={handleNext}
          className="font-extrabold py-3 px-6  cursor-pointer  text-black hover:scale-110"
        >
          {" "}
          Next &gt;
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
