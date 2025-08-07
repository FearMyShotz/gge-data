Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./7.js");
var u = require("./4.js");
var d = require("./5093.js");
var p = require("./10.js");
var h = function (e) {
  function GPGCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GPGCommand, e);
  Object.defineProperty(GPGCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_GRANT_PLAYERGIFT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GPGCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastlePlayerGiftSentDialog, new d.CastlePlayerGiftSentDialogProperties(u.CastleModel.playerGiftData.playerName));
        break;
      case s.ERROR.TOO_MANY_PACKAGES_SENT_TODAY:
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_watchout"), l.Localize.text("giftTrader_giftLimitReached", [r.PackageConst.MAX_PLAYER_GIFT_PER_DAY])));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return true;
  };
  return GPGCommand;
}(p.CastleCommand);
exports.GPGCommand = h;
var g = require("./9.js");
var C = require("./38.js");
var _ = require("./5094.js");
a.classImplementsInterfaces(h, "IExecCommand");