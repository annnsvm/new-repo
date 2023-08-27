import { Grid, GridItem } from "components";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes"

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.map((country) => (
        <GridItem key={country.id}>
          <Link to={`${routes.COUNTRY}/${country.id}`} state={{from: location}}>
            <img src={country.flag} alt={country.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
