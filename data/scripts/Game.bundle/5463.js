Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./5464.js");
var s = require("./83.js");
var r = require("./99.js");
var l = function (e) {
  function MessageMarketCarriageArrivedVO() {
    return e.call(this) || this;
  }
  n.__extends(MessageMarketCarriageArrivedVO, e);
  MessageMarketCarriageArrivedVO.prototype.parseMessageHeader = function (e) {
    this._areaName = e;
  };
  MessageMarketCarriageArrivedVO.prototype.parseSubject = function () {
    return o.Localize.text("dialog_tradeMessage_title");
  };
  MessageMarketCarriageArrivedVO.prototype.parseSender = function () {
    return this.areaName;
  };
  Object.defineProperty(MessageMarketCarriageArrivedVO.prototype, "dialogInfo", {
    get: function () {
      return new s.DialogInfoVO(c.CastleTradeMessageDialog, new a.CastleTradeMessageDialogProperties(this));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageMarketCarriageArrivedVO.prototype, "areaName", {
    get: function () {
      return this._areaName;
    },
    enumerable: true,
    configurable: true
  });
  return MessageMarketCarriageArrivedVO;
}(r.AMessageVO);
exports.MessageMarketCarriageArrivedVO = l;
var c = require("./5465.js");