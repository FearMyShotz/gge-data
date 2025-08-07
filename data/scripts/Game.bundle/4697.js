Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./7.js");
var c = require("./10.js");
var u = function (e) {
  function AIPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AIPCommand, e);
  Object.defineProperty(AIPCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_ALLIANCE_INVITE_PLAYER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AIPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("invitationSent_title"), r.Localize.text("invitationSent_copy")));
        break;
      case s.ERROR.INVALID_PLAYER_ID:
        d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("player_not_found")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AIPCommand;
}(c.CastleCommand);
exports.AIPCommand = u;
var d = require("./9.js");
var p = require("./38.js");
a.classImplementsInterfaces(u, "IExecCommand");