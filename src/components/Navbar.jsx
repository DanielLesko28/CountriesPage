import React from "react";

const Navbar = ({ data }) => {
  return (
    <div
      style={{
        width: "100%",
        border: "1px solid black",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {data.map((region, index) => (
        <p key={index}>{region}</p>
      ))}
    </div>
  );
};

export default Navbar;
