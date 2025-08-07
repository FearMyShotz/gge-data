Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./274.js");
var r = require("./28.js");
var l = require("./103.js");
var c = require("./69.js");
var u = require("./30.js");
var d = require("./4.js");
var p = require("./64.js");
var h = require("./499.js");
var g = require("./245.js");
var C = function (e) {
  function AAlienInvasionMapobjectVO() {
    var t = this;
    t._hasPeaceMode = false;
    t._associatedEventID = 0;
    t._alienPlayerID = 0;
    t._alreadyRerolled = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AAlienInvasionMapobjectVO, e);
  AAlienInvasionMapobjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = new m.CastleDisplayObjectClipContainer();
    var o = this.assetTypeName + "_Mapobject_Level_" + s.ClientConstEvent.getUserInvasionGfxLevel(this.dungeonLevel);
    n.addItem(this.getAsExternalClip(o, this.assetFileURL(this.assetTypeName + "_Mapobject")));
    return n;
  };
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return !!d.CastleModel.specialEventData.isEventActive(this._associatedEventID) && this._isVisibleOnMap;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, e);
      this.dispatchEvent(l.EventInstanceMapper.getEvent(p.VisualVOEvent, p.VisualVOEvent.VALUEOBJECT_CHANGE));
    },
    enumerable: true,
    configurable: true
  });
  AAlienInvasionMapobjectVO.prototype.parseAreaInfo = function (e) {
    this.areaType = e[0];
    this.absAreaPosX = e[1];
    this.absAreaPosY = e[2];
    this._dungeonLevel = e[3];
    if (e.length > 4) {
      this.secondsSinceEspionage = e[4];
      this.spyInfoReceivingTime = u.CachedTimer.getCachedTimer() * r.ClientConstTime.MILLISEC_2_SEC;
      this._hasPeaceMode = e[5] == 1;
      this._baseWallBonus = e[6];
      this._baseGateBonus = e[7];
      this._baseMoatBonus = e[8];
      this._alreadyRerolled = e.length >= 10 && e[9] == 1;
      var t = e.length >= 11 ? e[10] : -1;
      if (t > 0) {
        this.difficultyCamp = d.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(t);
      }
      this._ownerInfo = d.CastleModel.otherPlayerData.getOwnerInfoVO(this._alienPlayerID);
      if (this._dungeonLevel > 0) {
        this._serverDataRecieved = true;
        this.isVisibleOnMap = true;
      }
    } else {
      this.isVisibleOnMap = false;
    }
    this.dispatchEvent(l.EventInstanceMapper.getEvent(p.VisualVOEvent, p.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  AAlienInvasionMapobjectVO.prototype.parseAreaInfoBattleLog = function (e) {
    this.absAreaPosX = e.X;
    this.absAreaPosY = e.Y;
    this._ownerInfo = d.CastleModel.otherPlayerData.getOwnerInfoVO(this._alienPlayerID);
    this.kingdomID = e.K;
    this.mapID = e.MID;
    this._dungeonLevel = e.DL;
    this._spyInfoReceivingTime = this._spyInfoReceivingTime || u.CachedTimer.getCachedTimer() * r.ClientConstTime.MILLISEC_2_SEC;
  };
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "eventType", {
    get: function () {
      return this._associatedEventID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.AInvasionEventMapObjectVO.prototype, "eventType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AAlienInvasionMapobjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return this._hasPeaceMode;
  };
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "attackType", {
    get: function () {
      return a.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.AInvasionEventMapObjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "keepLevel", {
    get: function () {
      return s.ClientConstEvent.getUserInvasionGfxLevel(this._dungeonLevel);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.InteractiveMapobjectVO.prototype, "keepLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "wallLevel", {
    get: function () {
      return s.ClientConstEvent.getUserInvasionGfxLevel(this._dungeonLevel);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.InteractiveMapobjectVO.prototype, "wallLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "gateLevel", {
    get: function () {
      return s.ClientConstEvent.getUserInvasionGfxLevel(this._dungeonLevel);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.InteractiveMapobjectVO.prototype, "gateLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "towerLevel", {
    get: function () {
      return s.ClientConstEvent.getUserInvasionGfxLevel(this._dungeonLevel);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.InteractiveMapobjectVO.prototype, "towerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "moatLevel", {
    get: function () {
      if (this._baseMoatBonus > 0) {
        return 1;
      } else {
        return 0;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.InteractiveMapobjectVO.prototype, "moatLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.AInvasionEventMapObjectVO.prototype, "baseGateBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.AInvasionEventMapObjectVO.prototype, "baseMoatBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.AInvasionEventMapObjectVO.prototype, "baseWallBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.AInvasionEventMapObjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "assetTypeName", {
    get: function () {
      throw new c.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAlienInvasionMapobjectVO.prototype, "alreadyRerolled", {
    get: function () {
      return this._alreadyRerolled;
    },
    enumerable: true,
    configurable: true
  });
  return AAlienInvasionMapobjectVO;
}(h.AInvasionEventMapObjectVO);
exports.AAlienInvasionMapobjectVO = C;
var _ = require("./101.js");
var m = require("./108.js");
o.classImplementsInterfaces(C, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");