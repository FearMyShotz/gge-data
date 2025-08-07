Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleDefenceBuyUnitsDialogProperties(t, i, n = -1) {
    var o = this;
    o.mapID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).unitVO = t;
    o.worldmapObjectVO = i;
    o.mapID = n;
    return o;
  }
  n.__extends(CastleDefenceBuyUnitsDialogProperties, e);
  return CastleDefenceBuyUnitsDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleDefenceBuyUnitsDialogProperties = o;