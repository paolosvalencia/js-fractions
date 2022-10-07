export default class Fraction {
  constructor(a, b) {
    // TODO Store a, b.
    // ...
    this.a = a;
    this.b = b;
    // Reduce the fraction to its lowest terms.
    this.reduce();
  }

  toString() {
    // TODO Provide a string representation of this fraction.
    var astring = this.a.toString();
    var bstring = this.b.toString();
    return astring + "/" + bstring;
  }

  equals(frac) {
    // TODO Return `true` if this fraction and `frac1` are equal.

    return this.a / this.b === frac.a / frac.b;
  }

  reduce() {
    // TODO Reduce this fraction to lowest terms.
    // TODO If this fraction is negative, move negative sign to numerator.
    let a = this.a;
    let b = this.b;
    var gcd = function gcd(_a, _b) {
      return _b ? gcd(_b, _a % _b) : _a;
    };

    if (b < 0 || a < 0) {
      b = Math.abs(b);
      a = Math.abs(a);
      a = -a;

      let gcd1 = gcd(a, b);
      this.a = this.a / gcd1;
      this.b = this.b / gcd1;
      return this;
    }

    let gcd1 = gcd(a, b);
    this.a = this.a / gcd1;
    this.b = this.b / gcd1;
    return this;

    return this;
  }

  reciprocal() {
    // TODO Return a new fraction representing the reciprocal of this fraction.

    let a = this.a;
    let b = this.b;

    return new Fraction(b, a);
  }

  add(frac2) {
    // TODO Return a new fraction representing the sum of this fraction and `frac2`.
    var gcd = function gcd(_a, _b) {
      return _b ? gcd(_b, _a % _b) : _a;
    };

    let gcd1 = gcd(this.b, frac2.b);
    let a = (this.a * frac2.b) / gcd1 + (frac2.a * this.b) / gcd1;
    let b = (this.b * frac2.b) / gcd1;
    return new Fraction(a, b);
  }

  subtract(frac2) {
    // TODO Return a new fraction representing the difference of this fraction and `frac2`.
    var gcd = function gcd(_a, _b) {
      return _b ? gcd(_b, _a % _b) : _a;
    };

    let gcd1 = gcd(this.b, frac2.b);
    let a = (this.a * frac2.b) / gcd1 - (frac2.a * this.b) / gcd1;
    let b = (this.b * frac2.b) / gcd1;
    return new Fraction(a, b);
  }

  multiply(frac2) {
    // TODO Return a new fraction representing the product of this fraction and `frac2`.
    return new Fraction(this.a * frac2.a, this.b * frac2.b).reduce();
  }

  divide(frac2) {
    // TODO Return a new fraction representing the quotient of this fraction and `frac2`.
    return new Fraction(this.a * frac2.b, this.b * frac2.a).reduce();
  }
}
