import axios from 'axios';

import { GET_BRAND, getBrandSuccess } from '../../actions';

const brandMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_BRAND: {
      const config = {
        method: 'GET',
        url: 'http://localhost:8080/api/brand',
      };
      axios(config).then((res) => {
        store.dispatch(getBrandSuccess(res.data));
      });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default brandMiddleware;
