import { useRekenmachineState } from "../context";

function Error() {
  const { hasError, errorMessage } = useRekenmachineState();
  return (
    <div className="Error">
      <div style={{ padding: "20px", fontSize: "1rem", textAlign: "center" }}>
        {hasError ? errorMessage : " "}
      </div>
    </div>
  );
}

export default Error;
