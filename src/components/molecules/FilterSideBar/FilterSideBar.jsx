import React, { useState } from "react";
import { FilterItemCard } from "../../atoms";
import { filterData } from "../../../data/dummyData";

const FilterSideBar = (props) => {
  const [filteredOption, setFilteredOption] = useState({});

  const onFilterClick = (itemKey, value) => {
    const updatedFilteredOption = { ...filteredOption };
    if (
      updatedFilteredOption.hasOwnProperty(itemKey) &&
      updatedFilteredOption[itemKey] === value
    ) {
      delete updatedFilteredOption[itemKey];
    } else {
      updatedFilteredOption[itemKey] = value;
    }
    setFilteredOption(updatedFilteredOption);
  };
  return (
    <div className="sidebar__parent">
      {filterData.map((item, index) => {
        return (
          <FilterItemCard
            key={index}
            onHandleCheckBox={props.onHandleCheckBox}
            title={item.title}
            values={item.values}
            itemKey={item.key}
            operation={item.operation}
            ranges={item.ranges ? item.ranges : null}
            onHandleFilterClick={onFilterClick}
            filteredOption={filteredOption}
          />
        );
      })}
    </div>
  );
};

export default FilterSideBar;
