import "./App.css";

import { RekenmachineProvider } from "./context";

import Display from "./components/Display";
import Keypad from "./components/Keypad";

function App() {
  return (
    <div className="App">
      <RekenmachineProvider>
        <Display />
        <Keypad />
      </RekenmachineProvider>
    </div>
  );
}

export default App;
