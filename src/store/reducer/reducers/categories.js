import {
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  CHOOSE_CATEGORIE,
  CHANGE_PATH_CLOSE_BURGER,
} from 'src/store/actions';

const initalState = {
  categoriesList: [],
  categorieSelected: '',
};

const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
      };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesList: action.categoriesData,
      };

    case CHOOSE_CATEGORIE:
      return {
        ...state,
        categorieSelected: action.selected,
      };

    case CHANGE_PATH_CLOSE_BURGER:
      return {
        ...state,
        categorieSelected: '',
      };

    default:
      return state;
  }
};

export default reducer;
