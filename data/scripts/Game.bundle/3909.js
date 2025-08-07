Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./196.js");
var a = function (e) {
  function CheatRelicIDsCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatRelicIDsCommand, e);
  CheatRelicIDsCommand.prototype.execute = function (e = null) {
    o.ClientCheatsHelper.performCommand("showRelicIDS");
  };
  return CheatRelicIDsCommand;
}(require("./212.js").ABotCommand);
exports.CheatRelicIDsCommand = a;