Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SingleInstanceDialogBehavior() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SingleInstanceDialogBehavior, e);
  SingleInstanceDialogBehavior.prototype.checkRegisterBehavior = function (t, i, n) {
    if (e.prototype.checkRegisterBehavior.call(this, t, i, n)) {
      if (i != null) {
        for (var o = 0, a = i; o < a.length; o++) {
          l = a[o];
          if (l !== undefined && l.type == t.type) {
            return false;
          }
        }
      }
      if (n != null) {
        for (var s = 0, r = n; s < r.length; s++) {
          var l;
          l = r[s];
          if (l !== undefined && l.type == t.type) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  };
  return SingleInstanceDialogBehavior;
}(require("./406.js").CastleBasicDialogBehavior);
exports.SingleInstanceDialogBehavior = o;