Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./172.js");
var l = require("./15.js");
var c = require("./10.js");
var u = function (e) {
  function AMACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AMACommand, e);
  Object.defineProperty(AMACommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ALLIANCE_MEMBER_AQUA_POINTS_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AMACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleBasicController.getInstance().dispatchEvent(new r.CastleHighscoreEvent(r.CastleHighscoreEvent.AQUAPOINTS_HIGSCORE_ALLY_PLAYER, [i]));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AMACommand;
}(c.CastleCommand);
exports.AMACommand = u;
o.classImplementsInterfaces(u, "IExecCommand");