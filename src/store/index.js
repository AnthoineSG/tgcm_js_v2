import { compose, createStore } from 'redux';

import reducers from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers();

const store = createStore(reducers, enhancers);

export default store;
