Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./1958.js");
var r = require("./119.js");
var l = require("./83.js");
var c = require("./1157.js");
var u = function (e) {
  function MessageSpyNpcVO() {
    return e.call(this) || this;
  }
  n.__extends(MessageSpyNpcVO, e);
  MessageSpyNpcVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER)[0].split("+");
    var i = e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER)[1].split("+");
    this._subtypeSpy = parseInt(t[0]);
    this._subtypeResult = parseInt(t[1]);
    this._areaType = parseInt(t[2]);
    this._kingdomID = parseInt(i[0]);
    this._ownerID = parseInt(i[1]);
    this._areaName = i[2];
  };
  MessageSpyNpcVO.prototype.parseSubject = function () {
    if (this.forwarded) {
      return a.Localize.text("dialog_forwardlog_message", [a.Localize.text("dialog_spy_military")]);
    } else if (this.subtypeResult == o.MessageConst.SUBTYPE_ATTACKER_SUCCESS) {
      return a.Localize.text("dialog_attack_spyInfo") + ": " + a.Localize.text("dialog_spyLog_success");
    } else if (this.subtypeResult == o.MessageConst.SUBTYPE_ATTACKER_FAILED) {
      return a.Localize.text("dialog_attack_spyInfo") + ": " + a.Localize.text("dialog_spyLog_failure");
    } else if (this.subtypeResult == o.MessageConst.SUBTYPE_DEFENDER_SUCCESS) {
      return a.Localize.text("dialog_attack_spyInfo") + ": " + a.Localize.text("dialog_spyLog_keptAway");
    } else {
      return "";
    }
  };
  MessageSpyNpcVO.prototype.parseSender = function () {
    if (this.forwarded) {
      return this._senderName;
    } else {
      return r.PlayerHelper.getNPCCastleName(this.kingdomID, this.ownerID, this.areaType);
    }
  };
  Object.defineProperty(MessageSpyNpcVO.prototype, "dialogInfo", {
    get: function () {
      return new l.DialogInfoVO(d.CastleSpyLogDialog, new s.CastleSpyLogDialogProperties(this, true));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AMessageSpyVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessageSpyNpcVO.prototype.hasDetailedSpyLog = function () {
    return this.subtypeSpy == o.MessageConst.SUBTYPE_SPY_DEFENCE && this.subtypeResult == o.MessageConst.SUBTYPE_ATTACKER_SUCCESS;
  };
  return MessageSpyNpcVO;
}(c.AMessageSpyVO);
exports.MessageSpyNpcVO = u;
var d = require("./1959.js");