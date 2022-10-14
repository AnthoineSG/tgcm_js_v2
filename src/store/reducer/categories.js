const initalState = {
  categoriesList: [],
  categorieSelected: '',
};

const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case 'GET_CATEGORIES_SUCCESS':
      return {
        ...state,
        categoriesList: action.categoriesData,
      };
    case 'CHOOSE_CATEGORIE':
      return {
        ...state,
        categorieSelected: action.selected,
      };
    default:
      return state;
  }
};

export default reducer;
