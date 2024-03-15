import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Theobroma");

  expect(name).toBeInTheDocument();
});

// it("Should render Restaurant card component with Promoted Label", () => {
//   Home work //test HOC : withPromotedLabel()

//   render(withPromotedLabel);
// });
