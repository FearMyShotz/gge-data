Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function PathfindingGraph(e = false) {
    this._nodeX = [];
    this._nodeY = [];
    this._nodeNeighbors = [];
    this._useVariedCosts = e;
    if (this._useVariedCosts) {
      this._nodeConnectionCosts = [];
    }
  }
  Object.defineProperty(PathfindingGraph.prototype, "nodeCount", {
    get: function () {
      return this._nodeX.length;
    },
    enumerable: true,
    configurable: true
  });
  PathfindingGraph.prototype.addNode = function (e, t) {
    this._nodeX.push(e);
    this._nodeY.push(t);
    this._nodeNeighbors.push([]);
    if (this._useVariedCosts) {
      this._nodeConnectionCosts.push([]);
    }
    return this._nodeX.length - 1;
  };
  PathfindingGraph.prototype.addNeighbor = function (e, t, n = PathfindingGraph.TRAVERSE_COST_DIAGONAL) {
    this._nodeNeighbors[e].push(t);
    if (this._useVariedCosts) {
      this._nodeConnectionCosts[e].push(n);
    }
  };
  PathfindingGraph.prototype.getNodeX = function (e) {
    return this._nodeX[e];
  };
  PathfindingGraph.prototype.getNodeY = function (e) {
    return this._nodeY[e];
  };
  PathfindingGraph.prototype.getNodeNeighbors = function (e) {
    return this._nodeNeighbors[e];
  };
  PathfindingGraph.prototype.getConnectionCosts = function (e) {
    if (this._useVariedCosts) {
      return this._nodeConnectionCosts[e];
    } else {
      return null;
    }
  };
  PathfindingGraph.prototype.getNodeIndexByPosition = function (e, t) {
    for (var n = 0; n < this.nodeCount; n++) {
      if (this._nodeX[n] == e && this._nodeY[n] == t) {
        return n;
      }
    }
    return -1;
  };
  PathfindingGraph.prototype.hasNodeAtPosition = function (e, t) {
    for (var n = 0; n < this.nodeCount; n++) {
      if (this._nodeX[n] == e && this._nodeY[n] == t) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(PathfindingGraph.prototype, "traverseCostStandard", {
    get: function () {
      return PathfindingGraph.TRAVERSE_COST_STANDARD;
    },
    enumerable: true,
    configurable: true
  });
  PathfindingGraph.generateFromMap = function (e, t = false) {
    var n;
    for (var i = e.getWidth(), a = e.getHeight(), s = new PathfindingGraph(t), r = new Array(i), o = 0; o < i; o++) {
      r[o] = new Array(a);
      for (var l = 0; l < a; l++) {
        if (e.isWalkable(o, l)) {
          r[o][l] = s.addNode(o, l);
        } else {
          r[o][l] = -1;
        }
      }
    }
    for (o = 0; o < i; o++) {
      for (l = 0; l < a; l++) {
        if ((n = r[o][l]) >= 0) {
          if (o > 0 && r[o - 1][l] >= 0) {
            s.addNeighbor(n, r[o - 1][l], PathfindingGraph.TRAVERSE_COST_STANDARD);
          }
          if (o < i - 1 && r[o + 1][l] >= 0) {
            s.addNeighbor(n, r[o + 1][l], PathfindingGraph.TRAVERSE_COST_STANDARD);
          }
          if (l > 0 && r[o][l - 1] >= 0) {
            s.addNeighbor(n, r[o][l - 1], PathfindingGraph.TRAVERSE_COST_STANDARD);
          }
          if (l < a - 1 && r[o][l + 1] >= 0) {
            s.addNeighbor(n, r[o][l + 1], PathfindingGraph.TRAVERSE_COST_STANDARD);
          }
          if (t) {
            if (o > 0 && l > 0 && r[o - 1][l - 1] >= 0 && r[o - 1][l] >= 0 && r[o][l - 1] >= 0) {
              s.addNeighbor(n, r[o - 1][l - 1], PathfindingGraph.TRAVERSE_COST_DIAGONAL);
            }
            if (o < i - 1 && l > 0 && r[o + 1][l - 1] >= 0 && r[o + 1][l] >= 0 && r[o][l - 1] >= 0) {
              s.addNeighbor(n, r[o + 1][l - 1], PathfindingGraph.TRAVERSE_COST_DIAGONAL);
            }
            if (o > 0 && l < a - 1 && r[o - 1][l + 1] >= 0 && r[o - 1][l] >= 0 && r[o][l + 1] >= 0) {
              s.addNeighbor(n, r[o - 1][l + 1], PathfindingGraph.TRAVERSE_COST_DIAGONAL);
            }
            if (o < i - 1 && l < a - 1 && r[o + 1][l + 1] >= 0 && r[o + 1][l] >= 0 && r[o][l + 1] >= 0) {
              s.addNeighbor(n, r[o + 1][l + 1], PathfindingGraph.TRAVERSE_COST_DIAGONAL);
            }
          }
        }
      }
    }
    return s;
  };
  PathfindingGraph.TRAVERSE_COST_STANDARD = 100;
  PathfindingGraph.TRAVERSE_COST_DIAGONAL = 133;
  return PathfindingGraph;
}();
exports.PathfindingGraph = i;