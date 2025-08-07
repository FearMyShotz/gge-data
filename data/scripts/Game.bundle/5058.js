Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./37.js");
var l = require("./10.js");
var c = require("./751.js");
var u = function (e) {
  function GPECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GPECommand, e);
  Object.defineProperty(GPECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_PLAYER_EVENT_STATISTICS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GPECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = new c.PlayerPerformanceVO();
        n.parseData(i);
        this.controller.dispatchEvent(new r.CastleServerMessageArrivedEvent(r.CastleServerMessageArrivedEvent.PERFORMANCE_PLAYER_ARRIVED, [n]));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GPECommand;
}(l.CastleCommand);
exports.GPECommand = u;
o.classImplementsInterfaces(u, "IExecCommand");