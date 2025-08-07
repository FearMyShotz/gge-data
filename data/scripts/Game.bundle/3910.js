Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./196.js");
var a = function (e) {
  function CheatShowResearchGridCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatShowResearchGridCommand, e);
  CheatShowResearchGridCommand.prototype.execute = function (e = null) {
    o.ClientCheatsHelper.performCommand("showResearchGrid");
  };
  return CheatShowResearchGridCommand;
}(require("./212.js").ABotCommand);
exports.CheatShowResearchGridCommand = a;