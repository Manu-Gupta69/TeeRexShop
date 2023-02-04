import React from "react";
import { SearchBar, ProductCard } from "../../atoms";
import "./AllProducts.scss";

const AllProducts = (props) => {
  return (
    <div className="products__parent">
      <div className="products__searchBar">
        <SearchBar onHandleSearch={props.onHandleSearch} />
      </div>
      <div className="products__cards">
        {props.productsData.map((item) => {
          return (
            <ProductCard
              key={item.id}
              itemData={item}
              onAddToCartClick={props.onAddToCartClick}
              onManageQuantityClick={props.onManageQuantityClick}
              cart={props.cart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
