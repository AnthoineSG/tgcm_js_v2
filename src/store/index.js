import { createStore } from 'redux';

import reducers from './reducer';
import enhancers from './middlewares';

const store = createStore(reducers, enhancers);

export default store;
