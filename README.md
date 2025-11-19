# 🛒 MY-Ecommerce App

![MY-Ecommerce Banner](https://res.cloudinary.com/dmb58pab9/image/upload/v1756570033/Screenshot_from_2025-08-30_22-00-36_qq7fqi.webp)

## 🌐 Overview
**MY-Ecommerce** is a modern e-commerce web application built using **Next.js**, **React**, **MongoDB**, **Redux**, and **Tailwind CSS**.  
It allows users to browse products, add them to cart, manage orders, and make purchases with a smooth and responsive interface.  

**Live Demo:** [https://my-ecommerce-hazel.vercel.app/](#)

---

## 🛠 Technology Stack

| Layer          | Technologies & Libraries |
|----------------|------------------------|
| **Frontend**   | React 19, Next.js 15, Tailwind CSS 4, Redux Toolkit |
| **Backend**    | Node.js, Express.js (via Next.js API routes) |
| **Database**   | MongoDB, Mongoose |
| **Authentication & Security** | bcryptjs , Jwt|
| **State Management** | Redux Toolkit, react-redux |
| **Utilities & Libraries** | lucide-react |

---

## ✨ Features
- 🛍️ **Product Browsing:** View products with images and descriptions  
- 🛒 **Cart Management:** Add/remove products and update quantities  
- 🔄 **Dynamic Product Routing:** Each product has a unique page  
- 🔐 **User Authentication:** Secure login/signup  
- ⚡ **Responsive Design:** Works on mobile, tablet, and desktop  
- 💳 **Checkout & Orders:** Place orders and view order history  

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "@reduxjs/toolkit": "^2.9.0",
    "bcryptjs": "^3.0.2",
    "lucide-react": "^0.525.0",
    "mongoose": "^8.16.3",
    "next": "15.3.5",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-redux": "^9.2.0"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.3.5",
    "tailwindcss": "^4"
  }
}
```
---
## Run Locally

Follow these steps to run **WealApp** on your local machine:


### 1️⃣ Clone the repository
```bash
git clone <https://github.com/abubakersiddeak/WealProduction.git>
```

## 2️⃣ Navigate into the project folder
```bash
cd my-Ecommerce
```

## 3️⃣ Install dependencies
```bash
npm install
```
## 4️⃣ Create a .env file
```env
MONGODB_URI="Your Mongodb Uri"

```
## 5️⃣ Start the development server
```bash
npm run dev
```
## 6️⃣ Build for production 
```bash
npm run build
npm start
```
