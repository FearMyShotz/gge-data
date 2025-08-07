Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAllianceRequestDiplomacyDialogProperties(t, i, n = null) {
    var o = this;
    o.allianceID = 0;
    o.requestStatus = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).allianceID = t;
    o.requestStatus = i;
    o.allianceInfoVO = n;
    return o;
  }
  n.__extends(CastleAllianceRequestDiplomacyDialogProperties, e);
  return CastleAllianceRequestDiplomacyDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleAllianceRequestDiplomacyDialogProperties = o;