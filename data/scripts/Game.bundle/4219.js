Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./4.js");
var s = require("./43.js");
var r = function (e) {
  function CastlePaymentDialogBehavior() {
    return e.call(this) || this;
  }
  n.__extends(CastlePaymentDialogBehavior, e);
  CastlePaymentDialogBehavior.prototype.checkRegisterBehavior = function (t, i, n) {
    if (a.CastleModel.settingsData.isDestroyingGame) {
      return false;
    }
    if (!a.CastleModel.settingsData.isLoginReady && e.prototype.checkRegisterBehavior.call(this, t, i, n)) {
      var r;
      var l;
      var c = 0;
      var u = false;
      r = o.int(i.length);
      var d = o.int(s.CastleDialogConsts.PAYMENT_SORT_ORDER.indexOf(t.type));
      var p = 0;
      for (c = 0; c < r; c++) {
        l = i[c];
        if ((p = o.int(s.CastleDialogConsts.PAYMENT_SORT_ORDER.indexOf(l.type))) > -1 && (u = true, p > d)) {
          i.splice(c, 1);
          return true;
        }
      }
      if (u) {
        return false;
      }
    }
    return true;
  };
  CastlePaymentDialogBehavior.prototype.checkDisplayBehavior = function (t, i, n, o, a) {
    return !!e.prototype.checkDisplayBehavior.call(this, t, i, n, o, a) && !a && this.checkDisplayBehaviorPayment(t, i, n, o);
  };
  CastlePaymentDialogBehavior.prototype.checkDisplayBehaviorPayment = function (e, t, i, n) {
    return a.CastleModel.settingsData.isLoginReady;
  };
  return CastlePaymentDialogBehavior;
}(require("./406.js").CastleBasicDialogBehavior);
exports.CastlePaymentDialogBehavior = r;