import axios from 'axios';

import { urlGetBasket } from 'src/data/urlToRequest';

import { getBasketSuccess, GET_BASKET } from 'src/store/actions';

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

    default:
      next(action);
  }
};

export default basketMiddleware;
