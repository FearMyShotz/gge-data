Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function SEACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SEACommand, e);
  Object.defineProperty(SEACommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SEASON_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SEACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return true;
  };
  return SEACommand;
}(r.CastleCommand);
exports.SEACommand = l;
o.classImplementsInterfaces(l, "IExecCommand");