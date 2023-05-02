import { VStack, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

const App = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, [url]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  console.log("state data", data);
  return (
    <div>
      <VStack>
        <input
          placeholder="Search for country"
          style={{
            margin: "1rem",
            border: "1px solid black",
            padding: "0.5rem",
            borderRadius: "0.5rem",
          }}
          onChange={handleSearch}
          value={search}
        />
        {data
          .filter(
            (country) =>
              country.name.official
                .toLowerCase()
                .includes(search.toLowerCase()) ||
              (country.capital !== undefined &&
                country.capital
                  .join()
                  .toLowerCase()
                  .includes(search.toLowerCase()))
          )
          .map((country, index) => (
            <div>
              <Box mb="2rem" key={index}>
                {country.name.official}

                <img
                  src={country.flags.png}
                  alt={country.cca3}
                  style={{ width: "100px", height: "70px" }}
                />
                {country.capital}
              </Box>
            </div>
          ))}
      </VStack>
    </div>
  );
};

export default App;
