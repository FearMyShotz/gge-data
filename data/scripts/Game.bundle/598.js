Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./28.js");
var p = require("./103.js");
var h = require("./30.js");
var g = require("./4.js");
var C = require("./108.js");
var _ = require("./422.js");
var m = require("./576.js");
var f = require("./64.js");
var O = require("./275.js");
var E = require("./345.js");
var y = require("./205.js");
var b = function (e) {
  function VillageMapobjectVO() {
    var t = this;
    t._villageType = 0;
    t._occupierPId = 0;
    t._useFlag = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "Village";
    t._areaType = r.WorldConst.AREA_TYPE_VILLAGE;
    t._isVisibleOnMap = false;
    t._secondsSinceEspionage = -1;
    t._occupierPId = -1;
    return t;
  }
  n.__extends(VillageMapobjectVO, e);
  VillageMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i) {
    var n = this;
    if (i === undefined) {
      i = false;
    }
    var o = g.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var a = "Village_Mapobject_" + this.typeName + "_" + o;
    this._graphicClassName = a;
    this._useFlag = e;
    return m.mapObjectsPool.obtain(a, function () {
      var e = new C.CastleDisplayObjectClipContainer();
      var t = n.getAsExternalClip(a, n.assetFileURL("Villages_" + o));
      e.addItem(t);
      if (n._useFlag && n.ownerInfo && !n.ownerInfo.isDungeonOwner) {
        var i = n.getVillageFlagClip(false);
        e.addItem(i);
        if (n.ownerInfo.hasVIPFlag) {
          i.scaleX = i.scaleY *= O.CastleWorldmapConst.ZOOM_MAX;
        }
        _.WorldmapObjectFlagHelper.watchAndFix(t, i);
      }
      return e;
    });
  };
  VillageMapobjectVO.prototype.getVillageFlagClip = function (e) {
    if (e) {
      return this.getFlagClip(this.ownerInfo, "PremiumVillage");
    } else {
      return this.getFlagClip(this.ownerInfo, "Village");
    }
  };
  VillageMapobjectVO.prototype.parseAreaInfo = function (e) {
    if (e && e.length != 0) {
      this._areaType = e[0];
      this._absAreaPosX = e[1];
      this._absAreaPosY = e[2];
      this._objectId = e[3];
      this._occupierPId = c.int(e[4]);
      this._ownerInfo = g.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierPId);
      this._villageType = c.int(e[5]);
      this._kingdomID = e[6];
      this._secondsSinceEspionage = e[7];
      this._spyInfoReceivingTime = h.CachedTimer.getCachedTimer() * d.ClientConstTime.MILLISEC_2_SEC;
      this._areaNameString = e[8];
      this._isVisibleOnMap = true;
      this.dispatchEvent(p.EventInstanceMapper.getEvent(f.VisualVOEvent, f.VisualVOEvent.VALUEOBJECT_CHANGE));
      var t = c.int(this._ownerInfo ? this._ownerInfo.playerLevel : g.CastleModel.kingdomData.getKingdomVOByID(this._kingdomID).minNonPremiumUnlockLevel);
      var i = c.int(s.CombatConst.getWallOrGateWodIdForVillages(t, true));
      var n = c.int(s.CombatConst.getWallOrGateWodIdForVillages(t, false));
      if (g.CastleModel.wodData.voSubList(D.CastleWodData.TYPE_BUILDING).get(i)) {
        this._wallLevel = g.CastleModel.wodData.voSubList(D.CastleWodData.TYPE_BUILDING).get(i).level;
        this._gateLevel = g.CastleModel.wodData.voSubList(D.CastleWodData.TYPE_BUILDING).get(n).level;
      } else {
        this._wallLevel = 0;
        this._gateLevel = 0;
      }
      this._moatLevel = 0;
      this._keepLevel = 0;
    }
  };
  VillageMapobjectVO.prototype.parseAreaInfoBattleLog = function (t) {
    e.prototype.parseAreaInfoBattleLog.call(this, t);
    this._villageType = c.int(t.RT);
  };
  Object.defineProperty(VillageMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString && this._areaNameString != "") {
        return this._areaNameString;
      } else {
        return l.Localize.text("village");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(I.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "typeName", {
    get: function () {
      switch (this._villageType) {
        case r.WorldConst.VILLAGE_TYPE_WOOD:
          return "Wood";
        case r.WorldConst.VILLAGE_TYPE_STONE:
          return "Stone";
        case r.WorldConst.VILLAGE_TYPE_FOOD:
          return "Food";
        case r.WorldConst.VILLAGE_TYPE_COAL:
          return "Coal";
        case r.WorldConst.VILLAGE_TYPE_OIL:
          return "Oil";
        case r.WorldConst.VILLAGE_TYPE_GLASS:
          return "Glass";
        default:
          return "Invalid";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "productivityBoost", {
    get: function () {
      var e = g.CastleModel.kingdomData.getKingdomVOByID(this._kingdomID).villagesInfo;
      switch (this._villageType) {
        case r.WorldConst.VILLAGE_TYPE_FOOD:
          if (e) {
            return e.productivityFoodBoost;
          } else {
            return 0;
          }
        case r.WorldConst.VILLAGE_TYPE_STONE:
          if (e) {
            return e.productivityStoneBoost;
          } else {
            return 0;
          }
        case r.WorldConst.VILLAGE_TYPE_WOOD:
          if (e) {
            return e.productivityWoodBoost;
          } else {
            return 0;
          }
        case r.WorldConst.VILLAGE_TYPE_COAL:
          if (e) {
            return e.productivityCoalBoost;
          } else {
            return 0;
          }
        case r.WorldConst.VILLAGE_TYPE_OIL:
          if (e) {
            return e.productivityOilBoost;
          } else {
            return 0;
          }
        case r.WorldConst.VILLAGE_TYPE_GLASS:
          if (e) {
            return e.productivityGlassBoost;
          } else {
            return 0;
          }
        default:
          return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "villageTypeDescription", {
    get: function () {
      switch (this._villageType) {
        case r.WorldConst.VILLAGE_TYPE_FOOD:
          return l.Localize.text("village_boost_food", [this.productivityBoost]);
        case r.WorldConst.VILLAGE_TYPE_STONE:
          return l.Localize.text("village_boost_stone", [this.productivityBoost]);
        case r.WorldConst.VILLAGE_TYPE_WOOD:
          return l.Localize.text("village_boost_wood", [this.productivityBoost]);
        case r.WorldConst.VILLAGE_TYPE_COAL:
          return l.Localize.text("village_boost_coal", [this.productivityBoost]);
        case r.WorldConst.VILLAGE_TYPE_OIL:
          return l.Localize.text("village_boost_oliveoil", [this.productivityBoost]);
        case r.WorldConst.VILLAGE_TYPE_GLASS:
          return l.Localize.text("village_boost_glass", [this.productivityBoost]);
        default:
          return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  VillageMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && !this.isOwnMapobject && !g.CastleModel.userData.isUserInMyAlliance(this.ownerInfo) && g.CastleModel.allianceData.getStatusByAlliance(this.ownerInfo.allianceID) != a.AllianceConst.DIPLOMACY_REAL_ALLIED;
  };
  Object.defineProperty(VillageMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isOwnMapobject;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "isOwnMapobject", {
    get: function () {
      return this._occupierPId == g.CastleModel.userData.playerID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "isOwnMapobject").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "villageType", {
    get: function () {
      return this._villageType;
    },
    set: function (e) {
      this._villageType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "occupierPId", {
    get: function () {
      return this._occupierPId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "isPlayerOwned", {
    get: function () {
      return this._occupierPId >= 0;
    },
    enumerable: true,
    configurable: true
  });
  VillageMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.ownerInfo != null && this.ownerInfo.playerID === g.CastleModel.userData.playerID;
  };
  VillageMapobjectVO.prototype.canBeSupported = function () {
    return !this.isOwnMapobject && g.CastleModel.userData.isUserInMyAlliance(this.ownerInfo);
  };
  Object.defineProperty(VillageMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return !!this.ownerInfo && !this.isOwnMapobject && !this.ownerInfo.isDungeonOwner;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "canChangeDefenceOnWorldmap", {
    get: function () {
      return this.isOwnMapobject;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "canChangeDefenceOnWorldmap").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "ignoresPeaceMode", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "ignoresPeaceMode").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "attackType", {
    get: function () {
      return u.ClientConstCastle.ACTION_TYPE_VILLAGE_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return Math.max(g.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).minNonPremiumUnlockLevel, Object.getOwnPropertyDescriptor(I.InteractiveMapobjectVO.prototype, "minimumOwnerLevel").get.call(this));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return E.UnitBaseLocationEnum.KINGDOM_CASTLE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.ContainerBuilderMapobjectVO.prototype, "unitBaseLocation").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return VillageMapobjectVO;
}(y.ContainerBuilderMapobjectVO);
exports.VillageMapobjectVO = b;
var D = require("./56.js");
var I = require("./101.js");
o.classImplementsInterfaces(b, "IDetailViewAble", "IWorldmapObjectVO");