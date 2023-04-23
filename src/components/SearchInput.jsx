import React from "react";

const SearchInput = ({ searchValue, handleSearch }) => {
  return (
    <div>
      <input
        placeholder="Search Country..."
        style={{ padding: "2px", margin: "1rem" }}
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
