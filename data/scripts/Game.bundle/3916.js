Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./196.js");
var a = function (e) {
  function CheatWelcomeCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatWelcomeCommand, e);
  CheatWelcomeCommand.prototype.execute = function (e = null) {
    var t = prompt("Select rewardID  (RewardIDs: 1 to 9)", "1");
    o.ClientCheatsHelper.performCommand("welcome " + t);
  };
  return CheatWelcomeCommand;
}(require("./212.js").ABotCommand);
exports.CheatWelcomeCommand = a;