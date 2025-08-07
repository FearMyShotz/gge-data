Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function SellBuildingVO(e) {
    this._costs = e;
  }
  Object.defineProperty(SellBuildingVO.prototype, "list", {
    get: function () {
      return this._costs.list;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SellBuildingVO.prototype, "hasCosts", {
    get: function () {
      return this._costs && this._costs.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  return SellBuildingVO;
}();
exports.SellBuildingVO = n;