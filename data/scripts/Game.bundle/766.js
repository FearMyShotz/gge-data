Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTimedYesNoDialogProperties(t, i, n, o, a = false, s = null, r = null, l = null, c = "", u = "", d = true) {
    var p = this;
    p.remainingTimeInSeconds = 0;
    CONSTRUCTOR_HACK;
    (p = e.call(this, t, i, s, r, l, c, u, d) || this).remainingTimeInSeconds = o;
    p.timerTextID = n;
    return p;
  }
  n.__extends(CastleTimedYesNoDialogProperties, e);
  return CastleTimedYesNoDialogProperties;
}(require("./629.js").CastleLargeYesNoDialogProperties);
exports.CastleTimedYesNoDialogProperties = o;