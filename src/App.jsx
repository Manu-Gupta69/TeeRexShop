import { useEffect, useState } from "react";

import "./App.scss";
import {
  NavBar,
  FilterSideBar,
  AllProducts,
  ShoppingCart,
} from "./components/molecules";
import products from "./apis/products";
import { evalutateExpression } from "./utils/filter.js";

function App() {
  const [productsData, setProductsData] = useState([]);
  const [expression, setExpression] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isCartScreen, setIsCartScreen] = useState(false);
  const [cart, setCart] = useState({});

  useEffect(() => {
    (async () => {
      const res = await products.get(
        "coding-problems/shopping-cart/catalogue.json"
      );

      if (res?.status === 200 && res?.data?.length) {
        setProductsData((prev) => res.data);
      }
    })();
  }, []);

  useEffect(() => {
    const expressionButInArray = Object.values(expression);
    const filteredData = productsData.filter((item) =>
      expressionButInArray.every((expression) => {
        return evalutateExpression(expression, item);
      })
    );

    setFilteredData((prev) => filteredData);
  }, [expression]);

  // APP EVENT HANDLERS

  const searchButtonClick = () => {
    const searchFilteredResult = productsData.filter(
      (item) => item.name === searchText
    );
    setFilteredData(searchFilteredResult);
  };

  const handleCheckBox = (value, key, operation, ranges, isChecked) => {
    setExpression((prev) => {
      const newExpression = { ...prev };

      if (!isChecked) {
        delete newExpression[key];

        return newExpression;
      }

      if (operation == "between" && ranges?.length) {
        newExpression[key] = { key, operation, value: ranges };
      } else {
        newExpression[key] = { key, operation, value };
      }

      return newExpression;
    });
  };

  const handleSearch = (e) => {
    setSearchText((prev) => e.target.value);
  };

  const addToCartClick = (product) => {
    setCart((prev) => {
      const toBeUpdatedCart = { ...prev };
      toBeUpdatedCart[product.id] = { product, itemQuantity: 1 };
      return toBeUpdatedCart;
    });
  };

  const deleteFromCartClick = (id) => {
    const updatedCart = { ...cart };
    delete updatedCart[id];
    setCart(updatedCart);
  };

  const manageQuantityClick = (quantityManage, id) => {
    const { product, itemQuantity } = cart[id];

    switch (quantityManage) {
      case "increment": {
        if (itemQuantity < product.quantity) {
          const toBeUpdatedCart = cart;
          toBeUpdatedCart[id].itemQuantity;
          toBeUpdatedCart[id].itemQuantity += 1;
          setCart({ ...toBeUpdatedCart });
        }
        break;
      }
      case "decrement": {
        if (itemQuantity > 0) {
          const toBeUpdatedCart = cart;
          toBeUpdatedCart[id].itemQuantity -= 1;

          if (toBeUpdatedCart[id].itemQuantity == 0) {
            delete toBeUpdatedCart[id];
          }

          setCart({ ...toBeUpdatedCart });
        }
        break;
      }
      default:
        break;
    }
  };

  const cartButtonClick = (whatToShow) => {
    setIsCartScreen(whatToShow);
  };

  return (
    <div className="App">
      {productsData.length ? (
        <>
          <div className="nav">
            <NavBar onCartButtonClick={cartButtonClick} cart={cart} />
          </div>
          <div className="lower">
            {!isCartScreen ? (
              <>
                <div className="sidebar">
                  <div className="sidebar__wrapper">
                    <FilterSideBar onHandleCheckBox={handleCheckBox} />
                  </div>
                </div>
                <div className="products">
                  {Object.keys(expression).length && !filteredData.length ? (
                    "Sorry currently we don't have this kind of product"
                  ) : (
                    <AllProducts
                      cart={cart}
                      onAddToCartClick={addToCartClick}
                      onHandleSearch={handleSearch}
                      onSearchButtonClick={searchButtonClick}
                      productsData={
                        filteredData.length ? filteredData : productsData
                      }
                      onManageQuantityClick={manageQuantityClick}
                    />
                  )}
                </div>
              </>
            ) : (
              <div className="cart__wrapper">
                <ShoppingCart
                  onManageQuantityClick={manageQuantityClick}
                  onDeleteFromCart={deleteFromCartClick}
                  cart={cart}
                />
              </div>
            )}
          </div>
        </>
      ) : (
        <div> Sorry We are currently under maintainance</div>
      )}
    </div>
  );
}

export default App;
