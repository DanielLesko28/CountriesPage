import { Center, Heading } from "@chakra-ui/react";
import useCountriesHook from "../hooks/countriesHook";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";
// import Table from "../components/Table";

function CountryDetailPage() {
  const { countryId } = useParams();

  const { data } = useCountriesHook(
    `https://restcountries.com/v3.1/alpha/${countryId}`
  );

  console.log("countryId", countryId);
  console.log("data", data);

  return (
    <div>
      <Center>
        {data === null && <Loader />}
        {data &&
          data.map((country) => (
            <div>
              <Heading size="md">{country.name.official}</Heading>
              <img
                src={country.flags.png}
                alt={country.name.official}
                style={{ marginBottom: "1rem" }}
              />
              <p>
                Capital city is:{" "}
                <span style={{ fontWeight: "semi-bold" }}>
                  {country.capital}
                </span>
              </p>
              <p>
                Population is:{" "}
                <span style={{ fontWeight: "semi-bold" }}>
                  {country.population} people
                </span>
              </p>
            </div>
          ))}
        {/* <Table /> */}
      </Center>
    </div>
  );
}

export default CountryDetailPage;
