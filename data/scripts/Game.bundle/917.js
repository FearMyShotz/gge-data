Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLostPasswordDialogProperties(t, i, n = null, o = null, a = "Yes", s = "No", r = "") {
    var l = e.call(this, t, i, n, o, o, a, s) || this;
    l.email = "";
    l.email = r;
    return l;
  }
  n.__extends(CastleLostPasswordDialogProperties, e);
  return CastleLostPasswordDialogProperties;
}(require("./2.js").BasicStandardYesNoDialogProperties);
exports.CastleLostPasswordDialogProperties = o;