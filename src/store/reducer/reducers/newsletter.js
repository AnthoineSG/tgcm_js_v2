const initalState = {
  activeNewsLetter: false,
};

const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case 'ACTIVE_NEWSLETTER':
      return {
        ...state,
        activeNewsLetter: true,
      };

    case 'UNACTIVE_NEWSLETTER':
      return {
        ...state,
        activeNewsLetter: false,
      };

    default:
      return state;
  }
};

export default reducer;
