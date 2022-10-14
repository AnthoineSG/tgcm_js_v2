import { applyMiddleware, compose } from 'redux';

import brandMiddleware from './brand';
import categoriesMiddleware from './categories';
import productMiddleware from './product';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(brandMiddleware, categoriesMiddleware, productMiddleware)
);

export default enhancers;
