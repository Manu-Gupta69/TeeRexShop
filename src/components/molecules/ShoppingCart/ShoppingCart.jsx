import React from "react";
import "./ShoppingCart.scss";
import { CartItemCard } from "../../atoms";

const ShoppingCart = (props) => {
  const cartItems = Object.values(props.cart);
  const totalAmount = cartItems.reduce((acc, item) => {
    return acc + item.itemQuantity * item.product.price;
  }, 0);

  return (
    <div className="cart__parent">
      <h2>Shopping Cart</h2>
      <div className="cart__card__wrapper">
        {cartItems.map((item) => {
          return (
            <CartItemCard
              onDeleteFromCart={props.onDeleteFromCart}
              cartItemData={item}
            />
          );
        })}
      </div>

      {cartItems.length ? (
        <div className="cart__total">
          <span>Total Amount</span>
          <span>Rs {totalAmount}</span>
        </div>
      ) : (
        "NO ITEMS IN CART"
      )}
    </div>
  );
};

export default ShoppingCart;
