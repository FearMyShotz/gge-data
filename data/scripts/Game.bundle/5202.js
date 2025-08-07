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
  function LTSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LTSCommand, e);
  Object.defineProperty(LTSCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_LIFETIME_SPEND_C2;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LTSCommand.prototype.executeCommand = function (t, i) {
    return e.prototype.executeCommand.call(this, t, i);
  };
  LTSCommand.prototype.exec = function (e) {
    var t = s.int(e[0]);
    var i = e[1];
    switch (t) {
      case a.ERROR.ALL_OK:
        var n = JSON.parse(i[1]);
        l.CastleModel.userData.parse_LTS(n);
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return LTSCommand;
}(c.CastleCommand);
exports.LTSCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");