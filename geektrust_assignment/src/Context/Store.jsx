import React, { useState } from "react";
const Context = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [totalCartData, setTotalCartData] = useState(0);
  const [productData, setProductData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [maxData, setMaxData] = useState(1000);
  const [cartData, setCartData] = useState([]);
  const [minData, setMinData] = useState(0);
  const [color, setColor] = useState([]);

  const uniqueColor = (productData) => {
    let arr = [];
    productData &&
      productData.map((item) => {
        arr.push(item.color);
      });
    setColor((pre) => [...new Set([...arr])]);
  };

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
        minData,
        setMinData,
        maxData,
        setMaxData,
        totalCartData,
        setTotalCartData,
        openMenu,
        setOpenMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, AuthContextProvider };
