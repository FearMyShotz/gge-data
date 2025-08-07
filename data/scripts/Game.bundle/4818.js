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
  function DFKCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DFKCommand, e);
  Object.defineProperty(DFKCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_DEFENSE_KEEP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DFKCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.defenceData.parse_DFK(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return DFKCommand;
}(l.CastleCommand);
exports.DFKCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");