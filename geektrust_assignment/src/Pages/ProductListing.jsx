import React, { useContext, useEffect, useState } from "react";
import { DisplayProducts } from "../Components/DisplayProducts";
import { Sidebar } from "../Components/Sidebar";
import { Context } from "../Context/Store";

export const ProductListing = () => {
  const { productData, setProductData } = useContext(Context);
  const [mount, setMount] = useState(true);

  useEffect(() => {
    mount &&
      getProducts().then((res) => {
        setProductData(res);
      });

    return () => {
      setMount(false);
    };
  }, [mount, setProductData]);

  // console.log(productData);

  const getProducts = async () => {
    return await fetch(
      `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`
    ).then((res) => res.json());
  };

  return (
    <div className="product">
      <div className="left_side_bar">
        <Sidebar />
      </div>
      <div className="product_container">
        {productData &&
          productData.map((item) => {
            return (
              <DisplayProducts
                key={item.id}
                name={item.name}
                price={item.price}
                image={item.imageURL}
              />
            );
          })}
      </div>
    </div>
  );
};
