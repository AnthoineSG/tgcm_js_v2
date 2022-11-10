import axios from 'axios';

import { urlGetBasket, urlDeleteProductInBasket } from 'src/data/urlToRequest';

import { getBasketSuccess, GET_BASKET, getBasket } from 'src/store/actions';
import { DELETE_PRODUCT_IN_BASKET } from 'src/store/actions/action/user';

const basketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_BASKET: {
      const userEmail = store.getState().users.user.email;
      const token = store.getState().users.user.tokenJwt;
      axios(urlGetBasket(userEmail, token))
        .then((res) => {
          store.dispatch(getBasketSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case DELETE_PRODUCT_IN_BASKET: {
      const token = store.getState().users.user.tokenJwt;
      const { userId, productId } = action.data;
      axios(urlDeleteProductInBasket(token, productId, userId))
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

export default basketMiddleware;
