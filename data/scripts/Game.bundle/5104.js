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
  function LWSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LWSCommand, e);
  Object.defineProperty(LWSCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_LUCKY_WHEEL_SPIN;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LWSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (i.LWET && i.LWET == 1) {
          r.CastleModel.saleDaysLuckyWheelData.parseLWS(i);
          r.CastleModel.saleDaysLuckyWheelData.onWinningCategoryReceived();
        } else {
          r.CastleModel.luckyWheelData.parseLWS(i);
          r.CastleModel.luckyWheelData.onWinningCategoryReceived();
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return LWSCommand;
}(l.CastleCommand);
exports.LWSCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");