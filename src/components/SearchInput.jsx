import React from "react";

const SearchInput = ({ searchValue, handleSearch }) => {
  return (
    <div>
      <input
        placeholder="Search Country..."
        style={{
          padding: "4px",
          margin: "1rem",
          border: "1px solid black",
          borderRadius: "2px",
        }}
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
