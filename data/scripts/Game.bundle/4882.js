Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./7.js");
var u = require("./172.js");
var d = require("./4.js");
var p = require("./10.js");
var h = function (e) {
  function HGHCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HGHCommand, e);
  Object.defineProperty(HGHCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_GET_HIGHSCORE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  HGHCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = -1;
        if (i.LID) {
          n = l.int(i.LID);
        }
        d.CastleModel.highscoreData.dispatchEvent(new u.CastleHighscoreEvent(u.CastleHighscoreEvent.GET_HIGHSCORE_DATA, [i], n));
        return true;
      case s.ERROR.PLAYER_NOT_FOUND:
        d.CastleModel.highscoreData.dispatchEvent(new u.CastleHighscoreEvent(u.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, [i], n));
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("alert_playerName_notFound")));
        break;
      case s.ERROR.ALLI_NOT_FOUND:
        d.CastleModel.highscoreData.dispatchEvent(new u.CastleHighscoreEvent(u.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, [i], n));
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("alert_allianceName_notFound")));
        break;
      default:
        this.showErrorDialog(e, t);
        d.CastleModel.highscoreData.dispatchEvent(new u.CastleHighscoreEvent(u.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR));
    }
    return false;
  };
  return HGHCommand;
}(p.CastleCommand);
exports.HGHCommand = h;
var g = require("./9.js");
var C = require("./38.js");
a.classImplementsInterfaces(h, "IExecCommand");