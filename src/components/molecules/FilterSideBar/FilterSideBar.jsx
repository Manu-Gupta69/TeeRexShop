import React from "react";
import { FilterItemCard } from "../../atoms";
import { filterData } from "../../../data/dummyData";

const FilterSideBar = (props) => {
  return (
    <div className="sidebar__parent">
      {filterData.map((item, index) => {
        return (
          <FilterItemCard
            onHandleCheckBox={props.onHandleCheckBox}
            title={item.title}
            values={item.values}
            itemKey={item.key}
            operation={item.operation}
            ranges={item.ranges ? item.ranges : null}
          />
        );
      })}
    </div>
  );
};

export default FilterSideBar;
