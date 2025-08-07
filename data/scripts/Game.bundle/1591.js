Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function ModernCostConfirmationDialogProperties(t, i, n, o = null, a = null, s = 0) {
    var r = e.call(this) || this;
    r.discount = 0;
    r.title = t;
    r.copy = i;
    r.cost = n;
    r.onBuy = o;
    r.onCancel = a;
    r.discount = s;
    return r;
  }
  n.__extends(ModernCostConfirmationDialogProperties, e);
  return ModernCostConfirmationDialogProperties;
}(require("./2.js").BasicProperties);
exports.ModernCostConfirmationDialogProperties = o;