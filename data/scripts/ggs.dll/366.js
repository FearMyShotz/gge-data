Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./6.js");
var s = require("./83.js");
var r = require("./84.js");
var o = require("./40.js");
var l = require("./369.js");
var u = require("./65.js");
var c = require("./18.js");
var _ = require("./30.js");
var d = require("./35.js");
var m = function (e) {
  function BasicHandleIdentityManagementErrorCommand(t = false) {
    return e.call(this, t) || this;
  }
  i.__extends(BasicHandleIdentityManagementErrorCommand, e);
  BasicHandleIdentityManagementErrorCommand.prototype.execute = function (e = null) {
    var t;
    var n = Number(e);
    _.debug("execute() -> " + n, e);
    switch (n) {
      case s.IdentityManagementConstants.ERROR_CLIENT_LOGIN_AGE_CHECK_FAILED:
        t = s.IdentityManagementConstants.TEXT_ID_ERROR_LOGIN_AGE_CHECK_FAILED;
        break;
      case s.IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA:
        t = s.IdentityManagementConstants.TEXT_ID_SERVER_MISSING_KOREA_ID_CHECK_DATA;
        break;
      case s.IdentityManagementConstants.ERROR_SERVER_NO_KOREA_USER_DATA_AVAILABLE:
        t = s.IdentityManagementConstants.TEXT_ID_ERROR_CLIENT_REGISTER_MISSING_KOREA_ID_CHECK;
        var i = c.Localize.text(t);
        r.BasicDialogHandler.getInstance().registerDialogs(o.CommonDialogNames.KoreaMissingIdCheckDialog_NAME, new l.BasicMissingIDCheckDialogProperties(c.Localize.text("generic_alert_watchout"), i));
        return;
      default:
        d.warn("execute() -> Invalid errorCode: " + n, e);
        t = s.IdentityManagementConstants.TEXT_ID_SERVER_MISSING_KOREA_ID_CHECK_DATA;
    }
    var a = c.Localize.text(t);
    r.BasicDialogHandler.getInstance().registerDialogs(o.CommonDialogNames.StandardOkDialog_NAME, new u.BasicStandardOkDialogProperties(c.Localize.text("generic_alert_watchout"), a));
  };
  BasicHandleIdentityManagementErrorCommand.NAME = "BasicHandleIdentityManagementErrorCommand";
  return BasicHandleIdentityManagementErrorCommand;
}(a.SimpleCommand);
exports.BasicHandleIdentityManagementErrorCommand = m;