import { useRekenmachineState } from "../context";

function Display() {
  const { themeName } = useRekenmachineState();
  const { result } = useRekenmachineState();

  return (
    <div
      className="Display"
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: themeName === "light" ? "#000000" : "#ffffff",
      }}
    >
      <div
        style={{
          padding: "10px",
          textAlign: "right",
          fontWeight: "400",
          fontSize: "4rem",
        }}
        data-testid="display-result"
      >
        {result}
      </div>
    </div>
  );
}

export default Display;
