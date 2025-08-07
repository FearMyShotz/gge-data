Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./15.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function TSCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TSCCommand, e);
  Object.defineProperty(TSCCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_TEMPORARY_SERVER_SELECT_CASTLE_COMPLETE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TSCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        if (c.CastleModel.userData.connectToTempServer) {
          o.CommandController.instance.executeCommand(l.CastleBasicController.CONNECT_TO_TEMPORARY_SERVER);
        }
        if (c.CastleModel.userData.connectToABGServer) {
          o.CommandController.instance.executeCommand(l.CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return true;
  };
  return TSCCommand;
}(u.CastleCommand);
exports.TSCCommand = d;
a.classImplementsInterfaces(d, "IExecCommand");