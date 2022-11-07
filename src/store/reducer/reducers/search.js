const initialState = {
  activeSearch: false,
  inputValueSearch: '',
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
      };

    default:
      return state;
  }
};

export default reducer;
