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
