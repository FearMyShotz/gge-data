Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function UnknownUnitVO() {
    return e.call(this) || this;
  }
  n.__extends(UnknownUnitVO, e);
  UnknownUnitVO.prototype.getNameString = function () {
    return "Unknown_name";
  };
  return UnknownUnitVO;
}(require("./510.js").BasicUnitVO);
exports.UnknownUnitVO = a;
o.classImplementsInterfaces(a, "IInventoryVO", "IShopVO", "ICostVO");