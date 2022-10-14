import { applyMiddleware, compose } from 'redux';

import categoriesMiddleware from './categories';
import productMiddleware from './product';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(categoriesMiddleware, productMiddleware)
);

export default enhancers;
