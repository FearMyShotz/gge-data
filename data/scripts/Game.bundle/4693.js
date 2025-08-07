Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./231.js");
var u = require("./7.js");
var d = require("./102.js");
var p = require("./4.js");
var h = require("./136.js");
var g = require("./10.js");
var C = function (e) {
  function AFOCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AFOCommand, e);
  Object.defineProperty(AFOCommand.prototype, "cmdId", {
    get: function () {
      return u.ClientConstSF.S2C_FOUND_ALLIANCE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AFOCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case r.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        p.CastleModel.allianceData.parseAllianceInfo(i.A);
        p.CastleModel.userData.parse_GAL(i.gal);
        this.controller.dispatchEvent(new d.CastleAllianceDataEvent(d.CastleAllianceDataEvent.ALLIANCE_FOUNDED));
        _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleAllianceDialog, new h.CastleAllianceDialogProperties(c.ClientConstAlliance.CAT_OVERVIEW));
        break;
      case r.ERROR.TEXT_TOO_SHORT:
        _.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_watchout"), l.Localize.text("dialog_alliance_alliancenameTooShort", [s.AllianceConst.NAME_MIN_LENGTH])));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AFOCommand;
}(g.CastleCommand);
exports.AFOCommand = C;
var _ = require("./9.js");
var m = require("./125.js");
var f = require("./38.js");
a.classImplementsInterfaces(C, "IExecCommand");