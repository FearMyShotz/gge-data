Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./4.js");
var s = createjs.MovieClip;
var r = createjs.Event;
var l = createjs.MouseEvent;
var c = function () {
  function WorldmapObjectIconHelper() {}
  WorldmapObjectIconHelper.drawMapObjectIcon = function (e, t = null, i = true, n = false, o = true, a = "", s = null, r = false, l = false) {
    if (!e) {
      return null;
    }
    var c = e.getDisplayObjectClipContainer(n, s, r);
    if (d.instanceOfClass(e, "DummyMapobjectVO") || d.instanceOfClass(e, "PlaceholderMapobjectVO")) {
      o = false;
      i = false;
      a = null;
    }
    return WorldmapObjectIconHelper.drawMapObjectIconFromClipContainer(c, e, t, i, o, a, l);
  };
  WorldmapObjectIconHelper.drawMapObjectIconFromClipContainer = function (e, t, i = null, c = true, u = true, p = "", h = false) {
    var g = new s();
    g.addChild(e.asDisplayObject());
    g.mouseChildren = false;
    g.mapObject = t;
    if (p != "") {
      g.toolTipText = p;
    }
    if (d.instanceOfClass(e, "CastleDisplayObjectClipContainer")) {
      var C = e;
      if (i) {
        C.clipSizeComponent = new n.ClipSizeComponent(i.x, i.y, h ? -1 : 1, -1);
      }
      C.centerClip = c;
    } else {
      if (i && !o.GoodgameBitmapEngine.bulkLoader.isFinished) {
        WorldmapObjectIconHelper.itemMCsToResize.push([g, i]);
        g.visible = false;
        o.GoodgameBitmapEngine.bulkLoader.addEventListener(r.COMPLETE, WorldmapObjectIconHelper.resizeIcons);
      } else if (i) {
        g.visible = true;
        WorldmapObjectIconHelper.fitToSize(g, i);
      }
      if (c) {
        if (o.GoodgameBitmapEngine.bulkLoader.isFinished) {
          WorldmapObjectIconHelper.setCenter(g);
        } else {
          WorldmapObjectIconHelper.itemMCsToCenter.push(g);
          o.GoodgameBitmapEngine.bulkLoader.addEventListener(r.COMPLETE, WorldmapObjectIconHelper.centerIcons);
        }
      }
    }
    var _ = !!a.CastleModel.kingdomData.getKingdomVOByID(t.kingdomID) && (a.CastleModel.userData.castleList.hasCastleInKingdom(t.kingdomID) || t.kingdomID == a.CastleModel.kingdomData.activeKingdomID);
    if (u && t.absAreaPosX > -1 && (_ || t.mapID > 0)) {
      g.actLikeButton = true;
      g.addEventListener(r.REMOVED_FROM_STAGE, WorldmapObjectIconHelper.onObjectRemovedFromStage);
      g.addEventListener(l.CLICK, WorldmapObjectIconHelper.onClick);
    }
    return g;
  };
  WorldmapObjectIconHelper.generateTreasureMapAssetName = function (e) {
    return "Treasuremap_" + e + "_Assets";
  };
  WorldmapObjectIconHelper.setCenter = function (e) {
    var t = e.getChildAt(0);
    var i = e.getBounds(null);
    t.x = -(i.width / 2 + i.left);
    t.y = -(i.height / 2 + i.top);
  };
  WorldmapObjectIconHelper.fitToSize = function (e, t) {
    var i = e.getChildAt(0);
    if (i.width > t.x || i.height > t.y) {
      var n = i.getBounds(null);
      var o = Math.min(t.x / n.width, t.y / n.height);
      i.width = i.width * o;
      i.height = i.height * o;
    }
  };
  WorldmapObjectIconHelper.resizeIcons = function (e) {
    o.GoodgameBitmapEngine.bulkLoader.removeEventListener(r.COMPLETE, WorldmapObjectIconHelper.resizeIcons);
    if (WorldmapObjectIconHelper.itemMCsToResize != null) {
      for (var t = 0, i = WorldmapObjectIconHelper.itemMCsToResize; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var a = n[0];
          var s = n[1];
          if (a) {
            WorldmapObjectIconHelper.fitToSize(a, s);
            a.visible = true;
          }
        }
      }
    }
    WorldmapObjectIconHelper.itemMCsToResize = [];
  };
  WorldmapObjectIconHelper.centerIcons = function (e) {
    o.GoodgameBitmapEngine.bulkLoader.removeEventListener(r.COMPLETE, WorldmapObjectIconHelper.centerIcons);
    if (WorldmapObjectIconHelper.itemMCsToCenter != null) {
      for (var t = 0, i = WorldmapObjectIconHelper.itemMCsToCenter; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n) {
          WorldmapObjectIconHelper.setCenter(n);
        }
      }
    }
    WorldmapObjectIconHelper.itemMCsToCenter = [];
  };
  WorldmapObjectIconHelper.onClick = function (e) {
    e.target.removeEventListener(l.CLICK, WorldmapObjectIconHelper.onClick);
    n.CommandController.instance.executeCommand(u.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, e.target.mapObject);
  };
  WorldmapObjectIconHelper.onObjectRemovedFromStage = function (e) {
    if (e.target) {
      e.target.removeEventListener(r.REMOVED_FROM_STAGE, WorldmapObjectIconHelper.onObjectRemovedFromStage);
      e.target.removeEventListener(l.CLICK, WorldmapObjectIconHelper.onClick);
    }
  };
  WorldmapObjectIconHelper.FILE_NAME_CASTLE_PARTS = "CastleParts";
  WorldmapObjectIconHelper.FILE_NAME_FACTION_EVENT = "FactionEvent";
  WorldmapObjectIconHelper.FILE_NAME_SHADOW_EVENT = "ShadowEvent";
  WorldmapObjectIconHelper.FILE_NAME_FLAME_LAYERS_ABG_PREFIX = "FlamesLayers_ABG_";
  WorldmapObjectIconHelper.MONUMENT_FILE_NAME_SUFFIXES = ["Man", "Horse"];
  WorldmapObjectIconHelper.itemMCsToCenter = [];
  WorldmapObjectIconHelper.itemMCsToResize = [];
  WorldmapObjectIconHelper.KEEP_LEVEL_1_STAGES = [1, 6, 7, 9, 10];
  WorldmapObjectIconHelper.KEEP_LEVEL_2_STAGES = [11, 12, 13, 16, 20];
  return WorldmapObjectIconHelper;
}();
exports.WorldmapObjectIconHelper = c;
var u = require("./29.js");
var d = require("./1.js");