import React, { useContext, useState } from "react";
import { Context } from "../Context/Store";

export const Search = () => {
  const [searchData, setSearchData] = useState("");
  const { setProductData, filterData, openMenu, setOpenMenu } =
    useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data =
      filterData &&
      filterData.filter((item) => {
        if (searchData === "") {
          return item;
        } else if (
          item.name.toLowerCase().includes(searchData.toLowerCase()) ||
          item.color.toLowerCase().includes(searchData.toLowerCase()) ||
          item.type.toLowerCase().includes(searchData.toLowerCase())
        ) {
          return item;
        }
      });

    setProductData(data);
    setSearchData("");
  };

  const handleSidebar = () => {
    setOpenMenu(true);
  };

  return (
    <div className="search_bar">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search For Products..."
          onChange={(e) => setSearchData(e.target.value)}
          value={searchData}
        />
        <button type="submit">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/2048px-Search_Icon.svg.png"
            alt="search"
          />
        </button>
      </form>
      <div className="open_sidebar_filter" onClick={handleSidebar}>
        <img
          src="https://www.pngall.com/wp-content/uploads/11/Filter-PNG-Cutout.png"
          alt="open_filter"
        />
      </div>
    </div>
  );
};
