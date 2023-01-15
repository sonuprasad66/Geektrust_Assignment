import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context/Store";

export const Navbar = () => {
  const { totalCartData } = useContext(Context);
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <h1>TeeRex Store</h1>
      </Link>
      <div>
        <Link to={"/"}>
          <h2>Products</h2>
        </Link>
        <Link to={"/cart"}>
          <img
            src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
            alt="cart"
          />
        </Link>
        <span className="product_count">{totalCartData}</span>
      </div>
    </nav>
  );
};
