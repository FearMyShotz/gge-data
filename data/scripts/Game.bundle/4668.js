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
  function UARCommand() {
    return e.call(this) || this;
  }
  n.__extends(UARCommand, e);
  Object.defineProperty(UARCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_USER_ACHIEVED_RANKS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UARCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.titleData.parseUAR(i);
        return true;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return UARCommand;
}(l.CastleCommand);
exports.UARCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");