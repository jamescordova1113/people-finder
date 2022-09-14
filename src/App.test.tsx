import { render, screen } from "@testing-library/react";
import App from "./App";

it("should render logo on top", async () => {
  render(<App />);
  expect(screen.getByAltText("air")).toBeInTheDocument();
});
