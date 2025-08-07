Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./196.js");
var a = function (e) {
  function CheatQuestIDsCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatQuestIDsCommand, e);
  CheatQuestIDsCommand.prototype.execute = function (e = null) {
    var t = prompt("'on' or 'off' ", "on");
    if (t == "on") {
      o.ClientCheatsHelper.performCommand("showQuestIDs on");
    }
    if (t == "off") {
      o.ClientCheatsHelper.performCommand("showQuestIDs on");
    }
  };
  return CheatQuestIDsCommand;
}(require("./212.js").ABotCommand);
exports.CheatQuestIDsCommand = a;