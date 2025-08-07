Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function AgeGateData() {}
  Object.defineProperty(AgeGateData.prototype, "isAgeGateActive", {
    get: function () {
      return this._isAgeGateActive;
    },
    set: function (e) {
      this._isAgeGateActive = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeGateData.prototype, "validationSucceeded", {
    get: function () {
      return this._validationSucceeded;
    },
    set: function (e) {
      this._validationSucceeded = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AgeGateData.prototype, "autoLoginTryFailed", {
    get: function () {
      return this._autoLoginTryFailed;
    },
    set: function (e) {
      this._autoLoginTryFailed = e;
    },
    enumerable: true,
    configurable: true
  });
  return AgeGateData;
}();
exports.AgeGateData = i;