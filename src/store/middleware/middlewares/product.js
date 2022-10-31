import axios from 'axios';

import {
  ADD_PRODUCT_BASKET,
  getProductSuccess,
  GET_PRODUCT,
} from '../../actions';

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

    case ADD_PRODUCT_BASKET: {
      const token = store.getState().users.user.tokenJwt;
      const userEmail = store.getState().users.user.email;
      const config = {
        method: 'POST',
        url: `http://localhost:8080/api/product/${action.productId}/user`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          email: userEmail,
        },
        withCredentials: true,
      };
      axios(config)
        .then((res) => {
          console.log(res.data);
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
