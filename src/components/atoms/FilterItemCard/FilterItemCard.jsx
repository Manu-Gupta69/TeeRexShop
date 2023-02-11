import React, { useState } from "react";
import "./FilterItemCard.scss";
const FilterItemCard = ({
  title,
  values,
  ranges,
  itemKey,
  operation,
  onHandleCheckBox,
  onHandleFilterClick,
  filteredOption,
}) => {
  return (
    <div className="card__parent">
      <div className="card__child__1"> {title}</div>
      <div className="card__child__2">
        {values.map((item, index) => {
          return (
            <div key={index} className="child__2_checkbox">
              <input
                checked={filteredOption[itemKey] === item}
                onChange={(e) => {
                  const range = ranges ? ranges[index] : null;
                  onHandleFilterClick(itemKey, item);
                  onHandleCheckBox(
                    item,
                    itemKey,
                    operation,
                    range,
                    e.target.checked
                  );
                }}
                type={"checkbox"}
              />
              <div>{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterItemCard;
