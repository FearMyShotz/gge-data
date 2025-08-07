Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./9.js");
var s = require("./216.js");
var r = require("./196.js");
var l = function (e) {
  function CheatEndOfTextPipesCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatEndOfTextPipesCommand, e);
  CheatEndOfTextPipesCommand.prototype.execute = function (e = null) {
    var t = prompt("'on' or 'off' ", "on");
    if (t == "on") {
      r.ClientCheatsHelper.performCommand("pipesOn");
      a.CastleDialogHandler.getInstance().registerDefaultDialogs(s.DarkOkDialog, new o.BasicStandardOkDialogProperties("pipes at end of texts", "ON"));
    }
    if (t == "off") {
      r.ClientCheatsHelper.performCommand("pipesOff");
      a.CastleDialogHandler.getInstance().registerDefaultDialogs(s.DarkOkDialog, new o.BasicStandardOkDialogProperties("pipes at end of texts", "OFF"));
    }
  };
  return CheatEndOfTextPipesCommand;
}(require("./212.js").ABotCommand);
exports.CheatEndOfTextPipesCommand = l;