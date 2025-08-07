Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./196.js");
var a = function (e) {
  function CheatToggleShowCIIDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatToggleShowCIIDCommand, e);
  CheatToggleShowCIIDCommand.prototype.execute = function (e = null) {
    o.ClientCheatsHelper.performCommand("toggleShowCiIDs");
  };
  return CheatToggleShowCIIDCommand;
}(require("./212.js").ABotCommand);
exports.CheatToggleShowCIIDCommand = a;