// isNumber returns true if value is a Number
function isNumber(value) {
  return Object.is(parseInt(value), NaN) ? false : true;
}

// isOperator returns true if value is an operator
function isOperator(value) {
  return ["+", "-", "x", "÷", "=", "±", "x²", "√"].includes(value);
}

// isScientificOperator returns true if value is a scientific operator
function isScientificOperator(value) {
  return ["±", "x²", "√"].includes(value);
}

function operate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "x":
      return a * b;
    case "÷":
      return b === 0 ? 0 : a / b;
    case "±":
      return -a;
    case "x²":
      return Math.pow(a, 2);
    case "√":
      return Math.floor(Math.sqrt(a));
    default:
      return a;
  }
}

function updateInputArray(inputArray, newValue) {
  inputArray = [...inputArray];

  // If newValue is neither an operator or a number, do nothing
  if (!isNumber(newValue) && !isOperator(newValue)) {
    return inputArray;
  }

  // If inputArray is empty and newValue is an operator, do nothing
  if (!inputArray.length && isOperator(newValue)) {
    return inputArray;
  }

  // Get last value in inputArray
  let lastValue = inputArray[inputArray.length - 1];

  // If last value in inputArray is an operator and newValue is also an operator,
  // replace last value in inputArray with newValue
  if (isOperator(lastValue) && isOperator(newValue)) {
    inputArray[inputArray.length - 1] = newValue;
    return inputArray;
  }

  // If last value in inputArray is a number and newValue is also a number
  // append newValue to last value in inputArray
  if (isNumber(lastValue) && isNumber(newValue)) {
    inputArray[inputArray.length - 1] = lastValue + newValue;
    return inputArray;
  }

  return [...inputArray, newValue];
}

function getCalculationResult(currentInputArray, currentResult, newValue) {
  let hasError = false;
  let errorMessage = "";

  let newInputArray = updateInputArray(currentInputArray, newValue);

  let newResult = newInputArray.length ? parseInt(newInputArray[0]) : 0;

  if (newInputArray.length === 3) {
    newResult = parseInt(newInputArray[newInputArray.length - 1]);
  }

  if (isScientificOperator(newValue)) {
    if (newInputArray.length === 2) {
      let operator = newInputArray.pop();
      let operand = newInputArray.pop();
      newResult = operate(operand, 0, operator).toString();
      newInputArray.push(newResult.toString());
    } else {
      return {
        newInputArray: currentInputArray,
        newResult: currentResult,
        hasError: true,
        errorMessage: "Cannot perform scientific operation",
      };
    }
  }

  if (newInputArray.length > 3) {
    const extraOperator = newInputArray.pop();
    const secondOperand = parseInt(newInputArray.pop());
    const operator = newInputArray.pop();
    const firstOperand = parseInt(newInputArray.pop());

    newResult = operate(firstOperand, secondOperand, operator).toString();

    newInputArray[0] = newResult;
    newInputArray[1] = extraOperator;
    return {
      newInputArray: newInputArray,
      newResult: newResult,
      hasError,
      errorMessage,
    };
  }

  if (newResult.toString().length > 10) {
    return {
      newInputArray: currentInputArray,
      newResult: currentResult,
      hasError: true,
      errorMessage: "Exceeded calculator range",
    };
  }

  return {
    newInputArray,
    newResult,
    hasError,
    errorMessage,
  };
}

export { getCalculationResult };
