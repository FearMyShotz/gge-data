Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./148.js");
var u = require("./28.js");
var d = require("./103.js");
var p = require("./30.js");
var h = require("./4.js");
var g = require("./64.js");
var C = require("./498.js");
var _ = require("./245.js");
var m = function (e) {
  function DaimyoCastleMapObjectVO() {
    var t = this;
    t._totalCooldownTime = 0;
    t._skipCosts = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "DaimyoCastle";
    t.type = "-";
    return t;
  }
  n.__extends(DaimyoCastleMapObjectVO, e);
  DaimyoCastleMapObjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = new O.CastleDisplayObjectClipContainer();
    var o = "DaimyoCastle_Mapobject_Rank" + this._daimyoXmlVO.rank;
    n.addItem(this.getAsExternalClip(o));
    return n;
  };
  DaimyoCastleMapObjectVO.prototype.parseAreaInfo = function (e) {
    this.areaType = e[0];
    this.absAreaPosX = e[1];
    this.absAreaPosY = e[2];
    if (e.length > 3) {
      this.secondsSinceEspionage = e[3];
      this.attackCooldownEndTimestamp = p.CachedTimer.getCachedTimer() + e[5] * u.ClientConstTime.SEC_2_MILLISEC;
      this._totalCooldownTime = l.int(e[6]);
      this._skipCosts = l.int(e[7]);
      this._eventAutoScalingCampID = l.int(e[8]);
      this.spyInfoReceivingTime = p.CachedTimer.getCachedTimer() * u.ClientConstTime.MILLISEC_2_SEC;
      this._daimyoXmlVO = h.CastleModel.daimyoCastleXmlData.getDaimyoCastleByID(e[4], this._eventAutoScalingCampID);
      this._dungeonLevel = this._daimyoXmlVO.level;
      this._isVisibleOnMap = true;
      this._baseWallBonus = e[9];
      this._baseGateBonus = e[10];
      this._baseMoatBonus = e[11];
    } else {
      this._isVisibleOnMap = false;
    }
    this._ownerInfo = h.CastleModel.otherPlayerData.getOwnerInfoVO(c.ClientConstNPCs.NPC_ID_DAIMYO_CASTLE);
    this.dispatchEvent(d.EventInstanceMapper.getEvent(g.VisualVOEvent, g.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  DaimyoCastleMapObjectVO.prototype.parseAreaInfoBattleLog = function (t) {
    e.prototype.parseAreaInfoBattleLog.call(this, t);
    if (t.DAR) {
      this._daimyoXmlVO = h.CastleModel.daimyoCastleXmlData.getDaimyoCastle(t.DAR, -1, t.DDCID);
      this._dungeonLevel = this._daimyoXmlVO.level;
    }
  };
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return !!h.CastleModel.specialEventData.isEventActive(s.EventConst.EVENTTYPE_SAMURAI_INVASION) && this._isVisibleOnMap;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AInvasionEventMapObjectVO.prototype, "cooldownCanBeSkipped").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      var e = this._skipCosts;
      var t = l.int(this.totalCooldownTime);
      return e * this.remainingCooldownTimeInSeconds / t;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AInvasionEventMapObjectVO.prototype, "skipCooldownCostC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AInvasionEventMapObjectVO.prototype, "baseGateBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AInvasionEventMapObjectVO.prototype, "baseWallBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "totalCooldownTime", {
    get: function () {
      return this._totalCooldownTime;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AInvasionEventMapObjectVO.prototype, "totalCooldownTime").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "areaNameString", {
    get: function () {
      if (this.daimyoXmlVO) {
        return r.Localize.text(a.GenericTextIds.VALUE_DASH_SPLIT, [r.Localize.text("DaimyoCastle"), r.Localize.text("rank_value", [this.daimyoXmlVO.rank])]);
      } else {
        return r.Localize.text("DaimyoCastle");
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DaimyoCastleMapObjectVO.prototype.canBeSupported = function () {
    return e.prototype.canBeSupported.call(this);
  };
  DaimyoCastleMapObjectVO.prototype.eventAutoScalingCampID = function () {
    return this._eventAutoScalingCampID;
  };
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AInvasionEventMapObjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "daimyoXmlVO", {
    get: function () {
      return this._daimyoXmlVO;
    },
    set: function (e) {
      this._daimyoXmlVO = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleMapObjectVO.prototype, "eventType", {
    get: function () {
      return s.EventConst.EVENTTYPE_SAMURAI_INVASION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.AInvasionEventMapObjectVO.prototype, "eventType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DaimyoCastleMapObjectVO;
}(C.AInvasionEventMapObjectVO);
exports.DaimyoCastleMapObjectVO = m;
o.classImplementsInterfaces(m, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");
var f = require("./101.js");
var O = require("./109.js");