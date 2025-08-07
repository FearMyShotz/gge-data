Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = function (e) {
  function RMMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RMMCommand, e);
  Object.defineProperty(RMMCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_REFRESH_MERCENARY_MISSION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RMMCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
        r.CastleModel.mercenaryData.waitingForServer = false;
    }
    return false;
  };
  return RMMCommand;
}(l.CastleCommand);
exports.RMMCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");