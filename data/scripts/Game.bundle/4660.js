Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./9.js");
var l = require("./215.js");
var c = require("./10.js");
var u = function (e) {
  function RSMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RSMCommand, e);
  Object.defineProperty(RSMCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_RESEND_MAIL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RSMCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        if (JSON.parse(t[1])[a.CommKeys.RESEND_MAIL_ACTION_TYPE] == a.PlayerConst.RESEND_MAIL_ACCOUNT_VERIFICATION) {
          r.CastleDialogHandler.getInstance().registerDefaultDialogs(l.DarkOkDialog, new o.BasicStandardOkDialogProperties("attention", "dialog_options_newEmail_verificationSentAgain_desc"));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return RSMCommand;
}(c.CastleCommand);
exports.RSMCommand = u;