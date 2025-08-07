Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function PremiumSmsVO() {}
  PremiumSmsVO.prototype.loadFromParamObject = function (e) {
    this._callNumber = e.CN;
    this._currency = e.CR;
    this._premiumSmsCode = e.CD;
    this._price = e.P;
  };
  Object.defineProperty(PremiumSmsVO.prototype, "callNumber", {
    get: function () {
      return this._callNumber;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumSmsVO.prototype, "currency", {
    get: function () {
      return this._currency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumSmsVO.prototype, "premiumSmsCode", {
    get: function () {
      return this._premiumSmsCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumSmsVO.prototype, "price", {
    get: function () {
      return this._price;
    },
    enumerable: true,
    configurable: true
  });
  return PremiumSmsVO;
}();
exports.PremiumSmsVO = n;