Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./265.js");
var c = require("./211.js");
var u = require("./10.js");
var d = function (e) {
  function ACCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACCCommand, e);
  Object.defineProperty(ACCCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_COLLECTOR_ATTACK_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ACCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = r.CastleModel.attackData.parse_ACC(i);
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(c.AttackDialog, new l.CastleAttackDialogProperties(n));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ACCCommand;
}(u.CastleCommand);
exports.ACCCommand = d;
var p = require("./9.js");
o.classImplementsInterfaces(d, "IExecCommand");