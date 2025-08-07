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
  function LWJCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LWJCommand, e);
  LWJCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.luckyWheelData.parseLWJ(i);
        r.CastleModel.luckyWheelData.onWinningCategoryReceived();
        this.layoutManager.hideDialog(u.CastleLuckyWheelGuaranteedJackpotDialog);
        break;
      default:
        r.CastleModel.luckyWheelData.showGuaranteedJackpotDialog = true;
        this.showErrorDialog(e, t);
    }
    return false;
  };
  Object.defineProperty(LWJCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_LUCKY_WHEEL_BUY_JACKPOT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return LWJCommand;
}(l.CastleCommand);
exports.LWJCommand = c;
var u = require("./1915.js");
o.classImplementsInterfaces(c, "IExecCommand");