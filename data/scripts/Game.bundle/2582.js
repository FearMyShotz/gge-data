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
var u = require("./28.js");
var d = require("./972.js");
var p = require("./103.js");
var h = require("./30.js");
var g = require("./4.js");
var C = require("./108.js");
var _ = require("./64.js");
var m = require("./499.js");
var f = require("./245.js");
var O = function (e) {
  function FactionInvasionCampMapObjectVO() {
    var t = this;
    t.dungeonType = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "FactionInvasionCamp";
    t.group = "MapObject";
    t.type = "-";
    t._areaType = r.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP;
    return t;
  }
  n.__extends(FactionInvasionCampMapObjectVO, e);
  FactionInvasionCampMapObjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n;
    var o = new C.CastleDisplayObjectClipContainer();
    if (this.ownerInfo) {
      n = this.campSize == d.ClientConstXmlProperties.INVASION_CAMP_SIZE_SMALL ? "FactionCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID) : this.campSize == d.ClientConstXmlProperties.INVASION_CAMP_SIZE_MEDIUM ? "FactionMyCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID) : "FactionMainCamp_Mapobject_" + this.getFactionTag(this.ownerInfo.factionID);
      o.addItem(this.getAsExternalClip(n, this.assetFileURL(E.WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT)));
      return o;
    } else {
      return o;
    }
  };
  FactionInvasionCampMapObjectVO.prototype.parseAreaInfo = function (e) {
    this.areaType = e[0];
    this.absAreaPosX = e[1];
    this.absAreaPosY = e[2];
    if (e.length > 3) {
      this.dungeonType = c.int(e[7]);
      this.attackCooldownEndTimestamp = h.CachedTimer.getCachedTimer() + e[5] * u.ClientConstTime.SEC_2_MILLISEC;
      this.secondsSinceEspionage = e[3];
      this.victoryCount = e[4];
      this.spyInfoReceivingTime = h.CachedTimer.getCachedTimer() * u.ClientConstTime.MILLISEC_2_SEC;
      this._ownerInfo = g.CastleModel.otherPlayerData.getOwnerInfoVO(this.dungeonType);
      this._dungeonLevel = this.victoryCount;
      this._isVisibleOnMap = true;
    } else {
      this._isVisibleOnMap = false;
    }
    this.dispatchEvent(p.EventInstanceMapper.getEvent(_.VisualVOEvent, _.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return !!g.CastleModel.specialEventData.isEventActive(s.EventConst.EVENTTYPE_FACTION_INVASION) && this._isVisibleOnMap;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.AInvasionEventMapObjectVO.prototype, "cooldownCanBeSkipped").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      return 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.AInvasionEventMapObjectVO.prototype, "skipCooldownCostC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "campSize", {
    get: function () {
      if (g.CastleModel.factionInvasionCampData.getFactionInvasion(this.dungeonLevel, this._ownerInfo.factionID)) {
        return g.CastleModel.factionInvasionCampData.getFactionInvasion(this.dungeonLevel, this._ownerInfo.factionID).campSize;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      return g.CastleModel.factionInvasionCampData.getFactionInvasion(this.dungeonLevel, this._ownerInfo.factionID).gateBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.AInvasionEventMapObjectVO.prototype, "baseGateBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      return g.CastleModel.factionInvasionCampData.getFactionInvasion(this.dungeonLevel, this._ownerInfo.factionID).wallBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.AInvasionEventMapObjectVO.prototype, "baseWallBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "totalCooldownTime", {
    get: function () {
      var e = g.CastleModel.factionInvasionCampData.getFactionInvasion(this.dungeonLevel, this._ownerInfo.factionID);
      if (e) {
        return e.coolDown;
      } else {
        return 0;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.AInvasionEventMapObjectVO.prototype, "totalCooldownTime").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "areaNameString", {
    get: function () {
      if (this.dungeonType == a.DungeonConst.BLUE_FACTION_KING) {
        return l.Localize.text("dialog_berimondInvasion_blueCamp");
      } else {
        return l.Localize.text("dialog_berimondInvasion_redCamp");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(y.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return 0;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.AInvasionEventMapObjectVO.prototype, "baseMoatBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "dungeonLevel", {
    get: function () {
      if (this.factionInvasionEventVO == null) {
        return this.lastKnownBaseLevel + this.victoryCount;
      } else {
        this.lastKnownBaseLevel = this.baseCampLevel;
        return this.lastKnownBaseLevel + this.victoryCount;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.AInvasionEventMapObjectVO.prototype, "dungeonLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "factionInvasionEventVO", {
    get: function () {
      if (g.CastleModel.specialEventData.isEventActive(s.EventConst.EVENTTYPE_FACTION_INVASION)) {
        return g.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION_INVASION);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "eventType", {
    get: function () {
      return s.EventConst.EVENTTYPE_FACTION_INVASION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.AInvasionEventMapObjectVO.prototype, "eventType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "baseCampLevel", {
    get: function () {
      if (g.CastleModel.specialEventData.isEventActive(s.EventConst.EVENTTYPE_FACTION_INVASION)) {
        return g.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION_INVASION).baseCampLevel(this.dungeonType);
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionCampMapObjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.AInvasionEventMapObjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionCampMapObjectVO.prototype.parseAreaInfoBattleLog = function (t) {
    this.dungeonType = c.int(t.DP);
    this._dungeonLevel = t.DL;
    this._victoryCount = 0;
    e.prototype.parseAreaInfoBattleLog.call(this, t);
  };
  return FactionInvasionCampMapObjectVO;
}(m.AInvasionEventMapObjectVO);
exports.FactionInvasionCampMapObjectVO = O;
var E = require("./70.js");
var y = require("./101.js");
o.classImplementsInterfaces(O, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");