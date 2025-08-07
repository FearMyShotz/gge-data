Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function OpenIngameHelpDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenIngameHelpDialogCommand, e);
  OpenIngameHelpDialogCommand.prototype.execute = function (e = null) {
    if (!l.CastleLayoutManager.getInstance().tutorialPanel.isVisible()) {
      r.CastleDialogHandler.getInstance().registerDefaultDialogs(c.CastleIngameHelpDialog);
    }
  };
  return OpenIngameHelpDialogCommand;
}(o.SimpleCommand);
exports.OpenIngameHelpDialogCommand = s;
var r = require("./9.js");
var l = require("./17.js");
var c = require("./1076.js");
a.classImplementsInterfaces(s, "ISimpleCommand");