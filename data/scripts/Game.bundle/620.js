Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./18.js");
var p = require("./28.js");
var h = require("./1413.js");
var g = require("./103.js");
var C = require("./30.js");
var _ = require("./4.js");
var m = require("./109.js");
var f = require("./64.js");
var O = require("./582.js");
var E = function (e) {
  function FactionTowerMapobjectVO() {
    var t = this;
    t._dungeonLevel = 0;
    t._attacksLeft = -1;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "FactionTower";
    t.group = "Mapobject";
    t._areaType = l.WorldConst.AREA_TYPE_FACTION_TOWER;
    t.isVisibleOnMap = false;
    t._kingdomID = r.FactionConst.KINGDOM_ID;
    return t;
  }
  n.__extends(FactionTowerMapobjectVO, e);
  FactionTowerMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n;
    var o = new m.CastleDisplayObjectClipContainer();
    if (!this.ownerInfo) {
      return o;
    }
    var a = u.int(this.ownerInfo.factionID);
    n = this.isDestroyed ? "FactionDestroyedTower_Mapobject_" + this.getFactionTag(a) : "FactionTower_Mapobject_" + this.getFactionTag(a);
    o.addItem(this.getAsExternalClip(n, this.assetFileURL(y.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
    return o;
  };
  FactionTowerMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._ownerInfo = _.CastleModel.otherPlayerData.getOwnerInfoVO(e[3]);
    this._isDestroyed = e[4] == 1;
    this._aliveProtectorPositions = e[5];
    this._secondsSinceEspionage = e[6];
    this._spyInfoReceivingTime = C.CachedTimer.getCachedTimer() * p.ClientConstTime.MILLISEC_2_SEC;
    this._dungeonLevel = u.int(e[7]);
    this._attacksLeft = u.int(e[8]);
    this._wallLevel = this._gateLevel = a.DungeonConst.getWallUpgradeByLevel(this.dungeonLevel);
    this._specialCampID = e[9];
    this.isVisibleOnMap = true;
    var t = this.factionEventVO && this.factionEventVO.attackableCamps.indexOf(this.specialCampID) > -1;
    if (this.isDestroyed && t || this._aliveProtectorPositions.length == 0 && !this.isDestroyed && !t) {
      _.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetAttackableFactionDataVO());
    }
    this.dispatchEvent(g.EventInstanceMapper.getEvent(f.VisualVOEvent, f.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(FactionTowerMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.FactionInteractiveMapobjectVO.prototype, "canBeVisited").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !!this.factionEventVO && !this.isOwnMapobject && !this.factionEventVO.isSpectator && this.ownerInfo.factionID != this.factionEventVO.ownFaction;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.FactionInteractiveMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.FactionInteractiveMapobjectVO.prototype, "canBeSabotaged").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.FactionInteractiveMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionTowerMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.ownerInfo && !!this.factionEventVO && this.ownerInfo.factionID != this.factionEventVO.ownFaction && (!this._aliveProtectorPositions || !!this._aliveProtectorPositions && this._aliveProtectorPositions.length == 0) && !this.isDestroyed && !this.factionEventVO.isSpectator;
  };
  Object.defineProperty(FactionTowerMapobjectVO.prototype, "attacksLeft", {
    get: function () {
      return this._attacksLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobjectVO.prototype, "factionEventVO", {
    get: function () {
      return _.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return c.Localize.text("faction_tower");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(b.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobjectVO.prototype, "aliveProtectorPositions", {
    get: function () {
      return this._aliveProtectorPositions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobjectVO.prototype, "attackType", {
    get: function () {
      return d.ClientConstCastle.ACTION_TYPE_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.FactionInteractiveMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionTowerMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.FactionInteractiveMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionTowerMapobjectVO;
}(O.FactionInteractiveMapobjectVO);
exports.FactionTowerMapobjectVO = E;
var y = require("./70.js");
var b = require("./101.js");
o.classImplementsInterfaces(E, "IDetailViewAble", "IWorldmapObjectVO");