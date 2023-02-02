import React from "react";

import "./NavBar.scss";

import { CartButton } from "../../atoms";

const NavBar = () => {
  return (
    <div className="nav__parent">
      <div className="child__1">TEEREX STORE</div>
      <div className="child__2">
        <div className="child__2_productText">
          <h3>Products</h3>
        </div>
        <div className="child__2_cartButton">
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
