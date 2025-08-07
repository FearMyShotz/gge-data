Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleEquipmentSlotVO(e) {
    this._isFree = true;
    this._slotType = e;
  }
  Object.defineProperty(CastleEquipmentSlotVO.prototype, "equipmentVO", {
    get: function () {
      return this._equipmentVO;
    },
    set: function (e) {
      this._equipmentVO = e;
      this._isFree = !this._equipmentVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSlotVO.prototype, "isFree", {
    get: function () {
      return this._isFree;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSlotVO.prototype, "slotType", {
    get: function () {
      return this._slotType;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEquipmentSlotVO;
}();
exports.CastleEquipmentSlotVO = n;