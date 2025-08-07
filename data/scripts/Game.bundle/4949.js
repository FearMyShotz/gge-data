Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./7.js");
var c = require("./140.js");
var u = require("./10.js");
var d = function (e) {
  function SMSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SMSCommand, e);
  Object.defineProperty(SMSCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_SEND_MESSAGE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SMSCommand.prototype.executeCommand = function (e, t) {
    if (e != s.ERROR.ALL_OK) {
      this.controller.dispatchEvent(new c.CastleMessageDataEvent(c.CastleMessageDataEvent.SENT_ERROR));
    }
    switch (e) {
      case s.ERROR.ALL_OK:
        this.controller.dispatchEvent(new c.CastleMessageDataEvent(c.CastleMessageDataEvent.SENT_OK));
        this.showMessageSentDialog();
        break;
      case s.ERROR.PLAYER_IS_IGNORED:
        this.showMessageSentDialog();
        break;
      case s.ERROR.INVALID_RECEIVER_ID:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("dialog_receiverNotFound")));
        break;
      case s.ERROR.USAGE_OF_BADWORDS:
        var i = JSON.parse(t[1]);
        var n = "";
        if (i.BW[0]) {
          n = i.BW[0];
        }
        if (n && n != "" && n != " ") {
          p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("alert_badword_textReplacement", [n])));
        } else {
          p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("alert_badword")));
        }
        break;
      case s.ERROR.TEXT_TOO_SHORT:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("alert_textTooShort")));
        break;
      case s.ERROR.LEVEL_TOO_HIGH_OR_LOW:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("player_not_on_map")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  SMSCommand.prototype.showMessageSentDialog = function () {
    p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("dialog_newMessage_message"), r.Localize.text("dialog_newMessage_messageSent")));
  };
  return SMSCommand;
}(u.CastleCommand);
exports.SMSCommand = d;
var p = require("./9.js");
var h = require("./38.js");
a.classImplementsInterfaces(d, "IExecCommand");