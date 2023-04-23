import { Link } from "react-router-dom";
import useCountriesHook from "../hooks/countriesHook";
import { Box, Center } from "@chakra-ui/react";
import { useState } from "react";
import SearchInput from "../components/SearchInput";

function CountriesPage() {
  const [search, setSearch] = useState("");
  const { data, loading, error } = useCountriesHook(
    "https://restcountries.com/v3.1/all"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("data", data);
  console.log("search", search);

  return (
    <Center>
      <Box
        p="2"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <SearchInput
          searchValue={search}
          handleSearch={(event) => setSearch(event.target.value)}
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
          .map((country) => (
            <Box mb="2rem">
              <h2>{country.name.official}</h2>
              <p>{country.capital}</p>
              <img
                src={country.flags.png}
                alt={country.cca3}
                style={{ width: "100px", height: "70px" }}
              />
            </Box>
          ))}
      </Box>
    </Center>
  );
}

export default CountriesPage;
