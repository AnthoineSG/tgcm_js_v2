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
