Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./933.js");
var a = require("./5.js");
var s = function () {
  function ABGAllianceTowerEffectVO(e) {
    this.currentLevel = 0;
    this.selectedLevel = 0;
    this.towerEffectXML = e;
  }
  ABGAllianceTowerEffectVO.prototype.parseServerParams = function (e) {
    this.currentLevel = n.int(e.L);
    this.selectedLevel = this.currentLevel;
    this.currentBonusVO = new o.RawLordEffectBonusVO();
    this.currentBonusVO.parseFromValueArray(this.towerEffectXML.effectVO, [this.getEffectValueForLevel(this.currentLevel)]);
  };
  ABGAllianceTowerEffectVO.prototype.reset = function () {
    this.currentLevel = 0;
    this.selectedLevel = 0;
    this.currentBonusVO = new o.RawLordEffectBonusVO();
    this.currentBonusVO.parseFromValueArray(this.towerEffectXML.effectVO, [0]);
  };
  ABGAllianceTowerEffectVO.prototype.getBonusVOForLevel = function (e) {
    var t = new o.RawLordEffectBonusVO();
    t.parseFromValueArray(this.towerEffectXML.effectVO, [this.getEffectValueForLevel(e)]);
    return t;
  };
  ABGAllianceTowerEffectVO.prototype.getTotalCostForSelectedLevel = function () {
    return n.int(a.AllianceBattleGroundConst.calculateBuffCosts(this.currentLevel, this.selectedLevel, this.effectBasePrice));
  };
  ABGAllianceTowerEffectVO.prototype.getCostForLevel = function (e) {
    return n.int(a.AllianceBattleGroundConst.calculateBuffCosts(e - 1, e, this.effectBasePrice));
  };
  ABGAllianceTowerEffectVO.prototype.getEffectValueForLevel = function (e) {
    return n.int(n.int(e > 0 ? a.AllianceBattleGroundConst.calculateEffectStrength(e, this.effectStartValue, this.effectIncrease) : 0));
  };
  Object.defineProperty(ABGAllianceTowerEffectVO.prototype, "allianceTowerEffectID", {
    get: function () {
      return this.towerEffectXML.allianceTowerEffectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerEffectVO.prototype, "effectID", {
    get: function () {
      return this.towerEffectXML.effectID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerEffectVO.prototype, "effectBasePrice", {
    get: function () {
      return this.towerEffectXML.effectBasePrice;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerEffectVO.prototype, "effectMaxLevel", {
    get: function () {
      return this.towerEffectXML.effectMaxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerEffectVO.prototype, "effectStartValue", {
    get: function () {
      return this.towerEffectXML.effectStartValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ABGAllianceTowerEffectVO.prototype, "effectIncrease", {
    get: function () {
      return this.towerEffectXML.effectIncrease;
    },
    enumerable: true,
    configurable: true
  });
  return ABGAllianceTowerEffectVO;
}();
exports.ABGAllianceTowerEffectVO = s;