Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./5522.js");
var l = require("./1957.js");
var c = require("./112.js");
var u = require("./83.js");
var d = require("./1157.js");
var p = function (e) {
  function MessageSpyPlayerVO() {
    return e.call(this) || this;
  }
  n.__extends(MessageSpyPlayerVO, e);
  MessageSpyPlayerVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(a.MessageConst.SUBTYPE_META_DATA_SPLITTER)[0].split("+");
    var i = e.split(a.MessageConst.SUBTYPE_META_DATA_SPLITTER)[1].split("+");
    this._subtypeSpy = parseInt(t[0]);
    this._subtypeResult = parseInt(t[1]);
    if (t.length > 2) {
      this._areaType = parseInt(t[2]);
    }
    if (this._subtypeSpy != a.MessageConst.SUBTYPE_SPY_SABOTAGE && this._subtypeSpy != a.MessageConst.SUBTYPE_SPY_PLAQUE_MONK || this.subtypeResult != a.MessageConst.SUBTYPE_ATTACKER_SUCCESS && this.subtypeResult != a.MessageConst.SUBTYPE_DEFENDER_FAILED) {
      this._kingdomID = parseInt(i[0]);
      this._ownerID = parseInt(i[1]);
      this._areaName = i[2];
    } else {
      this._areaName = i[0];
      if (i.length > 1) {
        this._areaID = parseInt(i[1]);
      }
    }
  };
  MessageSpyPlayerVO.prototype.parseSubject = function () {
    if (this.forwarded) {
      return s.Localize.text("dialog_forwardlog_message", [s.Localize.text("dialog_spy_military")]);
    } else if (this._subtypeResult != a.MessageConst.SUBTYPE_DEFENDER_FAILED) {
      return s.Localize.text(o.GenericTextIds.VALUE_ASSIGN_COLON, [s.Localize.text(this.titleTextID), s.Localize.text(this.resultTextID)]);
    } else if (this._subtypeSpy == a.MessageConst.SUBTYPE_SPY_SABOTAGE) {
      return s.Localize.text("dialog_spy_affectedBySabotage");
    } else if (this._subtypeSpy == a.MessageConst.SUBTYPE_SPY_PLAQUE_MONK) {
      return s.Localize.text("dialog_spy_affectedByPlague");
    } else {
      return "";
    }
  };
  Object.defineProperty(MessageSpyPlayerVO.prototype, "resultTextID", {
    get: function () {
      switch (this._subtypeResult) {
        case a.MessageConst.SUBTYPE_ATTACKER_SUCCESS:
          return "dialog_spyLog_success";
        case a.MessageConst.SUBTYPE_ATTACKER_FAILED:
          return "dialog_spyLog_failure";
        case a.MessageConst.SUBTYPE_DEFENDER_SUCCESS:
          return "dialog_spyLog_keptAway";
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageSpyPlayerVO.prototype, "titleTextID", {
    get: function () {
      switch (this._subtypeSpy) {
        case a.MessageConst.SUBTYPE_SPY_SABOTAGE:
          return "dialog_spy_titleSabotage";
        case a.MessageConst.SUBTYPE_SPY_DEFENCE:
        case a.MessageConst.SUBTYPE_SPY_ECO:
          return "dialog_attack_spyInfo";
        case a.MessageConst.SUBTYPE_SPY_PLAQUE_MONK:
          return "plague";
      }
      return "";
    },
    enumerable: true,
    configurable: true
  });
  MessageSpyPlayerVO.prototype.parseSender = function () {
    if (this.forwarded) {
      return this._senderName;
    } else if (this.areaType && !this.areaName) {
      return c.PlayerHelper.getNPCCastleName(this.kingdomID, this.ownerID, this.areaType);
    } else {
      return this.areaName;
    }
  };
  Object.defineProperty(MessageSpyPlayerVO.prototype, "dialogInfo", {
    get: function () {
      if (this._subtypeSpy == a.MessageConst.SUBTYPE_SPY_SABOTAGE) {
        if (this._subtypeResult == a.MessageConst.SUBTYPE_DEFENDER_FAILED) {
          return new u.DialogInfoVO(h.CastleSabotageMessageDialog, new r.CastleSabotageMessageDialogProperties(this.messageType, this.areaID, this.messageID, !this.read));
        }
      } else if (this._subtypeSpy == a.MessageConst.SUBTYPE_SPY_PLAQUE_MONK && this._subtypeResult == a.MessageConst.SUBTYPE_DEFENDER_FAILED) {
        return new u.DialogInfoVO(C.CastlePlagueMessageDialog, new r.CastleSabotageMessageDialogProperties(this.messageType, this.areaID, this.messageID, !this.read));
      }
      return new u.DialogInfoVO(g.CastleSpyLogDialog, new l.CastleSpyLogDialogProperties(this, true));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AMessageSpyVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessageSpyPlayerVO.prototype.hasDetailedSpyLog = function () {
    return this.subtypeSpy == a.MessageConst.SUBTYPE_SPY_DEFENCE && this._subtypeResult == a.MessageConst.SUBTYPE_ATTACKER_SUCCESS || !!this.forwarded && this.subtypeSpy == a.MessageConst.SUBTYPE_SPY_ECO;
  };
  return MessageSpyPlayerVO;
}(d.AMessageSpyVO);
exports.MessageSpyPlayerVO = p;
var h = require("./5523.js");
var g = require("./1958.js");
var C = require("./5525.js");