Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleSendTroopsAddUnitsDialogProperties(t, i, n, o) {
    var a = this;
    a.currentItems = 0;
    a.maxItems = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).currentItems = t;
    a.maxItems = i;
    a.unitVO = n;
    a.addItemFunction = o;
    return a;
  }
  n.__extends(CastleSendTroopsAddUnitsDialogProperties, e);
  return CastleSendTroopsAddUnitsDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleSendTroopsAddUnitsDialogProperties = o;