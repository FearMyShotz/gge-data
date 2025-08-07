Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function ADACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ADACommand, e);
  Object.defineProperty(ADACommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ALLIANCE_DELETE_TOPIC_ANSWER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ADACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        JSON.parse(t[1]);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ADACommand;
}(r.CastleCommand);
exports.ADACommand = l;
o.classImplementsInterfaces(l, "IExecCommand");