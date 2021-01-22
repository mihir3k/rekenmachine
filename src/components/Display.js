import "./Display.css";

import { useRekenmachineState } from "../context";

function Display() {
  const { result } = useRekenmachineState();
  return (
    <div className="Display">
      <div className="result">0</div>
    </div>
  );
}

export default Display;
