Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./83.js");
var s = require("./99.js");
var r = function (e) {
  function MessageHighscoreBonusVO() {
    return e.call(this) || this;
  }
  n.__extends(MessageHighscoreBonusVO, e);
  MessageHighscoreBonusVO.prototype.parseMessageHeader = function (e) {};
  MessageHighscoreBonusVO.prototype.parseSubject = function () {
    return o.Localize.text("dialog_rankreward_message_title");
  };
  MessageHighscoreBonusVO.prototype.parseSender = function () {
    return o.Localize.text("system");
  };
  Object.defineProperty(MessageHighscoreBonusVO.prototype, "dialogInfo", {
    get: function () {
      return new a.DialogInfoVO(l.CastleWeeklyHighscoreRewardReadyMessage);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MessageHighscoreBonusVO;
}(s.AMessageVO);
exports.MessageHighscoreBonusVO = r;
var l = require("./5462.js");