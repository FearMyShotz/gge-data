Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSkipBuildingDialogProperties(t, i = -1) {
    var n = this;
    n.wodID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).buildingConstructionCommandVO = t;
    n.wodID = i;
    return n;
  }
  n.__extends(CastleSkipBuildingDialogProperties, e);
  return CastleSkipBuildingDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSkipBuildingDialogProperties = o;