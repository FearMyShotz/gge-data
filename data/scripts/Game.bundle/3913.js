Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./9.js");
var s = require("./216.js");
var r = require("./176.js");
var l = require("./196.js");
var c = function (e) {
  function CheatToggleShowEffectTypeIDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatToggleShowEffectTypeIDCommand, e);
  CheatToggleShowEffectTypeIDCommand.prototype.execute = function (e = null) {
    l.ClientCheatsHelper.performCommand("toggleShowEffectTypeIDs");
    if (r.CastleDataHolder.instance.showEffectTypeIDs) {
      a.CastleDialogHandler.getInstance().registerDefaultDialogs(s.DarkOkDialog, new o.BasicStandardOkDialogProperties("ShowEffectTypeIDs", "ON"));
    }
    if (!r.CastleDataHolder.instance.showEffectTypeIDs) {
      a.CastleDialogHandler.getInstance().registerDefaultDialogs(s.DarkOkDialog, new o.BasicStandardOkDialogProperties("ShowEffectTypeIDs", "OFF"));
    }
  };
  return CheatToggleShowEffectTypeIDCommand;
}(require("./212.js").ABotCommand);
exports.CheatToggleShowEffectTypeIDCommand = c;