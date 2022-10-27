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
