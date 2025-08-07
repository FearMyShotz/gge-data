Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function DesertpalaceBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DesertpalaceBuildingVO, e);
  DesertpalaceBuildingVO.prototype.getVisualClassName = function () {
    return "Palace_Building_Level1";
  };
  return DesertpalaceBuildingVO;
}(require("./641.js").APalaceBuildingVO);
exports.DesertpalaceBuildingVO = a;
o.classImplementsInterfaces(a, "IShopVO", "ICostVO", "IInventoryVO");