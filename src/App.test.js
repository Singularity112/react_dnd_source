import { render, screen } from "@testing-library/react";
import App from "./App";

test("Husky will fail on commit", () => {
  render(<App />);
  const linkElement = screen.getByText(/Some text that won't be in screen/i);
  expect(linkElement).toBeInTheDocument();
});
