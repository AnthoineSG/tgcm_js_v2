import {
  CHANGE_PATH_CLOSE_BURGER,
  GET_PRODUCT_SUB_CATEGORIES_SUCCESS,
} from '../actions';

const initialState = {
  productList: [],
  isLoading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCT_SUB_CATEGORIES_SUCCESS:
      return {
        ...state,
        productList: action.productList,
        isLoading: true,
      };
    case CHANGE_PATH_CLOSE_BURGER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
