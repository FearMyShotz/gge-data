Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./18.js");
var r = require("./4.js");
var l = require("./205.js");
var c = function (e) {
  function AInvasionEventMapObjectVO() {
    var t = this;
    t._victoryCount = -1;
    t._dungeonLevel = 0;
    t._serverDataRecieved = false;
    t._baseMoatBonus = 0;
    t._baseGateBonus = 0;
    t._baseWallBonus = 0;
    t.lastKnownBaseLevel = 0;
    t._eventAutoScalingCampID = -1;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = "Empty";
    t.type = "Grid";
    return t;
  }
  n.__extends(AInvasionEventMapObjectVO, e);
  AInvasionEventMapObjectVO.prototype.parseAreaInfo = function (e) {
    this.areaType = a.WorldConst.AREA_TYPE_EMPTY;
    this.absAreaPosX = e[1];
    this.absAreaPosY = e[2];
  };
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "dungeonLevel", {
    get: function () {
      return this._dungeonLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "canBeSpied", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ContainerBuilderMapobjectVO.prototype, "canBeSpied").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AInvasionEventMapObjectVO.prototype.canBeAttacked = function () {
    return true;
  };
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "attackCooldownEndTimestamp", {
    set: function (e) {
      this._attackCooldownEndTimestamp = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "spyInfoReceivingTime", {
    set: function (e) {
      this._spyInfoReceivingTime = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "eventType", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  AInvasionEventMapObjectVO.prototype.canBeAttackedButHasPeacemode = function () {
    return false;
  };
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "victoryCount", {
    get: function () {
      return this._victoryCount;
    },
    set: function (e) {
      this._victoryCount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "attackType", {
    get: function () {
      return s.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ContainerBuilderMapobjectVO.prototype, "attackType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AInvasionEventMapObjectVO.prototype, "actualVisClassName", {
    get: function () {
      return this.getVisualClassName() + "_" + r.CastleModel.kingdomData.activeKingdomVO.kingdomName;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ContainerBuilderMapobjectVO.prototype, "actualVisClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return AInvasionEventMapObjectVO;
}(l.ContainerBuilderMapobjectVO);
exports.AInvasionEventMapObjectVO = c;
o.classImplementsInterfaces(c, "IDetailViewAble", "IWorldmapObjectVO", "IDungeonMapobjectVO");