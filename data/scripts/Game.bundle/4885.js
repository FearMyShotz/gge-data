Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./834.js");
var l = require("./15.js");
var c = require("./10.js");
var u = function (e) {
  function LLSPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LLSPCommand, e);
  Object.defineProperty(LLSPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_LIST_LEADERBOARD_SCORE_PAGE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LLSPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleBasicController.getInstance().dispatchEvent(new r.LeaderBoardEvent(r.LeaderBoardEvent.LEADERBOARD_SCORE_DATA, i));
        return true;
      default:
        this.showErrorDialog(e, t);
        l.CastleBasicController.getInstance().dispatchEvent(new r.LeaderBoardEvent(r.LeaderBoardEvent.LEADERBOARD_DATA_ERROR, e));
    }
    return false;
  };
  return LLSPCommand;
}(c.CastleCommand);
exports.LLSPCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");