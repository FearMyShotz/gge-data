Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./711.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function IBTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IBTCommand, e);
  Object.defineProperty(IBTCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_INSTANT_BUY_TOOL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  IBTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.CastleFightDataEvent(r.CastleFightDataEvent.NEW_TOOL_BOUGHT, [i.O]));
        l.CastleModel.currencyData.parseGCU(i.gcu);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return IBTCommand;
}(c.CastleCommand);
exports.IBTCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");