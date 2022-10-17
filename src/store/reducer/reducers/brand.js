import { GET_BRAND, GET_BRAND_SUCCESS } from '../../actions';

const initalState = {
  brandList: [],
  isLoading: false,
};

const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case GET_BRAND:
      return {
        ...state,
        isLoading: true,
      };

    case GET_BRAND_SUCCESS:
      return {
        ...state,
        brandList: action.brands,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
