import MockDate from "mockdate";
import { calculateAge } from "../AgeCalculatorApp.helpers";

describe("calculateAge", () => {
  beforeEach(() => {
    MockDate.set(new Date("2023-07-02 00:00:00"));
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("should calculate the age correctly when day is the same", () => {
    const result = calculateAge(1993, 7, 2);

    expect(result.years).toBe(30);
    expect(result.months).toBe(0);
    expect(result.days).toBe(0);
  });

  it("should calculate the age correctly when day is not the same", () => {
    const result = calculateAge(1993, 3, 26);

    expect(result.years).toBe(30);
    expect(result.months).toBe(3);
    expect(result.days).toBe(6);
  });

  it("should calculate the age correctly when day is in the future", () => {
    const result = calculateAge(1995, 7, 11);

    expect(result.years).toBe(27);
    expect(result.months).toBe(11);
    expect(result.days).toBe(21);
  });
});
