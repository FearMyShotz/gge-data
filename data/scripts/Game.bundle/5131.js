Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./396.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function SSICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SSICommand, e);
  Object.defineProperty(SSICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_SPY_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SSICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.spyData.parse_SSI(i);
        break;
      default:
        this.showErrorDialog(e, t);
        this.controller.dispatchEvent(new r.CastleSpyDataEvent(r.CastleSpyDataEvent.PRE_SPYINFO_FAILED));
    }
    return false;
  };
  return SSICommand;
}(c.CastleCommand);
exports.SSICommand = u;
o.classImplementsInterfaces(u, "IExecCommand");