import { useSelector } from 'react-redux';
import Select from 'react-select';

import { changeInputSearch } from '../../store/actions';

import './search.scss';

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
    <form onSubmit={handleSubmitSearch}>
      <Select
        options={optionsSearch}
        placeholder="Sport"
        onChange={handleInputChange}
      />

      <button type="submit">Recherche</button>
    </form>
  );
}

export default Search;
