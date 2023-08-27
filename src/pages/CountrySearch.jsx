import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setСountries] = useState([]);
  const [params, setParams] = useSearchParams();

  const getCountryValue = value => {
    setParams({ region: value });
  };

  useEffect(() => {
    const region = params.get('region');

    if (!region) {
      return;
    }
    setIsLoading(true);

    const fetchSelectedRegion = async () => {
      try {
        const response = await fetchByRegion(region);
        setСountries(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSelectedRegion();
  }, [params]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <SearchForm getCountryValue={getCountryValue} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
