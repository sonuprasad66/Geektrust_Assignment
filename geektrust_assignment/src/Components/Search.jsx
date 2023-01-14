import React, { useContext, useState } from "react";
import { Context } from "../Context/Store";

export const Search = () => {
  const [searchData, setSearchData] = useState("");
  const {
    productData,
    setProductData,
    color,
    uniqueColor,
    filterData,
    setFilterData,
  } = useContext(Context);

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

  return (
    <div className="search_bar">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Search For Products..."
          onChange={(e) => setSearchData(e.target.value)}
          value={searchData}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
