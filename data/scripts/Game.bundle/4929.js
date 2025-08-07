Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./561.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function BLDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BLDCommand, e);
  Object.defineProperty(BLDCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_BATTLE_LOG_DETAIL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BLDCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = s.int(i.LID);
        c.CastleModel.messageData.parseBattleLogDetail(i);
        var o = c.CastleModel.messageData.getBattleLogById(n);
        if (o) {
          this.controller.dispatchEvent(new l.CastleLogDataEvent(l.CastleLogDataEvent.NEW_FULL_LOG, o));
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return BLDCommand;
}(u.CastleCommand);
exports.BLDCommand = d;
o.classImplementsInterfaces(d, "IExecCommand");