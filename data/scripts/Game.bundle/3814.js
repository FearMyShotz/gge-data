Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./119.js");
var u = function (e) {
  function SwitchToWorldmapCommand() {
    var t = this;
    t._oldState = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(SwitchToWorldmapCommand, e);
  SwitchToWorldmapCommand.prototype.execute = function (e = null) {
    var t = C.castAs(e, "IWorldmapObjectVO");
    var i = r.int(typeof e == "number" ? e : -1);
    this._oldState = r.int(this.layoutManager.currentState);
    if (this.isReloadWorldMapNecessary(i) || t) {
      if (t) {
        if (d.FlashBlockHelper.checkFlashBlock(t.spaceID)) {
          return;
        }
        if (t.kingdomID != l.CastleModel.kingdomData.activeKingdomID) {
          o.CommandController.instance.executeCommand(p.IngameClientCommands.SWITCH_KINGDOM_COMMAND, t.kingdomID);
        }
        l.CastleModel.worldmapData ||= l.CastleModel.addModel(new h.CastleWorldmapData());
        l.CastleModel.worldmapData.areaTiles.resetUpdateTimes();
        this.layoutManager.state = g.CastleLayoutManager.STATE_WORLDMAP;
        this.layoutManager.worldmapScreen.camera.viewPortZoom = l.CastleModel.worldmapCameraData.savedMapZoom;
        this.layoutManager.worldmapScreen.camera.centerArea(t.absAreaPos);
        var n = C.castAs(this.layoutManager.worldmapScreen.renderer.getVEforAreaXY(t.absAreaPos.x, t.absAreaPos.y, true), "InteractiveMapobject");
        if (n && t.ownerInfo && c.PlayerHelper.isNPCPlayer(t.ownerInfo.playerID)) {
          n.showRingMenu();
        } else {
          this.layoutManager.worldmapScreen.delayOpenRingMenu(t);
        }
      } else {
        l.CastleModel.worldmapData ||= l.CastleModel.addModel(new h.CastleWorldmapData());
        l.CastleModel.worldmapData.areaTiles.resetUpdateTimes();
        this.layoutManager.state = g.CastleLayoutManager.STATE_WORLDMAP;
        this.layoutManager.worldmapScreen.camera.viewPortZoom = l.CastleModel.worldmapCameraData.savedMapZoom;
        this.layoutManager.worldmapScreen.camera.centerArea(l.CastleModel.worldmapCameraData.getInitialWorldMapPos());
      }
      if (l.CastleModel.mineData) {
        l.CastleModel.mineData.destroy();
      }
    }
  };
  SwitchToWorldmapCommand.prototype.isReloadWorldMapNecessary = function (e) {
    return !this.playerWasOnTheWorldMap() || e != -1;
  };
  SwitchToWorldmapCommand.prototype.playerWasOnTheWorldMap = function () {
    return this._oldState == g.CastleLayoutManager.STATE_WORLDMAP;
  };
  Object.defineProperty(SwitchToWorldmapCommand.prototype, "layoutManager", {
    get: function () {
      return g.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return SwitchToWorldmapCommand;
}(a.SimpleCommand);
exports.SwitchToWorldmapCommand = u;
s.classImplementsInterfaces(u, "ISimpleCommand");
var d = require("./160.js");
var p = require("./29.js");
var h = require("./503.js");
var g = require("./17.js");
var C = require("./1.js");