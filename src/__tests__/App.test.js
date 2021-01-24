import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../components/App";
import { RekenmachineProvider } from "../context";

describe("should render", function () {
  it("title", () => {
    render(
      <RekenmachineProvider>
        <App />
      </RekenmachineProvider>
    );

    expect(screen.getByText(/rekenmachine/i)).toBeInTheDocument();
  });
});

function test(buttons, expectedValue) {
  it(`${buttons.join(" ")} -> ${expectedValue}`, () => {
    render(
      <RekenmachineProvider>
        <App />
      </RekenmachineProvider>
    );

    for (let button of buttons) {
      userEvent.click(screen.getByTestId(`button${button}`));
    }
    expect(screen.getByTestId("display-result")).toHaveTextContent(
      expectedValue
    );
  });
}

describe("should calculate", function () {
  test([], "0");

  test(["2"], "2");

  test(["2", "+"], "2");

  test(["2", "+", "3"], "3");

  test(["2", "+", "3", "-"], "5");

  test(["2", "+", "3", "-", "1"], "1");

  test(["2", "+", "3", "-", "1", "x"], "4");

  test(["2", "+", "3", "-", "1", "x", "1"], "1");

  test(["2", "+", "3", "-", "1", "x", "1", "0"], "10");

  test(["2", "+", "3", "-", "1", "x", "1", "0", "="], "40");

  test(["2", "+", "3", "-", "1", "x", "1", "0", "+"], "40");

  test(["2", "+", "3", "-", "1", "x", "1", "0", "+", "5"], "5");

  test(["2", "+", "3", "-", "1", "x", "1", "0", "÷", "5", "="], "8");

  test(["2", "+", "3", "-", "1", "x", "1", "0", "=", "AC"], "0");

  test(["S", "2", "±", "+", "3", "="], "1");

  test(["S", "2", "±", "x", "3", "="], "-6");

  test(["S", "9", "x²"], "81");

  test(["S", "8", "1", "√"], "9");

  test(["S", "2", "+", "3", "x²"], "3");
});
