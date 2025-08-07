Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./231.js");
var u = require("./7.js");
var d = require("./4.js");
var p = require("./136.js");
var h = require("./10.js");
var g = function (e) {
  function JOACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(JOACommand, e);
  Object.defineProperty(JOACommand.prototype, "cmdId", {
    get: function () {
      return u.ClientConstSF.S2C_JOIN_OPEN_ALLIANCE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  JOACommand.prototype.executeCommand = function (e, t) {
    var i;
    var n;
    switch (e) {
      case s.ERROR.ALL_OK:
        var a = JSON.parse(t[1]);
        d.CastleModel.userData.parse_GAL(a.gal);
        d.CastleModel.allianceData.parseAllianceInfo(a.A);
        i = r.Localize.text("dialog_alliance_joiningAlliance_popup_title");
        n = r.Localize.text("dialog_alliance_joiningAlliance_popup_copy", [new l.TextVO(a.A.N)]);
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(i, n, this.bindFunction(this.showAllianceDialog)));
        break;
      case s.ERROR.ALLI_IS_NOT_AUTO_JOIN_ENABLED:
        i = r.Localize.text("ALLI_IS_NOT_AUTO_JOIN_ENABLED_HEADER");
        n = r.Localize.text("ALLI_IS_NOT_AUTO_JOIN_ENABLED");
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(i, n));
        _.CastleLayoutManager.getInstance().hideIngameUIComponent(m.CastleAllianceInfoDialog);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  JOACommand.prototype.showAllianceDialog = function (e) {
    C.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleAllianceDialog, new p.CastleAllianceDialogProperties(c.ClientConstAlliance.CAT_COMMUNICATION));
  };
  return JOACommand;
}(h.CastleCommand);
exports.JOACommand = g;
var C = require("./9.js");
var _ = require("./17.js");
var m = require("./132.js");
var f = require("./125.js");
var O = require("./38.js");
a.classImplementsInterfaces(g, "IExecCommand");