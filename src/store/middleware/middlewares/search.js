import axios from 'axios';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    default:
      next(action);
  }
};

export default searchMiddleware;
