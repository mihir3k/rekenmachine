import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../components/App";
import { RekenmachineProvider } from "../context";

function renderApp() {
  render(
    <RekenmachineProvider>
      <App />
    </RekenmachineProvider>
  );
}

function triggerClick(buttons) {
  for (let button of buttons) {
    userEvent.click(screen.getByTestId(`button${button}`));
  }
}

function test(buttons, expectedValue) {
  it(`${buttons.join(" ")} -> ${expectedValue}`, () => {
    renderApp();

    triggerClick(buttons);
    expect(screen.getByTestId("display-result")).toHaveTextContent(
      expectedValue
    );
  });
}

describe("should render", () => {
  it("title", () => {
    renderApp();
    expect(screen.getByText(/rekenmachine/i)).toBeInTheDocument();
  });

  it("light theme button", () => {
    renderApp();
    expect(screen.getByTestId("buttonLight Theme")).toBeInTheDocument();
  });

  it("dark theme button", () => {
    renderApp();
    expect(screen.getByTestId("buttonDark Theme")).toBeInTheDocument();
  });
});

describe("should toggle", () => {
  it("between light and dark theme", async () => {
    renderApp();
    userEvent.click(screen.getByTestId("buttonDark Theme"));
    await waitFor(() => {
      expect(screen.queryByTestId("button1")).toHaveStyle({
        borderColor: "#ffffff",
      });
    });

    userEvent.click(screen.getByTestId("buttonLight Theme"));
    await waitFor(() => {
      expect(screen.queryByTestId("button1")).toHaveStyle({
        borderColor: "#000000",
      });
    });
  });

  it("scientific mode", async () => {
    renderApp();

    userEvent.click(screen.getByTestId("buttonS"));
    await waitFor(() => {
      expect(screen.queryByText("x²")).toBeInTheDocument();
    });

    userEvent.click(screen.getByTestId("buttonS"));
    await waitFor(() => {
      expect(screen.queryByText("x²")).not.toBeInTheDocument();
    });
  });
});

describe("should calculate", () => {
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

  test(["S", "2", "+", "3", "±", "="], "1");

  test(["S", "2", "±", "x", "3", "="], "-6");

  test(["S", "9", "x²"], "81");

  test(["S", "8", "1", "√"], "9");

  test(["S", "2", "+", "3", "x²"], "3");
});
