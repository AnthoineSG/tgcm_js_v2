const initialState = {
  burgerIsActive: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'OPEN_BURGER':
      return {
        ...state,
        burgerIsActive: true,
      };
    case 'CLOSE_BURGER':
      return {
        ...state,
        burgerIsActive: false,
      };
    default:
      return state;
  }
};

export default reducer;
