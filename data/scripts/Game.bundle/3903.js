Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./196.js");
var a = function (e) {
  function CheatLifetimeSpentC2Command() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatLifetimeSpentC2Command, e);
  CheatLifetimeSpentC2Command.prototype.execute = function (e = null) {
    o.ClientCheatsHelper.performCommand("lifetimeSpent");
  };
  return CheatLifetimeSpentC2Command;
}(require("./212.js").ABotCommand);
exports.CheatLifetimeSpentC2Command = a;