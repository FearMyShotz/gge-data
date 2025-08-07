Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function CastleSeaQueenSeasonMapItemCreator() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleSeaQueenSeasonMapItemCreator, e);
  CastleSeaQueenSeasonMapItemCreator.prototype.createMapItem = function (t, i) {
    if (!i.isStartNode || i.isDungeon || i.isBridgeDungeon) {
      if (!i.isVillage && t["node_" + i.pos] != null) {
        return new s.SeaQueenDungeonSeasonMapScreenItem(t["node_" + i.pos], i);
      }
      if (i.isVillage) {
        return new r.SeaQueenVillageSeasonMapScreenItem(t["node_" + i.pos], i);
      }
    }
    return e.prototype.createMapItem.call(this, t, i);
  };
  return CastleSeaQueenSeasonMapItemCreator;
}(require("./1133.js").CastleSeasonMapItemCreator);
exports.CastleSeaQueenSeasonMapItemCreator = a;
var s = require("./4154.js");
var r = require("./4155.js");
o.classImplementsInterfaces(a, "ITreasureMapItemCreator");