import React from "react";

import "./NavBar.scss";

import { CartButton } from "../../atoms";

const NavBar = (props) => {
  return (
    <div className="nav__parent">
      <div className="child__1">TEEREX STORE</div>
      <div className="child__2">
        <div
          onClick={(e) => {
            props.onCartButtonClick(false);
            e.stopPropagation();
          }}
          className="child__2_productText"
        >
          <h3>Products</h3>
        </div>
        <div
          onClick={(e) => {
            props.onCartButtonClick(true);
            e.stopPropagation();
          }}
          className="child__2_cartButton"
        >
          <CartButton cartItems={Object.keys(props.cart).length} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
