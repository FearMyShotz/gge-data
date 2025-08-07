Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./28.js");
var s = require("./30.js");
var r = function (e) {
  function CastlePostPostAttackFactionDialogProperties(t, i) {
    var n = e.call(this) || this;
    n.armyArrivedTimeStamp = NaN;
    n.armySize = 0;
    n.armyArrivedTimeStamp = t * a.ClientConstTime.SEC_2_MILLISEC + s.CachedTimer.getCachedTimer();
    n.armySize = i;
    return n;
  }
  n.__extends(CastlePostPostAttackFactionDialogProperties, e);
  return CastlePostPostAttackFactionDialogProperties;
}(o.BasicProperties);
exports.CastlePostPostAttackFactionDialogProperties = r;