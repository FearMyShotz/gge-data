Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./129.js");
var p = require("./888.js");
var h = require("./183.js");
var g = require("./15.js");
var C = require("./54.js");
var _ = require("./4.js");
var m = function (e) {
  function CastleMilitaryData() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).resetCategories();
    t.initMilitaryData();
    return t;
  }
  n.__extends(CastleMilitaryData, e);
  CastleMilitaryData.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.clearMilitaryData();
  };
  CastleMilitaryData.prototype.clearMilitaryData = function () {
    this._unitInventory.removeEventListener(p.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._unitInCourse.removeEventListener(p.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._unitStrongholdInventory.removeEventListener(p.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._unitHospitalInventory.removeEventListener(p.UnitInventoryEvent.UPDATED, this.bindFunction(this.onHospitalUnitInventoryUpdated));
  };
  CastleMilitaryData.prototype.initMilitaryData = function () {
    this._unitInventory = new b.UnitInventoryDictionary();
    this._unitInventory.addEventListener(p.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._unitInCourse = new b.UnitInventoryDictionary();
    this._unitInCourse.addEventListener(p.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._unitStrongholdInventory = new y.StrongholdUnitInventory();
    this._unitStrongholdInventory.addEventListener(p.UnitInventoryEvent.UPDATED, this.bindFunction(this.onUnitInventoryUpdated));
    this._unitHospitalInventory = new b.UnitInventoryDictionary();
    this._unitHospitalInventory.addEventListener(p.UnitInventoryEvent.UPDATED, this.bindFunction(this.onHospitalUnitInventoryUpdated));
    this.initPackageLists();
  };
  CastleMilitaryData.prototype.onHospitalUnitInventoryUpdated = function (e) {
    g.CastleBasicController.getInstance().dispatchEvent(new d.CastleMilitaryDataEvent(d.CastleMilitaryDataEvent.HOSPITALINVENTORY_UPDATED));
  };
  CastleMilitaryData.prototype.onUnitInventoryUpdated = function (e) {
    g.CastleBasicController.getInstance().dispatchEvent(new d.CastleMilitaryDataEvent(d.CastleMilitaryDataEvent.INVENTORY_UPDATED));
  };
  CastleMilitaryData.prototype.executeUpdate = function (e) {
    if (this._packageLists != null) {
      for (var t = 0, i = this._packageLists; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.update(e);
        }
      }
    }
  };
  CastleMilitaryData.prototype.initPackageLists = function () {
    this._packageLists = [];
    for (var e = 0; e < CastleMilitaryData.NUMBER_OF_PACKAGE_LISTS; e++) {
      this._packageLists.push(new E.UnitPackageList(e));
    }
  };
  CastleMilitaryData.prototype.getPackageListByCategory = function (e) {
    return this.getPackageListById(this.getListIdByCategory(e));
  };
  CastleMilitaryData.prototype.getPackageListById = function (e) {
    if (e < this._packageLists.length && e >= 0) {
      return this._packageLists[e];
    } else {
      return null;
    }
  };
  CastleMilitaryData.prototype.parse_SPL = function (e) {
    if (e && e.hasOwnProperty("LID")) {
      var t = c.int(e.LID);
      var i = this.getPackageListById(t);
      if (t == this.getListIdByCategory(u.ClientConstCastle.CATEGORY_HOSPITAL)) {
        i.parseList(e.PIDL);
        i.activeSlotIndex = parseInt(e.ASI);
      } else {
        i.isNotKeepingCurrentRecruitmentTrack = true;
        i.parseMilitaryList(e.QS);
        i.parseCurrentProductionSlot(e.PS);
        i.recruitmentMode = c.int(e.RM);
        i.remainingSecondsForProduction = c.int(e.TCT);
      }
      g.CastleBasicController.getInstance().dispatchEvent(new d.CastleMilitaryDataEvent(d.CastleMilitaryDataEvent.PACKAGELIST_UPDATED, [t]));
    }
  };
  CastleMilitaryData.prototype.parse_GUI = function (e) {
    if (e && _.CastleModel.areaData.activeArea) {
      this._unitInventory.fillFromWodAmountArray(e.I);
      this._unitInCourse.fillFromWodAmountArray(e.TU);
      this._unitStrongholdInventory.fillFromWodAmountArray(e.SHI);
      this._unitHospitalInventory.fillFromWodAmountArray(e.HI);
      if (_.CastleModel.areaData.activeArea && _.CastleModel.areaData.activeAreaInfo && _.CastleModel.areaData.activeAreaInfo.objectId == r.EventConst.EVENTCAMP_AREA_ID && _.CastleModel.specialEventData.activeSeasonVO && _.CastleModel.specialEventData.activeSeasonVO.treasureMapVO) {
        _.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.parseUnitInventory(e.I);
      }
      _.CastleModel.treasureMapData.dispatchEvent(new h.CastleTreasureMapEvent(h.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, null));
      g.CastleBasicController.getInstance().dispatchEvent(new d.CastleMilitaryDataEvent(d.CastleMilitaryDataEvent.ALL_INVENTORIES_UPDATED));
    }
  };
  CastleMilitaryData.prototype.parse_rue = function (e) {
    if (e) {
      var t = c.int(e.AID);
      var i = c.int(e.SID);
      var n = _.CastleModel.areaData.activeArea;
      if (n && t == n.areaId && i == n.spaceId) {
        var o = c.int(e.WID);
        var a = c.int(e.NUA);
        this.unitInventory.setUnit(o, a);
      }
    }
  };
  CastleMilitaryData.prototype.updateMilitaryData = function () {
    this.resetCategories();
    if (O.Iso.data) {
      for (var e = 0, t = O.Iso.data.objects.innerBuildings.list; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = a.castAs(i, "AUnitProductionBuildingVO");
          if (n && n.areValuesActive) {
            this.setBuildingLevel(n.name, n.level);
            this.addAllowedBuildingCategory(n.name);
            this.addUnitCategory(n.unitCategory);
          }
        }
      }
    }
  };
  CastleMilitaryData.prototype.resetProductionSpeed = function () {
    this._buildingProductionSpeed = new Map();
  };
  CastleMilitaryData.prototype.getBuildingProductionSpeed = function (e) {
    if (this._buildingProductionSpeed.get(e)) {
      return this._buildingProductionSpeed.get(e);
    } else {
      return 0;
    }
  };
  CastleMilitaryData.prototype.setBuildingProductionSpeed = function (e, t) {
    this._buildingProductionSpeed.set(e, t);
  };
  CastleMilitaryData.prototype.getBuildingLevel = function (e) {
    if (this._buildingLevels.get(e)) {
      return c.int(this._buildingLevels.get(e));
    } else {
      return 0;
    }
  };
  CastleMilitaryData.prototype.setBuildingLevel = function (e, t) {
    if (this._buildingLevels.get(e)) {
      this._buildingLevels.set(e, Math.max(this._buildingLevels.get(e), t));
    } else {
      this._buildingLevels.set(e, t);
    }
  };
  CastleMilitaryData.prototype.addAllowedBuildingCategory = function (e) {
    this._buildingCategorys.set(e, true);
  };
  CastleMilitaryData.prototype.isBuildingCategoryAllowed = function (e) {
    return !!this._buildingCategorys.get(e);
  };
  Object.defineProperty(CastleMilitaryData.prototype, "userHasAnyMilitarybuilding", {
    get: function () {
      return o.DictionaryUtil.getKeys(this._buildingCategorys).length > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleMilitaryData.prototype.addUnitCategory = function (e) {
    this._unitCategorys.set(e, true);
  };
  CastleMilitaryData.prototype.isUnitCategoryAllowed = function (e) {
    return !!this._unitCategorys.get(e);
  };
  CastleMilitaryData.prototype.getFirstAvalibleUnitCategory = function () {
    var e = o.DictionaryUtil.getKeys(this._unitCategorys);
    if (e.length > 0) {
      return e[0];
    } else {
      return "";
    }
  };
  CastleMilitaryData.prototype.resetCategories = function () {
    this._buildingLevels = new Map();
    this._buildingCategorys = new Map();
    this._unitCategorys = new Map();
  };
  Object.defineProperty(CastleMilitaryData.prototype, "strongholdUnitCount", {
    get: function () {
      return this._unitStrongholdInventory.getSoldierCount();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "currentHiddenSoldierCapacity", {
    get: function () {
      if (O.Iso.data.objects.provider.hasFunctionalBuildingByType(f.IsoObjectEnum.STRONGHOLD)) {
        return O.Iso.data.objects.provider.getObjectByType(f.IsoObjectEnum.STRONGHOLD).hiddenSoldiersSpace;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "isStrongholdFull", {
    get: function () {
      return this.currentHiddenSoldierCapacity == this.strongholdUnitCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "currentHiddenSoldierSpace", {
    get: function () {
      return this.currentHiddenSoldierCapacity - this.strongholdUnitCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "doWoundedSoldiersExist", {
    get: function () {
      return this._unitHospitalInventory.getSoldierCount() > 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleMilitaryData.prototype.getListIdByCategory = function (e) {
    switch (e) {
      case u.ClientConstCastle.UNIT_CATEGORY_SOLDIERS:
        return c.int(l.UnitProductionConst.UNIT_LIST);
      case u.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES:
        return c.int(l.UnitProductionConst.AUXILIARY_LIST);
      case u.ClientConstCastle.UNIT_CATEGORY_TOOLS:
        return c.int(l.UnitProductionConst.TOOLS_LIST);
      case u.ClientConstCastle.CATEGORY_HOSPITAL:
        return c.int(l.UnitProductionConst.HOSPITAL_LIST);
      default:
        return -1;
    }
  };
  CastleMilitaryData.prototype.isUnitInProgress = function (e) {
    for (var t = 0, i = this.getPackageListByCategory(u.ClientConstCastle.UNIT_CATEGORY_SOLDIERS).slotsArray; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && n.wodId == e) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(CastleMilitaryData.prototype, "unitInventory", {
    get: function () {
      return this._unitInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "unitInCourse", {
    get: function () {
      return this._unitInCourse;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "unitStrongholdInventory", {
    get: function () {
      return this._unitStrongholdInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleMilitaryData.prototype, "unitHospitalInventory", {
    get: function () {
      return this._unitHospitalInventory;
    },
    enumerable: true,
    configurable: true
  });
  CastleMilitaryData.NUMBER_OF_PACKAGE_LISTS = 4;
  return CastleMilitaryData;
}(C.CastleBasicData);
exports.CastleMilitaryData = m;
var f = require("./80.js");
var O = require("./33.js");
var E = require("./5562.js");
var y = require("./553.js");
var b = require("./156.js");
s.classImplementsInterfaces(m, "IUpdatable");