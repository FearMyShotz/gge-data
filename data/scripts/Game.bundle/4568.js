Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function KeepUnitVO() {
    return e.call(this) || this;
  }
  n.__extends(KeepUnitVO, e);
  return KeepUnitVO;
}(require("./347.js").SoldierUnitVO);
exports.KeepUnitVO = a;
o.classImplementsInterfaces(a, "IInventoryVO", "IShopVO", "ICostVO");