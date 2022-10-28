export const CHANGE_INPUT_SIGNIN_VALUE = 'CHANGE_INPUT_SIGNIN_VALUE';
export const CHANGE_INPUT_SIGNUP_VALUE = 'CHANGE_INPUT_SIGNUP_VALUE';
export const SUBMIT_NEW_USER = 'SUBMIT_NEW_USER';
export const SUBMIT_NEW_USER_SUCCESS = 'SUBMIT_NEW_USER_SUCCESS';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';
export const CLOSE_MODAL_SIGNIN = 'CLOSE_MODAL_SIGNIN';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGIN_WITH_LOCALSTORAGE = 'LOGIN_WITH_LOCALSTORAGE';
export const LOGIN_WITH_LOCALSTORAGE_SUCCESS =
  'LOGIN_WITH_LOCALSTORAGE_SUCCESS';

/**
 * Action creator - change input in page Sign up
 * @param {*} inputName Name of input
 * @param {*} inputValue Value of input
 */
export const changeInputSignupValue = (inputName, inputValue) => ({
  type: CHANGE_INPUT_SIGNUP_VALUE,
  inputName,
  inputValue,
});

/**
 * Action creator - Change input in page Sign in
 * @param {*} inputName Name of input
 * @param {*} inputValue Value of input
 */
export const changeInputSigninValue = (inputName, inputValue) => ({
  type: CHANGE_INPUT_SIGNIN_VALUE,
  inputName,
  inputValue,
});

/**
 * Action creator -
 * @param {*} firstname
 * @param {*} lastname
 * @param {*} email
 * @param {*} password
 */
export const submitNewUser = (firstname, lastname, email, password) => ({
  type: SUBMIT_NEW_USER,
  firstname,
  lastname,
  email,
  password,
});

/**
 * Action creator -
 */
export const submitNewUserSuccess = () => ({
  type: SUBMIT_NEW_USER_SUCCESS,
});

/**
 * Action creator -
 */
export const createNewAccountSuccess = () => ({
  type: CREATE_ACCOUNT_SUCCESS,
});

/**
 * Action creator -
 * @param {*} email
 * @param {*} password
 */
export const submitLogin = (email, password) => ({
  type: SUBMIT_LOGIN,
  email,
  password,
});

/**
 * Action creator -
 * @param {*} userInfos
 */
export const submitLoginSuccess = (userInfos) => ({
  type: SUBMIT_LOGIN_SUCCESS,
  userInfos,
});

/**
 * Action creator -
 */
export const closeModalSignin = () => ({
  type: CLOSE_MODAL_SIGNIN,
});

export const loginWithLocalstorage = (email, password) => ({
  type: LOGIN_WITH_LOCALSTORAGE,
  email,
  password,
});

export const loginWithLocalstorageSuccess = (userInfos) => ({
  type: LOGIN_WITH_LOCALSTORAGE_SUCCESS,
  userInfos,
});
