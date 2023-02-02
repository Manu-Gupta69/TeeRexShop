export const filterData = [
  {
    title: "Color",
    values: ["Red", "Blue", "Green"],
    key: "color",
    operation: "equal",
  },
  {
    title: "Gender",
    values: ["Men", "Women"],
    key: "gender",
    operation: "equal",
  },
  {
    title: "Price",
    values: ["Rs0-Rs250", "Rs251-Rs450", "Rs450"],
    ranges: [[0, 250], [251, 450], [450]],
    key: "price",
    operation: "between",
  },
  {
    title: "Type",
    values: ["Polo", "Hoodie", "Basic"],
    key: "type",
    operation: "equal",
  },
];
