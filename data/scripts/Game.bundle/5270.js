Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./7.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function BADCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BADCommand, e);
  Object.defineProperty(BADCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_ADD_BOOKMARK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BADCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        c.CastleModel.bookmarkData.parse_BAD(i);
        break;
      case s.ERROR.NO_SELF_TARGET:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("alert_noSelfBookmark")));
        break;
      case s.ERROR.BOOKMARK_MAX_ENTRYS:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("alert_bookmarkLimitReached")));
        break;
      case s.ERROR.BOOKMARK_ALREADY_ADDED:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("ringmenu_markLocation_exists_tooltip")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return BADCommand;
}(u.CastleCommand);
exports.BADCommand = d;
var p = require("./9.js");
var h = require("./38.js");
a.classImplementsInterfaces(d, "IExecCommand");