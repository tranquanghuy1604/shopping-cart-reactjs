import React, { useState } from "react";
import Header from "./components/Front/Header/Header";
import { BrowserRouter as Router, json } from "react-router-dom";
import Routess from "./components/Front/Router/Routes";
import data from "./components/Back/Data/Data";

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItem] = useState([]);
  const [items, setItems] = useState(localStorage.getItem);
  const handleAddProduct = (product) => {
    const productExits = cartItems.find((item) => item.id === product.id);
    if (productExits) {
      setCartItem(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExits, quantity: productExits.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handleRemoveProduct = (product) => {
    const productExits = cartItems.find((item) => item.id === product.id);
    if (productExits.quantity === 1) {
      setCartItem(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExits, quantity: productExits.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleCartClearance = (product) => {
    const productExits = cartItems.find((item) => item.id === product.id);
    if (productExits) {
      setCartItem(cartItems.filter((item) => item.id !== product.id));
    }
  };
  return (
    <div>
      <Router>
        <Header />
        <Routess
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
        />
      </Router>
    </div>
  );
};

export default App;
