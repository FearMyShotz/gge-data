Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function SINCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SINCommand, e);
  Object.defineProperty(SINCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_SHOW_INVENTORY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SINCommand.prototype.executeCommand = function (t, i) {
    return e.prototype.executeCommand.call(this, t, i);
  };
  SINCommand.prototype.exec = function (e) {
    var t = s.int(e[0]);
    var i = e[1];
    switch (t) {
      case a.ERROR.ALL_OK:
        var n = JSON.parse(i[1]);
        l.CastleModel.decoStorage.parseSIN(n);
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return SINCommand;
}(c.CastleCommand);
exports.SINCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");