import { Button } from "@chakra-ui/react";
import useCountriesHook from "../hooks/countriesHook";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryDetailPage() {
  const { numericCode } = useParams();
  console.log(numericCode);
  const { data, loading, error } = useCountriesHook(
    `https://restcountries.com/v2/${numericCode}`
  );
  console.log("data on detail", typeof data);

  return (
    <div>
      <Link to={"/"}>
        <Button>Back</Button>
      </Link>
    </div>
  );
}

export default CountryDetailPage;
