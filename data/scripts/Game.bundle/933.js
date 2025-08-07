Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./4.js");
var l = require("./385.js");
var c = function (e) {
  function AlienAttackMovementVO() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = AlienAttackMovementVO.NAME;
    t.group = "Mapmovement";
    return t;
  }
  n.__extends(AlienAttackMovementVO, e);
  AlienAttackMovementVO.prototype.loadFromParamObject = function (t) {
    e.prototype.loadFromParamObject.call(this, t);
    if (a.instanceOfClass(this.sourceArea, "AAlienInvasionMapobjectVO")) {
      this.sourceArea.kingdomID = this.kingdomID;
    }
    if (a.instanceOfClass(this.targetArea, "AAlienInvasionMapobjectVO")) {
      this.targetArea.kingdomID = this.kingdomID;
    }
  };
  Object.defineProperty(AlienAttackMovementVO.prototype, "tooLateToBeRetreated", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ArmyAttackMapmovementVO.prototype, "tooLateToBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "isAttackingMovement", {
    get: function () {
      return this.targetOwnerID == r.CastleModel.userData.playerID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ArmyAttackMapmovementVO.prototype, "isAttackingMovement").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "needGeneral", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ArmyAttackMapmovementVO.prototype, "needGeneral").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "canBeRetreated", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ArmyAttackMapmovementVO.prototype, "canBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "canBeSendHome", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ArmyAttackMapmovementVO.prototype, "canBeSendHome").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "distance", {
    get: function () {
      return s.TravelConst.ALIEN_TRAVEL_DISTANCE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ArmyAttackMapmovementVO.prototype, "distance").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "isNPCMovement", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ArmyAttackMapmovementVO.prototype, "isNPCMovement").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AlienAttackMovementVO.prototype, "showAsAllianceAttackWarning", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ArmyAttackMapmovementVO.prototype, "showAsAllianceAttackWarning").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AlienAttackMovementVO.__initialize_static_members = function () {
    AlienAttackMovementVO.NAME = "AlienAttack";
  };
  return AlienAttackMovementVO;
}(l.ArmyAttackMapmovementVO);
exports.AlienAttackMovementVO = c;
o.classImplementsInterfaces(c, "IMapMovementVO", "IArmyMapmovementVO");
c.__initialize_static_members();