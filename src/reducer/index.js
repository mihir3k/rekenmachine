import { getCalculationResult } from "../utils";

const initialState = {
  themeName: "light",
  inputArray: [],
  result: 0,
  hasError: false,
  errorMessage: "",
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
      } else if (action.value === "AC") {
        return {
          ...state,
          result: 0,
          inputArray: [],
          hasError: false,
          errorMessage: "",
        };
      } else {
        let {
          newInputArray,
          newResult,
          hasError,
          errorMessage,
        } = getCalculationResult(state.inputArray, state.result, action.value);
        return {
          ...state,
          inputArray: newInputArray,
          result: newResult,
          hasError: hasError,
          errorMessage: errorMessage,
        };
      }
    default:
      return state;
  }
}

export { initialState, rekenmachineReducer };
