Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function AgeGateValidator() {}
  AgeGateValidator.validate = function (e) {
    return e >= AgeGateValidator.MINIMUM_AGE;
  };
  AgeGateValidator.MINIMUM_AGE = 13;
  return AgeGateValidator;
}();
exports.AgeGateValidator = i;