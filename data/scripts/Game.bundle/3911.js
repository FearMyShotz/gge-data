Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./196.js");
var a = function (e) {
  function CheatTextIDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatTextIDCommand, e);
  CheatTextIDCommand.prototype.execute = function (e = null) {
    var t = prompt("Which TextID should be tested?", "errorCode_1");
    var i = prompt("Which Texreplacements should be used? (separate with , )", "0,0");
    o.ClientCheatsHelper.performCommand("textID " + t + " " + i);
  };
  return CheatTextIDCommand;
}(require("./212.js").ABotCommand);
exports.CheatTextIDCommand = a;