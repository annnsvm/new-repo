import { Container, CountryList, Heading, Loader, Section } from "components";
import { useEffect, useState } from "react";
import { getCountries } from "../service/country-service";

export const Home = () => {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    const getAllCountries = async () => {
      try {
        const response = await getCountries();
        setAllCountries(response);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCountries();
  }, []);

  return (
    <Section>
      <Container>
        <h2>Home</h2>
        <CountryList countries={allCountries} />
      </Container>
    </Section>
  );
};
