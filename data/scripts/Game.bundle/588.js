Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleConfirmCostsDialogProperties(t, i, n, o, a = null, s = null, r = null, l = "", c = "") {
    var u = e.call(this, t, i, a, s, r, l, c) || this;
    u.costs = n;
    u.storage = o;
    return u;
  }
  n.__extends(CastleConfirmCostsDialogProperties, e);
  return CastleConfirmCostsDialogProperties;
}(require("./2.js").BasicStandardYesNoDialogProperties);
exports.CastleConfirmCostsDialogProperties = o;