Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function PercentageBoosterVO(e, t) {
    this._percentage = 0;
    this._duration = 0;
    this._percentage = e;
    this._duration = t;
  }
  PercentageBoosterVO.prototype.clone = function () {
    return new PercentageBoosterVO(this.percentage, this.duration);
  };
  Object.defineProperty(PercentageBoosterVO.prototype, "percentage", {
    get: function () {
      return this._percentage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PercentageBoosterVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    enumerable: true,
    configurable: true
  });
  return PercentageBoosterVO;
}();
exports.PercentageBoosterVO = n;