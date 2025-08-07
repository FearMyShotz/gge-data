Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./39.js");
var _ = require("./22.js");
var m = require("./481.js");
var f = require("./4.js");
var O = require("./142.js");
var E = require("./97.js");
var y = require("./33.js");
var b = require("./110.js");
var D = require("./589.js");
var I = require("./2146.js");
var T = function (e) {
  function BasicUnitVO() {
    var t = this;
    t.fightType = 0;
    t._unitSpeed = 0;
    t._recruitmentTime = 0;
    t.costs = new L.CollectableList();
    t._kingdomTravellingCost = 0;
    t.buildingLevel = 0;
    t._foodSupply = 0;
    t._meadSupply = 0;
    t._beefSupply = 0;
    t._sortOrder = 0;
    t._inventoryAmount = 0;
    t._isAuxiliary = false;
    t.isResearchLocked = false;
    t.isPalaceLocked = false;
    t.lootValue = 0;
    t.isKamikaze = false;
    t.isHybrid = false;
    t.skipCost = 0;
    t.level = -1;
    t.upgradeWodID = -1;
    t.downgradeWodID = -1;
    t.isStronghold = false;
    t._tempServerCostC2 = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(BasicUnitVO, e);
  BasicUnitVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._unitSpeed = parseInt(_.CastleXMLUtils.getValueOrDefault("speed", t, "0"));
    this._recruitmentTime = parseInt(_.CastleXMLUtils.getValueOrDefault("recruitmentTime", t, "0"));
    this._lowLevelRecruitmenttimes = _.CastleXMLUtils.getValueOrDefault("lowLevelRecruitmentTime", t, "").split(",");
    if (this._lowLevelRecruitmenttimes[0] == "") {
      this._lowLevelRecruitmenttimes.shift();
    }
    this.costs = S.CollectableManager.parser.x2cList.createList(t, v.ClientConstCollectable.XML_PREFIX_COST);
    this._tempServerCostC2 = parseInt(_.CastleXMLUtils.getValueOrDefault("tempServerCostC2", t, this.costs.getAmountOrDefaultByType(A.CollectableEnum.C2).toString()));
    this._kingdomTravellingCost = parseInt(_.CastleXMLUtils.getValueOrDefault("kingdomTravellingCost", t, "0"));
    this.buildingLevel = parseInt(_.CastleXMLUtils.getValueOrDefault("buildingLevel", t, "0"));
    this.level = parseInt(_.CastleXMLUtils.getValueOrDefault("level", t, "-1"));
    this.upgradeWodID = parseInt(_.CastleXMLUtils.getValueOrDefault("upgradeWodID", t, "-1"));
    this.downgradeWodID = parseInt(_.CastleXMLUtils.getValueOrDefault("downgradeWodID", t, "-1"));
    this._sortOrder = t.sortOrder !== undefined ? parseFloat(t.sortOrder) : Number.MAX_VALUE;
    var i = _.CastleXMLUtils.getValueOrDefault("eventIDs", t, "");
    this._events = i ? i.split("+") : [];
    this.isResearchLocked = parseInt(_.CastleXMLUtils.getValueOrDefault("researchLocked", t, "0")) == 1;
    this.isPalaceLocked = parseInt(_.CastleXMLUtils.getValueOrDefault("palaceLockedByKID", t, "-1")) >= 0;
    this.lootValue = parseInt(_.CastleXMLUtils.getValueOrDefault("lootValue", t, "0"));
    this.fightType = parseInt(_.CastleXMLUtils.getValueOrDefault("fightType", t, "0"));
    this.cleavageOfCellsCosts = _.CastleXMLUtils.getValueOrDefault("cleavageOfCellsCost", t, "999,999").split(",");
    this.isKamikaze = g.int(_.CastleXMLUtils.getValueOrDefault("isKamikaze", t, "0")) == 1;
    this.isHybrid = parseInt(_.CastleXMLUtils.getValueOrDefault("hybrid", t, "0")) == 1;
    this._isAuxiliary = parseInt(_.CastleXMLUtils.getValueOrDefault("isAuxiliary", t, "0")) == 1;
    this.skipCost = parseInt(_.CastleXMLUtils.getValueOrDefault("skipCost", t, "0"));
    this._allowedToAttack = [];
    this._allowedToTravel = [];
    this.parseSpaceIdAreaTypeValues(_.CastleXMLUtils.getValueOrDefault("allowedToAttack", t, ""), this._allowedToAttack);
    this.parseSpaceIdAreaTypeValues(_.CastleXMLUtils.getValueOrDefault("allowedToTravel", t, ""), this._allowedToTravel);
    this._toolCategory = _.CastleXMLUtils.getStringAttribute("toolCategory", t).toLowerCase();
  };
  BasicUnitVO.prototype.parseSpaceIdAreaTypeValues = function (e, t) {
    var i;
    var n = e.split("#");
    if (n[0] == "") {
      n.shift();
    }
    for (var o = 0; o < n.length; ++o) {
      i = n[o].split("+");
      t.push(new I.SpaceIdAreaTypValuePair(parseInt(i[0]), parseInt(i[1])));
    }
  };
  BasicUnitVO.prototype.getNameString = function () {
    if (BasicUnitVO.showUnitWodID) {
      return this.type.toLowerCase() + "_name (" + this._wodId.toString() + ")";
    } else {
      return this.type.toLowerCase() + "_name";
    }
  };
  BasicUnitVO.prototype.getShortInfoString = function () {
    return this.type.toLowerCase() + "_short_info";
  };
  BasicUnitVO.prototype.getRequiredBuildingString = function () {
    if (this.unitBuildingType && this.unitBuildingType.length > 0) {
      var e = h.Localize.text(this.unitBuildingType.toString().toLocaleLowerCase() + "_name") + " " + h.Localize.text("building_level", [this.buildingLevel]);
      return h.Localize.text("needs", [e]);
    }
    return C.ClientConstTextIds.NOT_AVAILABLE;
  };
  Object.defineProperty(BasicUnitVO.prototype, "isAvailableByLevel", {
    get: function () {
      return this.buildingLevel <= f.CastleModel.militaryData.getBuildingLevel(this.unitBuildingType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isAvailableByPalace", {
    get: function () {
      return !this.isPalaceLocked || !!f.CastleModel.permanentCastleData.getCurrentCastle() && !!f.CastleModel.permanentCastleData.getCurrentCastle().unitsVO && !f.CastleModel.permanentCastleData.getCurrentCastle().unitsVO.isLocked(this);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isAvailable", {
    get: function () {
      return this.isAvailableByLevel && this.isAvailableByPalace;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isAvailableInPeaceMode", {
    get: function () {
      return this.fightType == BasicUnitVO.FIGHTTYPE_DEF;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.isToolForSlotType = function (e) {
    return false;
  };
  Object.defineProperty(BasicUnitVO.prototype, "unitCategory", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "unitBuildingType", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "unitType", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isAuxiliary", {
    get: function () {
      return this._isAuxiliary;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "inventoryAmount", {
    get: function () {
      return this._inventoryAmount;
    },
    set: function (e) {
      this._inventoryAmount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "basicCostC1", {
    get: function () {
      return this.costs.getAmountOrDefaultByType(A.CollectableEnum.C1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "kingdomTravellingCost", {
    get: function () {
      return this._kingdomTravellingCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "basicCostC2", {
    get: function () {
      if (this.isOnTempServer) {
        return this._tempServerCostC2;
      } else {
        return this.costs.getAmountOrDefaultByType(A.CollectableEnum.C2);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isOnTempServer", {
    get: function () {
      return a.EnvGlobalsHandler.globals.isOnTemporaryServer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "costC1", {
    get: function () {
      return this.calcCostWithFameReductionAndPremium(this.basicCostC1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "costC2", {
    get: function () {
      return f.CastleModel.costsData.getFinalCostsC2(this.basicCostC2);
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.getCost = function (e) {
    switch (e.type) {
      case A.CollectableEnum.C1:
        return this.costC1;
      case A.CollectableEnum.C2:
        return this.costC2;
    }
    return g.int(this.costs.getAmountOrDefaultByTypeVO(e));
  };
  BasicUnitVO.prototype.getCostTypes = function () {
    return this.costs.getContainingTypes();
  };
  Object.defineProperty(BasicUnitVO.prototype, "isLowlevelBoosted", {
    get: function () {
      return this._lowLevelRecruitmenttimes.length >= f.CastleModel.userData.userLevel && parseInt(this._lowLevelRecruitmenttimes[f.CastleModel.userData.userLevel - 1]) > -1;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.getRecruitmentTime = function (e = 1) {
    if (this.isPeaceModePreOrActive && !this.isAvailableInPeaceMode && this.isAvailable) {
      return this.getBaseRecruitTimePeacemode() * e;
    } else {
      return this.getBaseRecruitmentTime() * e;
    }
  };
  Object.defineProperty(BasicUnitVO.prototype, "isPeaceModePreOrActive", {
    get: function () {
      if (f.CastleModel.kingdomData.activeKingdomID != u.FactionConst.KINGDOM_ID) {
        return f.CastleModel.userData.isInPeaceMode;
      }
      var e = s.castAs(f.CastleModel.specialEventData.getActiveEventByEventId(c.EventConst.EVENTTYPE_FACTION), "FactionEventVO");
      return !!e && e.isInPreOrActivePeaceMode;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.getBaseRecruitmentTime = function () {
    var e = 0;
    e = this.isLowlevelBoosted ? parseInt(this._lowLevelRecruitmenttimes[f.CastleModel.userData.userLevel - 1]) : this._recruitmentTime;
    return g.int(e);
  };
  Object.defineProperty(BasicUnitVO.prototype, "hasPremiumBoostedTime", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.getPremiumBoostedTime = function (e, t, i, n, o) {
    for (var a = this.getPhasesSortedByTime(), s = 0, r = 0, l = 0, c = 0, u = 0, p = 0, h = i; a.length > 0;) {
      r = g.int(Math.max(a[0].duration - p, 0));
      s = Math.max(o, this.getSummedUpBoostedRecruitmentTime(t, e, a, p));
      l = Math.ceil(r / s);
      c = Math.ceil(l / d.ProductionPackageConst.PRODUCTION_SLOT_SIZE);
      h -= u = g.int(Math.min(h, c * d.ProductionPackageConst.PRODUCTION_SLOT_SIZE));
      p += g.int(u * s);
      a.shift();
    }
    return p + h * n;
  };
  BasicUnitVO.prototype.getFestivalBoost = function () {
    return g.int(f.CastleModel.boostData.festivalVO.remainingTimeInSeconds > 0 ? f.CastleModel.boostData.festivalVO.boostAmount : 0);
  };
  BasicUnitVO.prototype.getInstructorBoost = function () {
    var e = g.int(f.CastleModel.boostData.getBoosterByID(l.BoosterConst.INSTRUCTOR).remainingTimeInSeconds);
    return g.int(e > 0 ? f.CastleModel.boostData.getBoosterByID(l.BoosterConst.INSTRUCTOR).bonusValue : 0);
  };
  BasicUnitVO.prototype.getPhasesSortedByTime = function () {
    var e = g.int(f.CastleModel.boostData.festivalVO.remainingTimeInSeconds);
    var t = g.int(f.CastleModel.boostData.getBoosterByID(l.BoosterConst.INSTRUCTOR).remainingTimeInSeconds);
    var i = g.int(f.CastleModel.userData.getRemainingPeaceStatusTime());
    var n = {
      name: "festival",
      duration: e,
      boostValue: this.getFestivalBoost(),
      multiplier: 0
    };
    var o = {
      name: "instructor",
      duration: t,
      boostValue: this.getInstructorBoost(),
      multiplier: 0
    };
    var a = {
      name: "peace mode",
      duration: i,
      boostValue: 0,
      multiplier: p.UnitProductionConst.PEACE_MODE_SLOWDOWN
    };
    var s = new Array();
    if (this.applyFestival && e > 0) {
      s.push(n);
    }
    if (this.applyInstructor && t > 0) {
      s.push(o);
    }
    if (this.applyPeaceMode && f.CastleModel.userData.isInPeaceMode && i > 0 && !this.isAvailableInPeaceMode) {
      s.push(a);
    }
    s.sort(function (e, t) {
      if (e.duration < t.duration) {
        return -1;
      } else if (e.duration > t.duration) {
        return 1;
      } else {
        return 0;
      }
    });
    return s;
  };
  Object.defineProperty(BasicUnitVO.prototype, "applyPeaceMode", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "applyFestival", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "applyInstructor", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.getSummedUpBoostedRecruitmentTime = function (e, t, i, n) {
    var o = t;
    var a = 0;
    if (i != null) {
      for (var s = 0, r = i; s < r.length; s++) {
        var l = r[s];
        if (l !== undefined && n <= l.duration) {
          o += l.boostValue;
          a += g.int(l.multiplier);
        }
      }
    }
    a = a > 0 ? a : 1;
    return Math.round(e * a / (o / 100));
  };
  BasicUnitVO.prototype.getBoostedRecruitmentTime = function (e = 1) {
    return 0;
  };
  Object.defineProperty(BasicUnitVO.prototype, "isRecruitTimeSubscriptionBuffed", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.getBaseRecruitTimePeacemode = function () {
    return g.int(this.getBaseRecruitmentTime() * p.UnitProductionConst.PEACE_MODE_SLOWDOWN);
  };
  Object.defineProperty(BasicUnitVO.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.isUnitAvailableByEvent = function () {
    if (this._events.length > 0) {
      if (this._events != null) {
        for (var e = 0, t = this._events; e < t.length; e++) {
          var i = t[e];
          if (i !== undefined && f.CastleModel.specialEventData.isEventActive(parseInt(i))) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
  BasicUnitVO.prototype.requestInstantBuy = function (e, t, i, n, o = -1) {};
  BasicUnitVO.prototype.getShopIconURL = function (e) {
    return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.getVisualClassName());
  };
  BasicUnitVO.prototype.getShopIconName = function (e) {
    return this.getVisualClassName();
  };
  Object.defineProperty(BasicUnitVO.prototype, "unitSpeed", {
    get: function () {
      var e = f.CastleModel.researchData.getResearchEffectValue(y.EffectTypeEnum.EFFECT_TYPE_UNIT_SPEED_BONUS, -1, -1, this.wodId);
      var t = g.int(e.getValueforWodId(this.wodId) || 0);
      return this._unitSpeed + t;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isDefensive", {
    get: function () {
      return this.fightType == BasicUnitVO.FIGHTTYPE_DEF;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isOffensive", {
    get: function () {
      return this.fightType == BasicUnitVO.FIGHTTYPE_OFF;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isAllround", {
    get: function () {
      return this.isHybrid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "isDismissable", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.prototype.isAllowedByAttackTarget = function (e, t) {
    return this.checkIfTargetIsInArray(e, t, this._allowedToAttack);
  };
  BasicUnitVO.prototype.isTravelingToTargetAllowed = function (e, t) {
    return this.checkIfTargetIsInArray(e, t, this._allowedToTravel);
  };
  BasicUnitVO.prototype.checkIfTargetIsInArray = function (e, t, i) {
    if (i.length < 1) {
      return true;
    }
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && (a.spaceId == e || a.spaceId == BasicUnitVO.ALL_ALLOWED) && (a.areaType == BasicUnitVO.ALL_ALLOWED || a.areaType == t)) {
          return true;
        }
      }
    }
    return false;
  };
  BasicUnitVO.prototype.calcCostWithFameReductionAndPremium = function (e) {
    var t = f.CastleModel.areaData.activeAreaInfo;
    var i = f.CastleModel.lordData.getBaronByCastleMapObjectVO(t);
    var n = new O.CastleEffectConditionVO(t.areaType, t.spaceID, this.wodId);
    var o = [f.CastleModel.areaData.activeConstructionItems];
    var a = b.CastleEffectsHelper.getAccumulatedEffectValueForType(y.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL, i, n, o).strength;
    a += b.CastleEffectsHelper.getAccumulatedEffectValueForType(y.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE, i, n, o).getValueforWodId(this.wodId);
    a += g.int(f.CastleModel.areaData.activeConstructionItems.getConstructionItemEffectValue(E.CastleEffectEnum.RECRUITCOSTREDUCTION));
    a += f.CastleModel.areaData.activeConstructionList.getEffectValue(y.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_COST_DECREASE_ALL, new O.CastleEffectConditionVO()).strength;
    var s = g.int(Math.max(100 - a, 0));
    return f.CastleModel.costsData.getFinalCostsC1(g.int(Math.round(e * s / 100)));
  };
  BasicUnitVO.prototype.getInstantBuyInfoByUnitsVO = function (e) {
    return new D.InstantBuyInfoVO();
  };
  BasicUnitVO.prototype.getAbsoluteBoostEffectType = function () {
    return y.EffectTypeEnum.EFFECT_TYPE_RECRUITMENT_TIME_BONUS;
  };
  Object.defineProperty(BasicUnitVO.prototype, "foodSupply", {
    get: function () {
      var e = g.int(f.CastleModel.globalEffectData.getBonusByEffectType(y.EffectTypeEnum.EFFECT_TYPE_FOOD_CONSUMPTION_REDUCTION));
      return Math.max(0, this._foodSupply + e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "meadSupply", {
    get: function () {
      return Math.max(0, this._meadSupply);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "beefSupply", {
    get: function () {
      return Math.max(0, this._beefSupply);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicUnitVO.prototype, "toolCategory", {
    get: function () {
      return this._toolCategory;
    },
    enumerable: true,
    configurable: true
  });
  BasicUnitVO.FIGHTTYPE_OFF = 0;
  BasicUnitVO.FIGHTTYPE_DEF = 1;
  BasicUnitVO.ALL_ALLOWED = -1;
  BasicUnitVO.showUnitWodID = false;
  return BasicUnitVO;
}(m.AVisualVO);
exports.BasicUnitVO = T;
var v = require("./86.js");
var S = require("./50.js");
var A = require("./12.js");
var L = require("./48.js");
r.classImplementsInterfaces(T, "IInventoryVO", "IShopVO", "ICostVO");