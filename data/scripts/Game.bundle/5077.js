Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./10.js");
var r = require("./7.js");
var l = require("./243.js");
var c = require("./4.js");
var u = function (e) {
  function SIICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SIICommand, e);
  Object.defineProperty(SIICommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_STORM_ISLANDS_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SIICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        c.CastleModel.userData.currentIslandRank = i.IR;
        c.CastleModel.userData.aquaPoints = i.AP;
        if (c.CastleModel.allianceData.myAllianceVO) {
          c.CastleModel.allianceData.myAllianceVO.parse_SII(i);
        }
        this.controller.dispatchEvent(new l.CastleEilandEvent(l.CastleEilandEvent.STORM_ISLANDS_INFO_RECEIVED));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SIICommand;
}(s.CastleCommand);
exports.SIICommand = u;
o.classImplementsInterfaces(u, "IExecCommand");