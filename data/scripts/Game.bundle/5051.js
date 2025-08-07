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
  function RCECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RCECommand, e);
  Object.defineProperty(RCECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_ALIEN_REPLACE_COUNT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RCECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.alienRerollData.parse_RCE(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return RCECommand;
}(l.CastleCommand);
exports.RCECommand = c;
o.classImplementsInterfaces(c, "IExecCommand");