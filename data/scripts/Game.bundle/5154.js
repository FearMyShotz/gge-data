Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function GPRCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GPRCommand, e);
  Object.defineProperty(GPRCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GLOBAL_SERVER_PREVIOUS_RUN_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GPRCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = new c.GlobalServerPreviousRunInfoVO();
        n.parseParams(i);
        u.CastleBasicController.getInstance().dispatchEvent(new d.GlobalServerPreviousRunInfoEvent(d.GlobalServerPreviousRunInfoEvent.GLOBAL_SERVER_PREVIOUS_RUN_INFO_RECEIVED, n));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GPRCommand;
}(r.CastleCommand);
exports.GPRCommand = l;
var c = require("./5155.js");
var u = require("./15.js");
var d = require("./1385.js");
o.classImplementsInterfaces(l, "IExecCommand");