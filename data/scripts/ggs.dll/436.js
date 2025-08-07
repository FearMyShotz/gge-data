Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./9.js");
var r = require("./25.js");
var o = require("./40.js");
var l = require("./65.js");
var u = require("./18.js");
var c = function (e) {
  function SMSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(SMSCommand, e);
  Object.defineProperty(SMSCommand.prototype, "cmdId", {
    get: function () {
      return s.BasicSmartfoxConstants.S2C_SERVER_MESSAGE;
    },
    enumerable: true,
    configurable: true
  });
  SMSCommand.prototype.executeCommand = function (t, n) {
    if (t == 0) {
      r.BasicLayoutManager.getInstance().showAdminDialog(o.CommonDialogNames.StandardOkDialog_NAME, new l.BasicStandardOkDialogProperties(u.Localize.text("generic_alert_connection_failed_title"), u.Localize.text("servershutdown_copy")));
    }
    return e.prototype.executeCommand.call(this, t, n);
  };
  return SMSCommand;
}(a.BasicCommand);
exports.SMSCommand = c;