export const GET_PRODUCT_SUB_CATEGORIES = 'GET_PRODUCT_SUB_CATEGORIES';
export const GET_PRODUCT_SUB_CATEGORIES_SUCCESS =
  'GET_PRODUCT_SUB_CATEGORIES_SUCCESS';
export const GET_PRODUCT = 'GET_PRODUCT';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const ADD_PRODUCT_BASKET = 'ADD_PRODUCT_BASKET';

/**
 * Action creator -
 * @param {*} subCategory
 */
export const getProductSubCategories = (subCategory) => ({
  type: GET_PRODUCT_SUB_CATEGORIES,
  subCategory,
});

/**
 * Action creator -
 * @param {*} productList
 */
export const getProductSubCategoriesSuccess = (productList) => ({
  type: GET_PRODUCT_SUB_CATEGORIES_SUCCESS,
  productList,
});

/**
 * Action creator -
 * @param {*} idProduct
 */
export const getProduct = (idProduct) => ({
  type: GET_PRODUCT,
  idProduct,
});

/**
 * Action creator -
 * @param {*} productInfo
 */
export const getProductSuccess = (productInfo) => ({
  type: GET_PRODUCT_SUCCESS,
  productInfo,
});

export const addProductBasket = (productId) => ({
  type: ADD_PRODUCT_BASKET,
  productId,
});
