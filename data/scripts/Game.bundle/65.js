Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./22.js");
var u = require("./4.js");
var d = require("./97.js");
var p = require("./2031.js");
var h = require("./482.js");
var g = require("./87.js");
var C = function (e) {
  function AEffectBuildingVO() {
    var t = this;
    t._resourceStorage = new O.CollectableList();
    t._hideout = 0;
    t._resourceBoosts = new O.CollectableList();
    t._recruitSpeedBoost = 0;
    t._alliFoodProductionBoost = 0;
    t._shownTravelBoost = 0;
    t._buildSpeedBoost = 0;
    t._buildingCostReduction = 0;
    t._foodReduction = 0;
    t._commanders = 0;
    t._barons = 0;
    t._guards = 0;
    t._spies = 0;
    t._population = 0;
    t._decoPoints = 0;
    t._marketCarriages = 0;
    t._morality = 0;
    t._unitCapacity = 0;
    t._unitWallCount = 0;
    t._islandAlliancePoints = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AEffectBuildingVO, e);
  AEffectBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._resourceStorage = m.CollectableManager.parser.createGoodsListSave(new v.CollectableItemWoodVO(c.CastleXMLUtils.getIntAttribute("woodStorage", t)), new T.CollectableItemStoneVO(c.CastleXMLUtils.getIntAttribute("stoneStorage", t)), new y.CollectableItemFoodVO(c.CastleXMLUtils.getIntAttribute("foodStorage", t)), new E.CollectableItemCoalVO(c.CastleXMLUtils.getIntAttribute("coalStorage", t)), new I.CollectableItemOilVO(c.CastleXMLUtils.getIntAttribute("oilStorage", t)), new b.CollectableItemGlassVO(c.CastleXMLUtils.getIntAttribute("glassStorage", t)), new D.CollectableItemIronVO(c.CastleXMLUtils.getIntAttribute("ironStorage", t)), new S.CollectableItemMeadVO(c.CastleXMLUtils.getIntAttribute("meadStorage", t)), new h.CollectableItemBeefVO(c.CastleXMLUtils.getIntAttribute("beefStorage", t)), new A.CollectableItemHoneyVO(c.CastleXMLUtils.getIntAttribute("honeyStorage", t)), new L.CollectableItemAquamarineVO(c.CastleXMLUtils.getIntAttribute("aquamarineStorage", t)));
    this._hideout = l.int(c.CastleXMLUtils.getIntAttribute("Hideout", t));
    this._resourceBoosts = m.CollectableManager.parser.createGoodsListSave(new v.CollectableItemWoodVO(c.CastleXMLUtils.getIntAttribute("Woodboost", t)), new T.CollectableItemStoneVO(c.CastleXMLUtils.getIntAttribute("Stoneboost", t)), new y.CollectableItemFoodVO(c.CastleXMLUtils.getIntAttribute("Foodboost", t)), new E.CollectableItemCoalVO(c.CastleXMLUtils.getIntAttribute("Coalboost", t)), new I.CollectableItemOilVO(c.CastleXMLUtils.getIntAttribute("Oilboost", t)), new b.CollectableItemGlassVO(c.CastleXMLUtils.getIntAttribute("Glassboost", t)), new D.CollectableItemIronVO(c.CastleXMLUtils.getIntAttribute("Ironboost", t)), new S.CollectableItemMeadVO(c.CastleXMLUtils.getIntAttribute("Meadboost", t)), new h.CollectableItemBeefVO(c.CastleXMLUtils.getIntAttribute("Beefboost", t)), new A.CollectableItemHoneyVO(c.CastleXMLUtils.getIntAttribute("Honeyboost", t)));
    this._alliFoodProductionBoost = l.int(c.CastleXMLUtils.getIntAttribute("alliFoodProductionBonus", t));
    this._recruitSpeedBoost = l.int(c.CastleXMLUtils.getIntAttribute("recruitSpeedBoost", t));
    this._shownTravelBoost = c.CastleXMLUtils.getNumberAttribute("shownTravelBonus", t);
    this._buildSpeedBoost = l.int(c.CastleXMLUtils.getIntAttribute("buildSpeedBoost", t));
    this._foodReduction = l.int(c.CastleXMLUtils.getIntAttribute("Foodreduction", t));
    this._buildingCostReduction = l.int(c.CastleXMLUtils.getIntAttribute("buildingCostReduction", t));
    this._commanders = l.int(c.CastleXMLUtils.getIntAttribute("commanderSize", t));
    this._barons = l.int(c.CastleXMLUtils.getIntAttribute("baronSize", t));
    this._guards = l.int(c.CastleXMLUtils.getIntAttribute("guardSize", t));
    this._spies = l.int(c.CastleXMLUtils.getIntAttribute("spySize", t));
    this._decoPoints = l.int(c.CastleXMLUtils.getIntAttribute("decoPoints", t));
    this._population = l.int(c.CastleXMLUtils.getIntAttribute("Population", t));
    this._marketCarriages = l.int(c.CastleXMLUtils.getIntAttribute("marketCarriages", t));
    this._morality = l.int(c.CastleXMLUtils.getIntAttribute("Moral", t));
    this._unitCapacity = l.int(c.CastleXMLUtils.getIntAttribute("unitSize", t));
    this._unitWallCount = l.int(c.CastleXMLUtils.getIntAttribute("unitWallCount", t));
    this._islandAlliancePoints = l.int(c.CastleXMLUtils.getIntAttribute("islandAlliancePoints", t));
  };
  Object.defineProperty(AEffectBuildingVO.prototype, "maxStorageValue", {
    get: function () {
      var e = 0;
      for (var t = 0; t < this.resourceStorage.length; ++t) {
        var i = this.resourceStorage.getItemByIndex(t);
        if (_.ClientConstCollectable.GROUP_LIST_GOODS.indexOf(i.itemType) >= 0 && i.itemType != f.CollectableEnum.AQUAMARINE && i.amount > e) {
          e = i.amount;
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  AEffectBuildingVO.prototype.needsResourceTypeInCastle = function (e) {
    return this.resourceBoosts.getAmountOrDefaultByType(e) > 0;
  };
  AEffectBuildingVO.prototype.canBeBuildByResourceFields = function () {
    var e = this.isoData ? this.isoData.areaData.storage : u.CastleModel.areaData.activeStorage;
    var t = [f.CollectableEnum.WOOD, f.CollectableEnum.STONE, f.CollectableEnum.FOOD];
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && this.needsResourceTypeInCastle(o)) {
          return e.getItem(o).fieldEfficiency != 0;
        }
      }
    }
    return true;
  };
  Object.defineProperty(AEffectBuildingVO.prototype, "multiInfoPanelVO", {
    get: function () {
      var e;
      if (this._buildingState == g.IsoBuildingStateEnum.INITIAL) {
        return null;
      } else {
        (e = new p.CastleMultiInfoBuildingPanelVO()).titleID = this.getNameString();
        if (this._buildingState == g.IsoBuildingStateEnum.BUILD_IN_PROGRESS || this._buildingState == g.IsoBuildingStateEnum.BUILD_STOPPED) {
          e.copyID = "buildInProgress";
          return e;
        } else {
          e.copyID = this.getShortInfoString();
          this.createAdditionalEffectItems(e);
          this.createInfoPanelItems(e);
          return e;
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "infoDialogVO", {
    get: function () {
      var e;
      (e = new p.CastleMultiInfoBuildingPanelVO()).titleID = this.getNameString();
      e.buildingVO = this;
      e.copyID = this.getShortInfoString();
      this.createAdditionalEffectItems(e);
      this.createInfoDialogItems(e);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "storageDialogVO", {
    get: function () {
      var e;
      (e = new p.CastleMultiInfoBuildingPanelVO()).titleID = this.getNameString();
      e.buildingVO = this;
      e.copyID = this.getShortInfoString();
      this.createStorageDialogItems(e);
      return e;
    },
    enumerable: true,
    configurable: true
  });
  AEffectBuildingVO.prototype.createAdditionalEffectItems = function (e) {};
  AEffectBuildingVO.prototype.createInfoDialogItems = function (e) {
    this.createInfoPanelItems(e);
  };
  AEffectBuildingVO.prototype.createInfoPanelItems = function (e) {};
  AEffectBuildingVO.prototype.createStorageDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GridSize, "gridSize", new s.LocalizedTextVO("filter_gridSize_custom", [this.width, this.height]));
    if (this.mightValue > 0) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might_starOnly_noShadow, "playerMight", new r.LocalizedNumberVO(this.mightValue));
    } else {
      e.addInfoItem(null, "", new a.TextVO(""));
    }
  };
  Object.defineProperty(AEffectBuildingVO.prototype, "resourceStorage", {
    get: function () {
      return this._resourceStorage;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "hideout", {
    get: function () {
      return this._hideout;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "recruitSpeedBoost", {
    get: function () {
      return this._recruitSpeedBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "alliFoodProductionBoost", {
    get: function () {
      return this._alliFoodProductionBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "shownTravelBoost", {
    get: function () {
      return this._shownTravelBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "buildingCostReduction", {
    get: function () {
      return this._buildingCostReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "foodReduction", {
    get: function () {
      return this._foodReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "commanders", {
    get: function () {
      return this._commanders;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "barons", {
    get: function () {
      return this._barons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "guards", {
    get: function () {
      return Math.ceil(this._guards);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "spies", {
    get: function () {
      return this._spies;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "population", {
    get: function () {
      if (this.areValuesActive) {
        return Math.ceil(this._population);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "decoPoints", {
    get: function () {
      return this._decoPoints + this.getConstructionItemEffectValue(d.CastleEffectEnum.DECOPOINTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "marketCarriages", {
    get: function () {
      return Math.ceil(this._marketCarriages) + this.getConstructionItemEffectValue(d.CastleEffectEnum.MARKETCARRIAGES);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "islandAlliancePoints", {
    get: function () {
      return this._islandAlliancePoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "buildSpeedBoost", {
    get: function () {
      return this._buildSpeedBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "resourceBoosts", {
    get: function () {
      return this._resourceBoosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "morality", {
    get: function () {
      return this._morality;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "unitCapacity", {
    get: function () {
      return this._unitCapacity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEffectBuildingVO.prototype, "unitWallCount", {
    get: function () {
      return this._unitWallCount;
    },
    enumerable: true,
    configurable: true
  });
  return AEffectBuildingVO;
}(require("./483.js").ABasicBuildingVO);
exports.AEffectBuildingVO = C;
var _ = require("./86.js");
var m = require("./50.js");
var f = require("./12.js");
var O = require("./48.js");
var E = require("./505.js");
var y = require("./453.js");
var b = require("./506.js");
var D = require("./507.js");
var I = require("./508.js");
var T = require("./267.js");
var v = require("./268.js");
var S = require("./533.js");
var A = require("./637.js");
var L = require("./1013.js");
o.classImplementsInterfaces(C, "IShopVO", "ICostVO", "IInventoryVO");