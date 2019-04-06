var assert = require("chai").assert;
var luhnCheck = require("../LuhnAlgorithm");

describe("LuhnAlgorithm", function () {
  it("should return true if it is Luhn Algorithem", function() {
    var creditNumber = '4520855101573541';
    var test = luhnCheck(creditNumber);
    assert.isTrue(test);
  });
});


