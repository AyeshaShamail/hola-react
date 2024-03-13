import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);

  //Assertion - important but not mandatory, even without this it will pass the test
  expect(result).toBe(7);
});
