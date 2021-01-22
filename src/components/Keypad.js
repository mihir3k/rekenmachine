import "./Keypad.css";

import Button from "./Button";

function Keypad() {
  return (
    <div className="Keypad">
      <div className="KeypadRow">
        <Button label="7" type="KEYPAD" />
        <Button label="8" type="KEYPAD" />
        <Button label="9" type="KEYPAD" />
        <Button label="÷" type="KEYPAD" />
      </div>
      <div className="KeypadRow">
        <Button label="4" type="KEYPAD" />
        <Button label="5" type="KEYPAD" />
        <Button label="6" type="KEYPAD" />
        <Button label="x" type="KEYPAD" />
      </div>
      <div className="KeypadRow">
        <Button label="1" type="KEYPAD" />
        <Button label="2" type="KEYPAD" />
        <Button label="3" type="KEYPAD" />
        <Button label="-" type="KEYPAD" />
      </div>
      <div className="KeypadRow">
        <Button label="AC" type="KEYPAD" />
        <Button label="0" type="KEYPAD" />
        <Button label="=" type="KEYPAD" />
        <Button label="+" type="KEYPAD" />
      </div>
    </div>
  );
}

export default Keypad;
