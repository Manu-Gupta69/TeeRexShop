import React from "react";

import "./CartButton.scss";
import { ShoppingCart } from "react-feather";

const CartButton = (props) => {
  return (
    <div className="cart__container">
      <ShoppingCart size={50} />
      <div className="item__count">{props.cartItems}</div>
    </div>
  );
};

export default CartButton;
