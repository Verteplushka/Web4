const initialState = {
  dotsList: [],
  r: 0,
  user: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DOT":
      return {
        ...state,
        dotsList: [...state.dotsList, action.payload],
      };
    case "CLEAR":
      return {
        ...state,
        dotsList: [],
      };
    case "CHANGE_R":
      return {
        ...state,
        r: action.payload,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
