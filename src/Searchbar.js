import React, { useEffect, useRef } from "react";

function Searchbar({ handleSearch }) {
  const myRef = useRef();

  useEffect(() => {
    myRef.current.focus();
  }, []);

  return (
    <>
      <input
        type="text"
        placeholder="search name"
        name="search"
        onChange={handleSearch}
        ref={myRef}
      />
    </>
  );
}

export default Searchbar;
