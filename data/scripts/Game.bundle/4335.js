Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./22.js");
var a = require("./164.js");
var s = require("./4.js");
var r = require("./33.js");
var l = require("./688.js");
var c = require("./4336.js");
var u = function (e) {
  function GeneralSkillVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GeneralSkillVO, e);
  GeneralSkillVO.prototype.parseXML = function (e) {
    this._id = parseInt(o.CastleXMLUtils.getValueOrDefault("skillID", e, "0"));
    this._followingSkillID = parseInt(o.CastleXMLUtils.getValueOrDefault("followingSkillID", e, "0"));
    this._generalID = parseInt(o.CastleXMLUtils.getValueOrDefault("generalID", e, "0"));
    this._tier = parseInt(o.CastleXMLUtils.getValueOrDefault("tier", e, "0"));
    this._skillGroupID = parseInt(o.CastleXMLUtils.getValueOrDefault("skillGroupID", e, "0"));
    this._level = parseInt(o.CastleXMLUtils.getValueOrDefault("level", e, "0"));
    this._totalCostSkillPoints = parseInt(o.CastleXMLUtils.getValueOrDefault("totalCostSkillPoints", e, "0"));
    this._costSkillPoints = parseInt(o.CastleXMLUtils.getValueOrDefault("costSkillPoints", e, "0"));
    this._name = o.CastleXMLUtils.getValueOrDefault("name", e, "");
    var t = o.CastleXMLUtils.getValueOrDefault("effects", e, "");
    if (t != "") {
      for (var i = 0, n = t.split(","); i < n.length; i++) {
        var a = n[i];
        if (a.length > 0) {
          var r = a.split("&");
          var l = s.CastleModel.effectsData.getEffectByID(parseInt(r[0]));
          var u = new c.GeneralBonusVO().parseFromValueString(l, r[1]);
          this._boni.push(u);
        }
      }
    }
  };
  Object.defineProperty(GeneralSkillVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "generalID", {
    get: function () {
      return this._generalID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "tier", {
    get: function () {
      return this._tier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "skillGroupID", {
    get: function () {
      return this._skillGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "followingSkillID", {
    get: function () {
      return this._followingSkillID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "totalCostSkillPoints", {
    get: function () {
      return this._totalCostSkillPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "costSkillPoints", {
    get: function () {
      return this._costSkillPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "isMaxLevel", {
    get: function () {
      return this._followingSkillID == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "nextLevelSkill", {
    get: function () {
      if (this.followingSkillID) {
        return s.CastleModel.generalsData.getSkillById(this.followingSkillID);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "nameString", {
    get: function () {
      if (this.isAbilitySkill) {
        var e = this.getEffectValueByType(r.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY).rawValues[0];
        return a.GeneralsHelper.getLocalizedTitleForAbility(s.CastleModel.generalsData.getAbilityByID(e).abilityGroupID);
      }
      return "generals_skill_name_" + this._name;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSkillVO.prototype.getEffectText = function () {
    var e;
    for (var t = 0, i = this.boni; t < i.length; t++) {
      var n = i[t];
      e = e ? e + "\n" : "";
      e += n.descriptionText;
    }
    return e;
  };
  GeneralSkillVO.prototype.isImplemented = function () {
    if (this.isAbilitySkill) {
      var e = this.getEffectValueByType(r.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY).rawValues[0];
      return !!s.CastleModel.generalsData.getAbilityByID(e);
    }
    return true;
  };
  Object.defineProperty(GeneralSkillVO.prototype, "isAbilitySkill", {
    get: function () {
      return this.hasOneOrMoreEffectTypes([r.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "typeString", {
    get: function () {
      if (this.isAbilitySkill) {
        return "dialog_generals_skill_unlocksSkillWithSlotInfo_tooltip";
      } else {
        return "dialog_generals_skill_permanentSkill_tooltip";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "slotNumber", {
    get: function () {
      var e = this.getEffectValueByType(r.EffectTypeEnum.EFFECT_TYPE_UNLOCK_ABILITY).rawValues[0];
      var t = s.CastleModel.generalsData.getAbilityByID(e);
      if (!t) {
        return -1;
      }
      var i = s.CastleModel.generalsData.playerGenerals.get(this.generalID);
      for (var n = s.CastleModel.generalsData.getGeneralSlotsByIDs(i.attackSlots), o = 0; o < n.length; o++) {
        if (n[o].abilityGroupIDs.indexOf(t.abilityGroupID) >= 0) {
          return o + 1;
        }
      }
      n = s.CastleModel.generalsData.getGeneralSlotsByIDs(i.defenseSlots);
      o = 0;
      for (; o < n.length; o++) {
        if (n[o].abilityGroupIDs.indexOf(t.abilityGroupID) >= 0) {
          return o + 1;
        }
      }
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSkillVO.prototype, "ignoreCap", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  return GeneralSkillVO;
}(l.EffectsHandlerVO);
exports.GeneralSkillVO = u;