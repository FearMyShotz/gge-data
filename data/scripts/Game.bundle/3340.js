Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./543.js");
var l = function (e) {
  function AutoShowStartQuestDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AutoShowStartQuestDialogCommand, e);
  AutoShowStartQuestDialogCommand.prototype.execute = function (e = null) {
    var t = e;
    if (!c.CastleDialogHandler.getInstance().isDialogRegistered(u.CastleStartQuestDialog) && !t.registered) {
      c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleStartQuestDialog, new r.CastleStartQuestDialogProperties(t), false, o.BasicDialogHandler.PRIORITY_LOW);
    }
    t.registered = true;
  };
  return AutoShowStartQuestDialogCommand;
}(a.SimpleCommand);
exports.AutoShowStartQuestDialogCommand = l;
var c = require("./9.js");
var u = require("./461.js");
s.classImplementsInterfaces(l, "ISimpleCommand");