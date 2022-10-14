import { combineReducers } from 'redux';

import burgerReducer from './burger';
import brandReducer from './brand';
import categoriesReducer from './categories';
import productReducer from './product';
import userReducer from './user';

const rootReducer = combineReducers({
  burger: burgerReducer,
  categories: categoriesReducer,
  products: productReducer,
  brands: brandReducer,
  users: userReducer,
});

export default rootReducer;
