export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const CHANGE_INPUT_SEARCH = 'CHANGE_INPUT_SEARCH';
export const GET_SUBCATEGORY = 'GET_SUBCATEGORY';
export const GET_SUBCATEGORY_SUCCESS = 'GET_SUBCATEGORY_SUCCESS';

export const toggleSearch = () => ({
  type: TOGGLE_SEARCH,
});

export const changeInputSearch = (newInputValue, newInputId) => ({
  type: CHANGE_INPUT_SEARCH,
  newInputValue,
  newInputId,
});

export const getSubcategory = () => ({
  type: GET_SUBCATEGORY,
});

export const getSubcategorySuccess = (optionsSearch) => ({
  type: GET_SUBCATEGORY_SUCCESS,
  optionsSearch,
});
