Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SkippableCooldownDialogProperties(t, i, n) {
    var o = e.call(this) || this;
    o.mapObjectVO = t;
    o._cooldownFinished = i;
    o._cooldownFinishedParamList = n;
    return o;
  }
  n.__extends(SkippableCooldownDialogProperties, e);
  SkippableCooldownDialogProperties.prototype.callCooldownFinishedFunction = function () {
    this._cooldownFinished(this._cooldownFinishedParamList);
  };
  return SkippableCooldownDialogProperties;
}(require("./2.js").BasicProperties);
exports.SkippableCooldownDialogProperties = o;