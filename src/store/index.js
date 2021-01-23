import { calculate } from "../utils/calculate";

const initialState = {
  themeName: "light",
  temp: null,
  total: null,
  operation: null,
  scientificMode: false,
};

function rekenmachineReducer(state = initialState, action) {
  switch (action.type) {
    case "LIGHT_THEME":
      return {
        ...state,
        themeName: "light",
      };
    case "DARK_THEME":
      return {
        ...state,
        themeName: "dark",
      };
    case "KEYPAD":
      if (action.value === "S") {
        return {
          ...state,
          scientificMode: !state.scientificMode,
        };
      } else {
        const result = calculate(
          state.temp,
          state.total,
          state.operation,
          action.value
        );
        return {
          ...state,
          temp: result.temp,
          total: result.total,
          operation: result.operation,
        };
      }
    default:
      return state;
  }
}

export { initialState, rekenmachineReducer };
