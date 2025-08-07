Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAllianceInfoDialogProperties(t, i = "", n = -1, o = 1, a = null) {
    var s = this;
    s.allianceID = 0;
    s.statusID = 0;
    s.statusConfirmed = false;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).allianceID = t;
    s.allianceName = i;
    s.statusID = n;
    s.statusConfirmed = o == 1;
    s.startCat = a;
    return s;
  }
  n.__extends(CastleAllianceInfoDialogProperties, e);
  return CastleAllianceInfoDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleAllianceInfoDialogProperties = o;