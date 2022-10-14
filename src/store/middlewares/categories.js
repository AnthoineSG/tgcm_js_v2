import axios from 'axios';

import { GET_CATEGORIES, getCategoriesSuccess } from '../actions';

const categoriesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      const config = {
        method: 'GET',
        url: 'http://localhost:8080/api/category/sub_category',
      };
      axios(config)
        .then((res) => {
          store.dispatch(getCategoriesSuccess(res.data));
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
