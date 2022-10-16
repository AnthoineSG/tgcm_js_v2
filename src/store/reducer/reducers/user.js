import {
  CHANGE_INPUT_SIGNIN_VALUE,
  CHANGE_INPUT_SIGNUP_VALUE,
  CREATE_ACCOUNT_SUCCESS,
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_NEW_USER,
  SUBMIT_NEW_USER_SUCCESS,
} from '../../actions';

const initialState = {
  isLogged: false,
  userCreation: {
    createAccountSuccess: false,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  },
  user: {
    id: 0,
    firstname: '',
    lastname: '',
    birthday: '',
    email: '',
    password: '',
    phone_number: '',
    address: '',
    postal_code: '',
    city: '',
    country: '',
    created_at: '',
    updated_at: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_SIGNIN_VALUE:
      return {
        ...state,
        userCreation: {
          ...state.userCreation,
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
        userCreation: {
          ...state.userCreation,
          createAccountSuccess: true,
        },
      };

    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        userCreation: {
          ...state.userCreation,
          createAccountSuccess: false,
          firstname: '',
          lastname: '',
          email: '',
          password: '',
        },
      };

    case CHANGE_INPUT_SIGNUP_VALUE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.inputName]: action.inputValue,
        },
      };

    case SUBMIT_LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.userInfos.result.email,
          password: action.userInfos.result.password,
        },
      };

    default:
      return state;
  }
};

export default reducer;
