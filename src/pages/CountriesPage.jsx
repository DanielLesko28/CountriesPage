import { VStack, Box, filter } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CountriesPage = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [data, setData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data), setFilteredCountries(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleContinentChange = (event) => {
    const selectedContinent = event.target.value;
    setSelectedContinent(selectedContinent);
    setFilteredCountries(data);

    if (selectedContinent === "All") {
      setFilteredCountries(data);
    } else {
      const filtered = data.filter(
        (country) => country.region === selectedContinent
      );
      setFilteredCountries(filtered);
    }
  };

  console.log("state data", data);
  console.log("filteredCountries", filteredCountries);
  return (
    <div>
      <div>
        <label htmlFor="continents">Choose a continent:</label>
        <select
          id="continents"
          value={selectedContinent}
          onChange={handleContinentChange}
        >
          <option value="All" defaultValue="true">
            All
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
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
        {selectedContinent === "All"
          ? data
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
                    <Link to={`/${country.cca3}`}>{country.name.official}</Link>

                    <img
                      src={country.flags.png}
                      alt={country.cca3}
                      style={{ width: "100px", height: "70px" }}
                    />
                    {country.capital}
                  </Box>
                </div>
              ))
          : filteredCountries
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
                    <Link to={`/${country.cca3}`}>{country.name.official}</Link>

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

export default CountriesPage;
