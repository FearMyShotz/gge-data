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
var u = require("./9.js");
var d = require("./38.js");
var p = require("./1154.js");
var h = require("./1155.js");
var g = require("./10.js");
var C = function (e) {
  function CAMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CAMCommand, e);
  Object.defineProperty(CAMCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_CREATE_ARMY_ATTACK_MOVEMENT_TEMP_SERVER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CAMCommand.prototype.executeCommand = function (e, t) {
    var i;
    if (t && t.length > 1) {
      i = JSON.parse(t[1]);
    }
    switch (e) {
      case s.ERROR.ALL_OK:
        c.CastleModel.currencyData.parseGCU(i.gcu);
        c.CastleModel.otherPlayerData.parseOwnerInfoArray(i.O);
        c.CastleModel.armyData.parseMapMovementArray([i.AAM]);
        break;
      case s.ERROR.COOLING_DOWN:
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("canNotAttackCastle")));
        break;
      case s.ERROR.MOVEMENT_HAS_NO_UNITS:
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("errorCode_100", [i.MS])));
        break;
      case s.ERROR.ATTACK_IN_PROGRESS:
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastlePostPostAttackFactionDialog, new h.CastlePostPostAttackFactionDialogProperties(i.TS, i.AS));
        break;
      case s.ERROR.ALREADY_TO_MANY_OUTPOSTS:
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("noAbailableBarons")));
        break;
      case s.ERROR.ATTACK_TOO_MANY_UNITS:
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties("", r.Localize.text("errorCode_313")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CAMCommand;
}(g.CastleCommand);
exports.CAMCommand = C;
a.classImplementsInterfaces(C, "IExecCommand");