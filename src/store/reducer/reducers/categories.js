import {
  CHANGE_PATH_CLOSE_BURGER,
  CHOOSE_CATEGORIE,
  GET_CATEGORIES_SUCCESS,
} from '../../actions';

const initalState = {
  categoriesList: [],
  categorieSelected: '',
};

const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
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
