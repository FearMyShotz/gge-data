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
  function ACDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACDCommand, e);
  Object.defineProperty(ACDCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_ALLIANCE_CHANGE_DESCRIPTION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ACDCommand.prototype.executeCommand = function (e, t) {
    var i;
    switch (e) {
      case s.ERROR.ALL_OK:
        i = JSON.parse(t[1]);
        c.CastleModel.allianceData.parse_AIN(i.ain);
        break;
      case s.ERROR.USAGE_OF_BADWORDS:
        var n = "";
        if ((i = JSON.parse(t[1])).BW[0]) {
          n = i.BW[0];
        }
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("alert_badword_textReplacement", [n])));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ACDCommand;
}(u.CastleCommand);
exports.ACDCommand = d;
var p = require("./9.js");
var h = require("./38.js");
a.classImplementsInterfaces(d, "IExecCommand");