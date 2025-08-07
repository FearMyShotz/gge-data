Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./28.js");
var s = require("./30.js");
var r = function (e) {
  function CastleTrackingTime() {
    var t = e.call(this) || this;
    t.timerDict = new Map();
    return t;
  }
  n.__extends(CastleTrackingTime, e);
  CastleTrackingTime.prototype.addTrackingTimer = function (e) {
    this.timerDict.set(e, s.CachedTimer.getCachedTimer());
  };
  CastleTrackingTime.prototype.retrieveTrackingTimeInSeconds = function (e) {
    return Math.ceil((s.CachedTimer.getCachedTimer() - this.timerDict.get(e)) * a.ClientConstTime.MILLISEC_2_SEC);
  };
  return CastleTrackingTime;
}(require("./54.js").CastleBasicData);
exports.CastleTrackingTime = r;
o.classImplementsInterfaces(r, "IUpdatable");