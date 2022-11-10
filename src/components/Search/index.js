import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

import { changeInputSearch } from 'src/store/actions';

import { colourStyles } from './styles';
import './search.scss';

function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { inputValueSearch, optionsSearch } = useSelector(
    (state) => state.search
  );

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    navigate(`/category/${inputValueSearch}`);
  };

  const handleInputChange = (e) => {
    dispatch(changeInputSearch(e.value, e.id));
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
