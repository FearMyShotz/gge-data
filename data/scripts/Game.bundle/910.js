Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleNameCastleDialogProperties(t, i, n) {
    var o = this;
    o.kingdomID = 0;
    o.castleID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).worldmapVO = t;
    o.kingdomID = i;
    o.castleID = n;
    return o;
  }
  n.__extends(CastleNameCastleDialogProperties, e);
  return CastleNameCastleDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleNameCastleDialogProperties = o;