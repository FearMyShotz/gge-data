Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./354.js");
var r = require("./435.js");
var l = require("./83.js");
var c = require("./99.js");
var u = require("./1124.js");
var d = require("./1836.js");
var p = require("./4.js");
var h = require("./38.js");
var g = require("./2.js");
var C = require("./2.js");
var _ = function (e) {
  function MessagePopupVO() {
    var t = this;
    t._subtypeEvent = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessagePopupVO, e);
  MessagePopupVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    var i = t[0].split("+");
    this._subtypeEvent = parseInt(i[0]);
    if (this._subtypeEvent == o.MessageConst.SPECIAL_ID_WORLD_CUP) {
      i.shift();
      this._additionalInformation = i;
    } else if (t.length > 1) {
      this._additionalInformation = t[1].split("+");
    }
  };
  MessagePopupVO.prototype.parseSubject = function () {
    switch (this._subtypeEvent) {
      case o.MessageConst.SUBTYPE_POPUP_REGISTRATION_GIFT:
        return a.Localize.text("message_header_registerreward_title");
      case o.MessageConst.SUBTYPE_POPUP_LOGIN_BONUS:
        return a.Localize.text("message_header_loginBonus_title");
      case o.MessageConst.SUBTYPE_POPUP_SAVE_ACCOUNT:
        return a.Localize.text("message_mailVertication_header1");
      default:
        return this._subject;
    }
  };
  MessagePopupVO.prototype.parseSender = function () {
    return a.Localize.text("system");
  };
  Object.defineProperty(MessagePopupVO.prototype, "dialogInfo", {
    get: function () {
      switch (this._subtypeEvent) {
        case o.MessageConst.SUBTYPE_POPUP_REGISTRATION_GIFT:
          if (p.CastleModel.startUpBonusData.nextStartupLoginBonusID <= 0) {
            return new l.DialogInfoVO(h.CastleStandardOkDialog, new g.BasicStandardOkDialogProperties(a.Localize.text("generic_alert_information"), a.Localize.text("alert_registerreward_receivedAll_copy")));
          } else {
            return new l.DialogInfoVO(d.CastleStartupLoginBonusDialog);
          }
        case o.MessageConst.SUBTYPE_POPUP_LOGIN_BONUS:
          return new l.DialogInfoVO(u.CastleDailyLoginBonusDialog);
        case o.MessageConst.SUBTYPE_POPUP_SAVE_ACCOUNT:
          if (p.CastleModel.userData.hasSentMailVerification || p.CastleModel.userData.hasValidatedEmail || C.EnvGlobalsHandler.globals.loginIsKeyBased || C.EnvGlobalsHandler.globals.isOnSpecialServer) {
            return new l.DialogInfoVO(h.CastleStandardOkDialog, new g.BasicStandardOkDialogProperties(a.Localize.text("generic_alert_information"), a.Localize.text("dialog_mailVerticationCompletedAlready_copy1")));
          } else {
            return new l.DialogInfoVO(s.OptionsDialog, new r.OptionsDialogProperties(s.OptionsDialog.TAB_ACCOUNT_DETAILS, true));
          }
      }
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessagePopupVO.prototype, "additionalIconName", {
    get: function () {
      if (this._subtypeEvent == o.MessageConst.SUBTYPE_POPUP_REGISTRATION_GIFT) {
        return "CastleMessageIconsStartupLoginBonus";
      } else if (this._subtypeEvent == o.MessageConst.SUBTYPE_POPUP_LOGIN_BONUS) {
        return "CastleMessageIconsLoginBonus";
      } else if (this._subtypeEvent == o.MessageConst.SUBTYPE_POPUP_SAVE_ACCOUNT) {
        return "CastleMessageIconsRuby";
      } else {
        return "";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AMessageVO.prototype, "additionalIconName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessagePopupVO.prototype, "subtypeEvent", {
    get: function () {
      return this._subtypeEvent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessagePopupVO.prototype, "additionalInformation", {
    get: function () {
      return this._additionalInformation;
    },
    enumerable: true,
    configurable: true
  });
  return MessagePopupVO;
}(c.AMessageVO);
exports.MessagePopupVO = _;