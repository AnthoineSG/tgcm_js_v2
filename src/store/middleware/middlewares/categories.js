import axios from 'axios';

import {
  urlGetCategory,
  urlGetProductSubCategory,
} from 'src/data/urlToRequest';

import {
  GET_CATEGORIES,
  getCategoriesSuccess,
  getProductSubCategoriesSuccess,
  GET_PRODUCT_SUB_CATEGORIES,
} from '../../actions';

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      axios(urlGetCategory())
        .then((res) => {
          store.dispatch(getCategoriesSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case GET_PRODUCT_SUB_CATEGORIES: {
      axios(urlGetProductSubCategory(action.subCategory))
        .then((res) => {
          store.dispatch(getProductSubCategoriesSuccess(res.data.product));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default categoriesMiddleware;
