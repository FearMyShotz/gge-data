Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function FirepalaceBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FirepalaceBuildingVO, e);
  FirepalaceBuildingVO.prototype.getVisualClassName = function () {
    return "Palace_Building_Level1";
  };
  return FirepalaceBuildingVO;
}(require("./641.js").APalaceBuildingVO);
exports.FirepalaceBuildingVO = a;
o.classImplementsInterfaces(a, "IShopVO", "ICostVO", "IInventoryVO");