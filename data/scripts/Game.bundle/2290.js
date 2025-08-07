Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSaveAccountDialogProperties(t, i, n = null, o = null) {
    var a = e.call(this) || this;
    a.dialogType = t;
    a.dialogStyle = i;
    a.okCallbackFunction = n;
    a.closeCallbackFunction = o;
    return a;
  }
  n.__extends(CastleSaveAccountDialogProperties, e);
  return CastleSaveAccountDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSaveAccountDialogProperties = o;