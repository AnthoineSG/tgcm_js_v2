export const OPEN_BURGER = 'OPEN_BURGER';
export const CLOSE_BURGER = 'CLOSE_BURGER';
export const CHANGE_PATH_CLOSE_BURGER = 'CHANGE_PATH_CLOSE_BURGER';

/**
 * Action creator -
 */
export const openBurger = () => ({
  type: OPEN_BURGER,
});

/**
 * Action creator -
 */
export const closeBurger = () => ({
  type: CLOSE_BURGER,
});

/**
 * Action creator -
 */
export const changePathCloseNavbar = () => ({
  type: CHANGE_PATH_CLOSE_BURGER,
});
