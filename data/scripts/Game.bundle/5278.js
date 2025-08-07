Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./10.js");
var a = require("./7.js");
var s = require("./5.js");
var r = require("./4.js");
var l = require("./9.js");
var c = require("./1295.js");
var u = function (e) {
  function PSDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PSDCommand, e);
  Object.defineProperty(PSDCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_PLAYER_SCHEDULED_DELETION;
    },
    enumerable: true,
    configurable: true
  });
  PSDCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.deleteAccountData.remainingTimeTillDeleteTimeStamp = Number(i.D);
        if (r.CastleModel.deleteAccountData.isAccountDeletionStarted) {
          l.CastleDialogHandler.getInstance().registerDefaultDialogs(c.CastleDeleteAccountDialog);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return PSDCommand;
}(o.CastleCommand);
exports.PSDCommand = u;