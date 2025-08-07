Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./43.js");
var r = function (e) {
  function PaymentPopupDialogInfoVO(t, i = null, n = a.int(s.CastleDialogConsts.DIALOG_TYPE_PAYMENT_DEFAULT), r = false, l = a.int(o.BasicDialogHandler.PRIORITY_LOW), c = null, u = null) {
    var d = this;
    d.blockDialogs = false;
    d.priority = 0;
    d.type = 0;
    CONSTRUCTOR_HACK;
    (d = e.call(this, t, i, c, u) || this).blockDialogs = r;
    d.priority = l;
    d.type = n;
    return d;
  }
  n.__extends(PaymentPopupDialogInfoVO, e);
  return PaymentPopupDialogInfoVO;
}(require("./83.js").DialogInfoVO);
exports.PaymentPopupDialogInfoVO = r;