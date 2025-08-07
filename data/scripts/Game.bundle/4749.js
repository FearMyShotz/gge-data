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
  function CTICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CTICommand, e);
  Object.defineProperty(CTICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_CONQUER_INFO_METROPOL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CTICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = r.CastleModel.attackData.parse_CTI(i);
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(c.AttackDialog, new l.CastleAttackDialogProperties(n));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CTICommand;
}(u.CastleCommand);
exports.CTICommand = d;
var p = require("./9.js");
o.classImplementsInterfaces(d, "IExecCommand");