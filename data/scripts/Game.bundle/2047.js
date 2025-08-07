Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = function () {
  function IsoKeyWordCheats() {}
  IsoKeyWordCheats.onCheatET = function () {
    if (r.IsoHelper.view.isInIsoScreen && s.Iso.data.areaData.isMyHomeCastle) {
      var e = new l.IsoGeneratorMovements(s.Iso.data);
      for (var t = 0; t < 40; ++t) {
        s.Iso.controller.processor.addPackageToQueue(new c.IsoCommandPackageMovementSpawn(e.createEggMovement()));
      }
      s.Iso.controller.processor.executeQueue();
    }
  };
  IsoKeyWordCheats.onCheatFarhat = function () {
    if (r.IsoHelper.view.isInIsoScreen && s.Iso.data.areaData.isMyHomeCastle) {
      for (var e = s.Iso.data.grid.origins.getOriginRect(), t = new l.IsoGeneratorMovements(s.Iso.data), i = d.int(e.top); i < e.bottom; i += 2) {
        s.Iso.controller.processor.addPackageToQueue(new c.IsoCommandPackageMovementSpawn(t.createShowUpMovement(new n(e.right + 7, i), 3)));
      }
      for (var o = d.int(e.left); o < e.right; o += 2) {
        s.Iso.controller.processor.addPackageToQueue(new c.IsoCommandPackageMovementSpawn(t.createShowUpMovement(new n(o, e.bottom + 7), 2)));
      }
      s.Iso.controller.processor.executeQueue();
    }
  };
  IsoKeyWordCheats.onCheatDebugCross = function () {
    if (r.IsoHelper.view.isInIsoScreen) {
      s.Iso.renderer.settings.isDebugCrossVisible = !s.Iso.renderer.settings.isDebugCrossVisible;
      s.Iso.renderer.objects.render();
    }
  };
  IsoKeyWordCheats.onCheatDebugPos = function () {
    if (r.IsoHelper.view.isInIsoScreen) {
      s.Iso.renderer.settings.isDebugPosVisible = !s.Iso.renderer.settings.isDebugPosVisible;
      s.Iso.renderer.mouse.updateFloorCursor();
    }
  };
  IsoKeyWordCheats.onCheatFps = function () {
    a.CastleLayoutManager.getInstance().toggleFPSvisibility();
  };
  IsoKeyWordCheats.onCheatZSort = function () {
    s.Iso.renderer.settings.isZSortChildIndexVisible = !s.Iso.renderer.settings.isZSortChildIndexVisible;
    if (s.Iso.renderer.settings.isZSortChildIndexVisible) {
      r.IsoHelper.zSort.showChildIndices();
    } else {
      s.Iso.renderer.layers.getIsoLayer(u.IsoLayerEnum.DEBUG_Z_SORT).removeChildren();
    }
  };
  return IsoKeyWordCheats;
}();
exports.IsoKeyWordCheats = o;
var a = require("./17.js");
var s = require("./34.js");
var r = require("./46.js");
var l = require("./1185.js");
var c = require("./2053.js");
var u = require("./111.js");
var d = require("./6.js");