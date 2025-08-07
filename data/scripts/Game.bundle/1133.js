Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = function () {
  function CastleSeasonMapItemCreator() {}
  CastleSeasonMapItemCreator.prototype.createTreasureMapItems = function (e, t) {
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
  CastleSeasonMapItemCreator.prototype.createMapItem = function (e, t) {
    if (e["node_" + t.pos]) {
      if (t.isStartNode) {
        return new r.StartCampSeasonMapScreenItem(e["node_" + t.pos], t);
      } else if (t.isDungeon || t.isBridgeDungeon || t.isMoralBooster) {
        if (t.isVillage) {
          return new l.VillageSeasonMapScreenItem(e["node_" + t.pos], t);
        } else {
          return new a.DungeonSeasonMapScreenItem(e["node_" + t.pos], t);
        }
      } else if (t.isBridge) {
        return new s.ObstacleSeasonMapScreenItem(e["node_" + t.pos], t);
      } else {
        return new l.VillageSeasonMapScreenItem(e["node_" + t.pos], t);
      }
    } else {
      return null;
    }
  };
  return CastleSeasonMapItemCreator;
}();
exports.CastleSeasonMapItemCreator = o;
var a = require("./1134.js");
var s = require("./1865.js");
var r = require("./1866.js");
var l = require("./1135.js");
n.classImplementsInterfaces(o, "ITreasureMapItemCreator");