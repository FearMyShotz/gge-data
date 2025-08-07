Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function SkipDiscountBoosterVO(e, t) {
    this._discount = 0;
    this._duration = 0;
    this._discount = e;
    this._duration = t;
  }
  SkipDiscountBoosterVO.prototype.clone = function () {
    return new SkipDiscountBoosterVO(this.discount, this.duration);
  };
  Object.defineProperty(SkipDiscountBoosterVO.prototype, "discount", {
    get: function () {
      return this._discount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SkipDiscountBoosterVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  return SkipDiscountBoosterVO;
}();
exports.SkipDiscountBoosterVO = n;