Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function (e) {
  function CastleLuckyWheelScoreBar(t, i, n) {
    var o = e.call(this, t, i) || this;
    o._eventVO = n;
    return o;
  }
  n.__extends(CastleLuckyWheelScoreBar, e);
  CastleLuckyWheelScoreBar.prototype.updateThresholdRewards = function () {
    var e = 0;
    for (var t = 0; t < this.numThresholdRewards; t++) {
      e = t == 0 ? 1 : a.int(this.luckyWheelData.pointThresholds[t - 1]);
      this.updateReward(t, this.luckyThresholdProgress(this.luckyWheelData.pointThresholds[t], this.luckyWheelData.currentWinClass, this.luckyWheelData.winClassProgress, e));
    }
  };
  CastleLuckyWheelScoreBar.prototype.luckyThresholdProgress = function (e, t, i, n) {
    var o = 0;
    if (t == e || t > e) {
      return 1;
    }
    if (t < n) {
      return 0;
    }
    var a = 1 / (e - n);
    o = (t - n) * a;
    o += i / this.luckyWheelData.getNeededSpinsForClass(t) * a;
    return o = Math.min(1, o);
  };
  Object.defineProperty(CastleLuckyWheelScoreBar.prototype, "luckyWheelData", {
    get: function () {
      return this._eventVO.luckyWheelData;
    },
    enumerable: true,
    configurable: true
  });
  return CastleLuckyWheelScoreBar;
}(require("./331.js").CastleScoreBarComponent);
exports.CastleLuckyWheelScoreBar = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");