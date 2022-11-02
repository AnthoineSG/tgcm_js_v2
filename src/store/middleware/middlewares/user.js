import axios from 'axios';

import {
  getBasketSuccess,
  GET_BASKET,
  loginWithLocalstorageSuccess,
  LOGIN_WITH_LOCALSTORAGE,
  LOGOUT,
  logoutSuccess,
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

    case GET_BASKET: {
      const userEmail = store.getState().users.user.email;
      const token = store.getState().users.user.tokenJwt;

      const config = {
        method: 'GET',
        url: `http://localhost:8080/api/user/${userEmail}/product`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      };
      axios(config)
        .then((res) => {
          store.dispatch(getBasketSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case LOGOUT: {
      localStorage.removeItem('userInfos');

      const config = {
        method: 'POST',
        url: 'http://localhost:8080/api/user/logout',
      };
      axios(config)
        // eslint-disable-next-line no-unused-vars
        .then((_) => {
          store.dispatch(logoutSuccess());
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
