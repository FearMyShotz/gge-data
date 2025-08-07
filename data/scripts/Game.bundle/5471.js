Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./5472.js");
var r = require("./83.js");
var l = require("./99.js");
var c = function (e) {
  function MessagePlayerGift() {
    var t = this;
    t.packID = 0;
    t.sendersID = 0;
    t.pAmount = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessagePlayerGift, e);
  MessagePlayerGift.prototype.parseMessageHeader = function (e) {
    this.sendersID = parseInt(e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER)[0].split("+")[0]);
    this.sendersName = String(e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER)[1].split("+"));
    this.packID = parseInt(e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER)[2].split("+")[0]);
    this.pAmount = parseInt(e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER)[3].split("+")[0]);
  };
  MessagePlayerGift.prototype.parseSubject = function () {
    return a.Localize.text("message_header_giftTrader_obtainedGift");
  };
  MessagePlayerGift.prototype.parseSender = function () {
    return a.Localize.text("system");
  };
  Object.defineProperty(MessagePlayerGift.prototype, "dialogInfo", {
    get: function () {
      return new r.DialogInfoVO(u.CastlePlayerGiftMessageDialog, new s.CastlePlayerGiftMessageProperties(this));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MessagePlayerGift;
}(l.AMessageVO);
exports.MessagePlayerGift = c;
var u = require("./5473.js");