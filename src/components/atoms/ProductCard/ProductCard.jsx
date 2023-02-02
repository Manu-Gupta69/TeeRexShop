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
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
