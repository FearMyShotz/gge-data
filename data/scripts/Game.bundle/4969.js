Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./397.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function MSKCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MSKCommand, e);
  Object.defineProperty(MSKCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_MINUTE_SKIP_KINGDOM_TRANSFER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MSKCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.kingdomData.parse_KPI(i.kpi);
        this.controller.dispatchEvent(new r.CastleMinuteSkipEvent(r.CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS));
        break;
      default:
        this.showErrorDialog(e, t);
        this.controller.dispatchEvent(new r.CastleMinuteSkipEvent(r.CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL));
    }
    return false;
  };
  return MSKCommand;
}(c.CastleCommand);
exports.MSKCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");