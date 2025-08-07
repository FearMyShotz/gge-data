Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleVoucherEvent(t, i = false, n = false) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleVoucherEvent, e);
  CastleVoucherEvent.VOUCHER_CODE_SUCCESS = "voucher_code_success";
  CastleVoucherEvent.VOUCHER_CODE_FAILED = "voucher_code_failed";
  return CastleVoucherEvent;
}(createjs.Event);
exports.CastleVoucherEvent = o;