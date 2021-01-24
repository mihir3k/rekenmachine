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
          padding: "10px",
          fontFamily: "monospace",
          fontSize: props.small ? "1.2rem" : "3rem",
          backgroundColor: themeName === "light" ? "#f0f0f0" : "#666666",
          borderColor: themeName === "light" ? "#000000" : "#ffffff",
          color: themeName === "light" ? "#000000" : "#ffffff",
        }}
        data-testid={`button${props.label}`}
      >
        {props.label}
      </button>
    </div>
  );
}

export default Button;
