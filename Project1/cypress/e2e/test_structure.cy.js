/// <reference types="cypress" />

let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

describe('Unit testing for our dummy application', () => {
  context('Unit testing basic operations', () => {
    it('should add positive numbers', () => {
      expect(add(4, 2)).to.eq(6);
    });

    it('should subtract positive numbers', () => {
      expect(subtract(4, 2)).to.eq(2);
    });

    it('should divide positive numbers', () => {
      expect(divide(4, 2)).to.eq(2);
    });

    it('should multiply positive numbers', () => {
      expect(multiply(4, 2)).to.eq(8);
    });
  });

  describe('Math with DECIMAL numbers', () => {
    specify('should add decimal numbers', () => {
      expect(add(2.2, 2.2)).to.eq(4.4);
    });

    specify('should subtract decimal numbers', () => {
      expect(subtract(4.4, 2.2)).to.eq(2.2);
    });
  });
});
