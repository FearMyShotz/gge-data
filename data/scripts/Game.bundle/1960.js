Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./5543.js");
var s = require("./83.js");
var r = require("./99.js");
var l = function (e) {
  function MessageUserVO() {
    return e.call(this) || this;
  }
  n.__extends(MessageUserVO, e);
  MessageUserVO.prototype.parseMessageHeader = function (e) {
    this._subject = e;
  };
  MessageUserVO.prototype.parseSubject = function () {
    var e = this._subject;
    return e = (e = e.replace(/\r/g, " ")).replace(/\n/g, " ");
  };
  MessageUserVO.prototype.parseSender = function () {
    return this.senderName;
  };
  Object.defineProperty(MessageUserVO.prototype, "dialogInfo", {
    get: function () {
      return new s.DialogInfoVO(c.CastleReadDialog, new a.CastleReadDialogProperties(this));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageUserVO.prototype, "additionalIconName", {
    get: function () {
      if (this.messageType == o.MessageConst.MESSAGE_TYPE_ALLIANCE_NEWSLETTER) {
        return "CastleMessageIconsAlliance";
      } else {
        return "";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AMessageVO.prototype, "additionalIconName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageUserVO.prototype, "body", {
    get: function () {
      return this._body;
    },
    set: function (e) {
      this._body = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageUserVO.prototype, "ignoreAvailable", {
    get: function () {
      return this.messageType != o.MessageConst.MESSAGE_TYPE_ALLIANCE_NEWSLETTER;
    },
    enumerable: true,
    configurable: true
  });
  return MessageUserVO;
}(r.AMessageVO);
exports.MessageUserVO = l;
var c = require("./5544.js");