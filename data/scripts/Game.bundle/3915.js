Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./196.js");
var a = function (e) {
  function CheatUnitWODCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatUnitWODCommand, e);
  CheatUnitWODCommand.prototype.execute = function (e = null) {
    o.ClientCheatsHelper.performCommand("toggleUnitWodID");
  };
  return CheatUnitWODCommand;
}(require("./212.js").ABotCommand);
exports.CheatUnitWODCommand = a;