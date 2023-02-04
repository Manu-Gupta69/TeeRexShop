export const evalutateExpression = (expression, obj) => {
  const { key, operation, value } = expression;

  const propValue = obj[key];
  switch (operation) {
    case "greater_than":
      return propValue > value;
    case "less_than":
      return propValue < value;
    case "between":
      return propValue >= value[0] && propValue <= value[1];
    case "equal":
    default:
      return propValue === value;
  }
};
