Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./7.js");
var c = require("./39.js");
var u = require("./4.js");
var d = require("./5171.js");
var p = require("./10.js");
var h = function (e) {
  function STICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(STICommand, e);
  Object.defineProperty(STICommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_TROOP_SUPPORT_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  STICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = g.CastleTroopSupportData.parse_STI(i);
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleTroopSupportDialog, new d.CastleTroopSupportDialogProperties(n));
        u.CastleModel.lordData.parse_GLI(i.gli);
        break;
      case s.ERROR.NOT_IN_OWNED_CASTLE:
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text(c.ClientConstTextIds.NOT_AVAILABLE)));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return STICommand;
}(p.CastleCommand);
exports.STICommand = h;
var g = require("./1102.js");
var C = require("./9.js");
var _ = require("./38.js");
var m = require("./5172.js");
a.classImplementsInterfaces(h, "IExecCommand");