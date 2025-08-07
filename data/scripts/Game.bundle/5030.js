Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./7.js");
var u = require("./4.js");
var d = require("./10.js");
var p = function (e) {
  function RSTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RSTCommand, e);
  Object.defineProperty(RSTCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.C2S_START_RELOCATION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RSTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case r.ERROR.ALL_OK:
        this.layoutManager.state = g.CastleLayoutManager.STATE_WORLDMAP;
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("panel_relocate_title"), l.Localize.text("dialog_relocate_success_01", [a.TimeStringHelper.getTimeToString(u.CastleModel.userData.nextRelocationDuration, a.TimeStringHelper.ONE_TIME_HOURS_FORMAT, l.Localize.text)])));
        break;
      case r.ERROR.CASTLE_HAS_MOVEMENTS:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("errorCode_212")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return RSTCommand;
}(d.CastleCommand);
exports.RSTCommand = p;
var h = require("./9.js");
var g = require("./17.js");
var C = require("./38.js");
s.classImplementsInterfaces(p, "IExecCommand");