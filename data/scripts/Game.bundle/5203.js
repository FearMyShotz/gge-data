Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = require("./4.js");
var c = require("./2.js");
var u = require("./5204.js");
var d = function (e) {
  function MVFCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MVFCommand, e);
  Object.defineProperty(MVFCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_MOVEMENT_FILTER_OPTION_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MVFCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.settingsData.parse_MVF(i);
        c.BasicModel.smartfoxClient.sendCommandVO(new u.C2SGetAllMovementsVO());
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return MVFCommand;
}(r.CastleCommand);
exports.MVFCommand = d;
o.classImplementsInterfaces(d, "IExecCommand");