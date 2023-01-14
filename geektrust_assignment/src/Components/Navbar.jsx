import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>TeeRex Store</h1>
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
      </div>
    </nav>
  );
};
