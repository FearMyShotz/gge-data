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
  function ABLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ABLCommand, e);
  Object.defineProperty(ABLCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ALLIANCE_BUFF_LIST;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ABLCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.allianceData.parse_ABL(i);
        break;
      default:
        l.CastleModel.allianceData.dispatchEvent(new r.CastleAllianceDataEvent(r.CastleAllianceDataEvent.ALLIANCEDATA_UPDATED, null));
        l.CastleModel.allianceData.dispatchEvent(new r.CastleAllianceDataEvent(r.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, null));
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ABLCommand;
}(c.CastleCommand);
exports.ABLCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");