Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./6.js");
var a = function () {
  function TMapHelper() {}
  TMapHelper.isThornKingMap = function (e) {
    return e == n.TreasureMapsConst.MAP_ID_THORNKING_EASY || e == n.TreasureMapsConst.MAP_ID_THORNKING_HARD;
  };
  TMapHelper.isUnderworldMap = function (e) {
    return e == n.TreasureMapsConst.MAP_ID_UNDERWORLD_EASY || e == n.TreasureMapsConst.MAP_ID_UNDERWORLD_HARD;
  };
  TMapHelper.isSeaQueenMap = function (e) {
    return e == n.TreasureMapsConst.MAP_ID_SEAQUEEN_EASY || e == n.TreasureMapsConst.MAP_ID_SEAQUEEN_HARD || e == n.TreasureMapsConst.MAP_ID_SEAQUEEN_EXTRA_HARD;
  };
  TMapHelper.getMapIDForGraphics = function (e) {
    if (TMapHelper.isUnderworldMap(e)) {
      return o.int(n.TreasureMapsConst.MAP_ID_UNDERWORLD_EASY);
    } else if (TMapHelper.isThornKingMap(e)) {
      return o.int(n.TreasureMapsConst.MAP_ID_THORNKING_EASY);
    } else if (TMapHelper.isSeaQueenMap(e)) {
      return o.int(n.TreasureMapsConst.MAP_ID_SEAQUEEN_EASY);
    } else {
      return e;
    }
  };
  return TMapHelper;
}();
exports.TMapHelper = a;