Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = function (e) {
  function KingdomCastleMapobjectVO() {
    var t = e.call(this) || this;
    t.name = "KingdomCastle";
    t.group = "Mapobject";
    t._areaType = a.WorldConst.AREA_TYPE_KINGDOM_CASTLE;
    return t;
  }
  n.__extends(KingdomCastleMapobjectVO, e);
  return KingdomCastleMapobjectVO;
}(require("./502.js").CastleMapobjectVO);
exports.KingdomCastleMapobjectVO = s;
o.classImplementsInterfaces(s, "IDetailViewAble", "IWorldmapObjectVO");