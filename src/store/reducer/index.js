import { combineReducers } from 'redux';

import burgerReducer from './reducers/burger';
import brandReducer from './reducers/brand';
import categoriesReducer from './reducers/categories';
import productReducer from './reducers/product';
import userReducer from './reducers/user';
import newsLetterReducer from './reducers/newsletter';
import searchReducer from './reducers/search';

const rootReducer = combineReducers({
  burger: burgerReducer,
  categories: categoriesReducer,
  products: productReducer,
  brands: brandReducer,
  users: userReducer,
  newsLetter: newsLetterReducer,
  search: searchReducer,
});

export default rootReducer;
