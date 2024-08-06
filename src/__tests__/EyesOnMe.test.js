import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import EyesOnMe from "../components/EyesOnMe";

// Render the component before each test
beforeEach(() => {
  render(<EyesOnMe />);
});

test('displays a button with the text "Eyes On Me"', () => {
  expect(screen.queryByText(/Eyes On Me/)).toBeInTheDocument();
});

test("focusing the button triggers console output", () => {
  console.log = jest.fn(); // Mock console.log

  const button = screen.getByText(/Eyes On Me/); // Use getByText to ensure the element is found
  fireEvent.focus(button);

  expect(console.log).toHaveBeenCalled();
  expect(console.log.mock.calls[0][0]).toBe("Good"); // Ensure the expected value matches
});

test("removing focus (blur) on the button triggers console output", () => {
  console.log = jest.fn(); // Mock console.log

  const button = screen.getByText(/Eyes On Me/); // Use getByText to ensure the element is found
  fireEvent.blur(button);

  expect(console.log).toHaveBeenCalled();
  expect(console.log.mock.calls[0][0]).toBe("Hey! Eyes on me"); // Ensure the expected value matches
});
