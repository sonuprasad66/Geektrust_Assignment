import React, { useContext } from "react";
import { Context } from "../Context/Store";

export const DisplayProducts = ({ item }) => {
  const { cartData, setCartData, totalCartData, setTotalCartData } =
    useContext(Context);

  const handleAddToCart = (item, id) => {
    if (checkCart(cartData, id) == false) {
      const cart = { ...item, newQuantity: 1 };
      setCartData([...cartData, cart]);
      setTotalCartData(totalCartData + 1);
      alert("Product added successfully");
    } else {
      alert("Product is already in the cart");
    }
  };

  const checkCart = (cartData, id) => {
    return (
      cartData &&
      cartData.filter((elem) => {
        if (elem.id == id) {
          return true;
        }
      })
    );
  };

  return (
    <div className="product_data">
      <div className="product_image">
        <p>{item.name}</p>
        <img src={item.imageURL} alt={item.name} />
      </div>
      <div className="add_btn">
        <p>RS {item.price}</p>
        <button onClick={() => handleAddToCart(item, item.id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
