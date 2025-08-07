Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./7.js");
var c = require("./396.js");
var u = require("./4.js");
var d = require("./10.js");
var p = function (e) {
  function BSDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BSDCommand, e);
  Object.defineProperty(BSDCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_SPY_LOG_DETAIL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BSDCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.NO_SPY_DATA:
      case s.ERROR.NO_SUCH_MESSAGE:
        this.controller.dispatchEvent(new c.CastleSpyDataEvent(c.CastleSpyDataEvent.NEW_SPY_LOG, [null]));
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("alert_noSpyData")));
        break;
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        u.CastleModel.otherPlayerData.parseOwnerInfo(i.OI);
        u.CastleModel.otherPlayerData.parseOwnerInfo(i.SO);
        u.CastleModel.spyData.parseSpyLog(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return BSDCommand;
}(d.CastleCommand);
exports.BSDCommand = p;
var h = require("./9.js");
var g = require("./38.js");
a.classImplementsInterfaces(p, "IExecCommand");