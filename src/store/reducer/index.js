import { combineReducers } from 'redux';

import burgerReducer from './burger';
import categoriesReducer from './categories';
import productReducer from './product';

const rootReducer = combineReducers({
  burger: burgerReducer,
  categories: categoriesReducer,
  products: productReducer,
});

export default rootReducer;
