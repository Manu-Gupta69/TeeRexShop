import React from "react";
import { Search } from "react-feather";

import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchbar__parent">
      <input
        className="search__text"
        type={"text"}
        placeholder="Search For Products..."
      />
      <div className="icon__wrapper">
        <Search size={30} />
      </div>
    </div>
  );
};

export default SearchBar;
