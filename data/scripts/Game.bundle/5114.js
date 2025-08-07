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
  function LDTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LDTCommand, e);
  Object.defineProperty(LDTCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_LAUNCH_DAIMYO_TAUNT_ATTACK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LDTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.armyData.parseMapMovementArray([i]);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return LDTCommand;
}(l.CastleCommand);
exports.LDTCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");