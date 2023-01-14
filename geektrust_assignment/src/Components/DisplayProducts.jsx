import React from "react";

export const DisplayProducts = ({ name, price, image }) => {
  return (
    <div className="product_data">
      <div className="product_image">
        <p>{name}</p>
        <img src={image} alt={name} />
      </div>
      <div className="add_btn">
        <p>RS {price}</p>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};
