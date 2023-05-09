import React from "react";
import "./Cart.scss";
const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div className="cart-item">
      <h2 className="cart-title">Cart Items</h2>
      {cartItems.length === 0 && (
        <div className="cart-empty">
          <p>No cart Item</p>
        </div>
      )}

      {cartItems.map((cartItem) => (
        <div key={cartItem.id} className="cart-item-list">
          <img
            src={cartItem.image}
            alt={cartItem.name}
            className="cart-image"
          />
          <div className="cart-name">{cartItem.name}</div>
          <div className="carts-item-function">
            <button
              className="cart-item-add"
              onClick={() => handleAddProduct(cartItem)}
            >
              +
            </button>
            <button
              className="cart-item-remove"
              onClick={() => handleRemoveProduct(cartItem)}
            >
              -
            </button>
          </div>
          <div className="cart-item-price">
            {cartItem.quantity * cartItem.price}đ
          </div>
          <div className="clear-cart">
            {cartItems.length >= 1 && (
              <button
                className="clear-cart-button"
                onClick={() => handleCartClearance(cartItem)}
              >
                Clear Cart
              </button>
            )}
          </div>
        </div>
      ))}
      <div className="cart-item-total-price-name">
        Total price
        <div className="cart-item-total-price">${totalPrice}</div>
      </div>
    </div>
  );
};

export default Cart;
