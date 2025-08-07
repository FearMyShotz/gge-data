Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./172.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function RWBCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RWBCommand, e);
  Object.defineProperty(RWBCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_REDEEM_WEEKLY_HONOR_BONUS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RWBCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.highscoreData.parseRWB(i);
        break;
      default:
        this.showErrorDialog(e, t);
        l.CastleModel.highscoreData.dispatchEvent(new r.CastleHighscoreEvent(r.CastleHighscoreEvent.REWARD_REDEEMED, [false]));
    }
    return false;
  };
  return RWBCommand;
}(c.CastleCommand);
exports.RWBCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");