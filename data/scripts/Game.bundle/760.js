Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleCostInfoDialogProperties(t, i, n = "", o = "", a = "") {
    var s = this;
    s.amount = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).functionOk = i;
    s.amount = t;
    s.copy = n;
    s.timestring = o;
    s.helpertext = a;
    return s;
  }
  n.__extends(CastleCostInfoDialogProperties, e);
  return CastleCostInfoDialogProperties;
}(require("./2.js").BasicProperties);
exports.CastleCostInfoDialogProperties = o;