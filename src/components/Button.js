import "./Button.css";

import { useRekenmachineDispatch } from "../context";

function Button(props) {
  const dispatch = useRekenmachineDispatch();
  return (
    <div className="Button">
      <button
        onClick={() => dispatch({ type: props.type, value: props.label })}
      >
        {props.label}
      </button>
    </div>
  );
}

export default Button;
