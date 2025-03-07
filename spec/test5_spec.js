import { damageLevel } from '../q5.js'

describe("A suite", function() {
    it("contains spec with an expectation", function() {
      let value = damageLevel(4);
      expect(value).toBe("Little or no damage");
    });
    it("contains spec with an expectation", function() {
        let value = damageLevel(6);
        expect(value).toBe("Serious damage: walls may crack or fall");
      });
    it("contains spec with an expectation", function() {
        let value = damageLevel(8);
        expect(value).toBe("Catastrophe: most buildings destroyed");
      });
  });