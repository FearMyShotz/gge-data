Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function DoubleUnitsConfirmationProperties(t, i, n, o, a, s) {
    var r = this;
    r.isSoldiers = false;
    r.cost = 0;
    r.amount = 0;
    r.listID = 0;
    CONSTRUCTOR_HACK;
    (r = e.call(this) || this).isSoldiers = t;
    r.onDoubleUnitsConfirmed = i;
    r.cost = n;
    r.amount = o;
    r.name = a;
    r.listID = s;
    return r;
  }
  n.__extends(DoubleUnitsConfirmationProperties, e);
  return DoubleUnitsConfirmationProperties;
}(require("./2.js").BasicProperties);
exports.DoubleUnitsConfirmationProperties = o;