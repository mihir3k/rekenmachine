import { createContext, useContext, useReducer } from "react";

import { initialState, rekenmachineReducer } from "../reducer";

const RekenmachineStateContext = createContext(null);
const RekenmachineDispatchContext = createContext(null);

function RekenmachineProvider({ children }) {
  const [state, dispatch] = useReducer(rekenmachineReducer, initialState);
  return (
    <RekenmachineStateContext.Provider value={state}>
      <RekenmachineDispatchContext.Provider value={dispatch}>
        {children}
      </RekenmachineDispatchContext.Provider>
    </RekenmachineStateContext.Provider>
  );
}

function useRekenmachineState() {
  const context = useContext(RekenmachineStateContext);
  if (context === undefined) {
    throw new Error(
      "useRekenmachineState must be used with RekenmachineProvider"
    );
  }
  return context;
}

function useRekenmachineDispatch() {
  const context = useContext(RekenmachineDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useRekenmachineDispatch must be used with RekenmachineProvider"
    );
  }
  return context;
}

export { RekenmachineProvider, useRekenmachineState, useRekenmachineDispatch };
