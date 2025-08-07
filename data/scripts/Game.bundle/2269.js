Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AttackCounterVO() {
    this._attackCount = 0;
    this._attackCountThreshold = 0;
    this._attackCountGrowthRate = 0;
  }
  AttackCounterVO.prototype.parseParamObject = function (e) {
    if (e) {
      this._attackCount = e[o.CommKeys.ATTACK_COUNT];
      this._attackCountThreshold = e[o.CommKeys.ATTACK_COUNT_THRESHOLD];
      this._attackCountGrowthRate = e[o.CommKeys.ATTACK_COUNT_GROWTH_RATE];
    }
  };
  Object.defineProperty(AttackCounterVO.prototype, "attackCount", {
    get: function () {
      return this._attackCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackCounterVO.prototype, "attackCountThreshold", {
    get: function () {
      return this._attackCountThreshold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackCounterVO.prototype, "attackCountGrowthRate", {
    get: function () {
      return this._attackCountGrowthRate;
    },
    enumerable: true,
    configurable: true
  });
  return AttackCounterVO;
}();
exports.AttackCounterVO = n;
var o = require("./5.js");