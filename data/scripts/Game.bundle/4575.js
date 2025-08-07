Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./6.js");
var u = require("./4.js");
var d = require("./4576.js");
var p = require("./559.js");
var h = require("./1920.js");
var g = createjs.Point;
var C = function (e) {
  function CastleFactionSectorGenerator() {
    var t = this;
    t.mapSeed = 0;
    t.init = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleFactionSectorGenerator, e);
  CastleFactionSectorGenerator.prototype.generateDecoObjects = function (e, t, i) {
    if (!this.init) {
      this.fillMap();
    }
    var n = new h.AreaTypeSectorMap(this.getSectorMapByXY(e, t));
    this.rand = new o.SimpleRandom(e * 41 + t * 977);
    this.setDecoElements(n);
    return n.getAsMap();
  };
  CastleFactionSectorGenerator.prototype.fillMap = function () {
    if (u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION)) {
      this.mapSeed = c.int(u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION).mapSeed);
    }
    this._yxWorldMapObjects = [];
    this.randomizeSectors();
    this.init = true;
  };
  CastleFactionSectorGenerator.prototype.getSectorMapByXY = function (e, t) {
    var i = [];
    var n = 0;
    var o = 0;
    var a = 0;
    var s = 0;
    for (o = 0; o < l.WorldConst.SECTOR_HEIGHT; ++o) {
      i[o] = [];
      s = c.int(l.WorldConst.SECTOR_HEIGHT * t + o);
      this._yxWorldMapObjects[s] ||= [];
      n = 0;
      for (; n < l.WorldConst.SECTOR_WIDTH; ++n) {
        a = c.int(l.WorldConst.SECTOR_WIDTH * e + n);
        i[o][n] = this._yxWorldMapObjects[s][a] ? this._yxWorldMapObjects[s][a] : 0;
      }
    }
    return i;
  };
  CastleFactionSectorGenerator.prototype.randomizeSectors = function () {
    var e = 0;
    var t = 0;
    for (e = 0; e < r.FactionConst.MAP_WIDTH_IN_SECTORS; e++) {
      for (t = 0; t < r.FactionConst.MAP_HEIGHT_IN_SECTORS; t++) {
        this.randomizeSector(e, t);
      }
    }
  };
  CastleFactionSectorGenerator.prototype.randomizeSector = function (e, t) {
    var i = new o.SimpleRandom(r.FactionConst.getSectorSeed(this.mapSeed, e, t));
    var n = [];
    var a = 0;
    var s = 0;
    for (a = 0; a < r.FactionConst.SECTOR_WIDTH_IN_CAMPS; a++) {
      for (s = 0; s < r.FactionConst.SECTOR_HEIGHT_IN_CAMPS; s++) {
        n[a] ||= [];
        n[a][s] = false;
      }
    }
    this.addCapitals(i, n, e, t);
    this.addTowers(i, n, e, t);
    this.fillRestWithCamps(i, n, e, t);
  };
  CastleFactionSectorGenerator.prototype.addCapitals = function (e, t, i, n) {
    if (this.capitalInfos != null) {
      for (var o = 0, a = Array.from(this.capitalInfos.values()); o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && r.FactionConst.inSector(i, n, s.sectorPosition)) {
          s.absAreaPos = this.randomizeSpot(e, t, s.sectorPosition[0], s.sectorPosition[1], l.WorldConst.AREA_TYPE_FACTION_CAPITAL);
        }
      }
    }
  };
  CastleFactionSectorGenerator.prototype.markSpotUsed = function (e, t, i) {
    i[e % r.FactionConst.SECTOR_WIDTH_IN_CAMPS][t % r.FactionConst.SECTOR_HEIGHT_IN_CAMPS] = true;
  };
  CastleFactionSectorGenerator.prototype.addTowers = function (e, t, i, n) {
    if (this.towerInfos != null) {
      for (var o = 0, a = Array.from(this.towerInfos.values()); o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && r.FactionConst.inSector(i, n, s.sectorPosition)) {
          this.addTower(e, t, s);
        }
      }
    }
  };
  CastleFactionSectorGenerator.prototype.addTower = function (e, t, i) {
    var n = [[-1, -1], [1, -1], [-1, 0], [1, 1], [-1, 1], [0, -1], [0, 1], [1, 0]];
    i.absAreaPos = this.randomizeSpot(e, t, i.sectorPosition[0], i.sectorPosition[1], l.WorldConst.AREA_TYPE_FACTION_TOWER);
    i.initVillagePositions();
    var o = c.int(e.nextInt(n.length));
    for (var a = 0; a < n.length && a < i.villageCount; a++) {
      var s = n[(o + a) % n.length];
      var r = c.int(i.sectorPosition[0] + s[0]);
      var u = c.int(i.sectorPosition[1] + s[1]);
      var p = this.randomizeSpot(e, t, r, u, l.WorldConst.AREA_TYPE_FACTION_VILLAGE);
      this.villageInfos.set(p.toString(), new d.FactionVillageInfoVO(i.specialCampID, p));
      i.addVillage(p);
    }
  };
  CastleFactionSectorGenerator.prototype.fillRestWithCamps = function (e, t, i, n) {
    var o = 0;
    var a = 0;
    var s = 0;
    var u = 0;
    for (o = 0; o < r.FactionConst.SECTOR_WIDTH_IN_CAMPS; o++) {
      for (a = 0; a < r.FactionConst.SECTOR_HEIGHT_IN_CAMPS; a++) {
        if (!t[o][a]) {
          s = c.int(i * r.FactionConst.SECTOR_WIDTH_IN_CAMPS + o);
          u = c.int(n * r.FactionConst.SECTOR_HEIGHT_IN_CAMPS + a);
          this.randomizeSpot(e, t, s, u, l.WorldConst.AREA_TYPE_FACTION_CAMP);
        }
      }
    }
  };
  CastleFactionSectorGenerator.prototype.randomizeSpot = function (e, t, i, n, o) {
    var a;
    var s = c.int(r.FactionConst.upperLeftWorldXFromAbsoluteCampX(i));
    var l = c.int(r.FactionConst.upperLeftWorldYFromAbsoluteCampY(n));
    for (var u = [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [2, 1]], d = c.int(e.nextInt(u.length)), p = 0, h = 0, C = 0; C < u.length; C++) {
      a = u[(d + C) % u.length];
      p = c.int(s + a[0]);
      h = c.int(l + a[1]);
      if (this.isInBounds(p, h) && !this.bumpsIntoOtherObject(p, h)) {
        this.markSpotUsed(i, n, t);
        this._yxWorldMapObjects[h] ||= [];
        this._yxWorldMapObjects[h][p] = o;
        return new g(p, h);
      }
    }
    return null;
  };
  CastleFactionSectorGenerator.prototype.bumpsIntoOtherObject = function (e, t) {
    var i = 0;
    var n = 0;
    for (i = e - 1; i <= e + 1; i++) {
      for (n = t - 1; n <= t + 1; n++) {
        if (this.isInBounds(i, n) && this.getAreaTypeAt(i, n) != 0) {
          return true;
        }
      }
    }
    return false;
  };
  CastleFactionSectorGenerator.prototype.isInBounds = function (e, t) {
    return e >= 0 && e < r.FactionConst.getMapWidth() && t >= 0 && t < r.FactionConst.getMapHeight();
  };
  CastleFactionSectorGenerator.prototype.getAreaTypeAt = function (e, t) {
    if (this.isInBounds(e, t) && this._yxWorldMapObjects[t] && this._yxWorldMapObjects[t][e]) {
      return c.int(this._yxWorldMapObjects[t][e]);
    } else {
      return 0;
    }
  };
  Object.defineProperty(CastleFactionSectorGenerator.prototype, "towerInfos", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION).towerInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionSectorGenerator.prototype, "capitalInfos", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION).capitalInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionSectorGenerator.prototype, "villageInfos", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION).villageInfos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionSectorGenerator.prototype, "kingdomID", {
    get: function () {
      return r.FactionConst.KINGDOM_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ABasicSectorGenerator.prototype, "kingdomID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionSectorGenerator.prototype, "decoTypeCount", {
    get: function () {
      return CastleFactionSectorGenerator.FACTION_DECO_TYPE_COUNT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.ABasicSectorGenerator.prototype, "decoTypeCount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionSectorGenerator.FACTION_DECO_TYPE_COUNT = [[14, 3], [13, 3], [12, 3], [9, 1], [10, 1], [11, 1], [5, 2], [7, 2], [4, 2], [8, 1], [3, 2], [2, 1], [19, 5], [18, 5], [17, 10], [16, 3], [15, 3], [6, 1], [1, 1], [0, 2], [21, 1], [22, 1], [23, 1], [20, 1]];
  return CastleFactionSectorGenerator;
}(p.ABasicSectorGenerator);
exports.CastleFactionSectorGenerator = C;
a.classImplementsInterfaces(C, "ICastleSectorGenerator");