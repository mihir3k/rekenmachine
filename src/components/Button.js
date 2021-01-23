import { useRekenmachineDispatch, useRekenmachineState } from "../context";

function Button(props) {
  const { themeName } = useRekenmachineState();
  const dispatch = useRekenmachineDispatch();
  return (
    <div
      className="Button"
      style={{
        width: props.wide ? "50%" : "25%",
      }}
    >
      <button
        onClick={() => dispatch({ type: props.type, value: props.label })}
        style={{
          width: "100%",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: themeName === "light" ? "#000000" : "#ffffff",
          backgroundColor: themeName === "light" ? "#f0f0f0" : "#666666",
          padding: "10px",
          fontSize: props.small ? "1.5rem" : "3rem",
        }}
      >
        {props.label}
      </button>
    </div>
  );
}

export default Button;
