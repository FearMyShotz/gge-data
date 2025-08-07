Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./10.js");
var c = function (e) {
  function RPVCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RPVCommand, e);
  Object.defineProperty(RPVCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_REMOVE_PRIVATE_RESOURCE_VILLAGE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RPVCommand.prototype.executeCommand = function (t, i) {
    return e.prototype.executeCommand.call(this, t, i);
  };
  RPVCommand.prototype.exec = function (e) {
    var t = s.int(e[0]);
    var i = e[1];
    switch (t) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return RPVCommand;
}(l.CastleCommand);
exports.RPVCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");