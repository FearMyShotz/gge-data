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
var u = require("./1155.js");
var d = require("./10.js");
var p = function (e) {
  function CRACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CRACommand, e);
  Object.defineProperty(CRACommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_CREATE_ARMY_ATTACK_MOVEMENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CRACommand.prototype.executeCommand = function (e, t) {
    var i;
    if (t && t.length > 0) {
      try {
        i = JSON.parse(t[1]);
      } catch (e) {}
    }
    switch (e) {
      case s.ERROR.ALL_OK:
        c.CastleModel.currencyData.parseGCU(i.gcu);
        c.CastleModel.otherPlayerData.parseOwnerInfoArray(i.O);
        c.CastleModel.armyData.parseMapMovementArray([i.AAM]);
        break;
      case s.ERROR.MOVEMENT_HAS_NO_UNITS:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("errorCode_100_noPlaceholder")));
        break;
      case s.ERROR.ATTACK_IN_PROGRESS:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastlePostPostAttackFactionDialog, new u.CastlePostPostAttackFactionDialogProperties(i.TS, i.AS));
        break;
      case s.ERROR.ALREADY_TO_MANY_OUTPOSTS:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_watchout"), r.Localize.text("noAbailableBarons")));
        break;
      case s.ERROR.ATTACK_TOO_MANY_UNITS:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties("", r.Localize.text("errorCode_313")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CRACommand;
}(d.CastleCommand);
exports.CRACommand = p;
var h = require("./9.js");
var g = require("./38.js");
var C = require("./1154.js");
a.classImplementsInterfaces(p, "IExecCommand");