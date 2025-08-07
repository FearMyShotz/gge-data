Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./37.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function GAECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GAECommand, e);
  Object.defineProperty(GAECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ABG_GET_ALLIANCE_EVENT_STATISTICS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GAECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.allianceBattlegroundData.parseAlliancePerformance(i);
        this.controller.dispatchEvent(new r.CastleServerMessageArrivedEvent(r.CastleServerMessageArrivedEvent.ABG_PERFORMANCE_ALLIANCE_ARRIVED, [i]));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GAECommand;
}(c.CastleCommand);
exports.GAECommand = u;
o.classImplementsInterfaces(u, "IExecCommand");