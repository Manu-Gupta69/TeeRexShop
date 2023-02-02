import React from "react";
import "./FilterItemCard.scss";
const FilterItemCard = ({
  title,
  values,
  ranges,
  itemKey,
  operation,
  onHandleCheckBox,
}) => {
  return (
    <div className="card__parent">
      <div className="card__child__1"> {title}</div>
      <div className="card__child__2">
        {values.map((item, index) => {
          return (
            <div className="child__2_checkbox">
              <input
                onClick={() => {
                  const range = ranges ? ranges[index] : null;
                  onHandleCheckBox(item, itemKey, operation, range);
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
