Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./1675.js");
var l = function (e) {
  function OpenTreasureHuntInfoDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenTreasureHuntInfoDialogCommand, e);
  OpenTreasureHuntInfoDialogCommand.prototype.execute = function (e = null) {
    var t = e;
    switch (t.progressType) {
      case s.TreasureMapsConst.PROGRESS_FOUND_MAP_PIECE:
        if (t.hasAllPieces) {
          u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleTreasureCompleteDialog);
        }
        break;
      case s.TreasureMapsConst.PROGRESS_DESTROYED_END_NODE:
        if (t.rewardList && t.rewardList.containsType(c.CollectableEnum.BUILDING)) {
          u.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleTreasureFoundTreasureDialog, new r.CastleTreasureFoundTreasureDialogProperties(t.rewardList));
        }
    }
  };
  return OpenTreasureHuntInfoDialogCommand;
}(o.SimpleCommand);
exports.OpenTreasureHuntInfoDialogCommand = l;
var c = require("./12.js");
var u = require("./9.js");
var d = require("./3681.js");
var p = require("./1695.js");
a.classImplementsInterfaces(l, "ISimpleCommand");