Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = function (e) {
  function CastleUnderworldSeasonMapItemCreator() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleUnderworldSeasonMapItemCreator, e);
  CastleUnderworldSeasonMapItemCreator.prototype.createTreasureMapItems = function (t, i) {
    if (i != null) {
      for (var n = 0, o = i; n < o.length; n++) {
        var r = o[n];
        if (r !== undefined) {
          r.eventID = s.int(a.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD);
        }
      }
    }
    return e.prototype.createTreasureMapItems.call(this, t, i);
  };
  CastleUnderworldSeasonMapItemCreator.prototype.createMapItem = function (e, t) {
    if (e["node_" + t.pos]) {
      if (t.isStartNode) {
        return new u.StartCampSeasonMapScreenItem(e["node_" + t.pos], t);
      } else if (t.isDungeon || t.isBridgeDungeon || t.isMoralBooster) {
        if (t.isVillage) {
          return new d.VillageSeasonMapScreenItem(e["node_" + t.pos], t);
        } else {
          return new l.DungeonSeasonMapScreenItem(e["node_" + t.pos], t);
        }
      } else if (t.isBridge) {
        return new c.ObstacleUnderworldSeasonMapScreenItem(e["node_" + t.pos], t);
      } else {
        return new d.VillageSeasonMapScreenItem(e["node_" + t.pos], t);
      }
    } else {
      return null;
    }
  };
  return CastleUnderworldSeasonMapItemCreator;
}(require("./1133.js").CastleSeasonMapItemCreator);
exports.CastleUnderworldSeasonMapItemCreator = r;
var l = require("./1134.js");
var c = require("./4158.js");
var u = require("./1866.js");
var d = require("./1135.js");
o.classImplementsInterfaces(r, "ITreasureMapItemCreator");