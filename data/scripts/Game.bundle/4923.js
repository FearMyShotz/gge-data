Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function MPSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MPSCommand, e);
  Object.defineProperty(MPSCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_PEACE_MODE_START;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MPSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        JSON.parse(t[1]);
        return true;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return MPSCommand;
}(r.CastleCommand);
exports.MPSCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");