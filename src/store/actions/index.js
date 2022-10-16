// ! CATEGORIES
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const CHOOSE_CATEGORIE = 'CHOOSE_CATEGORIE';

export const getCategories = () => ({
  type: GET_CATEGORIES,
});

export const getCategoriesSuccess = (categoriesData) => ({
  type: GET_CATEGORIES_SUCCESS,
  categoriesData,
});

export const chooseCategorie = (selected) => ({
  type: CHOOSE_CATEGORIE,
  selected,
});

// ! BURGER MENU
export const OPEN_BURGER = 'OPEN_BURGER';
export const CLOSE_BURGER = 'CLOSE_BURGER';
export const CHANGE_PATH_CLOSE_BURGER = 'CHANGE_PATH_CLOSE_BURGER';

export const openBurger = () => ({
  type: OPEN_BURGER,
});

export const closeBurger = () => ({
  type: CLOSE_BURGER,
});

export const changePathCloseNavbar = () => ({
  type: CHANGE_PATH_CLOSE_BURGER,
});

// ! PRODUCT
export const GET_PRODUCT_SUB_CATEGORIES = 'GET_PRODUCT_SUB_CATEGORIES';
export const GET_PRODUCT_SUB_CATEGORIES_SUCCESS =
  'GET_PRODUCT_SUB_CATEGORIES_SUCCESS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';

export const getProductSubCategories = (subCategory) => ({
  type: GET_PRODUCT_SUB_CATEGORIES,
  subCategory,
});

export const getProductSubCategoriesSuccess = (productList) => ({
  type: GET_PRODUCT_SUB_CATEGORIES_SUCCESS,
  productList,
});

export const getProduct = (idProduct) => ({
  type: GET_PRODUCT,
  idProduct,
});

export const getProductSuccess = (productInfo) => ({
  type: GET_PRODUCT_SUCCESS,
  productInfo,
});

// ! BRAND
export const GET_BRAND = 'GET_BRAND';
export const GET_BRAND_SUCCESS = 'GET_BRAND_SUCCESS';

export const getBrand = () => ({
  type: GET_BRAND,
});

export const getBrandSuccess = (brands) => ({
  type: GET_BRAND_SUCCESS,
  brands,
});

// ! USER
export const CHANGE_INPUT_SIGNIN_VALUE = 'CHANGE_INPUT_SIGNIN_VALUE';
export const CHANGE_INPUT_SIGNUP_VALUE = 'CHANGE_INPUT_SIGNUP_VALUE';
export const SUBMIT_NEW_USER = 'SUBMIT_NEW_USER';
export const SUBMIT_NEW_USER_SUCCESS = 'SUBMIT_NEW_USER_SUCCESS';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_LOGIN_SUCCESS = 'SUBMIT_LOGIN_SUCCESS';

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
