const initialState = {
  dotsList: [],
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
    default:
      return state;
  }
};

export default reducer;
