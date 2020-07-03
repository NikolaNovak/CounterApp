import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    case actionTypes.DECREMENT:
      return updateObject(state, { counter: state.counter - 1 });
    case actionTypes.ADD:
      return updateObject(state, { counter: state.counter + 10 });
    case actionTypes.SUBTRACT:
      return updateObject(state, { counter: state.counter - 15 });
    default:
      console.log("[Counter-Reducer] Oops.");
  }
  return state;
};

export default reducer;
