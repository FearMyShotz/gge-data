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
var u = require("./684.js");
var d = function (e) {
  function GemBonusVO() {
    var t = this;
    t._triggerChance = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).addEffectSource(u.EffectSourceEnum.EQUIPMENT);
    return t;
  }
  n.__extends(GemBonusVO, e);
  GemBonusVO.prototype.parseGemBonusFromValueString = function (t, i, n = 100) {
    this._triggerChance = n;
    return e.prototype.parseFromValueString.call(this, t, i);
  };
  GemBonusVO.prototype.parseGemBonusFromValueArray = function (t, i, n = 100) {
    this._triggerChance = n;
    return e.prototype.parseFromValueArray.call(this, t, i);
  };
  GemBonusVO.prototype.clone = function () {
    return new GemBonusVO().parseGemBonusFromValueArray(this._effect, this._effectValue.rawValues, this.triggerChance);
  };
  Object.defineProperty(GemBonusVO.prototype, "descriptionText", {
    get: function () {
      return (this.triggerChance == 100 ? s.Localize.text(l.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_" + this.effect.name), this.effectValue.textReplacements) : s.Localize.text("gem_effect_description_" + this.gemTypeString, [this.triggerChance].concat(this._effectValue.textReplacements))) + this.decriptionSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BonusVO.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GemBonusVO.prototype, "triggeredEffectText", {
    get: function () {
      if (this.triggerChance == 100) {
        return s.Localize.text(l.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_" + this.effect.name), this.effectValue.textReplacements);
      } else {
        return s.Localize.text("dialog_battleLogDetail_gemEffekt_" + this.gemTypeString, this._effectValue.textReplacements);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GemBonusVO.prototype, "triggerChance", {
    get: function () {
      return this._triggerChance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GemBonusVO.prototype, "gemTypeString", {
    get: function () {
      return "gem" + this.effect.name.charAt(0).toUpperCase() + this.effect.name.substr(1);
    },
    enumerable: true,
    configurable: true
  });
  GemBonusVO.prototype.lordEffectText = function () {
    var e = r.int(this.maxValueStrength);
    if (e < Number.MAX_VALUE) {
      return s.Localize.text(o.GenericTextIds.VALUE_SIMPLE_COMP, [this.descriptionText, s.Localize.text(this.effect.effectType.type.simpleValueTextID == o.GenericTextIds.VALUE_NOMINAL_ADD ? "equipment_bonus_maximum_noPercentage" : "equipment_bonus_maximum"[e])]);
    } else {
      return this.descriptionText;
    }
  };
  return GemBonusVO;
}(c.BonusVO);
exports.GemBonusVO = d;
a.classImplementsInterfaces(d, "ILordEffectText");