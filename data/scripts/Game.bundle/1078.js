Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSeasonBaseRepairDialogProperties(t, i, n = null, o = "") {
    var a = e.call(this) || this;
    a.dialogTextPrefix = i;
    a.tMapNodeVO = t;
    a.okFunction = n;
    a.treasuremapBridgeTypeName = o;
    return a;
  }
  n.__extends(CastleSeasonBaseRepairDialogProperties, e);
  return CastleSeasonBaseRepairDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSeasonBaseRepairDialogProperties = o;