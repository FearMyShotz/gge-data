Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./18.js");
var r = require("./4.js");
var l = function (e) {
  function OpenTipDialogCommand() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(OpenTipDialogCommand, e);
  OpenTipDialogCommand.prototype.execute = function (e = null) {
    if (r.CastleModel.areaData.activeArea.isMyArea && !r.CastleModel.areaData.activeArea.isUnderConquerProcess) {
      switch (e[0]) {
        case s.ClientConstCastle.TIP_EFFICIENCY:
          c.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleEfficiencyTipDialog);
          break;
        case s.ClientConstCastle.TIP_BARRACKUNIT:
          c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleBarrackUnitTipDialog);
          break;
        case s.ClientConstCastle.TIP_BUILDLIST:
          c.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleBuildListTipDialog);
          break;
        case s.ClientConstCastle.TIP_INSTANTBUILD:
          c.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleInstantBuildTipDialog);
          break;
        case s.ClientConstCastle.TIP_OVERSEER:
          c.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleOverseerTipDialog);
          break;
        case s.ClientConstCastle.TIP_PRODUCTIVITY:
          c.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleProductivityTipDialog);
          break;
        case s.ClientConstCastle.TIP_REPAIR:
          if (e.length == 2 && e[1]) {
            c.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleRepairTipDialog);
          } else if (e.length == 2 && !e[1]) {
            if (OpenTipDialogCommand.repairShown < 1) {
              OpenTipDialogCommand.repairShown++;
              c.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleRepairTipDialog);
            }
          }
      }
    }
  };
  OpenTipDialogCommand.__initialize_static_members = function () {
    OpenTipDialogCommand.repairShown = 0;
  };
  return OpenTipDialogCommand;
}(o.SimpleCommand);
exports.OpenTipDialogCommand = l;
var c = require("./9.js");
var u = require("./3672.js");
var d = require("./3673.js");
var p = require("./3674.js");
var h = require("./3675.js");
var g = require("./3676.js");
var C = require("./3677.js");
var _ = require("./3678.js");
a.classImplementsInterfaces(l, "ISimpleCommand");
l.__initialize_static_members();