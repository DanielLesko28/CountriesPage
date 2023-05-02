import { Link } from "react-router-dom";
import useCountriesHook from "../hooks/countriesHook";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import SearchInput from "../components/SearchInput";

function CountriesPage() {
  const [search, setSearch] = useState("");
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

  const filteredData = data.map((item) => {
    if (item.continents === continents[0]) {
      return item.continents;
    }
    return data;
  });

  console.log("filteredData", filteredData);

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
          .map((country, index) => (
            <div>
              <Box mb="2rem" key={index}>
                <Link to={`/country/${country.cca2}`}>
                  {country.name.official}
                </Link>

                <img
                  src={country.flags.png}
                  alt={country.cca3}
                  style={{ width: "100px", height: "70px" }}
                />
              </Box>
            </div>
          ))}
      </Box>
    </Center>
  );
}

export default CountriesPage;
