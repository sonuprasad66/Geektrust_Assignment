import React, { useState } from "react";
const Context = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [color, setColor] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const uniqueColor = (productData) => {
    console.log(productData);
    let arr = [];
    productData &&
      productData.map((item) => {
        arr.push(item.color);
      });

    setColor((pre) => [...new Set([...arr])]);
  };

  // uniqueColor();

  return (
    <Context.Provider
      value={{
        productData,
        setProductData,
        cartData,
        setCartData,
        color,
        uniqueColor,
        filterData,
        setFilterData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, AuthContextProvider };
