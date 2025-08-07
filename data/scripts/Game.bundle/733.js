Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./18.js");
var r = require("./4.js");
var l = require("./33.js");
var c = require("./519.js");
var u = function (e) {
  function ArmyTravelMapMovementVO() {
    var t = e.call(this) || this;
    t.name = ArmyTravelMapMovementVO.NAME;
    t.group = "Mapmovement";
    return t;
  }
  n.__extends(ArmyTravelMapMovementVO, e);
  ArmyTravelMapMovementVO.prototype.loadFromParamObject = function (t) {
    e.prototype.loadFromParamObject.call(this, t);
    this._inventory = new p.UnitInventoryDictionary();
    this._inventory.fillFromWodAmountArray(t.A);
    this._lootList = d.CollectableManager.parser.s2cParamList.createList(t.G);
  };
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "hasArrived", {
    get: function () {
      return this.movementProgress == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "isStationed", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BasicMapmovementVO.prototype, "isStationed").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "armySize", {
    get: function () {
      return this._inventory.getUnitCount(null);
    },
    enumerable: true,
    configurable: true
  });
  ArmyTravelMapMovementVO.prototype.getArmySizeLevel = function () {
    var e = this._inventory.getSoldierCount();
    if (e > 0) {
      if (e < s.ClientConstCastle.SMALL_ARMY_LIMIT) {
        return 1;
      }
      if (e >= s.ClientConstCastle.SMALL_ARMY_LIMIT && e < s.ClientConstCastle.BIG_ARMY_LIMIT) {
        return 2;
      }
      if (e >= s.ClientConstCastle.BIG_ARMY_LIMIT) {
        return 3;
      }
    }
    return 1;
  };
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "needGeneral", {
    get: function () {
      return this.isMyMovement;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BasicMapmovementVO.prototype, "needGeneral").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "isAccurateInfo", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "inventory", {
    get: function () {
      return this._inventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "canBeRetreated", {
    get: function () {
      if (!this.isMyMovement) {
        return false;
      }
      switch (this._direction) {
        case c.BasicMapmovementVO.TRAVELSTATE_MOVING_TO_TARGET:
          return this.sourceArea.ownerInfo.isOwnOwnerInfo && this.isSourceAreaStillMine;
        case c.BasicMapmovementVO.TRAVELSTATE_RETURN_HOME:
          return this.advisorType > 0 && !this.advisorIsLastAttack;
        default:
          return false;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BasicMapmovementVO.prototype, "canBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "lootList", {
    get: function () {
      return this._lootList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "foodSupply", {
    get: function () {
      var e = 0;
      for (var t = 0, i = this._inventory.getSoldiers(); t < i.length; t++) {
        var n = i[t];
        e += a.int(n.foodSupply * n.inventoryAmount);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "meadSupply", {
    get: function () {
      var e = 0;
      for (var t = 0, i = this._inventory.getSoldiers(); t < i.length; t++) {
        var n = i[t];
        e += a.int(n.meadSupply * n.inventoryAmount);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "beefSupply", {
    get: function () {
      var e = 0;
      for (var t = 0, i = this._inventory.getSoldiers(); t < i.length; t++) {
        var n = i[t];
        e += a.int(n.beefSupply * n.inventoryAmount);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  ArmyTravelMapMovementVO.prototype.isSubscriptionBuffed = function () {
    return this.targetOwnerID == r.CastleModel.userData.playerID && this.sourceOwnerID != r.CastleModel.userData.playerID && r.CastleModel.subscriptionData.getEffectValue(l.EffectTypeEnum.EFFECT_TYPE_RETURN_TRAVEL_BOOST, this.targetArea.areaType, this.targetArea.kingdomID) > 0;
  };
  Object.defineProperty(ArmyTravelMapMovementVO.prototype, "autoSkipCooldownType", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  ArmyTravelMapMovementVO.__initialize_static_members = function () {
    ArmyTravelMapMovementVO.NAME = "Armytravel";
  };
  return ArmyTravelMapMovementVO;
}(c.BasicMapmovementVO);
exports.ArmyTravelMapMovementVO = u;
var d = require("./50.js");
var p = require("./156.js");
o.classImplementsInterfaces(u, "IMapMovementVO", "IArmyMapmovementVO");
u.__initialize_static_members();