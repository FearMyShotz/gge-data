Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3583.js");
var c = require("./3584.js");
var u = require("./3585.js");
var d = require("./3586.js");
var p = require("./3587.js");
var h = require("./3588.js");
var g = function (e) {
  function OpenMovementInfoDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenMovementInfoDialogCommand, e);
  OpenMovementInfoDialogCommand.prototype.execute = function (e = null) {
    var t = a.castAs(e, "IMapMovementVO");
    if (t) {
      if (r.instanceOfClass(t, "TreasureHuntMovementVO")) {
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleCompactArmyDialog, new u.CastleCompactArmyDialogProperties(t, true));
      } else if (r.instanceOfClass(t, "MarketMapmovementVO")) {
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleMarketMovmentDialog, new d.CastleMarketMovmentDialogProperties(t));
      } else if (r.instanceOfClass(t, "SupportDefenceMapmovementVO")) {
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleArmyListDialog, new l.CastleArmyListDialogProperties(t));
      } else if (r.instanceOfClass(t, "ArmyAttackMapmovementVO")) {
        switch (t.armyState) {
          case D.ArmyAttackMapmovementVO.ARMY_FULL:
            C.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleCompactArmyDialog, new u.CastleCompactArmyDialogProperties(t));
            break;
          case D.ArmyAttackMapmovementVO.ARMY_SHORT:
            C.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleShortArmyDialog, new p.CastleShortArmyDialogProperties(t));
        }
      } else if (r.instanceOfClass(t, "ArmyTravelMapMovementVO")) {
        if (t.lootList.length > 0) {
          C.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleArmyListWithLootDialog, new c.CastleArmyListWithLootDialogProperties(t));
        } else {
          C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleArmyListDialog, new l.CastleArmyListDialogProperties(t));
        }
      } else if (r.instanceOfClass(t, "SpyMapmovementVO")) {
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleSpyInfoDialog, new h.CastleSpyInfoDialogProperties(t));
      } else if (r.instanceOfClass(t, "PlaguemonkMapmovementVO")) {
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(E.CastlePlaguemonkInfoDialog, new h.CastleSpyInfoDialogProperties(t));
      } else if (r.instanceOfClass(t, "SiegeMapmovementVO")) {
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleArmyListDialog, new l.CastleArmyListDialogProperties(t));
      }
    }
  };
  return OpenMovementInfoDialogCommand;
}(o.SimpleCommand);
exports.OpenMovementInfoDialogCommand = g;
var C = require("./9.js");
var _ = require("./3589.js");
var m = require("./3590.js");
var f = require("./3591.js");
var O = require("./3592.js");
var E = require("./3593.js");
var y = require("./3594.js");
var b = require("./3595.js");
var D = require("./385.js");
s.classImplementsInterfaces(g, "ISimpleCommand");