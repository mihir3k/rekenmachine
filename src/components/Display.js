import { useRekenmachineState } from "../context";

function Display() {
  const { themeName } = useRekenmachineState();
  const { temp, total } = useRekenmachineState();

  return (
    <div
      className="Display"
      style={{
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: themeName === "light" ? "#000000" : "#ffffff",
        padding: "20px",
        textAlign: "right",
      }}
    >
      <div className="result" style={{ fontSize: "3rem" }}>
        {temp || total || 0}
      </div>
    </div>
  );
}

export default Display;
