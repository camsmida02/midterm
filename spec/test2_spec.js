import { FahToCel } from '../q2.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let value = FahToCel(100);
      expect(value).toBe(37.77777777777778);
    });
    it("contains spec with an expectation", function() {
        let value = FahToCel(32);
        expect(value).toBe(0);
      });
    it("contains spec with an expectation", function() {
        let value = FahToCel(-50);
        expect(value).toBe(-45.55555555555556);
      });
  });