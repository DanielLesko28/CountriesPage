import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import useCountriesHook from "../hooks/countriesHook";
import { Spinner } from "@chakra-ui/react";

const Continets = ({ onContinentSelect }) => {
  const [selectedVAlue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    onContinentSelect(event.target.value);
  };

  const { data, loading, error } = useCountriesHook(
    "https://restcountries.com/v3.1/all"
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const continents = [...new Set(data.map((country) => country.region))];
  return (
    <div>
      <Select
        placeholder="Choose continent"
        style={{ color: "white" }}
        onChange={handleChange}
      >
        {continents.map((item, index) => (
          <option value={item} key={index} style={{ color: "white" }}>
            {item}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default Continets;
