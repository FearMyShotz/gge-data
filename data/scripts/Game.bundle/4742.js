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
var u = require("./265.js");
var d = require("./211.js");
var p = require("./10.js");
var h = function (e) {
  function ACICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACICommand, e);
  Object.defineProperty(ACICommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_GET_ATTACK_CASTLE_INFOS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ACICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        c.CastleModel.otherPlayerData.parseOwnerInfoArray(i.gaa.OI);
        var n = c.CastleModel.attackData.parse_ACI(i);
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(d.AttackDialog, new u.CastleAttackDialogProperties(n));
        break;
      case s.ERROR.PLAYER_HAS_NOOB_PROTECTION:
      case s.ERROR.TARGET_HAS_PEACE:
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("errorCode_94")));
        break;
      case s.ERROR.SPECIALCAMP_PROTECTED:
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("dialog_factionEvent_villageBlockedByTower")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ACICommand;
}(p.CastleCommand);
exports.ACICommand = h;
var g = require("./9.js");
var C = require("./38.js");
a.classImplementsInterfaces(h, "IExecCommand");