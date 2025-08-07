Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./28.js");
var u = require("./103.js");
var d = require("./90.js");
var p = require("./30.js");
var h = require("./4.js");
var g = require("./109.js");
var C = require("./422.js");
var _ = require("./64.js");
var m = require("./597.js");
var f = function (e) {
  function ResourceIsleMapobjectVO() {
    var t = this;
    t._isleID = 0;
    t._villageLevel = 0;
    t._remainingOccupierTimestamp = 0;
    t._needingOccupierTime = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "ResourceIsle";
    t._areaType = a.WorldConst.AREA_TYPE_ISLE_RESOURCE;
    t._objectId = -1;
    t.setDefaultDefenceLevels();
    t._equipmentUniqueIdSkin = 0;
    return t;
  }
  n.__extends(ResourceIsleMapobjectVO, e);
  ResourceIsleMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = h.CastleModel.kingdomData.getKingdomVOByID(this.kingdomID).kingdomName;
    var o = "Village_Mapobject_" + this.typeName + "_" + n;
    var a = this.isleID <= 3;
    if (a) {
      o += "_Premium";
    }
    var s = new g.CastleDisplayObjectClipContainer();
    var r = this.getAsExternalClip(o, this.assetFileURL("Villages_" + n));
    s.addItem(r);
    if (e && this.ownerInfo && !this.ownerInfo.isDungeonOwner) {
      var l = this.getVillageFlagClip(a);
      s.addItem(l);
      C.WorldmapObjectFlagHelper.watchAndFix(r, l);
    }
    return s;
  };
  ResourceIsleMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._objectId = e[3];
    this._occupierPId = e[4];
    this._ownerInfo = h.CastleModel.otherPlayerData.getOwnerInfoVO(this._occupierPId);
    this._kingdomID = e[5];
    this._areaNameString = e[6];
    this._secondsSinceEspionage = e[7];
    this._spyInfoReceivingTime = p.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC;
    this._isleID = r.int(e[8]);
    var t = h.CastleModel.eilandData.getIsleBlueprint(this._isleID);
    this._villageLevel = t.dungeonLevel;
    this._needingOccupierTime = t.occupationTime;
    this._villageType = t.getVillageResourceType();
    var i = e[9];
    this._remainingOccupierTimestamp = p.CachedTimer.getCachedTimer() + i * c.ClientConstTime.SEC_2_MILLISEC;
    this._wallLevel = t.wallLevel;
    this._gateLevel = t.gateLevel;
    this._moatLevel = t.moatLevel;
    this._towerLevel = t.towerLevel;
    var n = this._isVisibleOnMap;
    this._isVisibleOnMap = !this._ownerInfo || !(this._ownerInfo.playerID < 0) || !(i > 0);
    if (n && !this._isVisibleOnMap) {
      this.dispatchEvent(new d.CastleWorldmapEvent(d.CastleWorldmapEvent.REMOVED_RESOURCE_ISLE_FROM_MAP));
    }
    this.dispatchEvent(u.EventInstanceMapper.getEvent(_.VisualVOEvent, _.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  ResourceIsleMapobjectVO.prototype.parseAreaInfoBattleLog = function (t) {
    e.prototype.parseAreaInfoBattleLog.call(this, t);
    if (t.RT) {
      this._isleID = r.int(t.RT);
      var i = h.CastleModel.eilandData.getIsleBlueprint(this._isleID);
      this._villageType = i.getVillageResourceType();
    }
  };
  ResourceIsleMapobjectVO.prototype.setDefaultDefenceLevels = function () {
    this._keepLevel = this._wallLevel = this._gateLevel = this._towerLevel = this._moatLevel = 0;
  };
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "typeName", {
    get: function () {
      switch (this._villageType) {
        case a.WorldConst.VILLAGE_TYPE_WOOD:
        case a.WorldConst.VILLAGE_TYPE_WOOD_NON_PREMIUM:
          return "Wood";
        case a.WorldConst.VILLAGE_TYPE_STONE:
        case a.WorldConst.VILLAGE_TYPE_STONE_NON_PREMIUM:
          return "Stone";
        case a.WorldConst.VILLAGE_TYPE_AQUAMARINE:
        case a.WorldConst.VILLAGE_TYPE_AQUAMARINE_NON_PREMIUM:
          return "Aquamarine";
        default:
          return "Invalid";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.VillageMapobjectVO.prototype, "typeName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "villageTypeDescription", {
    get: function () {
      switch (this._villageType) {
        case a.WorldConst.VILLAGE_TYPE_WOOD:
        case a.WorldConst.VILLAGE_TYPE_WOOD_NON_PREMIUM:
          return "kingdom_eiLand_village_getWood";
        case a.WorldConst.VILLAGE_TYPE_STONE:
        case a.WorldConst.VILLAGE_TYPE_STONE_NON_PREMIUM:
          return "kingdom_eiLand_village_getStone";
        case a.WorldConst.VILLAGE_TYPE_AQUAMARINE:
        case a.WorldConst.VILLAGE_TYPE_AQUAMARINE_NON_PREMIUM:
          return "kingdom_eiLand_village_getAquamarin";
        default:
          return "Invalid";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.VillageMapobjectVO.prototype, "villageTypeDescription").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "areaNameString", {
    get: function () {
      if (this._areaNameString && this._areaNameString != "") {
        return this._areaNameString;
      } else {
        return s.Localize.text("kingdom_eiLand_village");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "isleID", {
    get: function () {
      return this._isleID;
    },
    set: function (e) {
      this._isleID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "remainingOccupierTime", {
    get: function () {
      return (this._remainingOccupierTimestamp - p.CachedTimer.getCachedTimer()) * c.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "occupationTime", {
    get: function () {
      return h.CastleModel.eilandData.getIsleBlueprint(this._isleID).occupationTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      return h.CastleModel.eilandData.getIsleBlueprint(this._isleID).baseGateBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.VillageMapobjectVO.prototype, "baseGateBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return h.CastleModel.eilandData.getIsleBlueprint(this._isleID).baseMoatBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.VillageMapobjectVO.prototype, "baseMoatBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      return h.CastleModel.eilandData.getIsleBlueprint(this._isleID).baseWallBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.VillageMapobjectVO.prototype, "baseWallBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "needingOccupierTime", {
    get: function () {
      return this._needingOccupierTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "villageLevel", {
    get: function () {
      return this._villageLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "attackType", {
    get: function () {
      return l.ClientConstCastle.ACTION_TYPE_ISLAND_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.VillageMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.villageLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.VillageMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ResourceIsleMapobjectVO;
}(m.VillageMapobjectVO);
exports.ResourceIsleMapobjectVO = f;
var O = require("./101.js");
o.classImplementsInterfaces(f, "IDetailViewAble", "IWorldmapObjectVO");