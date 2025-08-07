Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleGetTaxDialogProperties(t) {
    var i = this;
    i.collectedTax = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).collectedTax = t;
    return i;
  }
  n.__extends(CastleGetTaxDialogProperties, e);
  return CastleGetTaxDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleGetTaxDialogProperties = o;