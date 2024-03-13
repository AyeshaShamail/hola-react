import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// This was all about unit testing

test("Should load contact us component", () => {
  //Whenever we're testing UI component in React first render the componnet onto the jSdom first - using render which comes from testing-library-react
  render(<Contact />); // render componnent to Jsdom

  // whatever render onto Jsdom can be get inside the screen which is an object - it will find all the headings isnide the contact componnet and give it to heading variable
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact us component", () => {
  //Whenever we're testing UI component in React first render the componnet onto the jSdom first - using render which comes from testing-library-react
  render(<Contact />); // render componnent to Jsdom

  // whatever render onto Jsdom can be get inside the screen which is an object - it will find all the headings isnide the contact componnet and give it to heading variable
  const button = screen.getByText("Submit"); //getByRole -- role can be heading,button etc.

  expect(button).toBeInTheDocument();
});

//For multiple text
test("Should load two input boxes in contact us component", () => {
  render(<Contact />);

  //this is called querying
  const inputBoxes = screen.getAllByRole("textbox");

  // console.log(inputBoxes.length); // Gives HTMLInputElement(VirtualDom/JSX/React element/React Fibre Node)
  expect(inputBoxes.length).toBe(3);
});

// If we have more than 20 Test cases - group multiple test cases into a single block called describe
// We can have multiple describe blocks, nested describe box
describe("Contact Us Page Test Cases", () => {
  // jest says we can write the name of test function as "it" also as written below and there's no difference in it as it and test are alias
  // Writing here it for my knowledge, it means I can write either "it" or "test"
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("Should load two input boxes in contact us component", () => {
    render(<Contact />);

    //this is called querying
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes.length); // Gives HTMLInputElement(VirtualDom/JSX/React element/React Fibre Node)
    expect(inputBoxes.length).toBe(3);
  });

  it("Should load two input boxes in contact us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).not.toBe(2);
  });
});
