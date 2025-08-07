Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./432.js");
var s = require("./9.js");
var r = require("./215.js");
var l = require("./196.js");
var c = function (e) {
  function CheatMysteryBoxChancesCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatMysteryBoxChancesCommand, e);
  CheatMysteryBoxChancesCommand.prototype.execute = function (e = null) {
    l.ClientCheatsHelper.performCommand("mysteryBoxChance ");
    var t = "";
    t = a.CastleCheatData.cheatShowMysteryBoxChances ? "show lootbox chances: on" : "show lootbox chances: off";
    s.CastleDialogHandler.getInstance().registerDefaultDialogs(r.DarkOkDialog, new o.BasicStandardOkDialogProperties("mysteryBoxChance", t));
  };
  return CheatMysteryBoxChancesCommand;
}(require("./212.js").ABotCommand);
exports.CheatMysteryBoxChancesCommand = c;