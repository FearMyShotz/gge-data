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
  function ARDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ARDCommand, e);
  Object.defineProperty(ARDCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ALLIANCE_REFUSE_DIPLOMACY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ARDCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.allianceData.parseAllianceInfo(i.A);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ARDCommand;
}(l.CastleCommand);
exports.ARDCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");