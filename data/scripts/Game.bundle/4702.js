Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./7.js");
var c = require("./4.js");
var u = require("./296.js");
var d = require("./10.js");
var p = function (e) {
  function ARMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ARMCommand, e);
  Object.defineProperty(ARMCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_ALLIANCE_RERANK_MEMBER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ARMCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        c.CastleModel.allianceData.parse_AIN(i.ain);
        break;
      case s.ERROR.IN_OTHER_ALLI:
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("errorCode_123")));
        c.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetAllianceInfoVO(c.CastleModel.allianceData.myAllianceVO.allianceId));
        break;
      case s.ERROR.NO_CHANGE:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ARMCommand;
}(d.CastleCommand);
exports.ARMCommand = p;
var h = require("./9.js");
var g = require("./38.js");
a.classImplementsInterfaces(p, "IExecCommand");