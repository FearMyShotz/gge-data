Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function ModernSimpleCostDialogProperties(t, i, n, o = null, a = null, s = 0, r = 0) {
    var l = e.call(this) || this;
    l.discount = 0;
    l.enableBuyDelay = 2000;
    l.disableBuyIfCantAfford = true;
    l.title = t;
    l.copy = i;
    l.costs = n;
    l.onBuy = o;
    l.onCancel = a;
    l.discount = s;
    l.enableBuyDelay = r;
    return l;
  }
  n.__extends(ModernSimpleCostDialogProperties, e);
  return ModernSimpleCostDialogProperties;
}(require("./2.js").BasicProperties);
exports.ModernSimpleCostDialogProperties = o;