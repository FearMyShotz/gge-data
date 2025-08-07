Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./137.js");
var l = require("./10.js");
var c = function (e) {
  function TSHCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TSHCommand, e);
  Object.defineProperty(TSHCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_TEMPORARY_SERVER_HIGHSCORE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TSHCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (r.TempServerHelper.tmpServerEvent) {
          r.TempServerHelper.tmpServerEvent.parseOwnRanks(i);
        }
        return true;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return TSHCommand;
}(l.CastleCommand);
exports.TSHCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");