import Fraction from "./fractions";

const frac1 = new Fraction(1, 2);
const frac2 = new Fraction(3, 5);

const tests = [
  [frac1, "reciprocal", [], new Fraction(2, 1)],
  [new Fraction(2, 4), "reciprocal", [], new Fraction(2, 1)],
  [frac1, "add", [frac2], new Fraction(11, 10)],
  [frac1, "subtract", [frac2], new Fraction(-1, 10)],
  [frac1, "multiply", [frac2], new Fraction(3, 10)],
  [frac1, "divide", [frac2], new Fraction(5, 6)]

  // Feel free to add more test cases.
  // [new Fraction(2, 4), "reciprocal", [], new Fraction(2, 1)],
  // [frac1, "multiply", [frac2], new Fraction(3, 10)]
];

export default tests;
