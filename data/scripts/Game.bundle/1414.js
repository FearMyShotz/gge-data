Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./28.js");
var r = require("./103.js");
var l = require("./30.js");
var c = require("./4.js");
var u = require("./64.js");
var d = require("./498.js");
var p = function (e) {
  function AAllianceInvasionCampMapObjectVO() {
    var t = this;
    t.campID = 0;
    t._totalCooldownTime = 0;
    t._skipCosts = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AAllianceInvasionCampMapObjectVO, e);
  AAllianceInvasionCampMapObjectVO.prototype.parseAreaInfo = function (e) {
    this.areaType = e[0];
    this.absAreaPosX = e[1];
    this.absAreaPosY = e[2];
    if (e.length > 3) {
      this.parseData(e);
    } else {
      this._isVisibleOnMap = false;
    }
    this.dispatchEvent(r.EventInstanceMapper.getEvent(u.VisualVOEvent, u.VisualVOEvent.VALUEOBJECT_CHANGE));
  };
  AAllianceInvasionCampMapObjectVO.prototype.parseData = function (e) {
    this.attackCooldownEndTimestamp = l.CachedTimer.getCachedTimer() + e[5] * s.ClientConstTime.SEC_2_MILLISEC;
    this.secondsSinceEspionage = e[3];
    this.campID = a.int(e[4]);
    this._totalCooldownTime = a.int(e[6]);
    this._skipCosts = a.int(e[7]);
    this._victoryCount = e[8];
    this._eventAutoScalingCampID = a.int(e[9]);
    this._baseWallBonus = e[10];
    this._baseGateBonus = e[11];
    this._baseMoatBonus = e[12];
    this._allianceInvasionCampNode = c.CastleModel.allianceInvasionCampData.getAllianceCamp(this.campID, this._eventAutoScalingCampID);
    this.spyInfoReceivingTime = l.CachedTimer.getCachedTimer() * s.ClientConstTime.MILLISEC_2_SEC;
    this._dungeonLevel = this._allianceInvasionCampNode.level;
    this._isVisibleOnMap = true;
  };
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return this.dungeonLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AInvasionEventMapObjectVO.prototype, "minimumOwnerLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "skipCooldownCostC2", {
    get: function () {
      var e = this._skipCosts;
      var t = a.int(this.totalCooldownTime);
      return e * this.remainingCooldownTimeInSeconds / t;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AInvasionEventMapObjectVO.prototype, "skipCooldownCostC2").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "baseGateBonus", {
    get: function () {
      return this._baseGateBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AInvasionEventMapObjectVO.prototype, "baseGateBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "baseWallBonus", {
    get: function () {
      return this._baseWallBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AInvasionEventMapObjectVO.prototype, "baseWallBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "totalCooldownTime", {
    get: function () {
      return this._totalCooldownTime;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AInvasionEventMapObjectVO.prototype, "totalCooldownTime").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "baseMoatBonus", {
    get: function () {
      return this._baseMoatBonus;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AInvasionEventMapObjectVO.prototype, "baseMoatBonus").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this.allianceInvasionCampNode.level;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AInvasionEventMapObjectVO.prototype, "dungeonLevel").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAllianceInvasionCampMapObjectVO.prototype, "allianceInvasionCampNode", {
    get: function () {
      return this._allianceInvasionCampNode;
    },
    enumerable: true,
    configurable: true
  });
  return AAllianceInvasionCampMapObjectVO;
}(d.AInvasionEventMapObjectVO);
exports.AAllianceInvasionCampMapObjectVO = p;
o.classImplementsInterfaces(p, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");