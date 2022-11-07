const initialState = {
  activeSearch: false,
  inputValueSearch: '',
  inputIdSearch: 0,
  optionsSearch: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'TOGGLE_SEARCH':
      return {
        ...state,
        activeSearch: !state.activeSearch,
      };

    case 'CHANGE_INPUT_SEARCH':
      return {
        ...state,
        inputValueSearch: action.newInputValue,
        inputIdSearch: action.newInputId,
      };

    case 'GET_SUBCATEGORY':
      return {
        ...state,
      };

    case 'GET_SUBCATEGORY_SUCCESS':
      return {
        ...state,
        optionsSearch: action.optionsSearch,
      };

    default:
      return state;
  }
};

export default reducer;
