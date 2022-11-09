import {
  ACTIVE_NEWSLETTER,
  CHANGE_INPUT_NEWSLETTER,
  UNACTIVE_NEWSLETTER,
} from '../../actions';

const initalState = {
  activeNewsLetter: false,
  email: '',
};

const reducer = (state = initalState, action = {}) => {
  switch (action.type) {
    case ACTIVE_NEWSLETTER:
      return {
        ...state,
        activeNewsLetter: true,
      };

    case UNACTIVE_NEWSLETTER:
      return {
        ...state,
        activeNewsLetter: false,
      };

    case CHANGE_INPUT_NEWSLETTER:
      return {
        ...state,
        email: action.newValue,
      };

    default:
      return state;
  }
};

export default reducer;
