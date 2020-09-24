import React from "react";

const CartItem = ({ item }) => {
  const { price, name, quantity, imageUrl } = item;
  return (
    <div className="cart-item">
      <img
        src={imageUrl}
        alt="item"
        className="image"
        style={{ width: "30%" }}
      />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
