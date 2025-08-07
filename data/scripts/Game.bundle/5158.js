Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./10.js");
var c = function (e) {
  function TSECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TSECommand, e);
  Object.defineProperty(TSECommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_IS_TEMPORARY_SERVER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TSECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        this.env.isOnTemporaryServer = i.GST == s.GlobalServerConst.TEMP_SERVER;
        this.env.isSpecialServerConnectStarted = false;
        this.env.isOnAllianceBattleGroundServer = i.GST == s.GlobalServerConst.ALLIANCE_BATTLE_GROUND_SERVER;
        this.env.isCrossplay = i[a.CommKeys.IS_CROSSPLAY_SERVER] == 1;
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return TSECommand;
}(l.CastleCommand);
exports.TSECommand = c;
o.classImplementsInterfaces(c, "IExecCommand");