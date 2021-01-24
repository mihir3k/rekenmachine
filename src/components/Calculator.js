import Display from "./Display";
import Keypad from "./Keypad";
import Error from "./Error";

function Calculator() {
  return (
    <div className="Calculator">
      <Display />
      <Keypad />
      <Error />
    </div>
  );
}

export default Calculator;
