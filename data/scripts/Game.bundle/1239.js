Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AttackerFlankEffectVO(e = 1, t = 1, i = 0, n = 0, o = 0, a = 0) {
    this._attackerWallReduction = 0;
    this._attackerGateReduction = 0;
    this._attackerMoatReduction = 0;
    this._defenderRangeReduction = 0;
    this._attackerRangeBonus = 0;
    this._attackerMeleeBonus = 0;
    this._attackerWallReduction = i;
    this._attackerGateReduction = n;
    this._attackerMoatReduction = o;
    this._defenderRangeReduction = a;
    this._attackerMeleeBonus = e;
    this._attackerRangeBonus = t;
  }
  Object.defineProperty(AttackerFlankEffectVO.prototype, "defenderRangeReduction", {
    get: function () {
      return this._defenderRangeReduction;
    },
    enumerable: true,
    configurable: true
  });
  AttackerFlankEffectVO.prototype.getSoldierStackAttackValue = function (e, t) {
    var i = 0;
    if (e.unitType == a.ClientConstCastle.UNIT_TYPE_SOLDIER_MELEE) {
      i = o.int(e.buffedMeleeAttack * this._attackerMeleeBonus);
    } else if (e.unitType == a.ClientConstCastle.UNIT_TYPE_SOLDIER_RANGE) {
      i = o.int(e.buffedRangeAttack * this._attackerRangeBonus);
    }
    return i * Math.min(t, e.inventoryAmount);
  };
  Object.defineProperty(AttackerFlankEffectVO.prototype, "attackerGateReduction", {
    get: function () {
      return this._attackerGateReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackerFlankEffectVO.prototype, "attackerWallReduction", {
    get: function () {
      return this._attackerWallReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackerFlankEffectVO.prototype, "attackerMoatReduction", {
    get: function () {
      return this._attackerMoatReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackerFlankEffectVO.prototype, "attackerRangeBonus", {
    get: function () {
      return this._attackerRangeBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackerFlankEffectVO.prototype, "attackerMeleeBonus", {
    get: function () {
      return this._attackerMeleeBonus;
    },
    enumerable: true,
    configurable: true
  });
  AttackerFlankEffectVO.prototype.updateEffectsWithNewTool = function (e) {
    this._attackerWallReduction += e.wallBonus * e.inventoryAmount;
    this._attackerGateReduction += e.gateBonus * e.inventoryAmount;
    this._attackerMoatReduction += e.moatBonus * e.inventoryAmount;
    this._defenderRangeReduction += e.defRangeBonus * e.inventoryAmount;
  };
  return AttackerFlankEffectVO;
}();
exports.AttackerFlankEffectVO = n;
var o = require("./6.js");
var a = require("./18.js");