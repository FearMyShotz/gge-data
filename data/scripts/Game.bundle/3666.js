Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./3667.js");
var u = function (e) {
  function OpenSeasonInfoDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenSeasonInfoDialogCommand, e);
  OpenSeasonInfoDialogCommand.prototype.execute = function (e = null) {
    var t = e[0];
    var i = l.int(e[1]);
    var n = e[2];
    switch (t.progressType) {
      case r.TreasureMapsConst.PROGRESS_FOUND_MAP_PIECE:
        break;
      case r.TreasureMapsConst.PROGRESS_DESTROYED_END_NODE:
        d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleSeasonEventWinDialog, new c.CastleSeasonEventWinDialogProperties(i, n), true, o.BasicDialogHandler.PRIORITY_LOW);
    }
  };
  return OpenSeasonInfoDialogCommand;
}(a.SimpleCommand);
exports.OpenSeasonInfoDialogCommand = u;
var d = require("./9.js");
var p = require("./3668.js");
s.classImplementsInterfaces(u, "ISimpleCommand");