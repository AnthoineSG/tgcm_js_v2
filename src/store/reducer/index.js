import { combineReducers } from 'redux';

import burgerReducer from './burger';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  burger: burgerReducer,
  categories: categoriesReducer,
});

export default rootReducer;
