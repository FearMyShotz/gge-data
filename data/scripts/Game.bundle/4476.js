Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function LuckyWheelPointEventTypeScoreEventVO(t = 0) {
    return e.call(this, t) || this;
  }
  n.__extends(LuckyWheelPointEventTypeScoreEventVO, e);
  Object.defineProperty(LuckyWheelPointEventTypeScoreEventVO.prototype, "pointThresholds", {
    get: function () {
      return this._pointThreshholds;
    },
    set: function (e) {
      this._pointThreshholds = e;
    },
    enumerable: true,
    configurable: true
  });
  LuckyWheelPointEventTypeScoreEventVO.prototype.parseBasicsFromParamObject = function (t) {
    if (t.CR) {
      this.addRewardsToList(t.CR);
    }
    e.prototype.parseBasicsFromParamObject.call(this, t);
  };
  return LuckyWheelPointEventTypeScoreEventVO;
}(require("./1917.js").APointEventTypeScoreEventVO);
exports.LuckyWheelPointEventTypeScoreEventVO = a;
o.classImplementsInterfaces(a, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");