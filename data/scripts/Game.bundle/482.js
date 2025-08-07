Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./231.js");
var h = require("./16.js");
var g = require("./58.js");
var C = require("./28.js");
var _ = require("./22.js");
var m = require("./30.js");
var f = require("./15.js");
var O = require("./4.js");
var E = require("./857.js");
var y = require("./165.js");
var b = require("./142.js");
var D = require("./35.js");
var I = require("./111.js");
var T = require("./176.js");
var v = require("./87.js");
var S = require("./92.js");
var A = require("./858.js");
var L = require("./480.js");
var P = createjs.Point;
var M = function (e) {
  function ABasicBuildingVO() {
    var t = this;
    t._buildingState = v.IsoBuildingStateEnum.INITIAL;
    t._hitPoints = 0;
    t._damageType = 0;
    t._stateEndTime = -1;
    t._efficiency = 0;
    t._moatBonus = 0;
    t._wallBonus = 0;
    t._buildDuration = 0;
    t._lowLevelBuildDurations = [];
    t._lowLevelMainCastleCostC2 = [];
    t._districtTypeID = 0;
    t._isDistrict = false;
    t._isRelicBuilding = false;
    t._constructionBoostAtStart = 1;
    t._constructionCompletionInSec = 0;
    t._constructionItems = [];
    t._constructionItemGroupIds = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ABasicBuildingVO, e);
  ABasicBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._wallBonus = d.int(_.CastleXMLUtils.getIntAttribute("wallBonus", t));
    this._moatBonus = d.int(_.CastleXMLUtils.getIntAttribute("moatBonus", t));
    this._buildDuration = d.int(_.CastleXMLUtils.getIntAttribute("buildDuration", t));
    this._buildingGroundType = _.CastleXMLUtils.getStringAttribute("buildingGroundType", t);
    this._lowLevelMainCastleCostC2 = _.CastleXMLUtils.createIntListFromAttribute("lowLevelMainCastleCostC2", t);
    this._lowLevelBuildDurations = _.CastleXMLUtils.createIntListFromAttribute("lowLevelBuildDuration", t);
    this._districtTypeID = d.int(_.CastleXMLUtils.getIntAttribute("districtTypeID", t));
    this._isDistrict = _.CastleXMLUtils.getBooleanAttribute("isDistrict", t);
    this._isRelicBuilding = _.CastleXMLUtils.getBooleanAttribute("isRelicBuilding", t);
    var i = _.CastleXMLUtils.getStringAttribute("constructionItemGroupIDs", t, "").split(",");
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = parseInt(a);
          if (s > 0) {
            this._constructionItemGroupIds.push(s);
          }
        }
      }
    }
    this._effectsString = _.CastleXMLUtils.getStringAttribute("effects", t);
    this._areaEffectsString = _.CastleXMLUtils.getStringAttribute("areaSpecificEffects", t);
    this._effects = null;
    this._areaSpecificEffects = null;
  };
  ABasicBuildingVO.prototype.parseEffects = function () {
    this._effects = [];
    if (this._effectsString != "") {
      for (var e = 0, t = this._effectsString.split(","); e < t.length; e++) {
        var i = t[e];
        if (i.length > 0) {
          var n = i.split("&");
          var o = O.CastleModel.effectsData.getEffectByID(parseInt(n[0]));
          var a = new y.BonusVO().parseFromValueString(o, n[1]);
          this._effects.push(a);
        }
      }
    }
  };
  ABasicBuildingVO.prototype.parseAreaSpecificEffects = function () {
    this._areaSpecificEffects = [];
    if (this._areaEffectsString != "") {
      for (var e = 0, t = this._areaEffectsString.split(","); e < t.length; e++) {
        var i = t[e];
        if (i.length > 0) {
          var n = i.split("&");
          var o = O.CastleModel.effectsData.getEffectByID(parseInt(n[0]));
          var a = new y.BonusVO().parseFromValueString(o, n[1]);
          this._areaSpecificEffects.push(a);
        }
      }
    }
  };
  ABasicBuildingVO.prototype.isUnique = function () {
    return false;
  };
  ABasicBuildingVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    var i = this._buildingState;
    this._constructionCompletionInSec = d.int(t.shift());
    this._buildingState = v.IsoBuildingStateEnum.getTypeById(t.shift());
    this._hitPoints = d.int(t.shift());
    this._constructionBoostAtStart = t.shift() / 100;
    this._efficiency = d.int(t.shift());
    this._damageType = d.int(t.length > 0 ? t.shift() : 0);
    this.setStateEndTime();
    this.triggerConstructionCallbacks(i);
  };
  ABasicBuildingVO.prototype.cloneFrom = function (t) {
    e.prototype.cloneFrom.call(this, t);
    var i = t;
    if (i) {
      this._buildingState = i._buildingState;
      this._hitPoints = i._hitPoints;
      this._damageType = i._damageType;
      this._stateEndTime = i._stateEndTime;
      this._constructionBoostAtStart = i._constructionBoostAtStart;
      this._constructionCompletionInSec = i._constructionCompletionInSec;
      this._constructionItems = i._constructionItems.slice();
      this._constructionItemGroupIds = i._constructionItemGroupIds;
    }
  };
  ABasicBuildingVO.prototype.update = function (e) {
    switch (this.buildingState) {
      case v.IsoBuildingStateEnum.BUILD_STOPPED:
      case v.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case v.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case v.IsoBuildingStateEnum.REPAIR_STOPPED:
      case v.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
      case v.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
      case v.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case v.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        this.dispatchEvent(new S.IsoEvent(S.IsoEvent.ON_BUILDING_BUILD_PROGRESS, [this]));
    }
  };
  ABasicBuildingVO.prototype.updateWalkmap = function () {
    if (!this.buildingState.isFunctionally || this.buildingState == v.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS || this.buildingState == v.IsoBuildingStateEnum.UPGRADE_STOPPED) {
      this._walkmap = V.IsoHelper.walkmap.createWalkmapWithWalkableL(this.dimension);
    }
    this._walkmap = V.IsoHelper.walkmap.generateWalkmap(this.walkMapAssetName);
    if (this._walkmap) {
      if (this._rotation % 2 == 1) {
        this._walkmap = V.IsoHelper.walkmap.mirrorWalkmap(this.walkmap);
      }
    } else {
      this._walkmap = V.IsoHelper.walkmap.createWalkmapWithWalkableL(this.dimension);
    }
  };
  ABasicBuildingVO.prototype.updateSpawnPoints = function () {
    this._spawnPoints = V.IsoHelper.walkmap.getSpawnPoints(this.walkMapAssetName);
    if (this._spawnPoints.length > 0 && this._rotation % 2 == 1) {
      this.mirrorSpawnPoints();
    }
  };
  ABasicBuildingVO.prototype.mirrorSpawnPoints = function () {
    var e = [];
    for (var t = 0; t < this._spawnPoints.length; ++t) {
      e[t] = new P(this._spawnPoints[t].y, this._spawnPoints[t].x);
    }
    this._spawnPoints = e;
  };
  ABasicBuildingVO.prototype.triggerConstructionCallbacks = function (e) {
    if (e != this.buildingState && e != v.IsoBuildingStateEnum.INITIAL) {
      switch (this.buildingState) {
        case v.IsoBuildingStateEnum.BUILD_COMPLETED:
        case v.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
        case v.IsoBuildingStateEnum.UPGRADE_COMPLETED:
          f.CastleBasicController.getInstance().dispatchEvent(new S.IsoEvent(S.IsoEvent.ON_BUILDING_CONSTRUCTION_DONE, [this]));
          break;
        case v.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
          f.CastleBasicController.getInstance().dispatchEvent(new S.IsoEvent(S.IsoEvent.ON_BUILDING_UPGRADE_STARTED, [this]));
      }
    }
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "damageFactor", {
    get: function () {
      return (100 - this.hitPoints) / 100;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "damageInPercent", {
    get: function () {
      return 100 - this.hitPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "basicBuildDuration", {
    get: function () {
      if (this._lowLevelBuildDurations.length >= O.CastleModel.userData.userLevel) {
        var e = d.int(this._lowLevelBuildDurations[O.CastleModel.userData.userLevel - 1]);
        if (e > 0) {
          return e;
        }
      }
      return this._buildDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "areValuesActive", {
    get: function () {
      var e = true;
      switch (this._buildingState) {
        case v.IsoBuildingStateEnum.BUILD_STOPPED:
        case v.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
          if (this._level == 1) {
            e = false;
          }
          break;
        case v.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        case v.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        case v.IsoBuildingStateEnum.DISASSEMBLED_COMPLETED:
          e = false;
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "usesLords", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "canBeDisassembled", {
    get: function () {
      return this.destructable && O.CastleModel.userData.userLevel >= g.ClientConstLevelRestrictions.MIN_LEVEL_DESTRUCTION && !this.buildingState.isUnderConstruction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "isDamaged", {
    get: function () {
      return this.hitPoints < l.ConstructionConst.MAX_HP;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.prototype.getRepairCostByType = function (e) {
    if (a.EnvGlobalsHandler.globals.isOnSpecialServer) {
      var t = this._tempServerRepairCosts.getFirstItemOfType(e);
      return d.int(t != null ? t.amount : 0);
    }
    if (R.ClientConstCollectable.GROUP_LIST_REPAIR_COST_RESOURCES.indexOf(e) == -1) {
      return 0;
    }
    var i = l.ConstructionConst.getRepairCost(this._costs.getAmountOrDefaultByType(e), this.damageFactor);
    i -= i * O.CastleModel.areaData.activeCommonInfo.builderDiscount;
    return Math.ceil(i);
  };
  ABasicBuildingVO.prototype.getRefundPriceByType = function (e) {
    if (R.ClientConstCollectable.GROUP_LIST_REPAIR_COST_RESOURCES.indexOf(e) == -1) {
      return 0;
    } else {
      return d.int(l.ConstructionConst.getRefundPrice(this._costs.getAmountOrDefaultByType(e)));
    }
  };
  ABasicBuildingVO.prototype.getInfoItemTextColor = function (e = null) {
    if (e && this.getConstructionItemEffectValue(e) != 0) {
      return h.ClientConstColor.GENERIC_GREEN;
    } else {
      return h.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  ABasicBuildingVO.prototype.getInfoItemTextColor2 = function (e = null) {
    if (e && this.getEffectValue(e).strength != 0) {
      return h.ClientConstColor.GENERIC_GREEN;
    } else {
      return h.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "builderMultiplier", {
    get: function () {
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "needsReparation", {
    get: function () {
      return this.isDamaged && this.buildingState != v.IsoBuildingStateEnum.REPAIR_IN_PROGRESS && this.buildingState != v.IsoBuildingStateEnum.REPAIR_STOPPED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "upgradeAvailable", {
    get: function () {
      return this.canUpgrade() && !this.buildingState.isUnderConstruction && !this.buildingState.isInProgress && !this.needsReparation;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.prototype.getInfoTooltipLine1 = function () {
    if (T.CastleDataHolder.instance.showObjectIDs) {
      return "ObjectID: " + this.objectId;
    } else {
      return u.Localize.text(this.getNameString());
    }
  };
  ABasicBuildingVO.prototype.getInfoTooltipLine2 = function () {
    if (this.level > 0) {
      return u.Localize.text("building_level", [this.level]);
    } else {
      return "";
    }
  };
  ABasicBuildingVO.prototype.getInfoTooltipLine3 = function () {
    if (this.hitPoints < 100) {
      return u.Localize.text("building_damagePercent", [this.damageInPercent]);
    }
    if (this.efficiency > 0 && !O.CastleModel.areaData.activeArea.isSeasonCamp) {
      switch (this.buildingState) {
        case v.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
          return u.Localize.text("demolish_process");
        case v.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
          break;
        case v.IsoBuildingStateEnum.BUILD_COMPLETED:
        case v.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        default:
          return u.Localize.text("utilizationPercentage", [this.efficiency]);
      }
    }
    return "";
  };
  ABasicBuildingVO.prototype.canShowConstructionHelpIcon = function () {
    switch (this.buildingState) {
      case v.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
      case v.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case v.IsoBuildingStateEnum.BUILD_STOPPED:
      case v.IsoBuildingStateEnum.UPGRADE_STOPPED:
        break;
      default:
        return false;
    }
    if (!O.CastleModel.allianceHelpRequestData.isBuildHelpAvailable() || O.CastleModel.allianceHelpRequestData.hasBuildHelpAbTestLevelRestriction()) {
      return false;
    }
    var e = new E.AllianceHelpRequestConstructionParamsVO(O.CastleModel.kingdomData.activeKingdomID, this.isoData.areaData.areaId, this.objectId);
    return d.int(O.CastleModel.allianceHelpRequestData.getStatusOfOwnRequestByID(c.AllianceConst.ALLIANCE_HELP_BUILD, e)) == p.ClientConstAlliance.STATUS_REQUEST_POSSIBLE;
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "isBuildingGroundViewAvailable", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "isLowLevelMainCastleCost2Boosted", {
    get: function () {
      return this.lowLevelMainCastleCostC2.length >= O.CastleModel.userData.userLevel && this.lowLevelMainCastleCostC2[O.CastleModel.userData.userLevel - 1] > -1;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.prototype.getLowLevelMainCastleC2Costs = function () {
    if (this.isLowLevelMainCastleCost2Boosted) {
      return d.int(this.lowLevelMainCastleCostC2[O.CastleModel.userData.userLevel - 1]);
    } else {
      return -1;
    }
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "lastLowLevelMainCastleCost2Level", {
    get: function () {
      return this._lowLevelMainCastleCostC2.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "lowLevelMainCastleCost2Discount", {
    get: function () {
      if (this.isLowLevelMainCastleCost2Boosted) {
        var e = this.getLowLevelMainCastleC2Costs();
        if (e > -1) {
          e = d.int(O.CastleModel.costsData.getFinalCostsC2(e));
        }
        var t = d.int(O.CastleModel.costsData.getFinalCostsC2(this.basicCostC2));
        return (t - e) / t * 100;
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "costC2", {
    get: function () {
      if (O.CastleModel.userData.userLevel == 0) {
        return 0;
      }
      if (this.lowLevelMainCastleCostC2.length >= O.CastleModel.userData.userLevel) {
        var e = d.int(this.lowLevelMainCastleCostC2[O.CastleModel.userData.userLevel - 1]);
        if (e > -1) {
          return O.CastleModel.costsData.getFinalCostsC2(e);
        }
      }
      return O.CastleModel.costsData.getFinalCostsC2(this.basicCostC2);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(A.AShopVO.prototype, "costC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.prototype.getBuildDuration = function () {
    return d.int(this.basicBuildDuration / this._constructionBoostAtStart);
  };
  ABasicBuildingVO.prototype.getEstimatedBuildDuration = function () {
    if (O.CastleModel.areaData.activeCommonInfo) {
      return d.int(this.basicBuildDuration * O.CastleModel.areaData.activeCommonInfo.buildDurationBoostFactor);
    } else {
      return 0;
    }
  };
  ABasicBuildingVO.prototype.getDisassembleDuration = function () {
    return d.int(this.basicBuildDuration * l.ConstructionConst.BUILT_TO_DISASSEMBLE_TIME_FACTOR / this._constructionBoostAtStart);
  };
  ABasicBuildingVO.prototype.getEstimatedDisassembleDuration = function () {
    return d.int(this.basicBuildDuration * l.ConstructionConst.BUILT_TO_DISASSEMBLE_TIME_FACTOR * O.CastleModel.areaData.activeCommonInfo.buildDurationBoostFactor);
  };
  ABasicBuildingVO.prototype.getRepairDuration = function () {
    if (a.EnvGlobalsHandler.globals.isOnSpecialServer) {
      return this._tempServerRepairTime;
    } else {
      return l.ConstructionConst.getRepairDuration(this.basicBuildDuration, this._hitPoints) / this._constructionBoostAtStart;
    }
  };
  ABasicBuildingVO.prototype.getRepairDurationForAllRepairFunction = function () {
    if (a.EnvGlobalsHandler.globals.isOnSpecialServer) {
      return this._tempServerRepairTime;
    } else {
      return l.ConstructionConst.getRepairDuration(this.basicBuildDuration * O.CastleModel.areaData.activeCommonInfo.buildDurationBoostFactor, this._hitPoints);
    }
  };
  ABasicBuildingVO.prototype.getEstimatedRepairDuration = function () {
    if (a.EnvGlobalsHandler.globals.isOnSpecialServer) {
      return d.int(this._tempServerRepairTime);
    } else {
      return d.int(l.ConstructionConst.getRepairDuration(this.basicBuildDuration, this._hitPoints) * O.CastleModel.areaData.activeCommonInfo.buildDurationBoostFactor);
    }
  };
  ABasicBuildingVO.prototype.getUpgradeDuration = function () {
    if (this.upgradeWodID != 0) {
      return d.int(O.CastleModel.wodData.getBuildingVOById(this.upgradeWodID).getBuildDuration() / this._constructionBoostAtStart);
    } else {
      return 0;
    }
  };
  ABasicBuildingVO.prototype.getEstimatedUpgradeDuration = function () {
    if (this.upgradeWodID != 0) {
      return d.int(O.CastleModel.wodData.getBuildingVOById(this.upgradeWodID).getBuildDuration() * O.CastleModel.areaData.activeCommonInfo.buildDurationBoostFactor);
    } else {
      return 0;
    }
  };
  ABasicBuildingVO.prototype.getTimeLeftForBuilding = function () {
    var e = 0;
    switch (this.buildingState) {
      case v.IsoBuildingStateEnum.BUILD_STOPPED:
        e = this.getBuildDuration() - this._constructionCompletionInSec;
        break;
      case v.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        e = this.getDisassembleDuration() - this._constructionCompletionInSec;
        break;
      case v.IsoBuildingStateEnum.UPGRADE_STOPPED:
        e = this.getUpgradeDuration() - this._constructionCompletionInSec;
        break;
      case v.IsoBuildingStateEnum.REPAIR_STOPPED:
        e = d.int(this.getRepairDuration() - this._constructionCompletionInSec);
        break;
      default:
        e = Math.ceil((this._stateEndTime - m.CachedTimer.getCachedTimer()) * C.ClientConstTime.MILLISEC_2_SEC);
    }
    return e;
  };
  ABasicBuildingVO.prototype.getPercentCompletedForBuilding = function () {
    var e = 0;
    switch (this.buildingState) {
      case v.IsoBuildingStateEnum.BUILD_STOPPED:
      case v.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case v.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case v.IsoBuildingStateEnum.REPAIR_STOPPED:
        e = this._constructionCompletionInSec / this.currentBuildingStateTime;
        break;
      case v.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
      case v.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
      case v.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
      case v.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        e = 1 - (this._stateEndTime - m.CachedTimer.getCachedTimer()) * C.ClientConstTime.MILLISEC_2_SEC / this.currentBuildingStateTime;
    }
    return Math.min(Math.max(e, 0), 1);
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "currentBuildingStateTime", {
    get: function () {
      switch (this.buildingState) {
        case v.IsoBuildingStateEnum.BUILD_STOPPED:
        case v.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
          return this.getBuildDuration();
        case v.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        case v.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
          return this.getDisassembleDuration();
        case v.IsoBuildingStateEnum.UPGRADE_STOPPED:
        case v.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
          return this.getUpgradeDuration();
        case v.IsoBuildingStateEnum.REPAIR_STOPPED:
        case v.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
          return this.getRepairDuration();
        default:
          return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.prototype.setStateEndTime = function () {
    switch (this.buildingState) {
      case v.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case v.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        this._stateEndTime = d.int(m.CachedTimer.getCachedTimer() + (this.getDisassembleDuration() - this._constructionCompletionInSec) * C.ClientConstTime.SEC_2_MILLISEC);
        break;
      case v.IsoBuildingStateEnum.BUILD_STOPPED:
      case v.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        this._stateEndTime = d.int(m.CachedTimer.getCachedTimer() + (this.getBuildDuration() - this._constructionCompletionInSec) * C.ClientConstTime.SEC_2_MILLISEC);
        break;
      case v.IsoBuildingStateEnum.REPAIR_STOPPED:
      case v.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        this._stateEndTime = d.int(m.CachedTimer.getCachedTimer() + (this.getRepairDuration() - this._constructionCompletionInSec) * C.ClientConstTime.SEC_2_MILLISEC);
        break;
      case v.IsoBuildingStateEnum.UPGRADE_STOPPED:
      case v.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        this._stateEndTime = d.int(m.CachedTimer.getCachedTimer() + (this.getUpgradeDuration() - this._constructionCompletionInSec) * C.ClientConstTime.SEC_2_MILLISEC);
        break;
      default:
        this._stateEndTime = -1;
    }
  };
  ABasicBuildingVO.prototype.parseConstructionItems = function (e) {
    this._constructionItems = [];
    O.CastleModel.userData.removeGlobalConstructionItemEffect(this.objectId);
    O.CastleModel.userData.removeGlobalConstructionItemBonus(this.objectId);
    if (e && e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.OID == this.objectId) {
          for (var a = 0, s = n.CIL; a < s.length; a++) {
            var r = s[a];
            if (r !== undefined) {
              var l = O.CastleModel.constructionItemData.getConstructionItemVO(r.CID);
              if (l) {
                if (l.isAppearanceItem && !l.skin) {
                  throw new Error("Got invalid appearance item without skin! Item ID " + l.id);
                }
                if (r.RS && l.isTemporary) {
                  (l = l.clone()).setRemainingTime(r.RS);
                }
                var c = d.int(r.S);
                this._constructionItems[ABasicBuildingVO.STARTINDEX_BY_TYPE[l.slotType] + c] = l;
                if (this.isoData.areaData.isMyHomeCastle) {
                  O.CastleModel.userData.setGlobalConstructionItemEffects(l, this.objectId);
                  O.CastleModel.userData.setGlobalConstructionItemBoni(l, this.objectId);
                }
              } else {
                o.debug("Invalid item id! No item found for id: " + r.CID);
              }
            }
          }
        }
      }
    }
  };
  ABasicBuildingVO.prototype.getConstructionItem = function (e) {
    var t = d.int(ABasicBuildingVO.STARTINDEX_BY_TYPE[e.slotType] + e.index);
    if (this._constructionItems.length > t) {
      return this._constructionItems[t];
    } else {
      return null;
    }
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "constructionItemGroupIds", {
    get: function () {
      return this._constructionItemGroupIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "hasConstructionItemSlots", {
    get: function () {
      return this._constructionItemGroupIds.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "constructionItemEffectsText", {
    get: function () {
      var e = "";
      for (var t = 0; t < this._constructionItems.length; t++) {
        var i = this._constructionItems[t];
        if (i) {
          if (e != "") {
            e += "\n";
          }
          e += i.effectText;
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "numEquippedConstructionItems", {
    get: function () {
      var e = 0;
      if (this._constructionItems != null) {
        for (var t = 0, i = this._constructionItems; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n) {
            e++;
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "averageConstructionItemRarity", {
    get: function () {
      var e = 0;
      var t = 0;
      if (this._constructionItems != null) {
        for (var i = 0, n = this._constructionItems; i < n.length; i++) {
          var o = n[i];
          if (o !== undefined && o) {
            e++;
            t += d.int(o.rarity == r.ConstructionItemConst.RARENESS_UNIQUE ? r.ConstructionItemConst.RARENESS_LEGENDARY + 1 : o.rarity);
          }
        }
      }
      return t / e;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.prototype.getConstructionItemEffectValue = function (e) {
    var t = 0;
    this._constructionItems.forEach(function (i) {
      i.effects.forEach(function (i) {
        if (i && i.type == e) {
          t += i.value;
        }
      });
    });
    return d.int(t);
  };
  ABasicBuildingVO.prototype.getBonusVOsByTypeFromConstructionItemsOnly = function (e, t) {
    if (t == null) {
      t = b.CastleEffectConditionVO.NULL_CONDITION;
    }
    var i = [];
    if (this._constructionItems != null) {
      for (var n = 0, o = this._constructionItems; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          for (var s = 0, r = a.boni; s < r.length; s++) {
            var l = r[s];
            if (l !== undefined && l && l.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
              i.push(l);
            }
          }
        }
      }
    }
    return i;
  };
  ABasicBuildingVO.prototype.getBonusVOsByType = function (e, t, i = true, n = true) {
    if (t == null) {
      t = b.CastleEffectConditionVO.NULL_CONDITION;
    }
    var o = [];
    this._constructionItems.forEach(function (n) {
      n.boni.forEach(function (n) {
        if (i && n && n.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
          o.push(n);
        }
      });
    });
    if (!this._effects) {
      this.parseEffects();
    }
    this._effects.forEach(function (i) {
      if (n && i && i.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
        o.push(i);
      }
    });
    if (!this._areaSpecificEffects) {
      this.parseAreaSpecificEffects();
    }
    this._areaSpecificEffects.forEach(function (i) {
      if (n && i && i.matchesConditions(e, t.areaType, t.spaceId, t.wodId, t.otherPlayer)) {
        o.push(i);
      }
    });
    return o;
  };
  ABasicBuildingVO.prototype.getEffectValue = function (e, t = null, i = true, n = true) {
    if (t == null) {
      t = b.CastleEffectConditionVO.NULL_CONDITION;
    }
    var o = I.CastleEffectsHelper.getTotalEffectValue(this.getBonusVOsByType(e, t, i, n));
    return o || new e.valueClass();
  };
  ABasicBuildingVO.prototype.getConstructionItemGroupEffectsAmount = function (e) {
    var t = 0;
    if (this._constructionItems != null) {
      for (var i = 0, n = this._constructionItems; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o && o.effectGroupId == e) {
          t++;
        }
      }
    }
    return t;
  };
  Object.defineProperty(ABasicBuildingVO.prototype, "appearanceItem", {
    get: function () {
      return this._constructionItems[ABasicBuildingVO.STARTINDEX_BY_TYPE[r.ConstructionItemConst.APPEARANCE_SLOT_TYPE]];
    },
    set: function (e) {
      this._constructionItems[ABasicBuildingVO.STARTINDEX_BY_TYPE[r.ConstructionItemConst.APPEARANCE_SLOT_TYPE]] = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "walkMapAssetName", {
    get: function () {
      return this.getVisualClassName() + "_walkmap";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "buildingState", {
    get: function () {
      return this._buildingState;
    },
    set: function (e) {
      this._buildingState = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "hitPoints", {
    get: function () {
      return this._hitPoints;
    },
    set: function (e) {
      this._hitPoints = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "damageType", {
    get: function () {
      return this._damageType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "efficiency", {
    get: function () {
      return this._efficiency;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "moatBonus", {
    get: function () {
      return this._moatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "wallBonus", {
    get: function () {
      return this._wallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "buildingGroundType", {
    get: function () {
      return this._buildingGroundType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "lowLevelMainCastleCostC2", {
    get: function () {
      return this._lowLevelMainCastleCostC2;
    },
    set: function (e) {
      this._lowLevelMainCastleCostC2 = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "buildDuration", {
    get: function () {
      return this._buildDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "type", {
    get: function () {
      if (this.appearanceItem) {
        return this.appearanceItem.skin;
      } else {
        return Object.getOwnPropertyDescriptor(L.AVisualVO.prototype, "type").get.call(this);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(L.AVisualVO.prototype, "type").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "districtTypeID", {
    get: function () {
      return this._districtTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "isDistrict", {
    get: function () {
      return this._isDistrict;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "hasFlag", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "hasModernEffects", {
    get: function () {
      return !!this._effectsString || !!this._areaEffectsString;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "effects", {
    get: function () {
      if (!this._effects) {
        this.parseEffects();
      }
      return this._effects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "areaSpecificEffects", {
    get: function () {
      if (!this._areaSpecificEffects) {
        this.parseAreaSpecificEffects();
      }
      return this._areaSpecificEffects;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "allBuildingEffects", {
    get: function () {
      return this.effects.concat(this.areaSpecificEffects);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "allShowableBuildingEffects", {
    get: function () {
      return this.allBuildingEffects.filter(function (e) {
        return e.effect.effectType.type != D.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE && e.effect.effectType.type != D.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE_GROUPS;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "ignoreCap", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "constructionItems", {
    get: function () {
      return this._constructionItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABasicBuildingVO.prototype, "isRelicBuilding", {
    get: function () {
      return this._isRelicBuilding;
    },
    enumerable: true,
    configurable: true
  });
  ABasicBuildingVO.__initialize_static_members = function () {
    ABasicBuildingVO.STARTINDEX_CI_PRIMARY = d.int(ABasicBuildingVO.STARTINDEX_CI_APPEARANCE + r.ConstructionItemConst.APPEARANCE_SLOT_COUNT);
    ABasicBuildingVO.STARTINDEX_CI_SECONDARY = d.int(ABasicBuildingVO.STARTINDEX_CI_PRIMARY + r.ConstructionItemConst.PRIMARY_SLOT_COUNT);
    ABasicBuildingVO.STARTINDEX_BY_TYPE = [ABasicBuildingVO.STARTINDEX_CI_APPEARANCE, ABasicBuildingVO.STARTINDEX_CI_PRIMARY, ABasicBuildingVO.STARTINDEX_CI_SECONDARY];
  };
  ABasicBuildingVO.STARTINDEX_CI_APPEARANCE = 0;
  return ABasicBuildingVO;
}(A.AShopVO);
exports.ABasicBuildingVO = M;
s.classImplementsInterfaces(M, "IShopVO", "ICostVO", "IInventoryVO", "IEffectSource");
var R = require("./86.js");
var V = require("./46.js");
M.__initialize_static_members();