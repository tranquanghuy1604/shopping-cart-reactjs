import React from "react";
import "./ProductList.scss";
const ProductList = ({ productItems, handleAddProduct }) => {
  return (
    <div className="product-list">
      {productItems.map((productItem) => (
        <div className="card">
          <div className="product-image">
            <img src={productItem.image} alt={productItem.name} />
          </div>
          <div className="product-name">
            <h3>{productItem.name}</h3>
          </div>
          <div className="product-price">{productItem.price}đ</div>
          <div>
            <button
              className="product-add-button"
              onClick={() => handleAddProduct(productItem)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
