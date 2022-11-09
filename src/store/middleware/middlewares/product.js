import axios from 'axios';

import { urlGetProduct, urlAddProductBasket } from 'src/data/urlToRequest';

import {
  ADD_PRODUCT_BASKET,
  getProductSuccess,
  GET_PRODUCT,
  getBasket,
} from 'src/store/actions';

const productMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_PRODUCT: {
      axios(urlGetProduct(action.idProduct))
        .then((res) => {
          store.dispatch(getProductSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case ADD_PRODUCT_BASKET: {
      const token = store.getState().users.user.tokenJwt;
      const userEmail = store.getState().users.user.email;
      axios(urlAddProductBasket(action.productId, token, userEmail))
        // eslint-disable-next-line no-unused-vars
        .then((_) => {
          store.dispatch(getBasket());
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
