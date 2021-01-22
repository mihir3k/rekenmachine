import { calculate } from "../utils/calculate";

const initialState = {
  nextValue: 0,
  totalValue: 0,
};

function rekenmachineReducer(state = initialState, action) {
  switch (action.type) {
    case "KEYPAD":
      const values = calculate(state.nextValue, state.totalValue, action.value);
      return {
        ...state,
        nextValue: values.nextValue,
        totalValue: values.totalValue,
      };
    default:
      return state;
  }
}

export { initialState, rekenmachineReducer };
