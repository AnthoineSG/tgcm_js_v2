const initialState = {
  user: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  },
  isLogged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
