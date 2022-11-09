import axios from 'axios';

import {
  urlLoginWithLocalstorage,
  urlLogout,
  urlSubmitLogin,
  urlSubmitNewUser,
} from 'src/data/urlToRequest';

import {
  loginWithLocalstorageSuccess,
  LOGIN_WITH_LOCALSTORAGE,
  LOGOUT,
  logoutSuccess,
  submitLoginSuccess,
  submitNewUserSuccess,
  SUBMIT_LOGIN,
  SUBMIT_NEW_USER,
  getBasket,
} from 'src/store/actions';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_NEW_USER: {
      axios(
        urlSubmitNewUser(
          action.firstname,
          action.lastname,
          action.email,
          action.password
        )
      )
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
      axios(urlSubmitLogin(action.email, action.password))
        .then((res) => {
          store.dispatch(submitLoginSuccess(res.data));
          store.dispatch(getBasket());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case LOGIN_WITH_LOCALSTORAGE: {
      axios(urlLoginWithLocalstorage(action.email, action.password))
        .then((res) => {
          store.dispatch(loginWithLocalstorageSuccess(res.data));
          store.dispatch(getBasket());
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    }

    case LOGOUT: {
      localStorage.removeItem('userInfos');

      axios(urlLogout())
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
