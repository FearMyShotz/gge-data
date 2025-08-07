Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function BEPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BEPCommand, e);
  Object.defineProperty(BEPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_BUY_SEASON_PASS_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BEPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        c.CastleBasicController.getInstance().dispatchEvent(new u.SeasonLeagueEvent(u.SeasonLeagueEvent.ON_PASS_EVENT_BOUGHT));
        return true;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return BEPCommand;
}(r.CastleCommand);
exports.BEPCommand = l;
var c = require("./15.js");
var u = require("./174.js");
o.classImplementsInterfaces(l, "IExecCommand");