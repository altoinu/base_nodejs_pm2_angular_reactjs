var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

/*
let assert = require("chai").assert;
let cartItemWithOneTopping = {
    "14SCREEN": {
        "Name": "Large Hand Tossed Pizza",
        "Qty": 1,
        "Toppings": ["Pepperoni"],
        "Price": 10,
    }
};
let cartItemWithMultipleToppings = {
    "P12IPAZA": {
        "Name": "Medium Pan Pizza",
        "Qty": 1,
        "Toppings": ["Onion", "Spinach"],
        "Price": 9,
    }
};
let cartItemWithoutToppings = {
    "B16PBIT": {
        "Name": "Parmesan Bread Bites",
        "Qty": 1,
        "Toppings": [],
        "Price": 2.99,
    }
};

describe("formatCartForDisplay", () => {
    it("should return an array", () => {
        assert.isArray(formatCartForDisplay(cart));
    });
    
    it("should correctly format product names and include toppings", () => {
        assert.deepEqual(formatCartForDisplay(cartItemWithOneTopping), ["Large Hand Tossed Pizza (Pepperoni)"]);
        assert.deepEqual(formatCartForDisplay(cartItemWithMultipleToppings), ["Medium Pan Pizza (Onion, Spinach)"]);
    });
    
    it("should correctly format product names when there are no toppings", () => {
        assert.deepEqual(formatCartForDisplay(cartItemWithoutToppings), ["Parmesan Bread Bites (No Toppings)"]);
    });
});
*/