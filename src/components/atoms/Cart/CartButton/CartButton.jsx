import React from "react";

import "./CartButton.scss";
import { ShoppingCart } from "react-feather";

const CartButton = (props) => {
  return (
    <div className="cart__parent">
      <ShoppingCart size={50} />
      <div className="item__count">1</div>
    </div>
  );
};

export default CartButton;
