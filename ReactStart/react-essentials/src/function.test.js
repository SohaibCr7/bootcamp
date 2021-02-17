import { fireEvent, render } from "@testing-library/react";
import React from "react";
import AppOne from "./App";
import { timesTwo } from "./functions";
import { Checkbox } from "./checkbox";

describe("Fisrst test suite", () => {
  test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
  });

  test("renders an h1", () => {
    const { getByText } = render(<AppOne />);
    const h1 = getByText(/Hello React Test/);
    expect(h1).toHaveTextContent("Hello React Test");
  });
});

describe("Second test suite", () => {

    test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
  });

  test("renders an h1", () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/Hello React Test/);
    expect(h1).toHaveTextContent("Hello React Test");
  });
});

describe("Third Test Suite",() => {

    test('Selecting checkBox', () => {
        // test
        const { getByLabelText } = render(<Checkbox />);
        const checkbox = getByLabelText(/Checked/);
        expect(checkbox.checked).toEqual(false);
        fireEvent.click(checkbox);
        expect(checkbox.checked).toEqual(true);
    })
})
