Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleExtractGemsDialogProperties(t, i, n) {
    var o = e.call(this) || this;
    o.craftingCost = 0;
    o.gemVOs = t;
    o.craftingCost = i;
    o.forgeFunction = n;
    return o;
  }
  n.__extends(CastleExtractGemsDialogProperties, e);
  return CastleExtractGemsDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleExtractGemsDialogProperties = o;