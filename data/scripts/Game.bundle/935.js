Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./18.js");
var r = require("./519.js");
var l = function (e) {
  function SiegeMapmovementVO() {
    var t = this;
    t._isForceCancelable = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).name = SiegeMapmovementVO.NAME;
    t.group = "Mapmovement";
    return t;
  }
  n.__extends(SiegeMapmovementVO, e);
  SiegeMapmovementVO.prototype.loadFromParamObject = function (t) {
    e.prototype.loadFromParamObject.call(this, t);
    this.parseArmy(t.A);
    this._isForceCancelable = !!t.FC && Boolean(t.FC);
  };
  SiegeMapmovementVO.prototype.parseArmy = function (e) {
    this._inventory = new c.UnitInventoryDictionary();
    this._inventory.fillFromWodAmountArray(e);
  };
  Object.defineProperty(SiegeMapmovementVO.prototype, "needGeneral", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicMapmovementVO.prototype, "needGeneral").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "canBeSendHome", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicMapmovementVO.prototype, "canBeSendHome").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "canBeRetreated", {
    get: function () {
      return this.isMyMovement && !this.isReturnHome;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicMapmovementVO.prototype, "canBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "isAccurateInfo", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "inventory", {
    get: function () {
      return this._inventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "armySize", {
    get: function () {
      return this._inventory.getUnitCount(null);
    },
    enumerable: true,
    configurable: true
  });
  SiegeMapmovementVO.prototype.getArmySizeLevel = function () {
    var e = this._inventory.getSoldierCount();
    if (e > 0) {
      if (e < s.ClientConstCastle.SMALL_ARMY_LIMIT) {
        return 1;
      }
      if (e > s.ClientConstCastle.SMALL_ARMY_LIMIT && e < s.ClientConstCastle.BIG_ARMY_LIMIT) {
        return 2;
      }
      if (e >= s.ClientConstCastle.BIG_ARMY_LIMIT) {
        return 3;
      }
    }
    return 1;
  };
  Object.defineProperty(SiegeMapmovementVO.prototype, "tooLateToBeRetreated", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.BasicMapmovementVO.prototype, "tooLateToBeRetreated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "isForceCancelable", {
    get: function () {
      return this._isForceCancelable;
    },
    set: function (e) {
      this._isForceCancelable = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SiegeMapmovementVO.prototype, "foodSupply", {
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
  Object.defineProperty(SiegeMapmovementVO.prototype, "meadSupply", {
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
  Object.defineProperty(SiegeMapmovementVO.prototype, "beefSupply", {
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
  Object.defineProperty(SiegeMapmovementVO.prototype, "autoSkipCooldownType", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  SiegeMapmovementVO.__initialize_static_members = function () {
    SiegeMapmovementVO.NAME = "Siege";
  };
  return SiegeMapmovementVO;
}(r.BasicMapmovementVO);
exports.SiegeMapmovementVO = l;
var c = require("./156.js");
o.classImplementsInterfaces(l, "IMapMovementVO", "IArmyMapmovementVO");
l.__initialize_static_members();