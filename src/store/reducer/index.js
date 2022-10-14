import { combineReducers } from 'redux';

import burgerReducer from './burger';
import brandReducer from './brand';
import categoriesReducer from './categories';
import productReducer from './product';

const rootReducer = combineReducers({
  burger: burgerReducer,
  categories: categoriesReducer,
  products: productReducer,
  brands: brandReducer,
});

export default rootReducer;
