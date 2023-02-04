import React from "react";
import "./CartItemCard.scss";

const CartItemCard = (props) => {
  const { product, itemQuantity } = props.cartItemData;
  return (
    <div className="cart__card__container">
      <img className="card__img" src={product.imageURL} />
      <div className="card__title">
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
      <div className="cart__qty">
        <span>Qty:{itemQuantity}</span>
      </div>
      <button onClick={() => props.onDeleteFromCart(product.id)}>Delete</button>
    </div>
  );
};

export default CartItemCard;
