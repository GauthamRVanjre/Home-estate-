export const ADD = (item) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: item,
  };
};

export const REMOVE = (id) => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: id,
  };
};
