export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const CHOOSE_CATEGORIE = 'CHOOSE_CATEGORIE';

/**
 * Action creator -
 */
export const getCategories = () => ({
  type: GET_CATEGORIES,
});

/**
 * Action creator -
 * @param {*} categoriesData
 */
export const getCategoriesSuccess = (categoriesData) => ({
  type: GET_CATEGORIES_SUCCESS,
  categoriesData,
});

/**
 * Action creator -
 * @param {*} selected
 */
export const chooseCategorie = (selected) => ({
  type: CHOOSE_CATEGORIE,
  selected,
});
