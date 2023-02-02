import React from "react";
import { SearchBar, ProductCard } from "../../atoms";
import "./AllProducts.scss";

export const AllProducts = (props) => {
  return (
    <div className="products__parent">
      <div className="products__searchBar">
        <SearchBar />
      </div>
      <div className="products__cards">
        {props.productsData.map((item) => {
          return <ProductCard itemData={item} />;
        })}
      </div>
    </div>
  );
};
