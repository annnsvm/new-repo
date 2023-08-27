import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { fetchCountry } from 'service/country-service';
import { useLocation, useParams, } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Country = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const { id } = useParams();
  
  useEffect(() => {
    setIsLoading(true);

    const fetchSelectedCountry = async () => {
      try {
        const response = await fetchCountry(id);
        setCountry(response)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSelectedCountry();
  }, [id]);

  return (
    <Section>
      {isLoading && <Loader />}
      <Container>
        <GoBackBtn  path={backLinkHref}>Go Back</GoBackBtn>
        <CountryInfo flag={country.flag} capital={country.capital} country={country.country} id={country.id} languages={country.languages} population={country.population}/>
      </Container>
    </Section>
  );
};
