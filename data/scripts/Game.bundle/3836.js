Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function StrongestDefenceCounterWaveStrategy() {
    var t = e.call(this) || this;
    t.loadFlankFillStrategy(new s.StrongestDefenceCounterRatioConsideredFlankStrategy());
    return t;
  }
  n.__extends(StrongestDefenceCounterWaveStrategy, e);
  return StrongestDefenceCounterWaveStrategy;
}(require("./3837.js").AFillWaveStrategy);
exports.StrongestDefenceCounterWaveStrategy = a;
var s = require("./3838.js");
o.classImplementsInterfaces(a, "IFillWaveStrategy");