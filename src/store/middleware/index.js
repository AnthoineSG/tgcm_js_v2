import { applyMiddleware, compose } from 'redux';

import brandMiddleware from './middlewares/brand';
import categoriesMiddleware from './middlewares/categories';
import productMiddleware from './middlewares/product';
import userMiddleware from './middlewares/user';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    brandMiddleware,
    categoriesMiddleware,
    userMiddleware,
    productMiddleware
  )
);

export default enhancers;