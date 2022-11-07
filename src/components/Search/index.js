import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import './search.scss';

const options = [
  { id: 1, value: 'chocolate', label: 'Chocolate' },
  { id: 2, value: 'strawberry', label: 'Strawberry' },
  { id: 3, value: 'vanilla', label: 'Vanilla' },
];

function Search() {
  const dispatch = useDispatch();
  const inputValueSearch = useSelector(
    (state) => state.search.inputValueSearch
  );
  const optionsSearch = useSelector((state) => state.search.optionsSearch);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    console.log('submit', inputValueSearch);
  };

  const handleInputChange = (input) => {
    dispatch({
      type: 'CHANGE_INPUT_SEARCH',
      newInputValue: input.value,
    });
  };

  return (
    <form onSubmit={handleSubmitSearch}>
      <Select
        options={options}
        placeholder="Sport"
        onChange={handleInputChange}
      />
      <button type="submit">Recherche</button>
    </form>
  );
}

export default Search;
