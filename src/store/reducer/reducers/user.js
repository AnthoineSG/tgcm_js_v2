import {
  CHANGE_INPUT_ORDER_VALUE,
  CHANGE_INPUT_SIGNIN_VALUE,
  CHANGE_INPUT_SIGNUP_VALUE,
  CLOSE_MODAL_SIGNIN,
  CREATE_ACCOUNT_SUCCESS,
  GET_BASKET,
  GET_BASKET_SUCCESS,
  LOGIN_WITH_LOCALSTORAGE_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_NEW_USER,
  SUBMIT_NEW_USER_SUCCESS,
} from 'src/store/actions';

const initialState = {
  isLogged: false,
  logLocalstorage: false,
  inputEmail: 'pasparla@wanadoo.fr',
  inputPassword: '12345Aa!',
  userCreation: {
    firstname: 'toto',
    lastname: 'tata',
    email: 'toto@tata.fr',
    password: '12345Aa!',
  },
  user: {
    tokenJwt: '',
    id: null,
    firstname: '',
    lastname: '',
    birthday: null,
    email: '',
    password: '',
    phone_number: null,
    address: null,
    postal_code: null,
    city: null,
    country: null,
    created_at: null,
  },
  basket: {},
  order: {
    firstname: '',
    lastname: '',
    address: '',
    postalCode: '',
    city: '',
    phoneNumber: '',
  },
  modal: {
    modalSignin: false,
    modalSignup: false,
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_SIGNIN_VALUE:
      return {
        ...state,
        [action.inputName]: action.inputValue,
      };

    case CHANGE_INPUT_ORDER_VALUE:
      return {
        ...state,
        order: {
          ...state.order,
          [action.inputName]: action.inputValue,
        },
      };

    case SUBMIT_NEW_USER:
      return {
        ...state,
      };

    case SUBMIT_NEW_USER_SUCCESS:
      return {
        ...state,
        modal: {
          ...state.modal,
          modalSignup: true,
        },
      };

    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        userCreation: {
          ...state.userCreation,
          firstname: '',
          lastname: '',
          email: '',
          password: '',
        },
        modal: {
          ...state.modal,
          modalSignup: false,
        },
      };

    case CHANGE_INPUT_SIGNUP_VALUE:
      return {
        ...state,
        userCreation: {
          ...state.userCreation,
          [action.inputName]: action.inputValue,
        },
      };

    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        logLocalstorage: true,
        inputEmail: '',
        inputPassword: '',
        user: {
          ...state.user,
          tokenJwt: action.userInfos.accessToken,
          email: action.userInfos.result.email,
          password: action.userInfos.result.password,
          id: action.userInfos.result.id,
          firstname: action.userInfos.result.firstname,
          lastname: action.userInfos.result.lastname,
          birthday: action.userInfos.result.birthday,
          phone_number: action.userInfos.result.phone_number,
          address: action.userInfos.result.address,
          postal_code: action.userInfos.result.postal_code,
          city: action.userInfos.result.city,
          country: action.userInfos.result.country,
          created_at: action.userInfos.result.created_at,
        },
        modal: {
          ...state.modal,
          modalSignin: true,
        },
      };

    case LOGIN_WITH_LOCALSTORAGE_SUCCESS:
      return {
        ...state,
        isLogged: true,
        logLocalstorage: true,
        user: {
          ...state.user,
          tokenJwt: action.userInfos.accessToken,
          email: action.userInfos.result.email,
          password: action.userInfos.result.password,
          id: action.userInfos.result.id,
          firstname: action.userInfos.result.firstname,
          lastname: action.userInfos.result.lastname,
          birthday: action.userInfos.result.birthday,
          phone_number: action.userInfos.result.phone_number,
          address: action.userInfos.result.address,
          postal_code: action.userInfos.result.postal_code,
          city: action.userInfos.result.city,
          country: action.userInfos.result.country,
          created_at: action.userInfos.result.created_at,
        },
      };

    case CLOSE_MODAL_SIGNIN:
      return {
        ...state,
        modal: {
          ...state.modal,
          modalSignin: false,
        },
      };

    case GET_BASKET:
      return {
        ...state,
      };

    case GET_BASKET_SUCCESS:
      return {
        ...state,
        basket: action.userBasket,
      };

    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        logLocalstorage: false,
        basket: {},
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        logLocalstorage: false,
        user: {
          ...state.user,
          email: '',
          password: '',
          id: null,
          firstname: '',
          lastname: '',
          birthday: null,
          phone_number: null,
          address: null,
          postal_code: null,
          city: null,
          country: null,
          created_at: null,
        },
      };

    default:
      return state;
  }
};

export default reducer;
