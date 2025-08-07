Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastlePostAttackDialogProperties(t, i, n) {
    var o = e.call(this) || this;
    o.hideFunction = t;
    o.attackInfoVO = i;
    o.selectedLord = n;
    return o;
  }
  n.__extends(CastlePostAttackDialogProperties, e);
  return CastlePostAttackDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastlePostAttackDialogProperties = o;