import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import Cart from "../Cart/Cart";
import Signup from "../Signup/Signup";

const Routess = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProductList
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/cart"
        element={
          <Cart
            cartItems={cartItems}
            productItems={productItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}
          />
        }
      />
    </Routes>
  );
};

export default Routess;
