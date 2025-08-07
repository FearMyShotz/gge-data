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
  function NRFCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(NRFCommand, e);
  Object.defineProperty(NRFCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_NEW_RELIC_FLAG_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  NRFCommand.prototype.executeCommand = function (t, i) {
    return e.prototype.executeCommand.call(this, t, i);
  };
  NRFCommand.prototype.exec = function (e) {
    var t = s.int(e[0]);
    var i = e[1];
    switch (t) {
      case a.ERROR.ALL_OK:
        var n = JSON.parse(i[1]);
        l.CastleModel.equipData.parseNRF(n);
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return NRFCommand;
}(c.CastleCommand);
exports.NRFCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");