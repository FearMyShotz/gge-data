Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./44.js");
var c = require("./165.js");
var u = function (e) {
  function RawLordEffectBonusVO() {
    return e.call(this) || this;
  }
  n.__extends(RawLordEffectBonusVO, e);
  RawLordEffectBonusVO.prototype.clone = function () {
    var e = new RawLordEffectBonusVO().parseFromValueArray(this.effect, this._effectValue.rawValues);
    e._effectSources = this._effectSources;
    return e;
  };
  RawLordEffectBonusVO.prototype.lordEffectText = function () {
    var e = r.int(this.maxValueStrength);
    if (e < Number.MAX_VALUE) {
      return s.Localize.text(o.GenericTextIds.VALUE_SIMPLE_COMP, [this.descriptionText, s.Localize.text(this.effect.effectType.type.simpleValueTextID == o.GenericTextIds.VALUE_NOMINAL_ADD ? "equipment_bonus_maximum_noPercentage" : "equipment_bonus_maximum", [e])]);
    } else {
      return this.descriptionText;
    }
  };
  Object.defineProperty(RawLordEffectBonusVO.prototype, "descriptionText", {
    get: function () {
      try {
        if (this.effect.name.indexOf("relic") > -1) {
          return s.Localize.text(l.SpecialServerHelper.checkTextIDForSkinText("relicequip_effect_description_" + this.effect.name), this.effectValue.textReplacements) + this.decriptionSuffix;
        } else {
          return s.Localize.text(l.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_" + this.effect.name), this.effectValue.textReplacements) + this.decriptionSuffix;
        }
      } catch (e) {
        throw new Error("EffectID:" + this.effect.effectID + "\n" + e.toString());
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BonusVO.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return RawLordEffectBonusVO;
}(c.BonusVO);
exports.RawLordEffectBonusVO = u;
a.classImplementsInterfaces(u, "ILordEffectText");