Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./83.js");
var s = require("./99.js");
var r = require("./38.js");
var l = require("./2.js");
var c = function (e) {
  function MessageAttackTheasholdVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(MessageAttackTheasholdVO, e);
  MessageAttackTheasholdVO.prototype.parseMessageHeader = function (e) {};
  MessageAttackTheasholdVO.prototype.parseSubject = function () {
    this._subject = o.Localize.text("title_attack_threshold");
    return this._subject;
  };
  MessageAttackTheasholdVO.prototype.parseSender = function () {
    return o.Localize.text("system");
  };
  Object.defineProperty(MessageAttackTheasholdVO.prototype, "dialogInfo", {
    get: function () {
      return new a.DialogInfoVO(r.CastleStandardOkDialog, new l.BasicStandardOkDialogProperties(o.Localize.text("title_attack_threshold"), o.Localize.text("info_attack_threshold")));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAttackTheasholdVO.prototype, "additionalIconName", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  return MessageAttackTheasholdVO;
}(s.AMessageVO);
exports.MessageAttackTheasholdVO = c;