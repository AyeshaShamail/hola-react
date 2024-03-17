import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestrauntMenu from "../RestrauntMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestrauntMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Honest Bowls (16)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(16);

  //finding the add button

  expect(screen.getByText("🛒 (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "+ Add" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("🛒 (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("🛒 (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(18);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(16);

  expect(
    screen.getByText("Looks like, your cart is empty")
  ).toBeInTheDocument();
});
