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
  function GAPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GAPCommand, e);
  Object.defineProperty(GAPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_AQUAMARINE_POINTS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GAPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.userData.parse_GAP(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GAPCommand;
}(l.CastleCommand);
exports.GAPCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");