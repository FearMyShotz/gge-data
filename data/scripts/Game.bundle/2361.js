Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function CastleTreasureMapItemCreator() {}
  CastleTreasureMapItemCreator.prototype.createTreasureMapItems = function (e, t) {
    var i;
    var n = [];
    if (t != null) {
      for (var o = 0, a = t; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && (i = this.createMapItem(e, s))) {
          n.push(i);
        }
      }
    }
    return n;
  };
  CastleTreasureMapItemCreator.prototype.createMapItem = function (e, t) {
    var i;
    var n = e["node_" + t.nodeID];
    if (t.isDungeon || t.isStartNode) {
      i = new a.CastleTreasureMapItemDungeon(n, t);
    } else if (t.isTreasureHuntObstacle) {
      i = new s.CastleTreasureMapItemObstacle(n, t);
    }
    return i;
  };
  return CastleTreasureMapItemCreator;
}();
exports.CastleTreasureMapItemCreator = o;
var a = require("./2362.js");
var s = require("./2364.js");
n.classImplementsInterfaces(o, "ITreasureMapItemCreator");