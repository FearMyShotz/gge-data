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
var p = require("./1413.js");
var h = require("./103.js");
var g = require("./30.js");
var C = require("./4.js");
var _ = require("./108.js");
var m = require("./64.js");
var f = require("./583.js");
var O = function (e) {
  function FactionCapitalMapobjectVO() {
    var t = this;
    t._aliveProtectorPositions = [];
    t._dungeonLevel = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "FactionCapital";
    t.group = "Mapobject";
    t._areaType = r.WorldConst.AREA_TYPE_FACTION_CAPITAL;
    t.isVisibleOnMap = false;
    t._kingdomID = s.FactionConst.KINGDOM_ID;
    return t;
  }
  n.__extends(FactionCapitalMapobjectVO, e);
  FactionCapitalMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = new _.CastleDisplayObjectClipContainer();
    var o = c.int(this.ownerInfo.factionID);
    var a = "FactionCapital_Mapobject_" + this.getFactionTag(o);
    if (this.isDestroyed) {
      a += "_Destroyed";
    }
    n.addItem(this.getAsExternalClip(a, this.assetFileURL(E.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
    return n;
  };
  FactionCapitalMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._ownerInfo = C.CastleModel.otherPlayerData.getOwnerInfoVO(e[3]);
    this._aliveProtectorPositions = e[4];
    this._secondsSinceEspionage = e[5];
    this._spyInfoReceivingTime = g.CachedTimer.getCachedTimer() * d.ClientConstTime.MILLISEC_2_SEC;
    this._dungeonLevel = c.int(e[6]);
    this._isDestroyed = e[7] == 1;
    this._specialCampID = e[8];
    this.isVisibleOnMap = true;
    var t = this.factionEventVO && this.factionEventVO.attackableCamps.indexOf(this.specialCampID) > -1;
    if (this.isDestroyed && t || this._aliveProtectorPositions.length == 0 && !this.isDestroyed && !t) {
      C.CastleModel.smartfoxClient.sendCommandVO(new p.C2SGetAttackableFactionDataVO());
    }
    this.dispatchEvent(h.EventInstanceMapper.getEvent(m.VisualVOEvent, m.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.FactionInteractiveMapobjectVO.prototype, "canBeVisited").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isOwnMapobject && !this.isDestroyed && !this.factionEventVO.isSpectator && this.ownerInfo.factionID != this.factionEventVO.ownFaction;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.FactionInteractiveMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.FactionInteractiveMapobjectVO.prototype, "canBeSabotaged").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.FactionInteractiveMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionCapitalMapobjectVO.prototype.canBeAttacked = function () {
    return this.ownerInfo.factionID != this.factionEventVO.ownFaction && this._aliveProtectorPositions.length == 0 && !this.isDestroyed && !this.factionEventVO.isSpectator;
  };
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "factionEventVO", {
    get: function () {
      return C.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return l.Localize.text("faction_capital");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "aliveProtectorPositions", {
    get: function () {
      return this._aliveProtectorPositions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "attackType", {
    get: function () {
      return u.ClientConstCastle.ACTION_TYPE_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.FactionInteractiveMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionCapitalMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.FactionInteractiveMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionCapitalMapobjectVO;
}(f.FactionInteractiveMapobjectVO);
exports.FactionCapitalMapobjectVO = O;
var E = require("./70.js");
var y = require("./101.js");
o.classImplementsInterfaces(O, "IDetailViewAble", "IWorldmapObjectVO");