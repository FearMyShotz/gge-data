Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./4.js");
var l = function (e) {
  function SwitchToRelocateWorldmapCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SwitchToRelocateWorldmapCommand, e);
  SwitchToRelocateWorldmapCommand.prototype.execute = function (e = null) {
    var t = r.CastleModel.userData.castleList.getHomeCastle();
    var i = !!e && !!e.friendsPlace;
    if (i) {
      t = e.friendsPlace;
    }
    if (t) {
      if (this.layoutManager.currentState == d.CastleLayoutManager.STATE_WORLDMAP && r.CastleModel.kingdomData.activeKingdomID == 0) {
        var n = this.worldmap.camera.viewPortCenter;
        var a = this.worldmap.camera.viewPortZoom;
        r.CastleModel.worldmapCameraData.saveCameraPosition(n, a);
        this.layoutManager.state = d.CastleLayoutManager.STATE_WORLDMAP_RELOCATION;
        if (i) {
          this.layoutManager.worldmapScreen.camera.centerArea(t.absAreaPos);
        }
      } else {
        o.CommandController.instance.executeCommand(c.IngameClientCommands.SWITCH_KINGDOM_COMMAND, 0);
        r.CastleModel.worldmapData ||= r.CastleModel.addModel(new u.CastleWorldmapData());
        r.CastleModel.worldmapData.areaTiles.resetUpdateTimes();
        this.layoutManager.state = d.CastleLayoutManager.STATE_WORLDMAP_RELOCATION;
        this.layoutManager.worldmapScreen.camera.centerArea(t.absAreaPos);
      }
    }
  };
  Object.defineProperty(SwitchToRelocateWorldmapCommand.prototype, "layoutManager", {
    get: function () {
      return d.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SwitchToRelocateWorldmapCommand.prototype, "worldmap", {
    get: function () {
      return d.CastleLayoutManager.getInstance().worldmapScreen.renderer;
    },
    enumerable: true,
    configurable: true
  });
  return SwitchToRelocateWorldmapCommand;
}(a.SimpleCommand);
exports.SwitchToRelocateWorldmapCommand = l;
var c = require("./29.js");
var u = require("./503.js");
var d = require("./17.js");
s.classImplementsInterfaces(l, "ISimpleCommand");