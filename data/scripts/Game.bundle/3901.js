Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./9.js");
var s = require("./11.js");
var r = require("./216.js");
var l = require("./196.js");
var c = function (e) {
  function CheatDialogNamesCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CheatDialogNamesCommand, e);
  CheatDialogNamesCommand.prototype.execute = function (e = null) {
    l.ClientCheatsHelper.performCommand("toggleShowDialogName");
    if (s.CastleExternalDialog.showDialogName) {
      a.CastleDialogHandler.getInstance().registerDefaultDialogs(r.DarkOkDialog, new o.BasicStandardOkDialogProperties("Dialog Names", "Dialog names are shown now above Dialogs"));
    }
    if (!s.CastleExternalDialog.showDialogName) {
      a.CastleDialogHandler.getInstance().registerDefaultDialogs(r.DarkOkDialog, new o.BasicStandardOkDialogProperties("Dialog Names", "Dialog names are not shown anymore"));
    }
  };
  return CheatDialogNamesCommand;
}(require("./212.js").ABotCommand);
exports.CheatDialogNamesCommand = c;