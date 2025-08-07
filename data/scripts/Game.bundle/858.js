Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./22.js");
var u = require("./53.js");
var d = require("./4.js");
var p = require("./142.js");
var h = require("./97.js");
var g = require("./35.js");
var C = require("./230.js");
var _ = require("./153.js");
var m = function (e) {
  function AShopVO() {
    var t = this;
    t._costs = new y.CollectableList();
    t._tempServerRepairCosts = new y.CollectableList();
    t._tempServerRepairTime = 0;
    t._requiredLevel = 0;
    t._requiredLegendLevel = 0;
    t._earlyUnlockRequiredLevel = 0;
    t._storeable = false;
    t._level = 0;
    t._upgradeWodID = 0;
    t._downgradeWodID = 0;
    t._needConstructionExpert = false;
    t._xp = 0;
    t._mightValue = 0;
    t._maximumCount = 0;
    t._destructable = false;
    t._slumLevelNeeded = 0;
    t._inventoryAmount = 0;
    t._sortOrder = 0;
    t._onlyInAreaTypes = [];
    t._onlyInKingdomIds = [];
    t._availableInMapIds = [];
    t._onlyInEventIds = [];
    t._discountedCostC2 = -1;
    t._sellCostC1 = 0;
    t._tempServerDestructable = false;
    t._isBattleGround = false;
    t._isNotBattleGround = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AShopVO, e);
  AShopVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._costs = O.CollectableManager.parser.x2cList.createList(t, f.ClientConstCollectable.XML_PREFIX_COST);
    this._tempServerRepairCosts = O.CollectableManager.parser.createGoodsListSave(new D.CollectableItemWoodVO(c.CastleXMLUtils.getIntAttribute("tempServerCostWood", t)), new b.CollectableItemStoneVO(c.CastleXMLUtils.getIntAttribute("tempServerCostStone", t)));
    this._tempServerRepairTime = l.int(this._requiredLevel = l.int(c.CastleXMLUtils.getIntAttribute("tempServerTime", t)));
    this._requiredLevel = l.int(c.CastleXMLUtils.getIntAttribute("requiredLevel", t));
    this._requiredLegendLevel = l.int(c.CastleXMLUtils.getIntAttribute("requiredLegendLevel", t));
    this._earlyUnlockRequiredLevel = l.int(c.CastleXMLUtils.getIntAttribute("earlyUnlockRequiredLevel", t));
    this._upgradeWodID = l.int(c.CastleXMLUtils.getIntAttribute("upgradeWodID", t));
    this._downgradeWodID = l.int(c.CastleXMLUtils.getIntAttribute("downgradeWodID", t));
    this._shopCategory = c.CastleXMLUtils.getStringAttribute("shopCategory", t, "NOT_IN_SHOP");
    this._level = l.int(c.CastleXMLUtils.getIntAttribute("level", t, -1));
    this._xp = l.int(c.CastleXMLUtils.getIntAttribute("xp", t));
    this._mightValue = l.int(c.CastleXMLUtils.getIntAttribute("mightValue", t, 0));
    this._storeable = c.CastleXMLUtils.getBooleanAttribute("storeable", t);
    this._maximumCount = l.int(c.CastleXMLUtils.getIntAttribute("maximumCount", t, 1000000));
    this._destructable = c.CastleXMLUtils.getBooleanAttribute("destructable", t, true);
    this._tempServerDestructable = c.CastleXMLUtils.getBooleanAttribute("tempServerDestructable", t, true);
    this._isBattleGround = c.CastleXMLUtils.getBooleanAttribute("isBattleGround", t, false);
    this._isNotBattleGround = c.CastleXMLUtils.getBooleanAttribute("isNotBattleGround", t, false);
    this._slumLevelNeeded = l.int(c.CastleXMLUtils.getIntAttribute("slumLevelNeeded", t));
    this._needConstructionExpert = c.CastleXMLUtils.getBooleanAttribute("constructionExpert", t);
    this._sellCostC1 = l.int(c.CastleXMLUtils.getIntAttribute("sellC1", t, 0));
    this._sellBuildingVO = new T.SellBuildingVO(O.CollectableManager.parser.x2cList.createList(t, f.ClientConstCollectable.XML_PREFIX_SELL));
    var i = c.CastleXMLUtils.getNumberAttribute("sortOrder", t, 1000000);
    this._sortOrder = isNaN(i) ? Number.MAX_VALUE : i;
    this._onlyInAreaTypes = c.CastleXMLUtils.createIntListFromAttribute("onlyInAreaTypes", t);
    this._onlyInKingdomIds = c.CastleXMLUtils.createIntListFromAttribute("kIDs", t);
    this._availableInMapIds = c.CastleXMLUtils.createIntListFromAttribute("mapIDs", t);
    this._onlyInEventIds = c.CastleXMLUtils.createIntListFromAttribute("eventIDs", t);
    this._effectLocked = c.CastleXMLUtils.getBooleanAttribute("effectLocked", t);
    this._sceatSkillLocked = c.CastleXMLUtils.getIntAttribute("sceatSkillLocked", t);
    if (this._onlyInKingdomIds.length <= 0) {
      this._onlyInKingdomIds = [_.KingdomEnum.CLASSIC.id, _.KingdomEnum.DESSERT.id, _.KingdomEnum.ICE.id, _.KingdomEnum.VOLCANO.id, _.KingdomEnum.ISLAND.id, _.KingdomEnum.SEAQUEEN.id, _.KingdomEnum.THORNKING.id, _.KingdomEnum.UNDERWORLD.id];
    }
  };
  AShopVO.prototype.getNameString = function () {
    return this.name.toLowerCase() + "_name";
  };
  AShopVO.prototype.getShortInfoString = function () {
    return this.name.toLowerCase() + "_short_info";
  };
  AShopVO.prototype.getUpgradeInfoString = function () {
    return this.name.toLowerCase() + "_upgrade_info";
  };
  AShopVO.prototype.getUpgradeVO = function () {
    if (this.upgradeWodID) {
      return d.CastleModel.wodData.createVObyWOD(this.upgradeWodID, this.wodDataType);
    } else {
      return null;
    }
  };
  AShopVO.prototype.getDowngradeVO = function () {
    if (this.downgradeWodID != 0) {
      return d.CastleModel.wodData.createVObyWOD(this.downgradeWodID, this.wodDataType);
    } else {
      return null;
    }
  };
  AShopVO.prototype.getLowestDowngradeVO = function () {
    var e;
    var t = this;
    do {
      if (e = t.getDowngradeVO()) {
        t = e;
      }
    } while (e);
    return t;
  };
  Object.defineProperty(AShopVO.prototype, "hasUpgrade", {
    get: function () {
      return this.upgradeWodID > 0;
    },
    enumerable: true,
    configurable: true
  });
  AShopVO.prototype.hasUserLevelAndEffectsForUpgrade = function () {
    var e = this.getUpgradeVO();
    return !!e && e.isAvailableByLevelAndEffect;
  };
  AShopVO.prototype.canUpgrade = function () {
    return !!this.hasUserLevelAndEffectsForUpgrade() && (!this.isConstructionExpertRequiredForUpgrade || !!d.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_CONSTRUCTION_EXPERT));
  };
  Object.defineProperty(AShopVO.prototype, "isConstructionExpertRequiredForUpgrade", {
    get: function () {
      if (this.upgradeWodID != 0) {
        var e = I.castAs(d.CastleModel.wodData.getBuildingVOById(this.upgradeWodID), "AShopVO");
        if (e && e.needConstructionExpert) {
          return true;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  AShopVO.prototype.canBeBuildByResourceFields = function () {
    return true;
  };
  AShopVO.prototype.getRequiredLevel = function () {
    if (this.requiredLegendLevel > 0) {
      return this.requiredLegendLevel;
    } else if (this.earlyUnlockRequiredLevel != 0) {
      return this.earlyUnlockRequiredLevel;
    } else {
      return this.requiredLevel;
    }
  };
  AShopVO.prototype.getDeltaMightValue = function () {
    if (this.level > 1 && this.mightValue > 0) {
      return l.int(this.mightValue - this.getDowngradeVO().mightValue);
    } else {
      return this.mightValue;
    }
  };
  AShopVO.prototype.isAvailableInAreaTypeAndKingdomId = function (e, t) {
    return this.isAvailableInAreaType(e) && this.isAvailableByKingdomId(t);
  };
  AShopVO.prototype.isAvailableInAreaType = function (e) {
    var t = true;
    if (this._isBattleGround) {
      t = u.ABGHelper.isOnABGServer && this._isBattleGround;
    }
    if (this._isNotBattleGround) {
      t = !u.ABGHelper.isOnABGServer && this._isNotBattleGround;
    }
    return (this.onlyInAreaTypes.length <= 0 || this.onlyInAreaTypes.indexOf(e) >= 0) && t;
  };
  Object.defineProperty(AShopVO.prototype, "isAvailableByLevelAndEffect", {
    get: function () {
      return this.isAvailableByLevel && this.isAvailableByEffect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "isAvailableByEffect", {
    get: function () {
      if (this.effectLocked && !d.CastleModel.legendSkillData.getSceatSkillEffectValue(g.EffectTypeEnum.EFFECT_ENABLE_BUILDINGS).hasID(this.wodId)) {
        return false;
      }
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "isAvailableByLevel", {
    get: function () {
      if (this.earlyUnlockRequiredLevel != 0) {
        return this.earlyUnlockRequiredLevel <= d.CastleModel.userData.userLevel && this.requiredLegendLevel <= d.CastleModel.userData.userLegendLevel;
      } else {
        return this.requiredLevel <= d.CastleModel.userData.userLevel && this.requiredLegendLevel <= d.CastleModel.userData.userLegendLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  AShopVO.prototype.isAvailableByKingdomId = function (e) {
    return this.onlyInKingdomIds.length <= 0 || this.onlyInKingdomIds.indexOf(e) >= 0;
  };
  AShopVO.prototype.isAvailableByMapId = function (e) {
    return this.availableInMapIds.indexOf(e) >= 0;
  };
  AShopVO.prototype.isOnlyAvailableByMapIds = function () {
    return this.availableInMapIds.length > 0;
  };
  AShopVO.prototype.isOnlyAvailableInEvent = function () {
    if (this.onlyInEventIds != null) {
      for (var e = 0, t = this.onlyInEventIds; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && d.CastleModel.specialEventData.isEventActive(i)) {
          return true;
        }
      }
    }
    return false;
  };
  Object.defineProperty(AShopVO.prototype, "costC1", {
    get: function () {
      return d.CastleModel.costsData.getFinalCostsC1(this.costs.getAmountOrDefaultByType(E.CollectableEnum.C1));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "costC2", {
    get: function () {
      return d.CastleModel.costsData.getFinalCostsC2(this.costs.getAmountOrDefaultByType(E.CollectableEnum.C2));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "basicCostC1", {
    get: function () {
      return this.costs.getAmountOrDefaultByType(E.CollectableEnum.C1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "basicCostC2", {
    get: function () {
      return this.costs.getAmountOrDefaultByType(E.CollectableEnum.C2);
    },
    enumerable: true,
    configurable: true
  });
  AShopVO.prototype.getShopIconURL = function (e) {
    return s.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.getShopIconName(e));
  };
  AShopVO.prototype.getShopIconName = function (e) {
    return this.getVisualClassName();
  };
  AShopVO.prototype.getCost = function (e) {
    switch (e.type) {
      case E.CollectableEnum.C1:
        return this.costC1;
      case E.CollectableEnum.C2:
        return this.costC2;
    }
    return l.int(this.costs.getAmountOrDefaultByTypeVO(e));
  };
  AShopVO.prototype.getCostTypes = function () {
    return this.costs.getContainingTypes();
  };
  Object.defineProperty(AShopVO.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "requiredLevel", {
    get: function () {
      return this._requiredLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "storeable", {
    get: function () {
      return this._storeable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "shopCategory", {
    get: function () {
      return this._shopCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    set: function (e) {
      this._level = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "upgradeWodID", {
    get: function () {
      return this._upgradeWodID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "downgradeWodID", {
    get: function () {
      return this._downgradeWodID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "maximumCount", {
    get: function () {
      return this._maximumCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "destructable", {
    get: function () {
      return this._destructable || a.EnvGlobalsHandler.globals.isOnTemporaryServer && this._tempServerDestructable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "slumLevelNeeded", {
    get: function () {
      return this._slumLevelNeeded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "inventoryAmount", {
    get: function () {
      return this._inventoryAmount;
    },
    set: function (e) {
      this._inventoryAmount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "discountedCostC2", {
    get: function () {
      return this._discountedCostC2;
    },
    set: function (e) {
      this._discountedCostC2 = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "needConstructionExpert", {
    get: function () {
      return this._needConstructionExpert;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "xp", {
    get: function () {
      var e = 0;
      var t = 0;
      if (d.CastleModel.areaData && d.CastleModel.areaData.activeConstructionItems) {
        var i = new p.CastleEffectConditionVO(d.CastleModel.areaData.activeArea.areaInfo.areaType, d.CastleModel.areaData.activeArea.areaInfo.spaceID);
        e = d.CastleModel.areaData.activeConstructionItems.getConstructionItemEffectValue(h.CastleEffectEnum.XPBOOSTBUILDBUILDINGS);
        t = d.CastleModel.areaData.activeConstructionItems.getEffectValue(g.EffectTypeEnum.EFFECT_TYPE_BUILDING_XP_BOOST, i).strength;
      }
      var n = d.CastleModel.researchData.getResearchEffectValue(g.EffectTypeEnum.EFFECT_TYPE_BUILDING_XP_BOOST).strength;
      var o = d.CastleModel.legendSkillData.getTotalValueOfLegendSkillEffect(C.CastleLegendSkillEffectsEnum.XP_CONSTRUCTION_BONUS);
      return Math.ceil(this._xp * (1 + (e + t + n + o) / 100));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "requiredLegendLevel", {
    get: function () {
      return this._requiredLegendLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "onlyInKingdomIds", {
    get: function () {
      return this._onlyInKingdomIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "onlyInEventIds", {
    get: function () {
      return this._onlyInEventIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "availableInMapIds", {
    get: function () {
      return this._availableInMapIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "onlyInAreaTypes", {
    get: function () {
      return this._onlyInAreaTypes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "mightValue", {
    get: function () {
      return this._mightValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "sellCostC1", {
    get: function () {
      return this._sellCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "sellBuildingVO", {
    get: function () {
      return this._sellBuildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "earlyUnlockRequiredLevel", {
    get: function () {
      return this._earlyUnlockRequiredLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "tempServerDestructable", {
    get: function () {
      return this._tempServerDestructable;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "effectLocked", {
    get: function () {
      return this._effectLocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AShopVO.prototype, "sceatSkillLocked", {
    get: function () {
      return this._sceatSkillLocked;
    },
    enumerable: true,
    configurable: true
  });
  return AShopVO;
}(require("./566.js").AInteractiveIsoObjectVO);
exports.AShopVO = m;
o.classImplementsInterfaces(m, "IShopVO", "ICostVO", "IInventoryVO");
var f = require("./86.js");
var O = require("./50.js");
var E = require("./12.js");
var y = require("./48.js");
var b = require("./268.js");
var D = require("./269.js");
var I = require("./1.js");
var T = require("./2038.js");