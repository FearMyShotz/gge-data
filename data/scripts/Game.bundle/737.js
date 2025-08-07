Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleColumnSortingVO(e, t) {
    this._isInAscendingOrder = false;
    this._sortingTrigger = e;
    this._comparer = t;
    this._isInAscendingOrder = true;
    this._sortingTrigger.mouseChildren = false;
  }
  Object.defineProperty(CastleColumnSortingVO.prototype, "sortingTrigger", {
    get: function () {
      return this._sortingTrigger;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleColumnSortingVO.prototype, "comparer", {
    get: function () {
      return this._comparer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleColumnSortingVO.prototype, "isInAscendingOrder", {
    get: function () {
      return this._isInAscendingOrder;
    },
    set: function (e) {
      this._isInAscendingOrder = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleColumnSortingVO;
}();
exports.CastleColumnSortingVO = n;