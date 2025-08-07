Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./4.js");
var c = createjs.Point;
var u = function (e) {
  function SwitchKingdomGoToWorldmapAndCenterPosCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SwitchKingdomGoToWorldmapAndCenterPosCommand, e);
  SwitchKingdomGoToWorldmapAndCenterPosCommand.prototype.execute = function (e = null) {
    if (e) {
      var t = r.int(e.shift());
      var i = r.int(e.shift());
      var n = r.int(e.shift());
      var a = r.int(e.shift());
      if (!l.CastleModel.kingdomData.getKingdomVOByID(t).isPaid) {
        return;
      }
      if (d.FlashBlockHelper.checkFlashBlock(t)) {
        return;
      }
      if (t != l.CastleModel.kingdomData.activeKingdomID) {
        l.CastleModel.questData.resetCurrentSearchEnemyCounter();
        o.CommandController.instance.executeCommand(p.IngameClientCommands.SWITCH_KINGDOM_COMMAND, t);
      }
      l.CastleModel.worldmapCameraData.savedMapPosition = null;
      o.CommandController.instance.executeCommand(p.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, a);
      this.layoutManager.worldmapScreen.camera.centerArea(new c(i, n));
    }
  };
  Object.defineProperty(SwitchKingdomGoToWorldmapAndCenterPosCommand.prototype, "layoutManager", {
    get: function () {
      return h.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return SwitchKingdomGoToWorldmapAndCenterPosCommand;
}(a.SimpleCommand);
exports.SwitchKingdomGoToWorldmapAndCenterPosCommand = u;
var d = require("./160.js");
var p = require("./29.js");
var h = require("./17.js");
s.classImplementsInterfaces(u, "ISimpleCommand");