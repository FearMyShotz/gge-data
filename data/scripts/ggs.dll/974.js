Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function MathUtils() {}
  MathUtils.asDegrees = function (e) {
    return e * MathUtils.RADTODEG;
  };
  MathUtils.asRadians = function (e) {
    return e * MathUtils.DEGTORAD;
  };
  MathUtils.randomInt = function (e, t) {
    return e + Number(Math.random() * (t - e + 1));
  };
  MathUtils.randomNumber = function (e, t) {
    return e + Math.random() * (t - e);
  };
  MathUtils.RADTODEG = 180 / Math.PI;
  MathUtils.DEGTORAD = Math.PI / 180;
  return MathUtils;
}();
exports.MathUtils = i;