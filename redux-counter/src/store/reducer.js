const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DEC":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + 10,
      };
    case "SUB":
      return {
        ...state,
        counter: state.counter - 15,
      };
    case "STR_RES":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter }),
      };
    default:
      console.log("[Reducer] Oops.");
  }
  return state;
};

export default reducer;
