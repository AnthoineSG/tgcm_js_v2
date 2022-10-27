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
