import {
  CHANGE_INPUT_SIGNIN_VALUE,
  CHANGE_INPUT_SIGNUP_VALUE,
  CLOSE_MODAL_SIGNIN,
  CREATE_ACCOUNT_SUCCESS,
  SUBMIT_LOGIN_SUCCESS,
  SUBMIT_NEW_USER,
  SUBMIT_NEW_USER_SUCCESS,
} from '../../actions';

const initialState = {
  isLogged: false,
  userCreation: {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
  },
  user: {
    id: null,
    firstname: null,
    lastname: null,
    birthday: null,
    email: null,
    password: null,
    phone_number: null,
    address: null,
    postal_code: null,
    city: null,
    country: null,
    created_at: null,
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
          firstname: null,
          lastname: null,
          email: null,
          password: null,
        },
        modal: {
          ...state.modal,
          modalSignup: false,
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
        isLogged: true,
        user: {
          ...state.user,
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

    case CLOSE_MODAL_SIGNIN:
      return {
        ...state,
        modal: {
          ...state.modal,
          modalSignin: false,
        },
      };

    default:
      return state;
  }
};

export default reducer;
