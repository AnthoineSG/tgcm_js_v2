import {
  GET_PRODUCT_SUB_CATEGORIES_SUCCESS,
  CHANGE_PATH_CLOSE_BURGER,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
} from 'src/store/actions';

const initialState = {
  productList: [],
  product: {},
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

    case GET_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.productInfo,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
