Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./7.js");
var d = require("./32.js");
var p = require("./4.js");
var h = require("./1674.js");
var g = require("./1123.js");
var C = require("./10.js");
var _ = function (e) {
  function GLUCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GLUCommand, e);
  Object.defineProperty(GLUCommand.prototype, "cmdId", {
    get: function () {
      return u.ClientConstSF.S2C_LEVEL_UP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GLUCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case l.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        p.CastleModel.currencyData.parseGCU(i.gcu);
        p.CastleModel.userData.parse_GXP(i.gxp);
        var n = c.int(i.L);
        var r = !!i.LL && i.LL == 1;
        if (n <= 10 || n == 20 || n == 30) {
          s.CommandController.instance.executeCommand(o.BasicController.GTM_CALL_GGS_TRACK_EVENT, "level" + n);
        }
        if (E.ClientConstCastle.hasReachedSpecificLevel(n)) {
          s.CommandController.instance.executeCommand(o.BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, new y.GameSightPayloadVO(O.GamesightEventConstants.LEVEL_COMPLETE_ + (n - 1)));
        }
        m.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleLevelUpDialog, new h.CastleLevelUpDialogProperties(n, r), true, a.BasicDialogHandler.PRIORITY_LOW);
        p.CastleModel.userData.levelUpInSession = true;
        this.controller.dispatchEvent(new d.CastleUserDataEvent(d.CastleUserDataEvent.LEVEL_UP));
        p.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetLoginBonusVO());
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GLUCommand;
}(C.CastleCommand);
exports.GLUCommand = _;
var m = require("./9.js");
var f = require("./812.js");
var O = require("./659.js");
var E = require("./18.js");
var y = require("./660.js");
r.classImplementsInterfaces(_, "IExecCommand");