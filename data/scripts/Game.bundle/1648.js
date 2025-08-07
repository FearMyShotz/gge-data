Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAllianceBuyBoostDialogProperties(t, i, n, o, a, s) {
    var r = this;
    r.buffType = 0;
    CONSTRUCTOR_HACK;
    (r = e.call(this) || this).boostTitle = t;
    r.boostDescription = i;
    r.boostAmount = n;
    r.boostCosts = o;
    r.buffType = a;
    r.targetAllianceSublayer = s;
    return r;
  }
  n.__extends(CastleAllianceBuyBoostDialogProperties, e);
  return CastleAllianceBuyBoostDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleAllianceBuyBoostDialogProperties = o;