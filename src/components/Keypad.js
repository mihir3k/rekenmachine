import { useRekenmachineState } from "../context";

import Button from "./Button";

const keyPadRowStyles = {
  display: "flex",
  flexDirection: "row",
  flexGrow: "1",
};

function Keypad() {
  const { scientificMode } = useRekenmachineState();
  return (
    <div className="Keypad">
      <div className="KeypadRow" style={keyPadRowStyles}>
        <Button label="7" type="KEYPAD" />
        <Button label="8" type="KEYPAD" />
        <Button label="9" type="KEYPAD" />
        <Button label="÷" type="KEYPAD" />
      </div>
      <div className="KeypadRow" style={keyPadRowStyles}>
        <Button label="4" type="KEYPAD" />
        <Button label="5" type="KEYPAD" />
        <Button label="6" type="KEYPAD" />
        <Button label="x" type="KEYPAD" />
      </div>
      <div className="KeypadRow" style={keyPadRowStyles}>
        <Button label="1" type="KEYPAD" />
        <Button label="2" type="KEYPAD" />
        <Button label="3" type="KEYPAD" />
        <Button label="-" type="KEYPAD" />
      </div>
      <div className="KeypadRow" style={keyPadRowStyles}>
        <Button label="AC" type="KEYPAD" />
        <Button label="0" type="KEYPAD" />
        <Button label="=" type="KEYPAD" />
        <Button label="+" type="KEYPAD" />
      </div>
      <div className="KeypadRow" style={keyPadRowStyles}>
        <Button label="S" type="KEYPAD" />
        {scientificMode ? <Button label="&plusmn;" type="KEYPAD" /> : null}
        {scientificMode ? <Button label="x&sup2;" type="KEYPAD" /> : null}
        {scientificMode ? <Button label="&radic;" type="KEYPAD" /> : null}
      </div>
    </div>
  );
}

export default Keypad;
