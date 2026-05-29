import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./../App";

test("rendersAppWithoutCrashing", () => {
  render(<App />);
  expect(screen.getByText(/Welcome to the App/i)).toBeInTheDocument();
});

test("displaysInitialStateCorrectly", () => {
  render(<App />);
  expect(screen.getByText(/Initial State/i)).toBeInTheDocument();
});

test("handlesButtonClickEvent", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /Click Me/i });
  fireEvent.click(button);
  expect(screen.getByText(/Button Clicked/i)).toBeInTheDocument();
});

test("rendersErrorMessageOnInvalidInput", () => {
  render(<App />);
  const input = screen.getByLabelText(/Input/i);
  fireEvent.change(input, { target: { value: "invalid" } });
  expect(screen.getByText(/Error: Invalid Input/i)).toBeInTheDocument();
});

test("updatesStateOnValidInput", () => {
  render(<App />);
  const input = screen.getByLabelText(/Input/i);
  fireEvent.change(input, { target: { value: "valid" } });
  expect(screen.getByText(/State Updated/i)).toBeInTheDocument();
});
