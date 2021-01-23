import { useEffect } from "react";

import { useRekenmachineState } from "../context";

import Display from "./Display";
import Keypad from "./Keypad";
import Button from "./Button";

function App() {
  const { themeName } = useRekenmachineState();

  useEffect(() => {
    document.body.style.backgroundColor =
      themeName === "light" ? "#ffffff" : "#000000";
    document.body.style.color = themeName === "light" ? "#000000" : "#ffffff";
  });

  return (
    <div className="App" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div className="ThemeSwitcher" style={{ display: "flex" }}>
        <Button label="Light Theme" type="LIGHT_THEME" small wide />
        <Button label="Dark Theme" type="DARK_THEME" small wide />
      </div>
      <Display />
      <Keypad />
    </div>
  );
}

export default App;
