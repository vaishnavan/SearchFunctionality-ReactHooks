import React, { useState } from "react";
import Searchbar from "./Searchbar";

const DisplayData = ({ userpropdata }) => {
  const [searchName, setSearchName] = useState("");

  const handleChange = (e) => {
    setSearchName(e.target.value);
  };

  const filterData = userpropdata.filter((filData) => {
    return filData.name.toLowerCase().includes(searchName.toLowerCase());
  });

  return (
    <>
      <Searchbar handleSearch={handleChange} />
      <h1>{filterData.length === 0 && "User not found"}</h1>
      {filterData.map((data, i) => {
        return (
          <div key={i}>
            <h1>{data.name}</h1>
          </div>
        );
      })}
    </>
  );
};

export default DisplayData;
