import React from "react";
import "./ProductCard.scss";
const ProductCard = (props) => {
  return (
    <div className="productcard__parent">
      <h4 className="title">{props.itemData.name}</h4>
      <img
        className="product__img"
        src={props.itemData.imageURL}
        alt={props.itemData.name}
      />
      <div className="card__bottom">
        <h4>Rs {props.itemData.price}</h4>
        {props.cart.hasOwnProperty(props.itemData.id) ? (
          <div className="manage__quantity">
            <button
              onClick={(e) => {
                props.onManageQuantityClick("decrement", props.itemData.id);
              }}
            >
              -
            </button>
            <h3>{props.cart[props.itemData.id].itemQuantity}</h3>
            <button
              onClick={(e) => {
                props.onManageQuantityClick("increment", props.itemData.id);
              }}
            >
              +
            </button>
          </div>
        ) : (
          <button onClick={() => props.onAddToCartClick(props.itemData)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
