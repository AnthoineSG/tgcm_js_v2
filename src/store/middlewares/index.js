import { applyMiddleware, compose } from 'redux';

import brandMiddleware from './brand';
import categoriesMiddleware from './categories';
import productMiddleware from './product';
import userMiddleware from './user';

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
