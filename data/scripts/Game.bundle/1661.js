Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function ConfirmC2DialogProperties(t, i, n = null, o = null) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).c2Amount = t;
    a.errorVO = i;
    a.triggerSignal = n;
    a.serverData = o;
    return a;
  }
  n.__extends(ConfirmC2DialogProperties, e);
  return ConfirmC2DialogProperties;
}(require("./2.js").BasicProperties);
exports.ConfirmC2DialogProperties = o;