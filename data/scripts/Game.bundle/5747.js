Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ABGAllianceTowerBuffInfoVO(e, t) {
    this.isActive = false;
    this.currentEffects = e;
    this.isActive = t;
  }
  ABGAllianceTowerBuffInfoVO.prototype.isAnyEffectUpgraded = function () {
    for (var e = 0; e < this.currentEffects.length; e++) {
      if (this.currentEffects[e].currentLevel > 0) {
        return true;
      }
    }
    return false;
  };
  ABGAllianceTowerBuffInfoVO.prototype.createServerEffectsArray = function () {
    var e = [];
    for (var t = 0; t < this.currentEffects.length; t++) {
      var i = this.currentEffects[t];
      if (i.selectedLevel > i.currentLevel) {
        var n = {
          E: i.currentBonusVO.effect.effectID,
          ELBI: i.currentLevel,
          ELAI: i.selectedLevel
        };
        e.push(n);
      }
    }
    return e;
  };
  return ABGAllianceTowerBuffInfoVO;
}();
exports.ABGAllianceTowerBuffInfoVO = n;