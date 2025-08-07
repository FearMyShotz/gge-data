Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./55.js");
var s = require("./12.js");
var r = require("./45.js");
var l = require("./855.js");
var c = require("./2.js");
var u = function (e) {
  function EffectValueCurrencyBoost() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EffectValueCurrencyBoost, e);
  EffectValueCurrencyBoost.prototype.parseFromValueArray = function (e) {
    this._wodIdToValueDict = new Map();
    if (e != null) {
      if (Array.isArray(e[l.EffectValueWodID.WOD_ID_POSITION])) {
        this._wodIdToValueDict.set(parseInt(e[0][l.EffectValueWodID.WOD_ID_POSITION]), parseInt(e[0][l.EffectValueWodID.VALUE_POSITION]));
      } else {
        this._wodIdToValueDict.set(parseInt(e[l.EffectValueWodID.WOD_ID_POSITION]), parseInt(e[l.EffectValueWodID.VALUE_POSITION]));
      }
      this._firstWodID = parseInt(e[l.EffectValueWodID.WOD_ID_POSITION]);
    }
    return this;
  };
  Object.defineProperty(EffectValueCurrencyBoost.prototype, "textReplacements", {
    get: function () {
      var e;
      try {
        e = o.Localize.text(r.CollectableHelper.createVO(s.CollectableEnum.GENERIC_CURRENCY, 0, this.firstWodID).getNameTextId());
      } catch (e) {
        throw new Error(a.ClientConstUtils.map2String(this._wodIdToValueDict) + "\n" + e.toString());
      }
      return [c.MathBase.round(Math.abs(this.getValueforWodId(this.firstWodID)), 1), e];
    },
    enumerable: true,
    configurable: true
  });
  return EffectValueCurrencyBoost;
}(l.EffectValueWodID);
exports.EffectValueCurrencyBoost = u;