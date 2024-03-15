import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with a Login Button", () => {
  render(
    // Giving BrowserRouter to avoid Link error during testing
    //store comes from appStore
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // one way to find loginbutton
  const loginButton = screen.getByRole("button", { name: "Login" });

  // second way to find loginbutton - not a good way but can be an alternative
  //   const loginButton = screen.getByText("Login");

  //assert
  expect(loginButton).toBeInTheDocument();
});

it("Should render header component with zero cart items", () => {
  render(
    // Giving BrowserRouter to avoid Link error during testing
    //store comes from appStore
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // one way to find loginbutton
  const cartItems = screen.getByText("🛒 (0 items)");

  //assert
  expect(cartItems).toBeInTheDocument();
});

//can pass regex as well while using getByText
it("Should render header component with cart", () => {
  render(
    // Giving BrowserRouter to avoid Link error during testing
    //store comes from appStore
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  // one way to find loginbutton
  const cartItems = screen.getByText(/🛒/);

  //assert
  expect(cartItems).toBeInTheDocument();
});

it("Should change onClick login and logout", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });

  //To click the button, use fireEvet which is imported from @testing-library/react
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(loginButton).toBeInTheDocument();
});
