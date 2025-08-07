Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function BSPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BSPCommand, e);
  Object.defineProperty(BSPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_BUY_SEASON_PASS_PROMOTION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BSPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        c.CastleBasicController.getInstance().dispatchEvent(new u.SeasonLeagueEvent(u.SeasonLeagueEvent.ON_PASS_PROMOTION_BOUGHT));
        return true;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return BSPCommand;
}(r.CastleCommand);
exports.BSPCommand = l;
var c = require("./15.js");
var u = require("./174.js");
o.classImplementsInterfaces(l, "IExecCommand");