Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./44.js");
var l = require("./4.js");
var c = require("./165.js");
var u = require("./682.js");
var d = function (e) {
  function EquipmentBonusVO() {
    var t = this;
    t._id = 0;
    t._overridesBonusCap = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).addEffectSource(u.EffectSourceEnum.EQUIPMENT);
    return t;
  }
  n.__extends(EquipmentBonusVO, e);
  EquipmentBonusVO.prototype.parseEquipmentFromValueString = function (t, i) {
    this.parseBasic(t);
    return e.prototype.parseFromValueString.call(this, l.CastleModel.equipData.equipmentXml.getEquippableEffectByEquipmentEffect(this._id), i);
  };
  EquipmentBonusVO.prototype.parseEquipmentFromValueArray = function (t, i) {
    this.parseBasic(t);
    return e.prototype.parseFromValueArray.call(this, l.CastleModel.equipData.equipmentXml.getEquippableEffectByEquipmentEffect(this._id), i);
  };
  EquipmentBonusVO.prototype.parseBasic = function (e) {
    this._id = e;
    if (l.CastleModel.equipData.equipmentXml.equipmentEffects.get(this._id) != null) {
      this._overridesBonusCap = l.CastleModel.equipData.equipmentXml.getEquipmentEffect(this._id).ignoreCap;
    }
  };
  EquipmentBonusVO.prototype.clone = function () {
    return new EquipmentBonusVO().parseEquipmentFromValueArray(this._id, this._effectValue.rawValues);
  };
  Object.defineProperty(EquipmentBonusVO.prototype, "descriptionText", {
    get: function () {
      return s.Localize.text(r.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_" + this.effect.name), this.effectValue.textReplacements) + this.decriptionSuffix;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BonusVO.prototype, "descriptionText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentBonusVO.prototype, "descriptionTextShort", {
    get: function () {
      return s.Localize.text(r.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_short_" + this.effect.name), this.effectValue.textReplacements);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentBonusVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentBonusVO.prototype, "overridesBonusCap", {
    get: function () {
      return this._overridesBonusCap;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentBonusVO.prototype.lordEffectText = function () {
    var e = this.descriptionText;
    var t = this.maxValueStrength;
    if (t < Number.MAX_VALUE && !this._overridesBonusCap) {
      return s.Localize.text(o.GenericTextIds.VALUE_SIMPLE_COMP, [e, s.Localize.text(this.effect.effectType.type.simpleValueTextID == o.GenericTextIds.VALUE_NOMINAL_ADD ? "equipment_bonus_maximum_noPercentage" : "equipment_bonus_maximum", [t])]);
    } else {
      return this.descriptionText;
    }
  };
  Object.defineProperty(EquipmentBonusVO.prototype, "maxValueStrength", {
    get: function () {
      if (this.overridesBonusCap) {
        return Number.MAX_VALUE;
      } else {
        return l.CastleModel.effectsData.getEffectCap(this.effect.capId).maxTotalBonus;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BonusVO.prototype, "maxValueStrength").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentBonusVO.prototype, "capID", {
    get: function () {
      if (this._overridesBonusCap) {
        return -1;
      } else {
        return this.effect.capId;
      }
    },
    enumerable: true,
    configurable: true
  });
  return EquipmentBonusVO;
}(c.BonusVO);
exports.EquipmentBonusVO = d;
a.classImplementsInterfaces(d, "ILordEffectText");