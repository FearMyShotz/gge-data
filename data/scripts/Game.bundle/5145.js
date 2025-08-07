Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./7.js");
var c = require("./43.js");
var u = require("./93.js");
var d = require("./10.js");
var p = function (e) {
  function SSPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SSPCommand, e);
  Object.defineProperty(SSPCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_GET_SOCIAL_PID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SSPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        h.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(C.CastlePlayerInfoDialog, new u.CastlePlayerInfoDialogProperties(i.PID), c.CastleDialogConsts.DIALOG_TYPE_SINGLE);
        break;
      case s.ERROR.PLAYER_NOT_FOUND:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("dialog_socialPlayerIsNoIngamePlayer_title"), r.Localize.text("dialog_socialPlayerIsNoIngamePlayer_copy")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SSPCommand;
}(d.CastleCommand);
exports.SSPCommand = p;
var h = require("./9.js");
var g = require("./38.js");
var C = require("./94.js");
a.classImplementsInterfaces(p, "IExecCommand");