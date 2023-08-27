import { Grid, GridItem } from "components";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map((country) => (
        <GridItem key={country.id}>
          <Link to={`${routes.COUNTRY}/${country.id}`}>
            <img src={country.flag} alt={country.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
