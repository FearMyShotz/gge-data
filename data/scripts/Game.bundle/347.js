Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./22.js");
var u = require("./4.js");
var d = require("./33.js");
var p = require("./511.js");
var h = function (e) {
  function SoldierUnitVO() {
    var t = this;
    t._meleeAttack = 0;
    t.meleeDefence = 0;
    t._rangeAttack = 0;
    t.rangeDefence = 0;
    t._healingCostC1 = 0;
    t._healingCostC2 = 0;
    t._healingSkipCost = 0;
    t._reviveAllCostC2 = 0;
    t._basicHealingTime = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(SoldierUnitVO, e);
  SoldierUnitVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._foodSupply = parseInt(c.CastleXMLUtils.getValueOrDefault("foodSupply", t, "0"));
    this._meadSupply = parseInt(c.CastleXMLUtils.getValueOrDefault("meadSupply", t, "0"));
    this._beefSupply = parseInt(c.CastleXMLUtils.getValueOrDefault("beefSupply", t, "0"));
    this.meleeDefence = parseInt(c.CastleXMLUtils.getValueOrDefault("meleeDefence", t, "0"));
    this._meleeAttack = parseInt(c.CastleXMLUtils.getValueOrDefault("meleeAttack", t, "0"));
    this._rangeAttack = parseInt(c.CastleXMLUtils.getValueOrDefault("rangeAttack", t, "0"));
    this.rangeDefence = parseInt(c.CastleXMLUtils.getValueOrDefault("rangeDefence", t, "0"));
    this._healingCostC1 = parseInt(c.CastleXMLUtils.getValueOrDefault("healingCostC1", t, "0"));
    this._healingCostC2 = parseInt(c.CastleXMLUtils.getValueOrDefault("healingCostC2", t, "0"));
    this._reviveAllCostC2 = parseInt(c.CastleXMLUtils.getValueOrDefault("reviveAllCostC2", t, "0"));
    this._healingSkipCost = parseInt(c.CastleXMLUtils.getValueOrDefault("skipCostC2", t, "0"));
    this._basicHealingTime = parseInt(c.CastleXMLUtils.getValueOrDefault("healingTime", t, "0"));
    this.role = c.CastleXMLUtils.getValueOrDefault("role", t, "", true);
  };
  Object.defineProperty(SoldierUnitVO.prototype, "healingCostC1", {
    get: function () {
      var e = 1 - g.CastleTitleSystemHelper.returnTitleEffectValue(d.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL).strength / 100;
      return u.CastleModel.costsData.getFinalCostsC1(this._healingCostC1) * e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "healingCostC2", {
    get: function () {
      return this._healingCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "unitType", {
    get: function () {
      if (this.role == SoldierUnitVO.ROLE_MELEE) {
        return l.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE;
      } else if (this.role == SoldierUnitVO.ROLE_RANGE) {
        return l.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE;
      } else {
        return "";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.BasicUnitVO.prototype, "unitType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "unitCategory", {
    get: function () {
      return l.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.BasicUnitVO.prototype, "unitCategory").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SoldierUnitVO.prototype.isToolForSlotType = function (e) {
    return e == C.ToolUnitVO.SLOTTYPE_SOLDIER;
  };
  Object.defineProperty(SoldierUnitVO.prototype, "isDismissable", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.BasicUnitVO.prototype, "isDismissable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "isAvailableInPeaceMode", {
    get: function () {
      return this.fightType == p.BasicUnitVO.FIGHTTYPE_DEF || this.isAuxiliary;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.BasicUnitVO.prototype, "isAvailableInPeaceMode").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "reviveAllCostC2", {
    get: function () {
      return this._reviveAllCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "healingSkipCost", {
    get: function () {
      return this._healingSkipCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "basicHealingTime", {
    get: function () {
      return this._basicHealingTime;
    },
    enumerable: true,
    configurable: true
  });
  SoldierUnitVO.prototype.getBoostedHealTimeForAmount = function (e) {
    var t;
    var i = this._healingCostC2 > 0;
    var n = 0;
    var o = 0;
    var a = 0;
    var s = u.CastleModel.areaData.activeArea;
    n = r.int(u.CastleModel.researchData.getResearchEffectValue(d.EffectTypeEnum.EFFECT_TYPE_PREMIUM_UNIT_HEALING_BOOST, s.areaInfo.areaType, s.spaceId, this.wodId).strength);
    if (u.CastleModel.allianceData.myAllianceVO) {
      o = r.int(u.CastleModel.allianceData.myAllianceVO.getTotalAllianceBuffEffectValue(d.EffectTypeEnum.EFFECT_TYPE_PREMIUM_UNIT_HEALING_BOOST, s.areaInfo.areaType, s.spaceId, this.wodId).strength);
    }
    t = n + o + r.int(this.isSubscriptionHealingPremiumActive ? u.CastleModel.subscriptionData.getEffectValue(d.EffectTypeEnum.EFFECT_TYPE_PREMIUM_UNIT_HEALING_BOOST) : 0);
    if (!i) {
      n = r.int(u.CastleModel.researchData.getResearchEffectValue(d.EffectTypeEnum.EFFECT_TYPE_NON_PREMIUM_UNIT_HEALING_BOOST, u.CastleModel.areaData.activeAreaInfo.areaType, u.CastleModel.areaData.activeArea.spaceId, this.wodId).strength);
      if (u.CastleModel.allianceData.myAllianceVO) {
        o = r.int(u.CastleModel.allianceData.myAllianceVO.getTotalAllianceBuffEffectValue(d.EffectTypeEnum.EFFECT_TYPE_NON_PREMIUM_UNIT_HEALING_BOOST, s.areaInfo.areaType, s.spaceId, this.wodId).strength);
      }
      a = n + o + r.int(this.isSubscriptionHealingNonPremiumActive ? u.CastleModel.subscriptionData.getEffectValue(d.EffectTypeEnum.EFFECT_TYPE_NON_PREMIUM_UNIT_HEALING_BOOST) : 0);
    }
    var c = r.int(u.CastleModel.militaryData.getBuildingProductionSpeed(l.ClientConstCastle.UNIT_BUILDINGTYPE_HOSPITAL) + Math.max(t, a));
    return Math.round(this.basicHealingTime * e / (c / 100));
  };
  Object.defineProperty(SoldierUnitVO.prototype, "isSubscriptionHealingPremiumActive", {
    get: function () {
      return u.CastleModel.subscriptionData.isEffectTypeActive(d.EffectTypeEnum.EFFECT_TYPE_PREMIUM_UNIT_HEALING_BOOST);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "isSubscriptionHealingNonPremiumActive", {
    get: function () {
      return u.CastleModel.subscriptionData.isEffectTypeActive(d.EffectTypeEnum.EFFECT_TYPE_NON_PREMIUM_UNIT_HEALING_BOOST);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "hasPremiumBoostedTime", {
    get: function () {
      return u.CastleModel.boostData.festivalVO.remainingTimeInSeconds > 0 || u.CastleModel.boostData.getBoosterByID(a.BoosterConst.INSTRUCTOR).remainingTimeInSeconds > 0 || u.CastleModel.userData.isInPeaceMode;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.BasicUnitVO.prototype, "hasPremiumBoostedTime").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SoldierUnitVO.prototype.getBoostedRecruitmentTime = function (e = 1) {
    var t = u.CastleModel.areaData.activeArea ? u.CastleModel.areaData.activeArea.spaceId : -1;
    var i = u.CastleModel.areaData.activeArea ? u.CastleModel.areaData.activeArea.areaInfo.areaType : -1;
    var n = r.int(g.CastleTitleSystemHelper.returnTitleEffectValue(d.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST, this.wodId, i, t).getValueforWodId(this._wodId));
    var o = r.int(u.CastleModel.globalEffectData.getBonusByEffectType(d.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_SPEED_BOOST_ALL, i, t));
    var a = r.int(this.getBaseRecruitmentTime());
    if (this.isRecruitTimeSubscriptionBuffed) {
      a = r.int(a * (1 + u.CastleModel.subscriptionData.getEffectValue(d.EffectTypeEnum.EFFECT_TYPE_BASE_RECRUITMENT_TIME_BOOST, i, t) / 100));
    }
    var l = u.CastleModel.militaryData.getBuildingProductionSpeed(this.unitBuildingType) + n + o;
    var c = Math.round(a / (l / 100));
    var p = r.int(this.isAuxiliary ? s.ProductionPackageConst.MIN_RECRUITMENT_TIME_PER_UNIT_IN_FACTION_KINGDOM : s.ProductionPackageConst.MIN_RECRUITMENT_TIME_PER_UNIT);
    if (this.isLowlevelBoosted) {
      p = 0;
    }
    var h = r.int(this.getPremiumBoostedTime(l, a, e, c, p));
    if (h >= e * p || this.isLowlevelBoosted) {
      return h;
    } else {
      return e * p;
    }
  };
  Object.defineProperty(SoldierUnitVO.prototype, "isRecruitTimeSubscriptionBuffed", {
    get: function () {
      var e = u.CastleModel.areaData.activeArea ? u.CastleModel.areaData.activeArea.spaceId : -1;
      var t = u.CastleModel.areaData.activeArea ? u.CastleModel.areaData.activeArea.areaInfo.areaType : -1;
      return u.CastleModel.subscriptionData.getEffectValue(d.EffectTypeEnum.EFFECT_TYPE_BASE_RECRUITMENT_TIME_BOOST, t, e) < 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.BasicUnitVO.prototype, "isRecruitTimeSubscriptionBuffed").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "buffedMeleeAttack", {
    get: function () {
      var e = r.int(u.CastleModel.globalEffectData.getBonusByEffectType(d.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT, -1, -1, this.wodId));
      if (this._meleeAttack > 0) {
        return this._meleeAttack + e;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "buffedRangeAttack", {
    get: function () {
      var e = r.int(u.CastleModel.globalEffectData.getBonusByEffectType(d.EffectTypeEnum.EFFECT_TYPE_ATTACK_BONUS_UNIT, -1, -1, this.wodId));
      if (this._rangeAttack > 0) {
        return this._rangeAttack + e;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "meleeAttack", {
    get: function () {
      return this._meleeAttack;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SoldierUnitVO.prototype, "rangeAttack", {
    get: function () {
      return this._rangeAttack;
    },
    enumerable: true,
    configurable: true
  });
  SoldierUnitVO.ROLE_MELEE = "melee";
  SoldierUnitVO.ROLE_RANGE = "ranged";
  return SoldierUnitVO;
}(p.BasicUnitVO);
exports.SoldierUnitVO = h;
var g = require("./117.js");
var C = require("./181.js");
o.classImplementsInterfaces(h, "IInventoryVO", "IShopVO", "ICostVO");