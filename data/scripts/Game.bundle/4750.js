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
var d = require("./265.js");
var p = require("./211.js");
var h = require("./38.js");
var g = require("./10.js");
var C = function (e) {
  function GTICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GTICommand, e);
  Object.defineProperty(GTICommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_GET_ATTACK_ABG_TOWER_INFOS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GTICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        c.CastleModel.otherPlayerData.parseOwnerInfoArray(i.gaa.OI);
        var n = c.CastleModel.attackData.parse_GTI(i);
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(p.AttackDialog, new d.CastleAttackDialogProperties(n));
        break;
      case s.ERROR.PLAYER_HAS_NOOB_PROTECTION:
      case s.ERROR.TARGET_HAS_PEACE:
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("errorCode_94")));
        break;
      case s.ERROR.SPECIALCAMP_PROTECTED:
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("dialog_factionEvent_villageBlockedByTower")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GTICommand;
}(g.CastleCommand);
exports.GTICommand = C;
a.classImplementsInterfaces(C, "IExecCommand");