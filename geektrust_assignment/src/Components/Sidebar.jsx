import React, { useContext } from "react";
import { Context } from "../Context/Store";

export const Sidebar = () => {
  const { productData, color } = useContext(Context);

  //   console.log(color);
  return (
    <div className="sidebar_container">
      <div className="checkbox_container">
        <p>Colour</p>
        <div className="checkbox">
          <input type="checkbox" />
          <label>Red</label>
        </div>

        {/* {color &&
          color.map((ele) => {
            return (
              <div className="checkbox" key={ele}>
                <input type="checkbox" value={ele} />
                <label>{ele}</label>
              </div>
            );
          })} */}
      </div>

      <div className="checkbox_container">
        <p>Gender</p>
        <div className="checkbox">
          <input type="checkbox" value="Men" />
          <label>Men</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" value="Women" />
          <label>Women</label>
        </div>
      </div>

      <div className="checkbox_container">
        <p>Price</p>
        <div className="checkbox">
          <input type="checkbox" />
          <label>0 - Rs250</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" />
          <label>Rs251 - 450</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" />
          <label>Rs 450</label>
        </div>
      </div>

      <div className="checkbox_container">
        <p>Type</p>
        <div className="checkbox">
          <input type="checkbox" value="Polo" />
          <label>Polo</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" value="Hoodie" />
          <label>Hoodie</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" value="Basic" />
          <label>Basic</label>
        </div>
      </div>
    </div>
  );
};
