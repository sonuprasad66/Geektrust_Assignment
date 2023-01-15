import React, { useContext } from "react";
import { Context } from "../Context/Store";

export const Sidebar = () => {
  const {
    setProductData,
    color,
    filterData,
    minData,
    setMinData,
    maxData,
    setMaxData,
  } = useContext(Context);

  const handleInput = () => {
    const filterColor = [
      ...document.querySelectorAll("#color input:checked"),
    ].map((e) => e.value);

    const filterGender = [
      ...document.querySelectorAll("#gender input:checked"),
    ].map((e) => e.value);

    const filterPrice = [
      ...document.querySelectorAll("#price input:checked"),
    ].map((e) => e.value);

    const filterType = [
      ...document.querySelectorAll("#type input:checked"),
    ].map((e) => e.value);

    let data1 = filterData.filter(
      (e) => !filterColor.length || filterColor.includes(e.color)
    );
    let data2 = data1.filter(
      (e) => !filterGender.length || filterGender.includes(e.gender)
    );
    let data3 = data2.filter(
      (e) => !filterPrice.length || (e.price >= minData && e.price <= maxData)
    );
    let data4 = data3.filter(
      (e) => !filterType.length || filterType.includes(e.type)
    );
    setProductData(data4);
  };

  return (
    <div className="sidebar_container" onInput={handleInput}>
      <div className="checkbox_container" id="color">
        <p>Colour</p>

        {color &&
          color.map((ele) => {
            return (
              <div className="checkbox" key={ele}>
                <input type="checkbox" value={ele} />
                <label>{ele}</label>
              </div>
            );
          })}
      </div>

      <div className="checkbox_container" id="gender">
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

      <div className="checkbox_container" id="price">
        <p>Price</p>
        <div className="checkbox">
          <input
            type="checkbox"
            value="250"
            onChange={(e) => {
              setMinData(0);
              setMaxData(250);
            }}
          />
          <label>0 - Rs250</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            value="251"
            onChange={(e) => {
              setMinData(e.target.value);
              setMaxData(450);
            }}
          />
          <label>Rs251 - 450</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            value="451"
            onChange={(e) => setMinData(e.target.value)}
          />
          <label>Rs 451</label>
        </div>
      </div>

      <div className="checkbox_container" id="type">
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
