Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./4.js");
var u = require("./108.js");
var d = require("./345.js");
var p = require("./583.js");
var h = function (e) {
  function FactionCampMapobjectVO() {
    var t = e.call(this) || this;
    t.name = "FactionCamp";
    t.group = "Mapobject";
    t._areaType = s.WorldConst.AREA_TYPE_FACTION_CAMP;
    t.isVisibleOnMap = false;
    return t;
  }
  n.__extends(FactionCampMapobjectVO, e);
  FactionCampMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n;
    var o = new u.CastleDisplayObjectClipContainer();
    if (!this.ownerInfo) {
      return o;
    }
    var a = c.CastleModel.userData.castleList.getMainFactionCastle();
    n = a && a.objectId == this.objectId ? "FactionMainCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID) : this.isOwnMapobject ? "FactionMyCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID) : "FactionCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID);
    if (this.isDestroyed) {
      n = "FactionCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID) + "_Destroyed";
    }
    o.addItem(this.getAsExternalClip(n, this.assetFileURL(C.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
    return o;
  };
  FactionCampMapobjectVO.prototype.parseAreaInfo = function (t) {
    if (t.length > 3) {
      this.isVisibleOnMap = true;
      var i = r.int(t.length);
      this._isDestroyed = t[i - 1] == 1;
      e.prototype.parseAreaInfo.call(this, t);
    } else {
      this._areaType = t[0];
      this._absAreaPosX = t[1];
      this._absAreaPosY = t[2];
      this._isVisibleOnMap = false;
    }
  };
  FactionCampMapobjectVO.prototype.canBeTroupsSended = function () {
    return this.isOwnMapobject && c.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length > 1 && !this.isDestroyed && !FactionCampMapobjectVO.factionEventVO.isSpectator;
  };
  FactionCampMapobjectVO.prototype.canBeSupported = function () {
    return !!this.ownerInfo && !this.isOwnMapobject && !this.isDestroyed && !FactionCampMapobjectVO.factionEventVO.isSpectator && this.ownerIsInMyFaction;
  };
  FactionCampMapobjectVO.prototype.canBeAttacked = function () {
    var e = FactionCampMapobjectVO.factionEventVO;
    return !!this.ownerInfo && !!e && !this.isOwnMapobject && !this.isDestroyed && !e.isSpectator && !this.ownerIsInMyFaction;
  };
  FactionCampMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return !!this.ownerInfo && !this.ownerInfo.isOutpostOwner && !this.isOwnMapobject && !this.isDestroyed && !this.ownerIsInMyFaction;
  };
  Object.defineProperty(FactionCampMapobjectVO.prototype, "canBeTraded", {
    get: function () {
      return !FactionCampMapobjectVO.factionEventVO.isSpectator && (!this.isOwnMapobject || c.CastleModel.userData.castleList.listWithoutOcupiedOrDestroyedFactionCamps.length > 1);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.FactionInteractiveMapobjectVO.prototype, "canBeTraded").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return !this.isDestroyed;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.FactionInteractiveMapobjectVO.prototype, "canBeVisited").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isDestroyed && (!FactionCampMapobjectVO.factionEventVO || !FactionCampMapobjectVO.factionEventVO.isSpectator) && !this.isOwnMapobject;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.FactionInteractiveMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.FactionInteractiveMapobjectVO.prototype, "canBeSabotaged").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return !!this.ownerInfo && !this.isOwnMapobject && !this.ownerInfo.isOutpostOwner;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.FactionInteractiveMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "ownerIsInMyFaction", {
    get: function () {
      return !!this.ownerInfo && this.ownerInfo.factionID == FactionCampMapobjectVO.factionEventVO.ownFaction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO, "factionEventVO", {
    get: function () {
      return c.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "controllerWorldMapOwnerInfoVO", {
    get: function () {
      return this.ownerInfo;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.FactionInteractiveMapobjectVO.prototype, "controllerWorldMapOwnerInfoVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      if (this.gateLevel == 0) {
        return 0;
      } else {
        return c.CastleModel.wodData.voSubList(g.CastleWodData.TYPE_BUILDING).get(l.ClientConstCastle.FACTION_GATE_WOD_IDS[this.gateLevel - 1]).gateBonus;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.FactionInteractiveMapobjectVO.prototype, "baseGateBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "baseMoatBonus", {
    get: function () {
      if (this.moatLevel) {
        return c.CastleModel.wodData.voSubList(g.CastleWodData.TYPE_BUILDING).get(l.ClientConstCastle.FACTION_MOAT_WOD_IDS[this.moatLevel - 1]).moatBonus;
      } else {
        return 0;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.FactionInteractiveMapobjectVO.prototype, "baseMoatBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      if (this.wallLevel) {
        return c.CastleModel.wodData.voSubList(g.CastleWodData.TYPE_BUILDING).get(l.ClientConstCastle.FACTION_WALL_WOD_IDS[this.wallLevel - 1]).wallBonus;
      } else {
        return 0;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.FactionInteractiveMapobjectVO.prototype, "baseWallBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCampMapobjectVO.prototype, "unitBaseLocation", {
    get: function () {
      return d.UnitBaseLocationEnum.HOME_CASTLE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.FactionInteractiveMapobjectVO.prototype, "unitBaseLocation").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionCampMapobjectVO;
}(p.FactionInteractiveMapobjectVO);
exports.FactionCampMapobjectVO = h;
var g = require("./56.js");
var C = require("./70.js");
o.classImplementsInterfaces(h, "IDetailViewAble", "IWorldmapObjectVO");