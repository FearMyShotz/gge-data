Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Bitmap;
var o = createjs.Point;
var a = function () {
  function CastleWorldMapAreaTilesDirectory() {
    this.SGN_SECTORS_INITIALIZED = new c.NoneValueSignal();
    this._allSectorsInitialized = false;
    this.currentKingdomId = 0;
    this.directoryChanged = new _.Signal();
    this.setupData();
  }
  CastleWorldMapAreaTilesDirectory.prototype.setupData = function () {
    this.visClassToBitmap = new Map();
    this.resetInitialization();
    this.directoryChanged.dispatch();
  };
  CastleWorldMapAreaTilesDirectory.prototype.checkResetOnKingdomChange = function () {
    if (y.CastleModel.kingdomData.activeKingdomID != this.currentKingdomId) {
      this.resetInitialization();
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.resetInitialization = function () {
    var e = 0;
    var t = 0;
    this._allSectorsInitialized = false;
    this.currentKingdomId = C.int(y.CastleModel.kingdomData.activeKingdomID);
    u.debug("Worldmap Cache initializing world of " + l.ClientConstCastle.WORLD_WIDTH + "x" + l.ClientConstCastle.WORLD_HEIGHT + " tiles.");
    var i = "Castle" + y.CastleModel.kingdomData.activeKingdomVO.kingdomName + CastleWorldMapAreaTilesDirectory.SECTOR_GENERATOR_BASE_NAME;
    var n = d.getDefinitionByName(i);
    this.sectorGenerator = new n();
    this.areas = [];
    t = 0;
    for (; t < l.ClientConstCastle.WORLD_HEIGHT; t++) {
      this.areas[t] = [];
    }
    this.sectorsInitialized = [];
    t = 0;
    for (; t < l.ClientConstCastle.WORLDMAPSIZE_Y; t++) {
      this.sectorsInitialized[t] = [];
      e = 0;
      for (; e < l.ClientConstCastle.WORLDMAPSIZE_X; e++) {
        this.sectorsInitialized[t][e] = new v.CastleWorldmapSectorUpdateVO(-1, 0);
      }
    }
    this._allSectorsInitialized = true;
    this.SGN_SECTORS_INITIALIZED.signal();
  };
  CastleWorldMapAreaTilesDirectory.prototype.initSector = function (e, t, i = null, n = null) {
    this.checkResetOnKingdomChange();
    var o = this.sectorGenerator.generateDecoObjects(e, t, n);
    var a = new Array(o.length);
    this.initializeMapobjectVOs(o, a, e, t);
    var s = 0;
    var r = 0;
    var l = !!i && i.length > 0;
    for (var c = C.int((t + 1) * g.WorldConst.SECTOR_HEIGHT), u = C.int((e + 1) * g.WorldConst.SECTOR_WIDTH), d = C.int(t * g.WorldConst.SECTOR_HEIGHT); d < c; d++) {
      for (var p = C.int(e * g.WorldConst.SECTOR_WIDTH); p < u; p++) {
        if ((l && this.isPositionInArray(i, p, d) || !l) && a[r][s]) {
          if (this.areas[d][p]) {
            this.areas[d][p].dispose();
          }
          this.areas[d][p] = a[r][s];
        }
        s++;
      }
      r++;
      s = 0;
    }
    o = null;
    a = null;
  };
  CastleWorldMapAreaTilesDirectory.prototype.initializeMapobjectVOs = function (e, t, i, n) {
    var a;
    for (var s = C.int(e.length), l = C.int(e[0].length), c = 0, u = 0; u < s; u++) {
      t[u] = new Array(l);
      a = null;
      c = 0;
      for (var d = 0; d < l; d++) {
        a = null;
        if ((c = C.int(e[u][d])) < 0) {
          a = f.ClientConstWorldmapDeco.createWorldmapVOFromRawDeco(-(c + 1));
        } else if (c != g.WorldConst.AREA_TYPE_EMPTY && c != CastleWorldMapAreaTilesDirectory.AREA_BLOCKED) {
          a = r.WorldmapObjectFactory.createRawWorldmapObjectVO(c);
        }
        if (a) {
          a.x = d;
          a.y = u;
          a.absAreaPos = new o(i * g.WorldConst.SECTOR_WIDTH + d, n * g.WorldConst.SECTOR_HEIGHT + u);
          a.areaType = c;
          a.kingdomID = C.int(y.CastleModel.kingdomData.activeKingdomID);
          t[u][d] = a;
        }
      }
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.isPositionInArray = function (e, t, i) {
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a[0] == t && a[1] == i) {
          return true;
        }
      }
    }
    return false;
  };
  CastleWorldMapAreaTilesDirectory.prototype.loadAsset = function (e) {
    var t = e.actualVisClassName + m.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false);
    if (!this.visClassToBitmap.get(t)) {
      var i;
      try {
        i = d.getDefinitionByName(e.name + e.group);
      } catch (e) {}
      var n = new i();
      if (n instanceof D.EmptyMapobject) {
        n.clipLoaded.addOnce(this.bindFunction(this.copyBitmapFromDisplayObject));
      }
      this.visClassToBitmap.set(t, n);
      n.initialize(e, null);
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.copyBitmapFromDisplayObject = function (e) {
    if (e) {
      var t = e.disp;
      if (t) {
        var i;
        t.cacheAsBitmap = true;
        i = t.children[0].children[0].children[0] ? t.children[0].children[0].children[0].clone() : new n();
        var o = e.mapobjectVO.actualVisClassName + m.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false);
        if (!p.instanceOfClass(this.visClassToBitmap.get(o), "Bitmap")) {
          var a = this.visClassToBitmap.get(o);
          if (a) {
            a.remove();
            a.removeDispFromWorld();
          }
          this.visClassToBitmap.set(o, i);
          this.directoryChanged.dispatch();
        }
      }
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.getBitmapDataForAreaByXY = function (e, t) {
    if (e > l.ClientConstCastle.WORLD_WIDTH - 1 || t > l.ClientConstCastle.WORLD_HEIGHT - 1 || e < 0 || t < 0) {
      return null;
    }
    this.checkSectorInitialisation(e, t);
    if (this.areas && this.areas.length > t && this.areas[t].length > e) {
      var i = this.areas[t][e];
      if (i && p.instanceOfClass(i, "EmptyMapobjectVO")) {
        var o = i.actualVisClassName + m.ClientConstIsoChangeEventSkin.getValidSkinSuffixForCurrentKingdom(false);
        var a = this.visClassToBitmap.get(o);
        if (a && a instanceof n) {
          return [a, true];
        } else {
          this.loadAsset(i);
          return [null, false];
        }
      }
    }
    return [null, true];
  };
  CastleWorldMapAreaTilesDirectory.prototype.checkSectorInitialisation = function (e, t) {
    var i = b.SectorHelper.absolutPosToSectorPos(new o(e, t));
    var n = this.sectorsInitialized[i.y][i.x];
    this.checkResetOnKingdomChange();
    if (n.status == v.CastleWorldmapSectorUpdateVO.STATUS_INITIAL || E.CachedTimer.getCachedTimer() - n.lastUpdate > s.CastleWorldmapData.AREA_INVALIDATION_TIME) {
      n.kingdomId = C.int(y.CastleModel.kingdomData.activeKingdomID);
      if (n.status == v.CastleWorldmapSectorUpdateVO.STATUS_INITIAL) {
        if (y.CastleModel.kingdomData.activeKingdomID == h.FactionConst.KINGDOM_ID) {
          this.initSector(i.x, i.y);
          n.status = C.int(v.CastleWorldmapSectorUpdateVO.STATUS_READY_FOR_RENDERING);
          y.CastleModel.smartfoxClient.sendCommandVO(new O.C2SGetFactionPointsVO());
        } else {
          n.status = C.int(v.CastleWorldmapSectorUpdateVO.STATUS_INITIAL_GAA_PENDING);
        }
      }
      y.CastleModel.worldmapData.updateAreaRange(i.x * g.WorldConst.SECTOR_WIDTH, i.y * g.WorldConst.SECTOR_HEIGHT, (i.x + 1) * g.WorldConst.SECTOR_WIDTH - 1, (i.y + 1) * g.WorldConst.SECTOR_HEIGHT - 1);
      n.lastUpdate = E.CachedTimer.getCachedTimer();
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.insertAreaVOByXY = function (e, t, i) {
    if (e.kingdomID == this.currentKingdomId) {
      var n = C.int(b.SectorHelper.getSectorX(t));
      var o = C.int(b.SectorHelper.getSectorY(i));
      var a = this.sectorsInitialized[o][n];
      if (!e) {
        throw new Error("Attempted to Insert empty AreaVO into a Sector");
      }
      if (e instanceof T.InteractiveMapobjectVO) {
        var s = y.CastleModel.bookmarkData.getBookmarkForWMO(e);
        if (s) {
          e.bookmark = s;
        }
      }
      if (a && a.kingdomId == y.CastleModel.kingdomData.activeKingdomID) {
        this.areas[i][t] = e;
      }
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.getVOForAreaByXY = function (e, t) {
    if (e > l.ClientConstCastle.WORLD_WIDTH - 1 || t > l.ClientConstCastle.WORLD_HEIGHT - 1 || t < 0) {
      return null;
    } else {
      this.checkSectorInitialisation(e, t);
      if (p.instanceOfClass(this.areas[t][e], "AVisualVO")) {
        return this.areas[t][e];
      } else {
        return null;
      }
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.resetUpdateTimes = function () {
    var e = 0;
    for (var t = 0, i = C.int(this.sectorsInitialized.length), n = 0; t < i; t++) {
      var o = this.sectorsInitialized[t];
      n = C.int(o.length);
      e = 0;
      for (; e < n; e++) {
        o[e].lastUpdate = 0;
      }
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.updateAllObjects = function () {
    if (this.areas != null) {
      for (var e = 0, t = this.areas; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i != null) {
          for (var n = 0, o = i; n < o.length; n++) {
            var a = o[n];
            if (a !== undefined && a) {
              a.dispatchValueObjectChanged();
            }
          }
        }
      }
    }
  };
  Object.defineProperty(CastleWorldMapAreaTilesDirectory.prototype, "activityHeatMap", {
    get: function () {
      var e;
      var t = [];
      var i = E.CachedTimer.getCachedTimer();
      var n = 0;
      for (var o = 0, a = 0, r = 0, l = NaN; o < this.sectorsInitialized.length; o++) {
        a = C.int(this.sectorsInitialized[o].length);
        e = [];
        n = 0;
        for (; n < a; n++) {
          l = 0;
          l = (r = i - this.sectorsInitialized[o][n].lastUpdate) > s.CastleWorldmapData.AREA_INVALIDATION_TIME || this.sectorsInitialized[o][n].kingdomId != y.CastleModel.kingdomData.activeKingdomID ? 2 : Math.min(1, r / s.CastleWorldmapData.AREA_INVALIDATION_TIME);
          e.push(1 - l);
        }
        t.push(e);
      }
      return t;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldMapAreaTilesDirectory.prototype.isSectorPopulated = function (e, t) {
    var i = Math.floor(e / g.WorldConst.SECTOR_WIDTH);
    var n = Math.floor(t / g.WorldConst.SECTOR_HEIGHT);
    var o = false;
    for (var a = C.int(n * g.WorldConst.SECTOR_HEIGHT + g.WorldConst.SECTOR_HEIGHT), s = C.int(i * g.WorldConst.SECTOR_WIDTH + g.WorldConst.SECTOR_WIDTH), r = C.int(n * g.WorldConst.SECTOR_HEIGHT); r < a; r++) {
      for (var l = C.int(i * g.WorldConst.SECTOR_WIDTH); l < s; l++) {
        if (this.areas[r][l] instanceof I.CastleMapobjectVO && this.areas[r][l].areaType == g.WorldConst.AREA_TYPE_CASTLE && this.areas[r][l].ownerInfo != null) {
          o = true;
          break;
        }
      }
    }
    return o;
  };
  Object.defineProperty(CastleWorldMapAreaTilesDirectory.prototype, "allSectorsInitialized", {
    get: function () {
      return this._allSectorsInitialized;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldMapAreaTilesDirectory.prototype.isSectorReadyForRendering = function (e, t) {
    return t < this.sectorsInitialized.length && e < this.sectorsInitialized[t].length && this.sectorsInitialized[t][e].status >= v.CastleWorldmapSectorUpdateVO.STATUS_READY_FOR_RENDERING;
  };
  CastleWorldMapAreaTilesDirectory.prototype.setReadyForRendering = function (e) {
    var t;
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t = b.SectorHelper.absolutPosToSectorPos(o);
          if (this.sectorsInitialized[t.y][t.x].status == v.CastleWorldmapSectorUpdateVO.STATUS_INITIAL_GAA_PENDING) {
            this.initSector(t.x, t.y, null, this.generatePresetSectorMap(t));
            this.sectorsInitialized[t.y][t.x].status = v.CastleWorldmapSectorUpdateVO.STATUS_READY_FOR_RENDERING;
          }
        }
      }
    }
  };
  CastleWorldMapAreaTilesDirectory.prototype.generatePresetSectorMap = function (e) {
    var t;
    var i = [];
    for (var n = 0; n < g.WorldConst.SECTOR_HEIGHT; n++) {
      i[n] = [];
      for (var o = 0; o < g.WorldConst.SECTOR_WIDTH; o++) {
        t = this.areas[e.y * g.WorldConst.SECTOR_HEIGHT + n][e.x * g.WorldConst.SECTOR_WIDTH + o];
        i[n][o] = t ? CastleWorldMapAreaTilesDirectory.AREA_BLOCKED : 0;
      }
    }
    return i;
  };
  CastleWorldMapAreaTilesDirectory.prototype.destroy = function () {
    this.directoryChanged.removeAll();
  };
  CastleWorldMapAreaTilesDirectory.__initialize_static_members = function () {
    CastleWorldMapAreaTilesDirectory.AREA_BLOCKED = C.int(Number.MAX_VALUE);
  };
  CastleWorldMapAreaTilesDirectory.SECTOR_GENERATOR_PACKAGE = "com.goodgamestudios.castle.worldmap.helper.generators::";
  CastleWorldMapAreaTilesDirectory.SECTOR_GENERATOR_BASE_NAME = "SectorGenerator";
  return CastleWorldMapAreaTilesDirectory;
}();
exports.CastleWorldMapAreaTilesDirectory = a;
var s = require("./502.js");
var r = require("./147.js");
var l = require("./18.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./1.js");
var p = require("./1.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./6.js");
var _ = require("./57.js");
var m = require("./421.js");
var f = require("./1218.js");
var O = require("./2124.js");
var E = require("./30.js");
var y = require("./4.js");
var b = require("./884.js");
var D = require("./1219.js");
var I = require("./501.js");
var T = require("./101.js");
var v = require("./2125.js");
a.__initialize_static_members();