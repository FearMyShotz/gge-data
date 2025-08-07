Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = function (e) {
  function CastleAdvancedTroopSelectionScrollItemVO(t, i, n, o, s, l) {
    var c = this;
    c.selectedAmount = 0;
    c.freeUnitSpace = 0;
    c.fightDialogType = a.int(r.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK);
    CONSTRUCTOR_HACK;
    (c = e.call(this) || this).unitVO = t;
    c.selectedAmount = i;
    c.sourceArea = n;
    c.fightDialogType = o;
    c.possibleSlots = s;
    c.freeUnitSpace = l;
    return c;
  }
  n.__extends(CastleAdvancedTroopSelectionScrollItemVO, e);
  Object.defineProperty(CastleAdvancedTroopSelectionScrollItemVO.prototype, "maxAmount", {
    get: function () {
      return Math.min(this.freeUnitSpace + this.selectedAmount, this.unitVO.inventoryAmount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedTroopSelectionScrollItemVO.prototype, "maxToolWaveAmount", {
    get: function () {
      if (this.fightDialogType == r.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK) {
        return Math.min(this.maxAmount, this.unitVO.amountPerWave);
      } else {
        return this.maxAmount;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedTroopSelectionScrollItemVO.prototype, "isAdjustable", {
    get: function () {
      return this.possibleSlots.length > 0 && this.freeUnitSpace > 0 && this.unitVO.inventoryAmount > 0 || this.selectedAmount > 0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAdvancedTroopSelectionScrollItemVO;
}(o.ScrollItemVO);
exports.CastleAdvancedTroopSelectionScrollItemVO = s;
var r = require("./348.js");