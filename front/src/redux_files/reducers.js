const initialState = {
  dotsList: [],
  r: 0,
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
    default:
      return state;
  }
};

export default reducer;
