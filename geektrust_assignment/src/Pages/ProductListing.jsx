import React, { useContext, useEffect, useState } from "react";
import { DisplayProducts } from "../Components/DisplayProducts";
import { Sidebar } from "../Components/Sidebar";
import { Context } from "../Context/Store";

export const ProductListing = () => {
  const {
    productData,
    setProductData,
    uniqueColor,
    setFilterData,
    openMenu,
    setOpenMenu,
  } = useContext(Context);
  const [mount, setMount] = useState(true);

  useEffect(() => {
    mount &&
      getProducts().then((res) => {
        setProductData(res);
        uniqueColor(res);
        setFilterData(res);
      });

    return () => {
      setMount(false);
    };
  }, [mount, setProductData, setFilterData, uniqueColor]);

  const getProducts = async () => {
    return await fetch(
      `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
    ).then((res) => res.json());
  };

  return (
    <div className="product">
      <div className={openMenu ? "left_side_bar active" : "left_side_bar"}>
        <span onClick={() => setOpenMenu(false)}>x</span>
        <Sidebar />
      </div>
      <div className="product_container">
        {productData.length > 0 ? (
          <>
            {productData &&
              productData.map((item) => {
                return <DisplayProducts key={item.id} item={item} />;
              })}
          </>
        ) : (
          <>
            <div className="empty_gif">
              <div>
                <img
                  src="https://media.tenor.com/W6YUgyV84o0AAAAM/cry-crying.gif"
                  alt="gif"
                />
                <h2>No Products Available</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
