import { membershipCost } from '../q4.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let value = membershipCost(100,1);
      expect(value).toBe(95);
    });
    it("contains spec with an expectation", function() {
        let value = membershipCost(100,2);
        expect(value).toBe(90);
      });
      it("contains spec with an expectation", function() {
        let value = membershipCost(100,3);
        expect(value).toBe(85);
      });
      it("contains spec with an expectation", function() {
        let value = membershipCost(100,4);
        expect(value).toBe(85);
      });
  });
