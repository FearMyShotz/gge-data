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
  function GeneralBonusVO() {
    return e.call(this) || this;
  }
  n.__extends(GeneralBonusVO, e);
  GeneralBonusVO.prototype.clone = function () {
    return new GeneralBonusVO().parseFromValueArray(this.effect, this._effectValue.rawValues);
  };
  GeneralBonusVO.prototype.lordEffectText = function () {
    var e = r.int(this.maxValueStrength);
    if (e < Number.MAX_VALUE) {
      return s.Localize.text(o.GenericTextIds.VALUE_SIMPLE_COMP, [this.descriptionText, s.Localize.text(this.effect.effectType.type.simpleValueTextID == o.GenericTextIds.VALUE_NOMINAL_ADD ? "equipment_bonus_maximum_noPercentage" : "equipment_bonus_maximum"[e])]);
    } else {
      return this.descriptionText;
    }
  };
  Object.defineProperty(GeneralBonusVO.prototype, "descriptionText", {
    get: function () {
      return s.Localize.text(l.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_" + this.effect.name), this.effectValue.textReplacements) + this.decriptionSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BonusVO.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return GeneralBonusVO;
}(c.BonusVO);
exports.GeneralBonusVO = u;
a.classImplementsInterfaces(u, "ILordEffectText");