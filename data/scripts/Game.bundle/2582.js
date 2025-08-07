Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./28.js");
var u = require("./103.js");
var d = require("./30.js");
var p = require("./4.js");
var h = require("./35.js");
var g = require("./109.js");
var C = require("./64.js");
var _ = require("./498.js");
var m = require("./245.js");
var f = function (e) {
  function NomadCampMapObjectVO() {
    var t = e.call(this) || this;
    t.name = "NomadCamp";
    t.type = "-";
    return t;
  }
  n.__extends(NomadCampMapObjectVO, e);
  NomadCampMapObjectVO.prototype.getDisplayObjectClipContainer = function (e, t, i = false) {
    var n = new g.CastleDisplayObjectClipContainer();
    n.addItem(this.getAsExternalClip("Nomad_Mapobject"));
    return n;
  };
  NomadCampMapObjectVO.prototype.parseAreaInfo = function (e) {
    this.areaType = e[0];
    this.absAreaPosX = e[1];
    this.absAreaPosY = e[2];
    if (e.length > 3) {
      this.attackCooldownEndTimestamp = d.CachedTimer.getCachedTimer() + e[5] * c.ClientConstTime.SEC_2_MILLISEC;
      this.secondsSinceEspionage = e[3];
      this.victoryCount = e[4];
      this._eventAutoScalingCampID = e[8];
      this._baseWallBonus = e[9];
      this._baseGateBonus = e[10];
      this._baseMoatBonus = e[11];
      this.spyInfoReceivingTime = d.CachedTimer.getCachedTimer() * c.ClientConstTime.MILLISEC_2_SEC;
      this._ownerInfo = p.CastleModel.otherPlayerData.getOwnerInfoVO(a.DungeonConst.BASIC_NOMAD_CAMP_PLAYER_ID);
      this._dungeonLevel = this.victoryCount;
      this._isVisibleOnMap = true;
    } else {
      this._isVisibleOnMap = false;
    }
    this.dispatchEvent(u.EventInstanceMapper.getEvent(C.VisualVOEvent, C.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  Object.defineProperty(NomadCampMapObjectVO.prototype, "isVisibleOnMap", {
    get: function () {
      return !!NomadCampMapObjectVO.nomadEventVO && this._isVisibleOnMap;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.BasicMapobjectVO.prototype, "isVisibleOnMap").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "cooldownCanBeSkipped", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.AInvasionEventMapObjectVO.prototype, "cooldownCanBeSkipped").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      var e;
      e = this._eventAutoScalingCampID > 0 ? p.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(this._eventAutoScalingCampID).skipCost : l.int(p.CastleModel.nomadCampData.getNomadCamp(this.dungeonLevel).skipCost);
      var t = l.int(this.totalCooldownTime);
      return e * this.remainingCooldownTimeInSeconds / t;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.AInvasionEventMapObjectVO.prototype, "skipCooldownCostC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.AInvasionEventMapObjectVO.prototype, "baseGateBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.AInvasionEventMapObjectVO.prototype, "baseWallBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.AInvasionEventMapObjectVO.prototype, "baseMoatBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "totalCooldownTime", {
    get: function () {
      var e;
      if ((e = this._eventAutoScalingCampID > 0 ? p.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(this._eventAutoScalingCampID).coolDown : p.CastleModel.nomadCampData.getNomadCamp(this.dungeonLevel).coolDown) > 0) {
        return e * (1 - l.int(p.CastleModel.subscriptionData.getEffectValue(h.EffectTypeEnum.EFFECT_TYPE_COOLDOWN_REDUCTION, this.areaType)) / 100);
      } else {
        return 0;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.AInvasionEventMapObjectVO.prototype, "totalCooldownTime").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.AInvasionEventMapObjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "areaNameString", {
    get: function () {
      return r.Localize.text("kingdom_nomad_castleName_" + this.kingdomID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "dungeonLevel", {
    get: function () {
      if (this._eventAutoScalingCampID > 0) {
        return p.CastleModel.eventDifficultyScaling.getCampByEventAutoScalingCampID(this._eventAutoScalingCampID).level;
      } else {
        if (NomadCampMapObjectVO.nomadEventVO) {
          this.lastKnownBaseLevel = NomadCampMapObjectVO.nomadEventVO.baseCampLevel();
        }
        return this.lastKnownBaseLevel + this.victoryCount;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.AInvasionEventMapObjectVO.prototype, "dungeonLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO, "nomadEventVO", {
    get: function () {
      return p.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadCampMapObjectVO.prototype, "eventType", {
    get: function () {
      return s.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.AInvasionEventMapObjectVO.prototype, "eventType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return NomadCampMapObjectVO;
}(_.AInvasionEventMapObjectVO);
exports.NomadCampMapObjectVO = f;
var O = require("./101.js");
o.classImplementsInterfaces(f, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");