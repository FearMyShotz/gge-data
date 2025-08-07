Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./83.js");
var s = require("./99.js");
var r = function (e) {
  function MessagePaymentDopplerVO() {
    return e.call(this) || this;
  }
  n.__extends(MessagePaymentDopplerVO, e);
  MessagePaymentDopplerVO.prototype.parseMessageHeader = function (e) {};
  MessagePaymentDopplerVO.prototype.parseSubject = function () {
    return o.Localize.text("dialog_paymentdoubler_title");
  };
  MessagePaymentDopplerVO.prototype.parseSender = function () {
    if (this.senderName != "") {
      return this.senderName;
    } else {
      return o.Localize.text("system");
    }
  };
  Object.defineProperty(MessagePaymentDopplerVO.prototype, "dialogInfo", {
    get: function () {
      return new a.DialogInfoVO(l.CastlePaymentDopplerMessageDialog);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MessagePaymentDopplerVO;
}(s.AMessageVO);
exports.MessagePaymentDopplerVO = r;
var l = require("./5468.js");