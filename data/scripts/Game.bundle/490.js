Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ConstructionItemSlotVO(e, t) {
    this._slotType = 0;
    this._index = 0;
    this._slotType = e;
    this._index = t;
  }
  Object.defineProperty(ConstructionItemSlotVO.prototype, "slotType", {
    get: function () {
      return this._slotType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemSlotVO.prototype, "index", {
    get: function () {
      return this._index;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemSlotVO.prototype.equals = function (e) {
    return !!e && this._slotType == e.slotType && this.index == e.index;
  };
  return ConstructionItemSlotVO;
}();
exports.ConstructionItemSlotVO = n;