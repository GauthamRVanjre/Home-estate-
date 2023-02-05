const INIT_STATE = {
  favorites: [],
};

export default function favoritesPageReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const isExist = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (isExist) {
        return state;
      }
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
