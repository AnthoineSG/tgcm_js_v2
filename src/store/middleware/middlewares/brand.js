import axios from 'axios';

import { urlGetBrand } from 'src/data/urlToRequest';

import { GET_BRAND, getBrandSuccess } from 'src/store/actions';

const brandMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_BRAND: {
      axios(urlGetBrand())
        .then((res) => {
          store.dispatch(getBrandSuccess(res.data));
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

export default brandMiddleware;
