Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function MapObjectHelper() {}
  MapObjectHelper.isLandmark = function (e) {
    switch (e.areaType) {
      case o.WorldConst.AREA_TYPE_METROPOL:
      case o.WorldConst.AREA_TYPE_CAPITAL:
      case o.WorldConst.AREA_TYPE_KINGS_TOWER:
      case o.WorldConst.AREA_TYPE_MONUMENT:
      case o.WorldConst.AREA_TYPE_LABORATORY:
        return true;
      default:
        return false;
    }
  };
  return MapObjectHelper;
}();
exports.MapObjectHelper = n;
var o = require("./5.js");