import { applyMiddleware, compose } from 'redux';

import categoriesMiddleware from './categories';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(categoriesMiddleware));

export default enhancers;
