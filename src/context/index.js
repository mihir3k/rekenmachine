import { createContext, useContext, useReducer } from "react";

import { initialState, rekenmachineReducer } from "../store";

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
  return useContext(RekenmachineStateContext);
}

function useRekenmachineDispatch() {
  return useContext(RekenmachineDispatchContext);
}

export { RekenmachineProvider, useRekenmachineState, useRekenmachineDispatch };
