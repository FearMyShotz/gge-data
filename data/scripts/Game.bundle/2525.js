Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleTempServerConfirmationDialogProperties(t, i, n = null) {
    var o = e.call(this) || this;
    o.globalServerID = 0;
    o.preBuildCastle = t;
    o.onComplete = n;
    o.globalServerID = i;
    return o;
  }
  n.__extends(CastleTempServerConfirmationDialogProperties, e);
  return CastleTempServerConfirmationDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleTempServerConfirmationDialogProperties = o;