import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import './search.scss';

function Search() {
  const dispatch = useDispatch();
  const inputValueSearch = useSelector(
    (state) => state.search.inputValueSearch
  );
  const optionsSearch = useSelector((state) => state.search.optionsSearch);

  useEffect(() => {
    dispatch({ type: 'GET_SUBCATEGORY' });
  }, []);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log('submit', inputValueSearch);
  };

  const handleInputChange = (input) => {
    console.log(input);
    dispatch({
      type: 'CHANGE_INPUT_SEARCH',
      newInputValue: input.value,
      newInputId: input.id,
    });
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
