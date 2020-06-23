import * as Calculation from "../src/calculation";

const MOCK = new Date(2020, 0, 1, 5, 0, 0); // 2019-12-31 20:00:00
const MOCK2 = new Date(2020, 0, 10, 5, 0, 0); // 2020-1-9 20:00:00

describe("add", () => {
  it("ten days later", () => {
    expect(Calculation.add(9, MOCK)).toBe(MOCK2); // serializes to the same string
  });
});

describe("diff", () => {
  it("2020-1-1 - 2020-1-10 = -9", () => {
    expect(Calculation.diff(MOCK2, MOCK)).toBe(-9);
  });
  it("2020-1-10 - 2020-1-1 = 9", () => {
    expect(Calculation.diff(MOCK, MOCK2)).toBe(9);
  });
});
