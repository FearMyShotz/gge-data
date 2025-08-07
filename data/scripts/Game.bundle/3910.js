Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./196.js");
var a = function (e) {
  function CheatShowResearchIDsCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatShowResearchIDsCommand, e);
  CheatShowResearchIDsCommand.prototype.execute = function (e = null) {
    o.ClientCheatsHelper.performCommand("showResearchIDs");
  };
  return CheatShowResearchIDsCommand;
}(require("./212.js").ABotCommand);
exports.CheatShowResearchIDsCommand = a;