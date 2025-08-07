Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./44.js");
var c = require("./4.js");
var u = require("./165.js");
var d = require("./682.js");
var p = function (e) {
  function RelicBonusVO() {
    var t = this;
    t._power = NaN;
    t._predefinedMinRating = -1;
    t._predefinedMaxRating = -1;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).addEffectSource(d.EffectSourceEnum.EQUIPMENT);
    return t;
  }
  n.__extends(RelicBonusVO, e);
  RelicBonusVO.prototype.parseRelicFromValueArray = function (e) {
    this._relicEffectVO = c.CastleModel.equipData.relicXml.getRelicEffect(e[0]);
    this._power = e[1];
    this._effect = c.CastleModel.effectsData.getEffectByID(this.relicEffectVO.effectId);
    this._effectValue = new this.effect.effectType.valueClass();
    this._effectValue.parseFromValueString(e[2].toString());
  };
  RelicBonusVO.prototype.getDescriptionTextId = function () {
    return l.SpecialServerHelper.checkTextIDForSkinText("relicequip_effect_description_" + this.effect.name);
  };
  RelicBonusVO.prototype.getUndefinedDescriptionText = function () {
    return r.Localize.text(this.getDescriptionTextId() + "_undefined", [this.effectValue.textReplacements.length > 1 ? this.effectValue.textReplacements[1] : this.effectValue.textReplacements[0]]);
  };
  RelicBonusVO.prototype.getUndefinedValueText = function () {
    var e = this._relicEffectVO.maxValue;
    var t = this._relicEffectVO.minValue;
    if (this._predefinedMaxRating >= 0 && this._predefinedMinRating >= 0) {
      var i = this._relicEffectVO.maxValue - this._relicEffectVO.minValue;
      t = a.MathBase.round(this._relicEffectVO.minValue + i * (this._predefinedMinRating / 100), 1);
      e = a.MathBase.round(this._relicEffectVO.minValue + i * (this._predefinedMaxRating / 100), 1);
    }
    if (t == e) {
      return r.Localize.text("relicequip_dialog_" + this._relicEffectVO.valueTextType + "_value_single", [t]);
    } else {
      return r.Localize.text("relicequip_dialog_" + this._relicEffectVO.valueTextType + "_value", [t, e]);
    }
  };
  Object.defineProperty(RelicBonusVO.prototype, "descriptionText", {
    get: function () {
      return r.Localize.text(this.getDescriptionTextId(), this.effectValue.textReplacements) + this.decriptionSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.BonusVO.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RelicBonusVO.prototype.clone = function () {
    var e = new RelicBonusVO();
    e.parseRelicFromValueArray([this._relicEffectVO ? this._relicEffectVO.id : -1, this._power, ""]);
    e._effectValue.parseFromValueArray(this._effectValue.rawValues);
    return e;
  };
  RelicBonusVO.prototype.lordEffectText = function () {
    var e = this.maxValueStrength;
    if (e < Number.MAX_VALUE) {
      return r.Localize.text(o.GenericTextIds.VALUE_SIMPLE_COMP, [this.descriptionText, r.Localize.text(this.effect.effectType.type.simpleValueTextID == o.GenericTextIds.VALUE_NOMINAL_ADD ? "equipment_bonus_maximum_noPercentage" : "equipment_bonus_maximum", [e])]);
    } else {
      return this.descriptionText;
    }
  };
  Object.defineProperty(RelicBonusVO.prototype, "relicEffectVO", {
    get: function () {
      return this._relicEffectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicBonusVO.prototype, "power", {
    get: function () {
      return this._power;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicBonusVO.prototype, "predefinedMinRating", {
    set: function (e) {
      this._predefinedMinRating = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicBonusVO.prototype, "predefinedMaxRating", {
    set: function (e) {
      this._predefinedMaxRating = e;
    },
    enumerable: true,
    configurable: true
  });
  return RelicBonusVO;
}(u.BonusVO);
exports.RelicBonusVO = p;
s.classImplementsInterfaces(p, "ILordEffectText");