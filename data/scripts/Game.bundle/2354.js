Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./18.js");
var a = function () {
  function CastleCompactArmyVO() {}
  CastleCompactArmyVO.prototype.parseSimpleArmy = function (e) {
    this._itemsLeft = new s.UnitInventoryDictionary();
    this._itemsMiddle = new s.UnitInventoryDictionary();
    this._itemsRight = new s.UnitInventoryDictionary();
    this._itemsLeft.fillFromWodAmountArray(e.L);
    this._itemsMiddle.fillFromWodAmountArray(e.M);
    this._itemsRight.fillFromWodAmountArray(e.R);
  };
  CastleCompactArmyVO.prototype.parseSupportTools = function (e) {
    var t;
    this._itemsSupport = new s.UnitInventoryDictionary();
    t = e.map(function (e) {
      return [e, 1];
    });
    this._itemsSupport.fillFromWodAmountArray(t);
  };
  CastleCompactArmyVO.prototype.parseYardWave = function (e) {
    if (e) {
      this._yardWave = new s.UnitInventoryDictionary();
      this._yardWave.fillFromWodAmountArray(e);
    }
  };
  Object.defineProperty(CastleCompactArmyVO.prototype, "yardWave", {
    get: function () {
      return this._yardWave;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "itemsLeft", {
    get: function () {
      return this._itemsLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "itemsMiddle", {
    get: function () {
      return this._itemsMiddle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "itemsRight", {
    get: function () {
      return this._itemsRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "itemsSupport", {
    get: function () {
      return this._itemsSupport;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "unitAmount", {
    get: function () {
      var e = this._itemsLeft.getSoldierCount();
      e += this._itemsMiddle.getSoldierCount();
      return e += this._itemsRight.getSoldierCount();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "meleeUnitAmount", {
    get: function () {
      var e = n.int(this._itemsLeft.getUnitCountByUnitType(o.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, true, true));
      e += n.int(this._itemsMiddle.getUnitCountByUnitType(o.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, true, true));
      return e += n.int(this._itemsRight.getUnitCountByUnitType(o.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE, true, true));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "rangedUnitAmount", {
    get: function () {
      var e = n.int(this._itemsLeft.getUnitCountByUnitType(o.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, true, true));
      e += n.int(this._itemsMiddle.getUnitCountByUnitType(o.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, true, true));
      return e += n.int(this._itemsRight.getUnitCountByUnitType(o.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE, true, true));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "toolAmount", {
    get: function () {
      var e = this._itemsLeft.getToolCount();
      e += this._itemsMiddle.getToolCount();
      e += this._itemsRight.getToolCount();
      return e += this._itemsSupport ? this._itemsSupport.getToolCount() : 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "foodSupply", {
    get: function () {
      var e = 0;
      for (var t = 0, i = this.itemsMiddle.getSoldiers(); t < i.length; t++) {
        var o = i[t];
        e += n.int(o.foodSupply * o.inventoryAmount);
      }
      for (var a = 0, s = this.itemsLeft.getSoldiers(); a < s.length; a++) {
        var r = s[a];
        e += n.int(r.foodSupply * r.inventoryAmount);
      }
      for (var l = 0, c = this.itemsRight.getSoldiers(); l < c.length; l++) {
        var u = c[l];
        e += n.int(u.foodSupply * u.inventoryAmount);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "meadSupply", {
    get: function () {
      var e = 0;
      for (var t = 0, i = this.itemsMiddle.getSoldiers(); t < i.length; t++) {
        var o = i[t];
        e += n.int(o.meadSupply * o.inventoryAmount);
      }
      for (var a = 0, s = this.itemsLeft.getSoldiers(); a < s.length; a++) {
        var r = s[a];
        e += n.int(r.meadSupply * r.inventoryAmount);
      }
      for (var l = 0, c = this.itemsRight.getSoldiers(); l < c.length; l++) {
        var u = c[l];
        e += n.int(u.meadSupply * u.inventoryAmount);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyVO.prototype, "beefSupply", {
    get: function () {
      var e = 0;
      for (var t = 0, i = this.itemsMiddle.getSoldiers(); t < i.length; t++) {
        var o = i[t];
        e += n.int(o.beefSupply * o.inventoryAmount);
      }
      for (var a = 0, s = this.itemsLeft.getSoldiers(); a < s.length; a++) {
        var r = s[a];
        e += n.int(r.beefSupply * r.inventoryAmount);
      }
      for (var l = 0, c = this.itemsRight.getSoldiers(); l < c.length; l++) {
        var u = c[l];
        e += n.int(u.beefSupply * u.inventoryAmount);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleCompactArmyVO;
}();
exports.CastleCompactArmyVO = a;
var s = require("./156.js");