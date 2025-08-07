Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./116.js");
var s = require("./6.js");
var r = require("./105.js");
var l = require("./5250.js");
var c = require("./5251.js");
var u = createjs.Point;
var d = createjs.Rectangle;
var p = a.getLogger("createjs.ts Extensions");
var h = function () {
  function IsoDataGrid(e) {
    this._pathfindingGraph = null;
    this._isPathfindingGraphValid = false;
    this.workerPathfinderGraphNotified = false;
    this._isoData = e;
    this._origins = new l.IsoDataGridOrigins(this);
    this._map = this.createEmptyMap();
  }
  IsoDataGrid.prototype.createEmptyMap = function () {
    var e = [];
    for (var t = 0; t < g.IsoConst.GRID_TOTAL_DIMENSION.y; ++t) {
      e[t] = [];
      for (var i = 0; i < g.IsoConst.GRID_TOTAL_DIMENSION.x; ++i) {
        e[t][i] = new c.IsoDataGridTile();
      }
    }
    return e;
  };
  IsoDataGrid.prototype.resetMap = function () {
    for (var e = 0; e < this.map.length; ++e) {
      for (var t = 0; t < this.map[e].length; ++t) {
        this.map[e][t].reset();
      }
    }
  };
  IsoDataGrid.prototype.updateCompleteMap = function () {
    this.resetMap();
    this.updateGrounds();
    for (var e = 0, t = this.isoData.objects.innerBuildings.list; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        this.addBuilding(i);
      }
    }
    this.updateDefence();
    this.updateOuterMap();
  };
  IsoDataGrid.prototype.updateGrounds = function () {
    for (var e = 0, t = this.isoData.objects.groundObjects.list; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        this.setTileInfoGround(i);
      }
    }
    this.origins.update();
  };
  IsoDataGrid.prototype.addBuilding = function (e) {
    this.setTileInfoObjectId(e);
    this.setTileInfoWalkable(e);
    this.setTileInfoSpawnPoint(e);
    this.invalidatePathfinderGraph();
  };
  IsoDataGrid.prototype.updateBuildingPos = function (e) {
    this.removeBuildingById(e.objectId);
    this.addBuilding(e);
    this.invalidatePathfinderGraph();
  };
  IsoDataGrid.prototype.removeBuildingById = function (e) {
    var t = g.IsoConst.GRID_START_POS;
    var i = s.int(g.IsoConst.GRID_START_POS.x + g.IsoConst.GRID_TOTAL_DIMENSION.x);
    for (var n = s.int(g.IsoConst.GRID_START_POS.y + g.IsoConst.GRID_TOTAL_DIMENSION.y), o = s.int(t.y); o < n; ++o) {
      for (var a = s.int(t.x); a < i; ++a) {
        var r = this.getTile(a, o);
        if (r && r.objectId == e) {
          r.objectId = -1;
          r.isSpawnPoint = false;
          r.isWalkable = true;
        }
      }
    }
    this.invalidatePathfinderGraph();
  };
  IsoDataGrid.prototype.updateOuterMap = function () {
    var e;
    for (var t = 0, i = this.isoData.objects.eventBuildings.list; t < i.length; t++) {
      e = i[t];
      this.addBuilding(e);
    }
    for (var n = 0, o = this.isoData.objects.surroundings.list; n < o.length; n++) {
      e = o[n];
      this.addBuilding(e);
    }
    for (var a = 0, s = this.isoData.objects.fixedPositions.list; a < s.length; a++) {
      e = s[a];
      this.addBuilding(e);
    }
    this.invalidatePathfinderGraph();
  };
  IsoDataGrid.prototype.updateDefence = function () {
    var e = this.isoData.objects.defences;
    var t = 2;
    if (e.moat) {
      t += 3;
    }
    t = t * 2 + 1;
    var i;
    var n;
    var o;
    var a;
    var r;
    var l;
    var c;
    for (var u = 0, d = this.isoData.objects.groundObjects.list; u < d.length; u++) {
      var p = d[u];
      if (p !== undefined) {
        for (n = p.y; n <= p.y2; ++n) {
          for (i = p.x; i <= p.x2; ++i) {
            if (i == p.x || i == p.x2 || n == p.y || n == p.y2) {
              for (a = 0; a < t; ++a) {
                for (o = 0; o < t; ++o) {
                  r = i + o - s.int(t / 2);
                  l = n + a - s.int(t / 2);
                  if (!(c = this._map[l][r]).hasGround && !c.isSpawnPoint) {
                    c.isWalkable = false;
                  }
                }
              }
            }
          }
        }
      }
    }
    this.setTileInfoSpawnPoint(e.gate);
    if (e.moat) {
      for (var h = 0; h < 3; ++h) {
        (e.moat.rotation == 0 ? this._map[e.gate.y + 1][e.gate.x + 2 + h] : this._map[e.gate.y + 2 + h][e.gate.x + 1]).isWalkable = true;
      }
    }
    this.invalidatePathfinderGraph();
  };
  IsoDataGrid.prototype.setTileInfoGround = function (e) {
    if (e) {
      var t = s.int(e.x + e.walkmapOffset.x);
      var i = s.int(e.y + e.walkmapOffset.y);
      var n = s.int(e.x2 + e.walkmapOffset.x);
      for (var o = s.int(e.y2 + e.walkmapOffset.y), a = i; a <= o; ++a) {
        for (var r = t; r <= n; ++r) {
          var l = this.getTile(r, a);
          if (l) {
            l.hasGround = true;
          }
        }
      }
    }
  };
  IsoDataGrid.prototype.setTileInfoObjectId = function (e) {
    if (e) {
      var t = s.int(e.x + e.walkmapOffset.x);
      var i = s.int(e.y + e.walkmapOffset.y);
      var n = s.int(e.x2 + e.walkmapOffset.x);
      for (var o = s.int(e.y2 + e.walkmapOffset.y), a = i; a <= o; ++a) {
        for (var r = t; r <= n; ++r) {
          var l = this.getTile(r, a);
          if (l) {
            l.objectId = s.int(e.objectId);
          }
        }
      }
    }
  };
  IsoDataGrid.prototype.setTileInfoWalkable = function (e) {
    if (e) {
      for (var t = e.walkmap, i = 0; i < t.length; ++i) {
        var n = s.int(e.y + e.walkmapOffset.y + i);
        for (var o = 0; o < t[i].length; ++o) {
          var a = s.int(e.x + e.walkmapOffset.x + o);
          var r = this.getTile(a, n);
          if (r) {
            r.isWalkable = t[i][o];
          }
        }
      }
    }
  };
  IsoDataGrid.prototype.setTileInfoSpawnPoint = function (e) {
    if (e) {
      for (var t = 0, i = e.spawnPoints; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = this.getTile(e.x + e.walkmapOffset.x + n.x, e.y + e.walkmapOffset.y + n.y);
          if (o) {
            o.isSpawnPoint = true;
            o.isWalkable = true;
          }
        }
      }
    }
  };
  IsoDataGrid.prototype.getTile = function (e, t) {
    if (this.map && t >= 0 && t < this.map.length && e >= 0 && e < this.map[0].length) {
      return this.map[t][e];
    } else {
      return null;
    }
  };
  IsoDataGrid.prototype.isPointOnBuildingGround = function (e) {
    var t = this.getTile(e.x, e.y);
    return !!t && t.hasGround;
  };
  IsoDataGrid.prototype.isDimensionOnBuildingGround = function (e, t) {
    var i = s.int(e.x + t.x - 1);
    for (var n = s.int(e.y + t.y - 1), o = s.int(e.y); o <= n; ++o) {
      for (var a = s.int(e.x); a <= i; ++a) {
        var r = this.getTile(a, o);
        if (!r || !r.hasGround) {
          return false;
        }
      }
    }
    return true;
  };
  IsoDataGrid.prototype.isDimensionFreeForBuild = function (e, t, i = -1) {
    var n = s.int(e.x + t.x - 1);
    for (var o = s.int(e.y + t.y - 1), a = s.int(e.y); a <= o; ++a) {
      for (var r = s.int(e.x); r <= n; ++r) {
        var l = this.getTile(r, a);
        if (!l || !l.hasGround || l.objectId != i && l.objectId >= 0) {
          return false;
        }
      }
    }
    return true;
  };
  IsoDataGrid.prototype.isDimensionInGroundBounds = function (e, t) {
    var i = this.origins.getOriginPos(r.IsoGridOriginEnum.TOP_CORNER);
    var n = this.origins.getOriginPos(r.IsoGridOriginEnum.BOTTOM_CORNER);
    return e.x >= i.x && e.y >= i.y && e.x + t.x - 1 <= n.x && e.y + t.y - 1 <= n.y;
  };
  IsoDataGrid.prototype.getValidDragPosForBuilding = function (e, t) {
    var i = new u(e.x, e.y);
    i.x = i.x - i.x % g.IsoConst.GRID_PATTERN_SIZE.x;
    i.y = i.y - i.y % g.IsoConst.GRID_PATTERN_SIZE.y;
    var n = this.origins.getOriginPos(r.IsoGridOriginEnum.TOP_CORNER);
    var o = this.origins.getOriginPos(r.IsoGridOriginEnum.BOTTOM_CORNER);
    if (i.x < n.x) {
      i.x = n.x;
    }
    if (i.y < n.y) {
      i.y = n.y;
    }
    if (i.x + t.x > o.x) {
      i.x = o.x - t.x + 1;
    }
    if (i.y + t.y > o.y) {
      i.y = o.y - t.y + 1;
    }
    if (!this.isDimensionOnBuildingGround(i, t)) {
      i = this.getNextPossiblePosOnGround(i, t);
    }
    return i;
  };
  IsoDataGrid.prototype.getNextPossiblePosOnGround = function (e, t) {
    var i = [];
    i.push(this.getFirstPossiblePosOnGroundInDir(e, t, new u(-1, 0)));
    i.push(this.getFirstPossiblePosOnGroundInDir(e, t, new u(0, -1)));
    i.push(this.getFirstPossiblePosOnGroundInDir(e, t, new u(1, 0)));
    i.push(this.getFirstPossiblePosOnGroundInDir(e, t, new u(0, 1)));
    i.push(this.getFirstPossiblePosOnGroundInDir(e, t, new u(-1, -1)));
    i.push(this.getFirstPossiblePosOnGroundInDir(e, t, new u(-1, 1)));
    i.push(this.getFirstPossiblePosOnGroundInDir(e, t, new u(1, -1)));
    i.push(this.getFirstPossiblePosOnGroundInDir(e, t, new u(1, 1)));
    var n = -1;
    var o = s.int(Number.MAX_VALUE);
    for (var a = 0; a < i.length; ++a) {
      var r = i[a];
      if (r.i >= 0 && r.i < o) {
        n = a;
        o = s.int(r.i);
      }
    }
    if (n >= 0) {
      return i[n].pos;
    } else {
      return e;
    }
  };
  IsoDataGrid.prototype.getFirstPossiblePosOnGroundInDir = function (e, t, i) {
    var n = new u(e.x, e.y);
    var o = 0;
    for (o = 0; !this.isDimensionOnBuildingGround(n, t); ++o) {
      if (!this.isDimensionInGroundBounds(n.add(i), t)) {
        o = -1;
        break;
      }
      n.x += i.x;
      n.y += i.y;
    }
    return {
      pos: n,
      i: o
    };
  };
  IsoDataGrid.prototype.isWalkable = function (e, t) {
    var i = this.getTile(e, t);
    return !!i && (i.isWalkable || i.isSpawnPoint);
  };
  IsoDataGrid.prototype.getWidth = function () {
    return s.int(g.IsoConst.GRID_TOTAL_DIMENSION.x);
  };
  IsoDataGrid.prototype.getHeight = function () {
    return s.int(g.IsoConst.GRID_TOTAL_DIMENSION.y);
  };
  IsoDataGrid.prototype.invalidatePathfinderGraph = function () {
    this._isPathfindingGraphValid = false;
    this.workerPathfinderGraphNotified = false;
  };
  IsoDataGrid.prototype.getPathfindingGraph = function () {
    if (!this._isPathfindingGraphValid) {
      this._pathfindingGraph = n.PathfindingGraph.generateFromMap(this);
      this._isPathfindingGraphValid = true;
    }
    return this._pathfindingGraph;
  };
  IsoDataGrid.prototype.traceInnerObjectIdMap = function () {
    this.traceWalkmap(new d(g.IsoConst.GRID_START_POS.x, g.IsoConst.GRID_START_POS.y, g.IsoConst.GRID_INNER_DIMENSION.x, g.IsoConst.GRID_INNER_DIMENSION.y));
  };
  IsoDataGrid.prototype.traceObjectIdMap = function (e) {
    p.debug("--------------IsoWorld-Map-ObjectIds-----------------");
    var t = s.int(e.x + e.width);
    for (var i = s.int(e.y + e.height), n = s.int(e.y); n < i; ++n) {
      var o = "";
      for (var a = s.int(e.x); a < t; ++a) {
        var r = s.int(this._map[n][a].objectId);
        if (r < 0) {
          o += " ";
        }
        if (r >= 0 && r < 10) {
          o += "  ";
        }
        if (r >= 10 && r < 100) {
          o += " ";
        }
        o += String(r) + " ";
      }
      p.debug(o);
    }
  };
  IsoDataGrid.prototype.traceInnerWalkmap = function () {
    this.traceWalkmap(new d(g.IsoConst.GRID_START_POS.x, g.IsoConst.GRID_START_POS.y, g.IsoConst.GRID_INNER_DIMENSION.x, g.IsoConst.GRID_INNER_DIMENSION.y));
  };
  IsoDataGrid.prototype.traceInnerAndOuterWalkmap = function () {
    this.traceWalkmap(new d(g.IsoConst.GRID_START_POS.x - 20, g.IsoConst.GRID_START_POS.y - 20, g.IsoConst.GRID_INNER_DIMENSION.x + 40 + 10, g.IsoConst.GRID_INNER_DIMENSION.y + 40 + 10));
  };
  IsoDataGrid.prototype.traceWalkmap = function (e) {
    p.debug("--------------IsoWorld-Map-Walkmap-----------------");
    var t = s.int(e.x + e.width);
    for (var i = s.int(e.y + e.height), n = s.int(e.y); n < i; ++n) {
      var o = "";
      for (var a = s.int(e.x); a < t; ++a) {
        var r = this._map[n][a];
        if (r.isSpawnPoint) {
          o += "╬";
        } else if (r.hasGround) {
          if (r.objectId >= 0) {
            if (r.isWalkable) {
              o += "▒";
            } else {
              o += "█";
            }
          } else {
            o += "░";
          }
        } else if (r.isWalkable) {
          o += "─";
        } else {
          o += "█";
        }
        o += " ";
      }
      p.debug(o);
    }
  };
  Object.defineProperty(IsoDataGrid.prototype, "map", {
    get: function () {
      return this._map;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGrid.prototype, "origins", {
    get: function () {
      return this._origins;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGrid.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataGrid;
}();
exports.IsoDataGrid = h;
var g = require("./144.js");
o.classImplementsInterfaces(h, "IPathfinderSearchableMap");