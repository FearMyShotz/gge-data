Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./35.js");
var r = require("./731.js");
var l = function (e) {
  function SupportDefenceMapmovementVO() {
    var t = e.call(this) || this;
    t.name = SupportDefenceMapmovementVO.NAME;
    t.group = "Mapmovement";
    return t;
  }
  n.__extends(SupportDefenceMapmovementVO, e);
  Object.defineProperty(SupportDefenceMapmovementVO.prototype, "needGeneral", {
    get: function () {
      return this.isMyMovement;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ArmyTravelMapMovementVO.prototype, "needGeneral").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovementVO.prototype, "canBeSendHome", {
    get: function () {
      return this.movementProgress == 1 && this.isMyMovement;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ArmyTravelMapMovementVO.prototype, "canBeSendHome").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      return this.isMyMovement;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ArmyTravelMapMovementVO.prototype, "canBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SupportDefenceMapmovementVO.prototype, "isStationed", {
    get: function () {
      return this.hasArrived;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ArmyTravelMapMovementVO.prototype, "isStationed").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SupportDefenceMapmovementVO.prototype.isSubscriptionBuffed = function () {
    return this.targetOwnerID != a.CastleModel.userData.playerID && this.sourceOwnerID == a.CastleModel.userData.playerID && a.CastleModel.subscriptionData.getEffectValue(s.EffectTypeEnum.EFFECT_TYPE_SUPPORT_SPEED_BONUS, this.targetArea.areaType, this.targetArea.kingdomID) > 0;
  };
  SupportDefenceMapmovementVO.__initialize_static_members = function () {
    SupportDefenceMapmovementVO.NAME = "SupportDefence";
  };
  return SupportDefenceMapmovementVO;
}(r.ArmyTravelMapMovementVO);
exports.SupportDefenceMapmovementVO = l;
l.__initialize_static_members();
o.classImplementsInterfaces(l, "IMapMovementVO", "IArmyMapmovementVO");