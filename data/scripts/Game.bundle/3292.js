Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CraftingMaterialBagContentVO(e, t, i) {
    this._minValue = 0;
    this._maxValue = 0;
    this._minValue = e;
    this._maxValue = t;
    this._craftingMaterial = i;
  }
  Object.defineProperty(CraftingMaterialBagContentVO.prototype, "minValue", {
    get: function () {
      return this._minValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagContentVO.prototype, "maxValue", {
    get: function () {
      return this._maxValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingMaterialBagContentVO.prototype, "craftingMaterial", {
    get: function () {
      return this._craftingMaterial;
    },
    enumerable: true,
    configurable: true
  });
  return CraftingMaterialBagContentVO;
}();
exports.CraftingMaterialBagContentVO = n;