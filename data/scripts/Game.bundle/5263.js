Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AreaData() {
    this._data = new Map();
    this._updater = new a.AreaDataUpdater(this);
  }
  AreaData.prototype.initData = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new n.associatedClass();
          if (o) {
            this._data.set(n, o);
            o.init(this);
          }
        }
      }
    }
  };
  AreaData.prototype.destroy = function () {
    if (this._data != null) {
      for (var e = 0, t = Array.from(this._data.values()); e < t.length; e++) {
        t[e].destroy();
      }
    }
    this._data = null;
  };
  Object.defineProperty(AreaData.prototype, "isMyArea", {
    get: function () {
      return this.areaInfo && this.areaInfo.isOwnMapobject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isMyMainCastle", {
    get: function () {
      if (r.CastleModel.kingdomData && this.isMyArea) {
        var e = r.CastleModel.userData.castleList.getMainCastleByKingdomID(r.CastleModel.kingdomData.activeKingdomID);
        return e && e.objectId == this._areaInfo.objectId;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isMyHomeCastle", {
    get: function () {
      return this.areaInfo && r.CastleModel.userData.castleList.getHomeCastle().objectId == this._areaInfo.objectId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isInAreaWithHunter", {
    get: function () {
      return this.isMyMainCastle && !this.isFactionCamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isUnderConquerProcess", {
    get: function () {
      return this.areaInfo.isUnderConquerControl;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isUnderConquerProcessByMe", {
    get: function () {
      var e = this.areaInfo;
      return !!e && e.isUnderConquerControl && e.occupierID == r.CastleModel.userData.playerID;
    },
    enumerable: true,
    configurable: true
  });
  AreaData.prototype.getData = function (e) {
    return this._data.get(e);
  };
  Object.defineProperty(AreaData.prototype, "areaId", {
    get: function () {
      if (this.areaInfo) {
        return this.areaInfo.objectId;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "spaceId", {
    get: function () {
      if (this.areaInfo) {
        if (this.isTreasureCamp) {
          return this.areaInfo.mapID;
        } else {
          return this.areaInfo.kingdomID;
        }
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isFactionCamp", {
    get: function () {
      return !!this.areaInfo && this.areaInfo.areaType == u.WorldConst.AREA_TYPE_FACTION_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isSeasonCamp", {
    get: function () {
      return !!this.areaInfo && (this.areaInfo.areaType == u.WorldConst.AREA_TYPE_TREASURE_CAMP || this.areaInfo.areaType == u.WorldConst.AREA_TYPE_FACTION_CAMP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isTreasureCamp", {
    get: function () {
      return !!this.areaInfo && this.areaInfo.areaType == u.WorldConst.AREA_TYPE_TREASURE_CAMP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isCapital", {
    get: function () {
      return this.areaInfo.areaType == u.WorldConst.AREA_TYPE_CAPITAL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isMetropol", {
    get: function () {
      return this.areaInfo.areaType == u.WorldConst.AREA_TYPE_METROPOL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isKingdomCastle", {
    get: function () {
      return this.areaInfo.areaType == u.WorldConst.AREA_TYPE_KINGDOM_CASTLE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "isLowLevelUnderworld", {
    get: function () {
      return this.isTreasureCamp && !!r.CastleModel.specialEventData.getEventByClass(o.PrivateUnitDealerEventVO);
    },
    enumerable: true,
    configurable: true
  });
  AreaData.prototype.getTotalRepairCostC2 = function () {
    var e;
    var t;
    var i = 0;
    for (var n = 0, o = this.isoData.objects.innerBuildings.list; n < o.length; n++) {
      e = o[n];
      if (l.instanceOfClass(e, "ABasicBuildingVO")) {
        if (!(t = castAs(e, "ABasicBuildingVO")) || !t.isDamaged || t.buildingState != p.IsoBuildingStateEnum.BUILD_COMPLETED) {
          continue;
        }
        i += t.getRepairDurationForAllRepairFunction();
      }
    }
    for (var a = 0, s = this.isoData.objects.defences.towers; a < s.length; a++) {
      if ((t = s[a]) && t.isDamaged && t.buildingState == p.IsoBuildingStateEnum.BUILD_COMPLETED) {
        i += t.getRepairDurationForAllRepairFunction();
      }
    }
    return d.int(c.ConstructionConst.getRepairAllCostsC2(i));
  };
  Object.defineProperty(AreaData.prototype, "isoData", {
    get: function () {
      return this.getData(s.AreaDataEnum.ISO_DATA);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "commonInfo", {
    get: function () {
      return this.getData(s.AreaDataEnum.COMMON_INFO);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "storage", {
    get: function () {
      return this.getData(s.AreaDataEnum.STORAGE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "constructionList", {
    get: function () {
      return this.getData(s.AreaDataEnum.CONSTRUCTION_LIST);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "constructionItems", {
    get: function () {
      return this.getData(s.AreaDataEnum.CONSTRUCTION_ITEMS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "morality", {
    get: function () {
      return this.getData(s.AreaDataEnum.MORALITY);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "slum", {
    get: function () {
      return this.getData(s.AreaDataEnum.SLUM);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "areaInfo", {
    get: function () {
      return this._areaInfo;
    },
    set: function (e) {
      this._areaInfo = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AreaData.prototype, "updater", {
    get: function () {
      return this._updater;
    },
    enumerable: true,
    configurable: true
  });
  return AreaData;
}();
exports.AreaData = n;
var o = require("./999.js");
var a = require("./5264.js");
var s = require("./1158.js");
var r = require("./4.js");
var l = require("./1.js");
var c = require("./5.js");
var u = require("./5.js");
var d = require("./6.js");
var p = require("./87.js");