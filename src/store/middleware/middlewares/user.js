import axios from 'axios';

import {
  loginWithLocalstorageSuccess,
  LOGIN_WITH_LOCALSTORAGE,
  submitLoginSuccess,
  submitNewUserSuccess,
  SUBMIT_LOGIN,
  SUBMIT_NEW_USER,
} from '../../actions';

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

    case SUBMIT_LOGIN: {
      const config = {
        method: 'POST',
        url: 'http://localhost:8080/api/user/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: action.email,
          password: action.password,
        },
      };
      axios(config)
        .then((res) => {
          console.log(res.data);
          store.dispatch(submitLoginSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case LOGIN_WITH_LOCALSTORAGE: {
      const config = {
        method: 'POST',
        url: 'http://localhost:8080/api/user/login',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: action.email,
          password: action.password,
        },
      };
      axios(config)
        .then((res) => {
          store.dispatch(loginWithLocalstorageSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case 'GET_BASKET': {
      const userEmail = store.getState().users.user.email;

      console.log(userEmail);

      const config = {
        method: 'GET',
        // url: `http://localhost:8080/api/user/${userEmail}/product`,
        url: `http://localhost:8080/api/user/pasparla@wanadoo.fr/product`,
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      };
      axios(config)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case 'LOGOUT': {
      localStorage.removeItem('email');
      localStorage.removeItem('password');

      const config = {
        method: 'POST',
        url: 'http://localhost:8080/api/user/logout',
      };
      axios(config)
        // eslint-disable-next-line no-unused-vars
        .then((_) => {
          store.dispatch({ type: 'LOGOUT_SUCCESS' });
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
