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
var _ = require("./64.js");
var m = require("./583.js");
var f = function (e) {
  function FactionVillageMapobjectVO() {
    var t = this;
    t._aliveProtectorPositions = [];
    t._dungeonLevel = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "FactionVillage";
    t.group = "Mapobject";
    t._areaType = r.WorldConst.AREA_TYPE_FACTION_VILLAGE;
    t.isVisibleOnMap = false;
    t._kingdomID = s.FactionConst.KINGDOM_ID;
    t._specialCampID = FactionVillageMapobjectVO.VILLAGE_SPECIAL_CAMP_ID;
    return t;
  }
  n.__extends(FactionVillageMapobjectVO, e);
  FactionVillageMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = new C.CastleDisplayObjectClipContainer();
    var o = c.int(this.ownerInfo ? this.ownerInfo.factionID : s.FactionConst.BLUE_FACTION);
    var a = "FactionVillage_Mapobject_" + this.getFactionTag(o);
    n.addItem(this.getAsExternalClip(a, this.assetFileURL(O.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
    return n;
  };
  FactionVillageMapobjectVO.prototype.parseAreaInfo = function (e) {
    this._areaType = e[0];
    this._absAreaPosX = e[1];
    this._absAreaPosY = e[2];
    this._ownerInfo = g.CastleModel.otherPlayerData.getOwnerInfoVO(e[3]);
    var t = e[4];
    this._aliveProtectorPositions = Array.isArray(t) ? t : [];
    this._secondsSinceEspionage = e[5];
    this._spyInfoReceivingTime = h.CachedTimer.getCachedTimer() * d.ClientConstTime.MILLISEC_2_SEC;
    this._dungeonLevel = c.int(e[6]);
    var i = c.int(e[7]);
    this._attackCooldownEndTimestamp = h.CachedTimer.getCachedTimer() + i * d.ClientConstTime.SEC_2_MILLISEC;
    var n = this.factionEventVO ? this.factionEventVO.getVillageByPosition(this.absAreaPos) : null;
    if (n) {
      n.canBeAttacked = this.canBeAttacked();
    }
    this.isVisibleOnMap = true;
    this.dispatchEvent(p.EventInstanceMapper.getEvent(_.VisualVOEvent, _.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "canBeVisited", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.FactionInteractiveMapobjectVO.prototype, "canBeVisited").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "canBeSpied", {
    get: function () {
      return !this.isOwnMapobject && !!this.factionEventVO && !this.factionEventVO.isSpectator && this.ownerInfo.factionID != this.factionEventVO.ownFaction;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.FactionInteractiveMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "canBeSabotaged", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.FactionInteractiveMapobjectVO.prototype, "canBeSabotaged").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "hasOtherPlayerInfo", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.FactionInteractiveMapobjectVO.prototype, "hasOtherPlayerInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionVillageMapobjectVO.prototype.canBeAttacked = function () {
    return !!this.factionEventVO && this.ownerInfo.factionID != this.factionEventVO.ownFaction && !!this._aliveProtectorPositions && this._aliveProtectorPositions.length == 0 && !this.factionEventVO.isSpectator;
  };
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "factionEventVO", {
    get: function () {
      return g.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "aliveProtectorPositions", {
    get: function () {
      return this._aliveProtectorPositions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return l.Localize.text("faction_village");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(E.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "attackType", {
    get: function () {
      return u.ClientConstCastle.ACTION_TYPE_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.FactionInteractiveMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionVillageMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.FactionInteractiveMapobjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionVillageMapobjectVO.VILLAGE_SPECIAL_CAMP_ID = 1;
  return FactionVillageMapobjectVO;
}(m.FactionInteractiveMapobjectVO);
exports.FactionVillageMapobjectVO = f;
var O = require("./70.js");
var E = require("./101.js");
o.classImplementsInterfaces(f, "IDetailViewAble", "IWorldmapObjectVO");