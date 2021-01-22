import "./Keypad.css";

import Button from "./Button";

function Keypad() {
  return (
    <div className="Keypad">
      <div className="KeypadRow">
        <Button buttonValue="7" />
        <Button buttonValue="8" />
        <Button buttonValue="9" />
        <Button buttonValue="÷" />
      </div>
      <div className="KeypadRow">
        <Button buttonValue="4" />
        <Button buttonValue="5" />
        <Button buttonValue="6" />
        <Button buttonValue="x" />
      </div>
      <div className="KeypadRow">
        <Button buttonValue="1" />
        <Button buttonValue="2" />
        <Button buttonValue="3" />
        <Button buttonValue="-" />
      </div>
      <div className="KeypadRow">
        <Button buttonValue="AC" />
        <Button buttonValue="0" />
        <Button buttonValue="=" />
        <Button buttonValue="+" />
      </div>
    </div>
  );
}

export default Keypad;
