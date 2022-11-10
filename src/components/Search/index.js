import { useSelector } from 'react-redux';
import Select from 'react-select';

import { changeInputSearch } from 'src/store/actions';

import './search.scss';

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    border: '2px solid #65938B',
  }),
  // eslint-disable-next-line no-unused-vars
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    color: '#65938B',
    cursor: isDisabled ? 'not-allowed' : 'default',
  }),
};

function Search() {
  const inputValueSearch = useSelector(
    (state) => state.search.inputValueSearch
  );
  const optionsSearch = useSelector((state) => state.search.optionsSearch);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log('submit', inputValueSearch);
  };

  const handleInputChange = (input) => {
    changeInputSearch(input.value, input.id);
  };

  return (
    <form className="search__form" onSubmit={handleSubmitSearch}>
      <Select
        className="search__form-select"
        styles={colourStyles}
        options={optionsSearch}
        placeholder="Sport"
        onChange={handleInputChange}
      />

      <button className="search__form-button" type="submit">
        Recherche
      </button>
    </form>
  );
}

export default Search;
