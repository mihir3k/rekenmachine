const initialState = {
  themeName: "light",
  scientificMode: false,
};

function rekenmachineReducer(state = initialState, action) {
  // @TODO remove console logs
  console.log(action);
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
      }
      return state;
    default:
      return state;
  }
}

export { initialState, rekenmachineReducer };
