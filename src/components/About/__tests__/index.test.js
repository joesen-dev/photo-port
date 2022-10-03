import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

// call the cleanup function using the afterEach global function from Jest:
// This will ensure that after each test, we won't have any leftover memory data that could give us false results
afterEach(cleanup);

// string that we passed into the describe function declares which component is being tested (i.e., About component).
describe("About component", () => {
  //renders About test
  // First Test
  it("renders", () => {
    render(<About />);
  });

  // Second Test
  it("matches snapshot DOM node structure", () => {
    // use the asFragment function, which returns a snapshot of the About component
    const { asFragment } = render(<About />);
    // use the toMatchSnapshot matcher to assert that snapshots will match:
    expect(asFragment()).toMatchSnapshot();
  });
});
