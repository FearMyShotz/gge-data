Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function DecorationForgeSelectResultVO(e = null, t = -1, i = -1) {
    this.kingdomId = -1;
    this.areaId = -1;
    this.itemVO = e;
    this.kingdomId = t;
    this.areaId = i;
  }
  DecorationForgeSelectResultVO.prototype.equals = function (e) {
    return !!e && this.kingdomId == e.kingdomId && this.areaId == e.areaId && this.itemVO.equals(e.itemVO);
  };
  DecorationForgeSelectResultVO.prototype.getBuildingFusionInfoVO = function () {
    if (o.instanceOfClass(this.itemVO, "CollectableItemBuildingVO")) {
      var e = this.itemVO.buildingVO;
      if (e) {
        return e.fusionInfoVO;
      }
    }
    return null;
  };
  DecorationForgeSelectResultVO.prototype.getDecoBuildingVO = function () {
    if (o.instanceOfClass(this.itemVO, "CollectableItemBuildingVO")) {
      return this.itemVO.buildingVO;
    } else {
      return null;
    }
  };
  DecorationForgeSelectResultVO.prototype.getCatalystVO = function () {
    return this.itemVO;
  };
  return DecorationForgeSelectResultVO;
}();
exports.DecorationForgeSelectResultVO = n;
var o = require("./1.js");