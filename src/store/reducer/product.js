import { GET_PRODUCT_SUB_CATEGORIES_SUCCESS } from '../actions';

const initialState = {
  productList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PRODUCT_SUB_CATEGORIES_SUCCESS:
      return {
        ...state,
        productList: action.productList,
      };
    default:
      return state;
  }
};

export default reducer;
