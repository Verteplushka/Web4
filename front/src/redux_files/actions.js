export const addDotRedux = (dot) => ({
  type: "ADD_DOT",
  payload: dot,
});

export const clearRedux = () => ({
  type: "CLEAR",
});

export const changeR = (r) => ({
  type: "CHANGE_R",
  payload: r,
});

export const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});
