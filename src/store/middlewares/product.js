import axios from 'axios';

import { getProductSuccess, GET_PRODUCT } from '../actions';

const productMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PRODUCT: {
      const config = {
        method: 'GET',
        url: `http://localhost:8080/api/product/${action.idProduct}`,
      };

      axios(config)
        .then((res) => {
          store.dispatch(getProductSuccess(res.data));
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

export default productMiddleware;
