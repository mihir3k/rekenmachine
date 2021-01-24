import { useEffect } from "react";

import { useRekenmachineState } from "../context";

import ThemeSwitcher from "./ThemeSwitcher";
import Calculator from "./Calculator";

function App() {
  const { themeName } = useRekenmachineState();

  useEffect(() => {
    document.body.style.backgroundColor =
      themeName === "light" ? "#ffffff" : "#000000";
    document.body.style.color = themeName === "light" ? "#000000" : "#ffffff";
  });

  return (
    <div
      className="App"
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        fontFamily: "monospace",
      }}
    >
      <div
        className="Title"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div
          style={{ fontWeight: "bold", fontSize: "2rem", textAlign: "center" }}
        >
          Rekenmachine
        </div>
      </div>
      <ThemeSwitcher />
      <Calculator />
    </div>
  );
}

export default App;
