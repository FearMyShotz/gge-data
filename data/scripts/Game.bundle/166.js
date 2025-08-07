Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleGenericMerchantDialogProperties(t, i = -1) {
    var n = this;
    n.highlightPackageId = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).buyPackageEventVO = t;
    n.highlightPackageId = i;
    return n;
  }
  n.__extends(CastleGenericMerchantDialogProperties, e);
  return CastleGenericMerchantDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleGenericMerchantDialogProperties = o;