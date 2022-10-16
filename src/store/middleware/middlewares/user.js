import axios from 'axios';

import { submitNewUserSuccess, SUBMIT_NEW_USER } from '../../actions';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_NEW_USER: {
      const config = {
        method: 'POST',
        url: 'http://localhost:8080/api/user',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          firstname: action.firstname,
          lastname: action.lastname,
          email: action.email,
          password: action.password,
        },
      };
      axios(config)
        // eslint-disable-next-line no-unused-vars
        .then((_) => {
          store.dispatch(submitNewUserSuccess());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default userMiddleware;
