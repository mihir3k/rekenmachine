import "./Button.css";

function Button(props) {
  return (
    <div className="Button">
      <button onClick={() => console.log(props.buttonValue)}>
        {props.buttonValue}
      </button>
    </div>
  );
}

export default Button;
