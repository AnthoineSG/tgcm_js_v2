export const ACTIVE_NEWSLETTER = 'ACTIVE_NEWSLETTER';
export const UNACTIVE_NEWSLETTER = 'UNACTIVE_NEWSLETTER';
export const CHANGE_INPUT_NEWSLETTER = 'CHANGE_INPUT_NEWSLETTER';

export const activeNewsletter = () => ({
  type: ACTIVE_NEWSLETTER,
});

export const unactiveNewsletter = () => ({
  type: UNACTIVE_NEWSLETTER,
});

export const changeInputNewsletter = (inputName, newValue) => ({
  type: CHANGE_INPUT_NEWSLETTER,
  inputName,
  newValue,
});
