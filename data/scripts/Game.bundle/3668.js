Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./1086.js");
var c = function (e) {
  function OpenSpecialEventProgressCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenSpecialEventProgressCommand, e);
  OpenSpecialEventProgressCommand.prototype.execute = function (e = null) {
    var t = s.castAs(e[0], "ArtifactEventVO");
    if (t) {
      if (t.hasAllParts) {
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleArtifactFoundTreasureDialog, new l.CastleArtifactEventDialogProperties(t), true, o.BasicDialogHandler.PRIORITY_LOW);
      } else {
        u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleArtifactFoundPieceDialog, new l.CastleArtifactEventDialogProperties(t), true, o.BasicDialogHandler.PRIORITY_LOW);
      }
    }
  };
  return OpenSpecialEventProgressCommand;
}(a.SimpleCommand);
exports.OpenSpecialEventProgressCommand = c;
var u = require("./9.js");
var d = require("./3669.js");
var p = require("./3670.js");
r.classImplementsInterfaces(c, "ISimpleCommand");