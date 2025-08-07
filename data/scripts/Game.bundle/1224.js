Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./18.js");
var r = require("./103.js");
var l = require("./69.js");
var c = require("./889.js");
var u = function (e) {
  function AUnitInventory() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.blockEventDispatch = false;
    return t;
  }
  n.__extends(AUnitInventory, e);
  Object.defineProperty(AUnitInventory.prototype, "units", {
    get: function () {
      throw new l.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AUnitInventory.prototype.addUnit = function (e, t) {
    throw new l.AbstractMethodError();
  };
  AUnitInventory.prototype.clear = function () {
    throw new l.AbstractMethodError();
  };
  AUnitInventory.prototype.dispatchChange = function () {
    this.dispatchEvent(r.EventInstanceMapper.getEvent(c.UnitInventoryEvent, c.UnitInventoryEvent.UPDATED));
  };
  AUnitInventory.prototype.addAll = function (e) {
    if (e) {
      this.blockEventDispatch = true;
      if (e != null) {
        for (var t = 0, i = e; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            this.addUnit(n.wodId, n.inventoryAmount);
          }
        }
      }
      this.blockEventDispatch = false;
      this.dispatchChange();
    }
  };
  AUnitInventory.prototype.fillFromWodAmountArray = function (e) {
    if (e) {
      this.clear();
      if (e.length < 1) {
        this.dispatchChange();
      } else {
        this.blockEventDispatch = true;
        for (var t = 0; t < e.length; t++) {
          var i = e[t];
          if (o.instanceOfClass(i, "Array")) {
            var n = a.int(i[0]);
            var s = a.int(i[1]);
            this.addUnit(n, s);
          }
        }
        this.blockEventDispatch = false;
        this.dispatchChange();
      }
    }
  };
  AUnitInventory.prototype.getUnits = function (e) {
    var t = [];
    if (this.units != null) {
      for (var i = 0, n = o.instanceOfClass(this.units, "Array") ? this.units : this.units.toArray(); i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          if (!e || !!e(a)) {
            t.push(a);
          }
        }
      }
    }
    return t;
  };
  AUnitInventory.prototype.getSoldiers = function () {
    return this.getUnits(this.byUnitCategory(s.ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
  };
  AUnitInventory.prototype.getTools = function () {
    return this.getUnits(this.byUnitCategory(s.ClientConstCastle.UNIT_CATEGORY_TOOLS));
  };
  AUnitInventory.prototype.getUnitsByType = function (e) {
    return this.getUnits(this.byUnitType(e));
  };
  AUnitInventory.prototype.getEventUnits = function () {
    return this.getUnits(this.byName(s.ClientConstCastle.NAME_EVENTUNIT));
  };
  AUnitInventory.prototype.getOffensiveSoldiers = function (e) {
    return this.getUnits(this.bySoldierFightType(s.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE, e));
  };
  AUnitInventory.prototype.getDefensiveSoldiers = function (e) {
    return this.getUnits(this.bySoldierFightType(s.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE, e));
  };
  AUnitInventory.prototype.getAsWodAmountArray = function () {
    var e = [];
    if (this.units != null) {
      for (var t = 0, i = o.instanceOfClass(this.units, "Array") ? this.units : this.units.toArray(); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n) {
          e.push([n.wodId, n.inventoryAmount]);
        }
      }
    }
    return e;
  };
  AUnitInventory.prototype.getUnitCount = function (e) {
    var t = 0;
    if (this.units != null) {
      for (var i = 0, n = o.instanceOfClass(this.units, "Array") ? this.units : this.units.toArray(); i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          if (!e || !!e(a)) {
            t += a.inventoryAmount;
          }
        }
      }
    }
    return t;
  };
  AUnitInventory.prototype.getUnitCountByUnitType = function (e, t = true, i = true) {
    return a.int(this.getUnitCount(this.byUnitType(e, t, i)));
  };
  AUnitInventory.prototype.getToolCount = function () {
    return a.int(this.getUnitCount(this.byUnitCategory(s.ClientConstCastle.UNIT_CATEGORY_TOOLS)));
  };
  AUnitInventory.prototype.getSoldierCount = function () {
    return a.int(this.getUnitCount(this.byUnitCategory(s.ClientConstCastle.UNIT_CATEGORY_SOLDIERS)));
  };
  AUnitInventory.prototype.getOffensiveSoldierCount = function (e) {
    return a.int(this.getUnitCount(this.bySoldierFightType(s.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE, e)));
  };
  AUnitInventory.prototype.getDefensiveSoldierCount = function (e) {
    return a.int(this.getUnitCount(this.bySoldierFightType(s.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE, e)));
  };
  AUnitInventory.prototype.byUnitType = function (e, t = true, i = true) {
    return function (n) {
      if (e && e.indexOf("Mead") >= 0) {
        return n.unitType == e.replace("Mead", "") && n.meadSupply > 0;
      } else if (e && e.indexOf("Beef") >= 0) {
        return n.unitType == e.replace("Beef", "") && n.beefSupply > 0;
      } else {
        return n.unitType == e && (!!t || n.meadSupply <= 0 || !!i || n.beefSupply <= 0);
      }
    };
  };
  AUnitInventory.prototype.byUnitCategory = function (e) {
    return function (t) {
      return t.unitCategory == e;
    };
  };
  AUnitInventory.prototype.bySoldierFightType = function (e, t = false) {
    return function (i) {
      var n = i;
      if (!o.instanceOfClass(n, "SoldierUnitVO")) {
        return false;
      }
      var a = n.isDefensive && e == s.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_DEFENSIVE || n.isOffensive && e == s.ClientConstCastle.SOLDIER_FIGHTTYPE_SOLDIERS_OFFENSIVE || n.isAllround;
      var r = !t || !n.isKamikaze;
      return a && r;
    };
  };
  AUnitInventory.prototype.byName = function (e) {
    return function (t) {
      return t.name == e;
    };
  };
  return AUnitInventory;
}(require("./72.js").CastleEventDispatcher);
exports.AUnitInventory = u;