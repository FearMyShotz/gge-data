Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./102.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function ACNCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACNCommand, e);
  Object.defineProperty(ACNCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ALLIANCE_CHANGE_NAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ACNCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.allianceData.parse_AIN(i);
        this.controller.dispatchEvent(new r.CastleAllianceDataEvent(r.CastleAllianceDataEvent.ON_ALLIANCE_NAME_CHANGED));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ACNCommand;
}(c.CastleCommand);
exports.ACNCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");