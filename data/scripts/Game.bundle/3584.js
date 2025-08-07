Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleCompactArmyDialogProperties(t, i = false) {
    var n = this;
    n.isAdventureMode = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).mapMovementVO = t;
    n.isAdventureMode = i;
    return n;
  }
  n.__extends(CastleCompactArmyDialogProperties, e);
  return CastleCompactArmyDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleCompactArmyDialogProperties = o;