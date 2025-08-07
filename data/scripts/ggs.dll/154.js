Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function BasicPaymentEvent(t, n = false, i = false) {
    return e.call(this, t, n, i) || this;
  }
  i.__extends(BasicPaymentEvent, e);
  BasicPaymentEvent.PAYMENT_HASH_CHANGED = "paymentHashChanged";
  return BasicPaymentEvent;
}(createjs.Event);
exports.BasicPaymentEvent = a;