import axios from 'axios';

import { urlGetSubCategory } from 'src/data/urlToRequest';

import { getSubcategorySuccess, GET_SUBCATEGORY } from '../../actions';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SUBCATEGORY: {
      axios(urlGetSubCategory())
        .then((res) => {
          const refactOptions = res.data.map((option) => {
            option.value = option.name;
            option.label = option.name;
            delete option.name;
            delete option.category_id;
            return option;
          });
          store.dispatch(getSubcategorySuccess(refactOptions));
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

export default searchMiddleware;
