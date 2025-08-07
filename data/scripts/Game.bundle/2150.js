Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DefenderFlankEffectVO(e = 0, t = 0, i = 1, n = 0, o = 0, a = 1, s = 1, r = 1, l = 1) {
    this._meleeDefenceUnitsMeleeStrength = 0;
    this._meleeDefenceUnitsRangeStrength = 0;
    this._rangeDefenceUnitsMeleeStrength = 0;
    this._rangeDefenceUnitsRangeStrength = 0;
    this._defenderRangeBonus = 0;
    this._defenderMeleeBonus = 0;
    this._defenderWallBonus = 0;
    this._defenderGateBonus = 0;
    this._defenderMoatBonus = 0;
    this._meleeDefenceUnitsMeleeStrength = e;
    this._meleeDefenceUnitsRangeStrength = t;
    this._rangeDefenceUnitsMeleeStrength = n;
    this._rangeDefenceUnitsRangeStrength = o;
    this._defenderMeleeBonus = i;
    this._defenderRangeBonus = a;
    this._defenderWallBonus = s;
    this._defenderGateBonus = r;
    this._defenderMoatBonus = l;
  }
  Object.defineProperty(DefenderFlankEffectVO.prototype, "defenderWallBonus", {
    get: function () {
      return this._defenderWallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderFlankEffectVO.prototype, "defenderGateBonus", {
    get: function () {
      return this._defenderGateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderFlankEffectVO.prototype, "defenderMoatBonus", {
    get: function () {
      return this._defenderMoatBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderFlankEffectVO.prototype, "defenderRangeBonus", {
    get: function () {
      return this._defenderRangeBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderFlankEffectVO.prototype, "defenderMeleeBonus", {
    get: function () {
      return this._defenderMeleeBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DefenderFlankEffectVO.prototype, "hasRangeDefenders", {
    get: function () {
      return this._rangeDefenceUnitsMeleeStrength != 0 || this._rangeDefenceUnitsRangeStrength != 0;
    },
    enumerable: true,
    configurable: true
  });
  DefenderFlankEffectVO.prototype.getMeleeDefenceValue = function (e = 0, t = 0) {
    return this._meleeDefenceUnitsMeleeStrength * (this._defenderMeleeBonus - e) + this._rangeDefenceUnitsMeleeStrength * (this._defenderRangeBonus - t);
  };
  DefenderFlankEffectVO.prototype.getRangeDefenceValue = function (e = 0, t = 0) {
    return this._rangeDefenceUnitsRangeStrength * (this._defenderRangeBonus - e) + this._meleeDefenceUnitsRangeStrength * (this._defenderMeleeBonus - t);
  };
  return DefenderFlankEffectVO;
}();
exports.DefenderFlankEffectVO = n;