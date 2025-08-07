Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleEilandAssignTitleDialogProperties(t, i = false) {
    var n = this;
    n.revokeAssignedTitle = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).titleVO = t;
    n.revokeAssignedTitle = i;
    return n;
  }
  n.__extends(CastleEilandAssignTitleDialogProperties, e);
  return CastleEilandAssignTitleDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleEilandAssignTitleDialogProperties = o;