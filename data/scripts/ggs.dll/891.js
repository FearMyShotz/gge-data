Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function Random() {
    throw new Error("Random is a static class and cannot be instantiated.");
  }
  Random.randBit = function () {
    return Math.random();
  };
  Random.hexColor = function () {
    return Number("0x" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase());
  };
  Random.float = function (e, t = NaN) {
    if (isNaN(t)) {
      t = e;
      e = 0;
    }
    return Random.randBit() * (t - e) + e;
  };
  Random.boolean = function (e = 0.5) {
    return Random.randBit() < e;
  };
  Random.sign = function (e = 0.5) {
    if (Random.randBit() < e) {
      return 1;
    } else {
      return -1;
    }
  };
  Random.bit = function (e = 0.5) {
    if (Random.randBit() < e) {
      return 1;
    } else {
      return 0;
    }
  };
  Random.integer = function (e, t = NaN) {
    if (isNaN(t)) {
      t = e;
      e = 0;
    }
    return Math.floor(Random.float(e, t));
  };
  return Random;
}();
exports.Random = i;