import {
  CHANGE_INPUT_VALUE,
  CREATE_ACCOUNT_SUCCESS,
  SUBMIT_NEW_USER,
  SUBMIT_NEW_USER_SUCCESS,
} from '../../actions';

const initialState = {
  isLogged: false,
  createAccountSuccess: false,
  user: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        user: {
          ...state.user,
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
        createAccountSuccess: true,
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        createAccountSuccess: false,
      };
    default:
      return state;
  }
};

export default reducer;
