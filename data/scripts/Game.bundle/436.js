Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = function () {
  function ClientConstKingdom() {}
  ClientConstKingdom.getVillageTypeName = function (e) {
    switch (e) {
      case n.WorldConst.VILLAGE_TYPE_WOOD:
        return "Wood";
      case n.WorldConst.VILLAGE_TYPE_STONE:
        return "Stone";
      case n.WorldConst.VILLAGE_TYPE_FOOD:
        return "Food";
      case n.WorldConst.VILLAGE_TYPE_COAL:
        return "Coal";
      case n.WorldConst.VILLAGE_TYPE_OIL:
        return "Oil";
      case n.WorldConst.VILLAGE_TYPE_GLASS:
        return "Glass";
      case n.WorldConst.VILLAGE_TYPE_IRON:
        return "Iron";
      default:
        return "Invalid";
    }
  };
  return ClientConstKingdom;
}();
exports.ClientConstKingdom = o;