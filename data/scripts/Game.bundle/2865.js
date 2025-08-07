Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function IcepalaceBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IcepalaceBuildingVO, e);
  IcepalaceBuildingVO.prototype.getVisualClassName = function () {
    return "Palace_Building_Level1";
  };
  return IcepalaceBuildingVO;
}(require("./642.js").APalaceBuildingVO);
exports.IcepalaceBuildingVO = a;
o.classImplementsInterfaces(a, "IShopVO", "ICostVO", "IInventoryVO");