Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./511.js");
var r = function (e) {
  function EffectIconUnitVO(t, i) {
    var n = this;
    n.effectValue = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this)._effectType = t;
    n.effectValue = i;
    return n;
  }
  n.__extends(EffectIconUnitVO, e);
  EffectIconUnitVO.prototype.getNameString = function () {
    if (this.effectValue < 0) {
      return this._effectType.tooltipTextId + "_reduction";
    } else {
      return this._effectType.tooltipTextId;
    }
  };
  EffectIconUnitVO.prototype.getVisualClassName = function () {
    return a.getQualifiedClassName(this._effectType.iconClass);
  };
  Object.defineProperty(EffectIconUnitVO.prototype, "inventoryAmount", {
    get: function () {
      return this.effectValue;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicUnitVO.prototype, "inventoryAmount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectIconUnitVO.prototype, "sortOrder", {
    get: function () {
      return this._effectType.sortOrder;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.BasicUnitVO.prototype, "sortOrder").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectIconUnitVO.prototype, "valueIsPercentage", {
    get: function () {
      return !this._effectType.hasAbsoluteBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectIconUnitVO.prototype, "effectType", {
    get: function () {
      return this._effectType;
    },
    enumerable: true,
    configurable: true
  });
  return EffectIconUnitVO;
}(s.BasicUnitVO);
exports.EffectIconUnitVO = r;
o.classImplementsInterfaces(r, "IInventoryVO", "IShopVO", "ICostVO");