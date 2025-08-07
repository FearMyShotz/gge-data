Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSetTimeDialogProperties(t, i, n, o) {
    var a = this;
    a.preselectedTime = 0;
    a.minDelayInSeconds = 0;
    a.maxDelayInSeconds = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).preselectedTime = t;
    a.minDelayInSeconds = i;
    a.maxDelayInSeconds = n;
    a.timeWasSetCallback = o;
    return a;
  }
  n.__extends(CastleSetTimeDialogProperties, e);
  return CastleSetTimeDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSetTimeDialogProperties = o;