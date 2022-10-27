export const CHANGE_INPUT_SIGNIN_VALUE = 'CHANGE_INPUT_SIGNIN_VALUE';
export const CHANGE_INPUT_SIGNUP_VALUE = 'CHANGE_INPUT_SIGNUP_VALUE';
export const SUBMIT_NEW_USER = 'SUBMIT_NEW_USER';
export const SUBMIT_NEW_USER_SUCCESS = 'SUBMIT_NEW_USER_SUCCESS';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';
export const CLOSE_MODAL_SIGNIN = 'CLOSE_MODAL_SIGNIN';

export const changeInputSignupValue = (inputName, inputValue) => ({
  type: CHANGE_INPUT_SIGNIN_VALUE,
  inputName,
  inputValue,
});

export const changeInputSigninValue = (inputName, inputValue) => ({
  type: CHANGE_INPUT_SIGNUP_VALUE,
  inputName,
  inputValue,
});

export const submitNewUser = (firstname, lastname, email, password) => ({
  type: SUBMIT_NEW_USER,
  firstname,
  lastname,
  email,
  password,
});

export const submitNewUserSuccess = () => ({
  type: SUBMIT_NEW_USER_SUCCESS,
});

export const createNewAccountSuccess = () => ({
  type: CREATE_ACCOUNT_SUCCESS,
});

export const submitLogin = (email, password) => ({
  type: SUBMIT_LOGIN,
  email,
  password,
});

export const submitLoginSuccess = (userInfos) => ({
  type: SUBMIT_LOGIN_SUCCESS,
  userInfos,
});

export const closeModalSignin = () => ({
  type: CLOSE_MODAL_SIGNIN,
});
