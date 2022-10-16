import { createStore } from 'redux';

import reducers from './reducer';
import enhancers from './middleware';

const store = createStore(reducers, enhancers);

export default store;
