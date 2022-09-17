import React from "react";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import Root from "./components/pages/Root";
import Buyer from "./components/pages/Buyer";
import Seller from "./components/pages/Seller";
import Profile from "./components/layout/Profile";
import Products from "./components/products/Products";
import SellerProducts from "./components/products/SellerProducts";
import Cart from "./components/cart/Cart";
import Orders from "./components/orders/Orders";
import NotFound from "./components/layout/NotFound";
import ProductCard from "./components/products/ProductCard";

const App = () => {
  return (
<div>
        <Navbar />
        
          <Login />
          <SignUp />
          <Root />
            <Buyer />
              <Profile />
              <Products />
              <ProductCard />
            <Cart />
          
            <Seller />
              <Profile />
              <SellerProducts />
        <Orders />
        </div>
            
  );
};

export default App;