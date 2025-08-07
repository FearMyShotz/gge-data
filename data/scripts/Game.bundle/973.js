Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleStartOpenGateDialogProperties(t, i, n) {
    var o = this;
    o.castleID = 0;
    o.kingdomID = 0;
    o.castleSelectionVisible = false;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).castleID = t;
    o.kingdomID = i;
    o.castleSelectionVisible = n;
    return o;
  }
  n.__extends(CastleStartOpenGateDialogProperties, e);
  return CastleStartOpenGateDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleStartOpenGateDialogProperties = o;