Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = function (e) {
  function FRCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FRCCommand, e);
  Object.defineProperty(FRCCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_REQUEST_FORGE_CRAFT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FRCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.allianceData.myAllianceVO.fillFromParamObject(i.ain.A);
        if (i.E) {
          r.CastleModel.equipData.parse_FRC(i);
        } else {
          r.CastleModel.gemData.parse_FRC(i);
        }
        r.CastleModel.equipData.parse_ESL(i.esl);
        r.CastleModel.gemData.parse_ESL(i.esl);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return FRCCommand;
}(l.CastleCommand);
exports.FRCCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");