import React from "react";
import { Search, Filter } from "react-feather";

import "./SearchBar.scss";

const SearchBar = (props) => {
  return (
    <div className="searchbar__parent">
      <input
        className="search__text"
        type={"text"}
        placeholder="Search For Products..."
        onChange={(e) => props.onHandleSearch(e)}
      />
      <div className="icon__wrapper">
        <Search size={30} color={"#ffff"} />
      </div>
      <div className="icon__wrapper filter">
        <Filter size={30} color={"#ffff"} />
      </div>
    </div>
  );
};

export default SearchBar;
