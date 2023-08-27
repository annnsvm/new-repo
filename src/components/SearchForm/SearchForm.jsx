import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];

export const SearchForm = ({ getCountryValue }) => {
  const [country, setCountry] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    getCountryValue(country);
  };

  const handleInput = ({ target }) => {
    setCountry(target.value);
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select aria-label="select" name="region" required onChange={handleInput}>
        <option selected disabled defaultValue="">
          Select a region and press enter
        </option>
        {regions &&
          regions.map(({ id, name, value }) => (
            <option key={id} value={value}>
              {name}
            </option>
          ))}
      </Select>
    </SearchFormStyled>
  );
};
