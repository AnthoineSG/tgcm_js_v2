const initalState = {
  categoriesList: [],
};

const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case 'GET_CATEGORIES_SUCCESS':
      return {
        ...state,
        categoriesList: action.categoriesData,
      };
    default:
      return state;
  }
};

export default reducer;
