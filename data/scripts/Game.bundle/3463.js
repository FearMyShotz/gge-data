Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AchievementConditionVO(e) {
    this.amount = 0;
    this.currentProgress = 0;
    this.additionalParams = e.split("+");
    this.type = this.additionalParams.shift();
    this.amount = parseInt(this.additionalParams.shift());
    this.currentProgress = 0;
  }
  Object.defineProperty(AchievementConditionVO.prototype, "hasAdditionalParams", {
    get: function () {
      return this.additionalParams.length > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementConditionVO.prototype, "hasFinished", {
    get: function () {
      return this.currentProgress >= this.amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AchievementConditionVO.prototype, "inProgress", {
    get: function () {
      return this.currentProgress < this.amount;
    },
    enumerable: true,
    configurable: true
  });
  AchievementConditionVO.prototype.percentFinished = function () {
    return this.currentProgress / this.amount;
  };
  return AchievementConditionVO;
}();
exports.AchievementConditionVO = n;