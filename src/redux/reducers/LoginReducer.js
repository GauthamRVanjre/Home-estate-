const initialState = {
  isLogin: false,
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogin: true };
    case "LOGOUT":
      return { ...state, isLogin: false };
    default:
      return state;
  }
}
