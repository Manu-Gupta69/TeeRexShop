import { useEffect, useState } from "react";
import "./App.scss";
import { NavBar, FilterSideBar, AllProducts } from "./components/molecules";
import products from "./apis/products";
import { evalutateExpression } from "../filterTest";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [expression, setExpression] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await products.get(
        "coding-problems/shopping-cart/catalogue.json"
      );
      if (res?.data?.length) {
        setProductsData((prev) => res.data);
      }
    })();
  }, []);

  useEffect(() => {
    const expressionButInArray = Object.values(expression);
    const filteredData = productsData.filter((item) =>
      expressionButInArray.some((expression) => {
        return evalutateExpression(expression, item);
      })
    );

    setFilteredData((prev) => filteredData);
  }, [expression]);

  const handleCheckBox = (value, key, operation, ranges) => {
    setExpression((prev) => {
      const newExpression = { ...prev };
      if (newExpression.hasOwnProperty(value)) {
        delete newExpression[value];
      } else {
        if (operation == "between" && ranges?.length) {
          newExpression[value] = { key, operation, value: ranges };
        } else {
          newExpression[value] = { key, operation, value };
        }
      }
      return newExpression;
    });
  };

  return (
    <div className="App">
      <div className="nav">
        <NavBar />
      </div>
      <div className="lower">
        <div className="sidebar">
          <div className="sidebar__wrapper">
            <FilterSideBar onHandleCheckBox={handleCheckBox} />
          </div>
        </div>
        <div className="products">
          <AllProducts
            productsData={filteredData.length ? filteredData : productsData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
