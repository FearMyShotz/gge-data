Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./7.js");
var s = require("./10.js");
var r = require("./5.js");
var l = require("./4.js");
var c = function (e) {
  function CALCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CALCommand, e);
  Object.defineProperty(CALCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_CHANGE_ALLIANCE_LANGUAGE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CALCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case r.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.allianceData.parse_AIN(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CALCommand;
}(s.CastleCommand);
exports.CALCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");