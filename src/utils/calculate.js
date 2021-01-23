function isNumber(value) {
  return Object.is(parseInt(value), NaN) ? false : true;
}

function operate(a, b, op) {
  switch (op) {
    case "+":
      return (a + b).toString();
    case "-":
      return (a - b).toString();
    case "x":
      return (a * b).toString();
    case "÷":
      return b === 0 ? 0 : (a / b).toString();
    default:
      console.log("UKNOWN OPERATION");
      break;
  }
}

function calculate(temp, total, operation, button) {
  if (button === "AC") {
    return {
      temp: null,
      total: null,
      operation: null,
    };
  }

  if (isNumber(button)) {
    if (button === "0" && temp === "0") {
      return {
        temp: temp,
        total: total,
        operation: operation,
      };
    }

    if (operation) {
      if (temp) {
        return {
          temp: temp + button,
          total: total,
          operation: operation,
        };
      }
      return { temp: button, total: total, operation: operation };
    }

    if (temp) {
      const newTemp = temp === "0" ? button : temp + button;
      return {
        temp: newTemp,
        total: null,
        operation: operation,
      };
    }
    return {
      temp: button,
      total: null,
      operation: operation,
    };
  }

  if (button === "=") {
    if (temp && operation) {
      return {
        total: operate(parseInt(total), parseInt(temp), operation),
        temp: null,
        operation: null,
      };
    } else {
      return { temp: temp, total: total, operation: operation };
    }
  }

  if (button === "±") {
    if (temp) {
      return {
        temp: (-1 * parseInt(temp)).toString(),
        total: total,
        operation: operation,
      };
    }
    if (total) {
      return {
        temp: temp,
        total: (-1 * parseInt(temp)).toString(),
        operation: operation,
      };
    }
    return {
      temp: temp,
      total: total,
      operation: operation,
    };
  }

  if (button === "x²") {
    if (temp) {
      return {
        temp: Math.pow(parseInt(temp), 2).toString(),
        total: total,
        operation: operation,
      };
    }
    if (total) {
      return {
        temp: temp,
        total: Math.pow(parseInt(total), 2).toString(),
        operation: operation,
      };
    }
    return {
      temp: temp,
      total: total,
      operation: operation,
    };
  }

  if (button === "√") {
    if (temp) {
      return {
        temp: Math.sqrt(parseInt(temp)).toString(),
        total: total,
        operation: operation,
      };
    }
    if (total) {
      return {
        temp: temp,
        total: Math.sqrt(parseInt(total)).toString(),
        operation: operation,
      };
    }
    return {
      temp: temp,
      total: total,
      operation: operation,
    };
  }

  if (operation) {
    return {
      total: operate(parseInt(total), parseInt(temp), operation),
      next: null,
      operation: button,
    };
  }

  if (!temp) {
    return {
      temp: temp,
      total: total,
      operation: button,
    };
  }

  return {
    temp: null,
    total: temp,
    operation: button,
  };
}

export { calculate };
