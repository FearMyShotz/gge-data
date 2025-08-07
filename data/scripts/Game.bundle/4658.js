Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = require("./37.js");
var u = function (e) {
  function PRECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PRECommand, e);
  Object.defineProperty(PRECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_PENDING_REWARDS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PRECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.rewardHubData.setAmountOfPendingRewards(i[a.CommKeys.AMOUNT], true);
        r.CastleModel.rewardHubData.countPendingSent();
        this.controller.dispatchEvent(new c.CastleServerMessageArrivedEvent(c.CastleServerMessageArrivedEvent.PRE_ARRIVED));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return PRECommand;
}(l.CastleCommand);
exports.PRECommand = u;
o.classImplementsInterfaces(u, "IExecCommand");