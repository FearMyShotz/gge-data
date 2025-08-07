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
  function ALBCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ALBCommand, e);
  Object.defineProperty(ALBCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_LOGIN_BONUS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ALBCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.loginBonusData.parseALB(i);
        if (r.CastleModel.loginBonusData.hasAnythingToCollect && !r.CastleModel.loginBonusData.preventDialogPopup) {
          u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleDailyLoginBonusDialog);
        }
        r.CastleModel.loginBonusData.preventDialogPopup = false;
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ALBCommand;
}(l.CastleCommand);
exports.ALBCommand = c;
var u = require("./9.js");
var d = require("./1124.js");
o.classImplementsInterfaces(c, "IExecCommand");