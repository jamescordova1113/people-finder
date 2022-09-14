import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import { PeopleFinder } from "../PeopleFinder";

/**
 * Integration test between People Finder & Person Detail Components.
 */
describe("People Finder Page", () => {
  it("should render the person if name exists", async () => {
    render(<PeopleFinder />);
    const searchInputElement = screen.getByLabelText("search-key");
    fireEvent.change(searchInputElement, {
      target: { value: "Annetta Beccero" },
    });
    await waitFor(() => {
      expect(screen.getByText("Annetta Beccero")).toBeInTheDocument();
    });
  });

  it("should not render the person if name does not exists", () => {
    render(<PeopleFinder />);
    const searchInputElement = screen.getByLabelText("search-key");
    fireEvent.change(searchInputElement, {
      target: { value: "Kevin Hart" },
    });
    expect(screen.queryByText("Kevin Hart")).not.toBeInTheDocument();
  });
});
