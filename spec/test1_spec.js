import { coinValue } from '../q1.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let value = coinValue(0, 0, 0, 0, 0);
      expect(value).toBe(0);
    });
    it("contains spec with an expectation", function() {
        let value = coinValue(5, 2, 7, 4, 1);
        expect(value).toBe(8.2);
      });
     it("contains spec with an expectation", function() {
        let value = coinValue(1, 1, 12, 3, 10);
        expect(value).toBe(26.15);
      });
  });