import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Store";

export const PreCheckout = () => {
  const { cartData, setCartData, totalCartData, setTotalCartData } =
    useContext(Context);
  const [tPrice, setTPrice] = useState(0);

  const handleDecrease = (item, index) => {
    if (item.newQuantity == 1) {
      cartData.splice(index, 1);
      setCartData(cartData);
      totalPrice();
      setTotalCartData(totalCartData - 1);
      alert("Product removed from the shopping cart");
    } else {
      const newData = cartData.map((e) => {
        if (e.id == item.id) {
          item.newQuantity = item.newQuantity - 1;
        }
        return e;
      });
      setCartData(newData);
    }
  };

  const handleIncrease = (item) => {
    if (item.newQuantity == item.quantity) {
      alert("Sorry! This product has out of Stock");
    } else {
      const newData = cartData.map((e) => {
        if (e.id == item.id) {
          item.newQuantity = item.newQuantity + 1;
        }
        return e;
      });
      setCartData(newData);
    }
  };

  const handleDelete = (item, index) => {
    cartData.splice(index, 1);
    setCartData(cartData);
    totalPrice();
    setTotalCartData(totalCartData - 1);
    alert("Product Deleted Successful");
  };

  const totalPrice = () => {
    let price = 0;
    cartData &&
      cartData.forEach((elem) => {
        price += elem.price * elem.newQuantity;
      });
    setTPrice(price);
  };

  useEffect(() => {
    totalPrice();
  }, [totalPrice]);

  return (
    <>
      {!cartData.length > 0 ? (
        <>
          <div className="empty_gif">
            <div>
              <img
                src="https://media.tenor.com/W6YUgyV84o0AAAAM/cry-crying.gif"
                alt="gif"
              />
              <h2>Your Shoping Cart Is Empty</h2>
              <Link to={"/"}>
                <button className="backtohome_btn">Back To Home Page</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="shopping_heading">
            <h1>Shopping Cart</h1>
            <h2>Total Price : Rs {tPrice}</h2>
          </div>
          <div className="shopping_container">
            {cartData.map((item, index) => (
              <div className="shopping_item">
                <img src={item.imageURL} alt={item.name} />
                <div>
                  <h2>{item.name}</h2>
                  <p>Rs: {item.price}</p>
                </div>

                <div className="qnt_btn">
                  <button onClick={() => handleDecrease(item, index)}>-</button>
                  <p>Qty :{item.newQuantity}</p>
                  <button onClick={() => handleIncrease(item)}>+</button>
                </div>
                <button onClick={() => handleDelete(item, index)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
