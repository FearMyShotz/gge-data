Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./153.js");
var o = createjs.Rectangle;
var a = createjs.BitmapData;
var s = function () {
  function CastleWorldMapBackgroundTileVO(e, t, i) {
    this._sectorPosX = 0;
    this._sectorPosY = 0;
    this.backgroundIsLoaded = false;
    this.riverIsLoaded = false;
    this.hasRiver = false;
    this.kingdomID = 0;
    this.skinID = "";
    this._sectorPosX = e;
    this._sectorPosY = t;
    this.visClassToBitmap = i;
  }
  CastleWorldMapBackgroundTileVO.prototype.getBitmapData = function () {
    if (this.cellBitmap && this.checkAllClipsLoaded() && this.kingdomID == E.CastleModel.kingdomData.activeKingdomID && this.skinID == O.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false, true)) {
      return this.cellBitmap;
    }
    this.backgroundIsLoaded = false;
    this.riverIsLoaded = false;
    this.hasRiver = false;
    this.kingdomID = m.int(E.CastleModel.kingdomData.activeKingdomID);
    this.skinID = O.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false, true);
    this.initDrawnAreas();
    var e = O.ClientConstIsoChangeEventSkin.getSkinnedBackgroundColor(false);
    this.cellBitmap = new a(l.ClientConstCastle.SECTORPIXELSIZE_X, l.ClientConstCastle.SECTORPIXELSIZE_Y, false, e != f.ClientConstColor.USE_DEFAULT_COLOR ? e : n.KingdomEnum.getTypeById(this.kingdomID).mapBackgroundColor);
    this.cellBitmap.lock();
    var t = E.CastleModel.kingdomData.activeKingdomVO.kingdomName + this.skinID;
    this.addMapBackground(t);
    if (this.hasKingdomRivers) {
      this.addRivers(t);
    }
    if (CastleWorldMapBackgroundTileVO.DRAW_SECTOR_BOUNDS) {
      this.cellBitmap.fillRect(new o(0, 0, this.cellBitmap.width, 1), f.ClientConstColor.GENERIC_BRIGHT_RED);
      this.cellBitmap.fillRect(new o(0, 0, 1, this.cellBitmap.height), f.ClientConstColor.GENERIC_BRIGHT_RED);
      this.cellBitmap.fillRect(new o(0, this.cellBitmap.height - 1, this.cellBitmap.width, this.cellBitmap.height), f.ClientConstColor.GENERIC_BRIGHT_RED);
      this.cellBitmap.fillRect(new o(this.cellBitmap.width - 1, 0, this.cellBitmap.width, this.cellBitmap.height), f.ClientConstColor.GENERIC_BRIGHT_RED);
      var i = new p.TextField();
      var s = new h.TextFormat();
      s.size = 20;
      s.font = "Arial";
      s.color = f.ClientConstColor.GENERIC_WHITE;
      i.width = 800;
      i.height = 200;
      i.textColor = f.ClientConstColor.GENERIC_WHITE;
      i.text = "Sector: " + this._sectorPosX + ":" + this._sectorPosY;
      i.setTextFormat(s);
      var r = new d.Matrix();
      r.translate(10, 10);
      i.cache(0, 0, i.width, i.height);
      this.cellBitmap.draw(i, r);
      i.uncache();
      i = null;
    }
    this.cellBitmap.unlock();
    if (this.checkAllClipsLoaded()) {
      return this.cellBitmap;
    } else {
      return null;
    }
  };
  CastleWorldMapBackgroundTileVO.prototype.initDrawnAreas = function () {
    this.drawnDecoAreas = [];
    for (var e = 0; e < g.WorldConst.SECTOR_WIDTH; e++) {
      this.drawnDecoAreas[e] = [];
    }
  };
  CastleWorldMapBackgroundTileVO.prototype.addMapBackground = function (e) {
    var t;
    var i;
    var n = "Background_Mapobject_Piece" + this._sectorPosX % 13 % 2 + "_" + e;
    if (this.visClassToBitmap.has(n)) {
      t = this.visClassToBitmap.get(n);
      i = new d.Matrix();
      try {
        this.cellBitmap.draw(t, i, null, null, null, true);
      } catch (e) {
        throw new Error("cellBitmap.draw() failed for some reason! More info on the object passed: " + (t ? t.width + " " + t.height : "bmpData is null") + " " + e);
      }
      this.backgroundIsLoaded = true;
    } else {
      var o = u.GoodgameBitmapEngine.clipFactory.getExternalClipSource(n, this.assetFileURL);
      if (o.isLoaded) {
        var a = new y.CastleGoodgameBitmapClipExternal(o, 0, false);
        var s = a.bmpImage.clone();
        this.visClassToBitmap.set(n, s);
        this.cellBitmap.draw(s, null, null, null, null, true);
        a.dispose();
        this.backgroundIsLoaded = true;
      } else {
        o.clipLoadedAndConverted.addOnce(this.bindFunction(this.onAssetLoaded));
      }
    }
  };
  CastleWorldMapBackgroundTileVO.prototype.onAssetLoaded = function () {
    r.CastleLayoutManager.getInstance().worldmapScreen.renderer.invalidateMap();
  };
  CastleWorldMapBackgroundTileVO.prototype.numToLetters = function (e) {
    switch (e) {
      case 1:
        return "a";
      case 2:
        return "b";
      case 3:
        return "c";
      case 4:
        return "d";
      default:
        return "z";
    }
  };
  CastleWorldMapBackgroundTileVO.prototype.capRotation = function (e, t) {
    if ((t == 2 || t == 3) && (e == "c" || e == "d")) {
      e = "b";
    }
    return e;
  };
  CastleWorldMapBackgroundTileVO.prototype.addRivers = function (e) {
    var t;
    var i = m.int(this._sectorPosX % l.ClientConstCastle.RIVER_LOOKUP_MAP_SIZE);
    var n = m.int(this._sectorPosY % l.ClientConstCastle.RIVER_LOOKUP_MAP_SIZE);
    var o = m.int(l.ClientConstCastle.CASTLE_RIVER_LOOKUP_MAP[n][i]);
    var a = Math.floor(o / 10);
    var s = o % 10;
    var r = this.numToLetters(s);
    if (a != CastleWorldMapBackgroundTileVO.EMPTY_RIVERPIECE && E.CastleModel.kingdomData.activeKingdomID != C.WorldDessert.KINGDOM_ID && E.CastleModel.kingdomData.activeKingdomID != _.WorldIsland.KINGDOM_ID) {
      this.hasRiver = true;
      var c;
      var p = "River_Mapobject_Piece" + String(a) + r + "_Variant0_" + e;
      this.riverLookUpName = "River" + String(a) + r + "_" + e;
      if (this.visClassToBitmap.has(this.riverLookUpName)) {
        c = (t = this.visClassToBitmap.get(this.riverLookUpName))._savedTranslation || new d.Matrix();
        this.cellBitmap.draw(t, c, null, null, null, true);
        this.riverIsLoaded = true;
      } else {
        var h = u.GoodgameBitmapEngine.clipFactory.getExternalClipSource(p, this.assetFileURL);
        if (h.isLoaded) {
          this.riverIsLoaded = true;
          var g = new y.CastleGoodgameBitmapClipExternal(h, 0, false);
          c = new d.Matrix();
          var f = g.asDisplayObject();
          var O = f.getBounds();
          c.translate(l.ClientConstCastle.SECTORPIXELSIZE_X / 2 + O.x, l.ClientConstCastle.SECTORPIXELSIZE_Y / 2 + O.y);
          if (f.children[0]) {
            var b = f.children[0].clone();
            b._savedTranslation = c;
            this.visClassToBitmap.set(this.riverLookUpName, b);
            this.cellBitmap.draw(b, c, null, null, null, true);
          }
          g.dispose();
        }
      }
    } else {
      this.hasRiver = false;
    }
  };
  CastleWorldMapBackgroundTileVO.prototype.scaleDrawMatrix = function (e) {};
  Object.defineProperty(CastleWorldMapBackgroundTileVO.prototype, "hasKingdomRivers", {
    get: function () {
      switch (E.CastleModel.kingdomData.activeKingdomID) {
        case _.WorldIsland.KINGDOM_ID:
          return false;
        default:
          return true;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldMapBackgroundTileVO.prototype.checkAllClipsLoaded = function () {
    return this.backgroundIsLoaded && (!this.hasRiver || this.riverIsLoaded);
  };
  Object.defineProperty(CastleWorldMapBackgroundTileVO.prototype, "assetFileURL", {
    get: function () {
      return c.BasicModel.basicLoaderData.getVersionedItemAssetUrl("WorldmapAssets_" + E.CastleModel.kingdomData.activeKingdomVO.kingdomName + this.skinID);
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldMapBackgroundTileVO.prototype.drawDecoArea = function (e, t) {
    var i = m.int(e % g.WorldConst.SECTOR_WIDTH);
    var n = m.int(t % g.WorldConst.SECTOR_HEIGHT);
    if (this.cellBitmap == null || !this.checkAllClipsLoaded() || this.drawnDecoAreas[i][n]) {
      return null;
    }
    var o = E.CastleModel.worldmapData.areaTiles.getBitmapDataForAreaByXY(e, t);
    var a = o[0];
    var s = o[1];
    if (a) {
      var r = new d.Matrix();
      r.translate(i * l.ClientConstCastle.MAPTILESIZE_X, n * l.ClientConstCastle.MAPTILESIZE_Y);
      this.cellBitmap.draw(a, r, null, null, null, true);
    }
    this.drawnDecoAreas[i][n] = s;
    return this.cellBitmap;
  };
  CastleWorldMapBackgroundTileVO.prototype.freeBitmapData = function () {
    if (this.cellBitmap) {
      this.cellBitmap.dispose();
      this.cellBitmap = null;
    }
  };
  CastleWorldMapBackgroundTileVO.EMPTY_RIVERPIECE = 5;
  CastleWorldMapBackgroundTileVO.DRAW_SECTOR_BOUNDS = false;
  return CastleWorldMapBackgroundTileVO;
}();
exports.CastleWorldMapBackgroundTileVO = s;
var r = require("./17.js");
var l = require("./18.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./1.js");
var p = require("./1.js");
var h = require("./1.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./5.js");
var m = require("./6.js");
var f = require("./16.js");
var O = require("./421.js");
var E = require("./4.js");
var y = require("./1170.js");