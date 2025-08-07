Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AdvisorActivationInfoVO(e, t, i) {
    this._isAdvisorActive = e;
    this._isAdvisorActivationFree = t;
    this._advisorActivationCurrencyId = i;
  }
  Object.defineProperty(AdvisorActivationInfoVO.prototype, "isAdvisorActive", {
    get: function () {
      return this._isAdvisorActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorActivationInfoVO.prototype, "isAdvisorActivationFree", {
    get: function () {
      return this._isAdvisorActivationFree;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvisorActivationInfoVO.prototype, "advisorActivationCurrencyId", {
    get: function () {
      return this._advisorActivationCurrencyId;
    },
    enumerable: true,
    configurable: true
  });
  return AdvisorActivationInfoVO;
}();
exports.AdvisorActivationInfoVO = n;