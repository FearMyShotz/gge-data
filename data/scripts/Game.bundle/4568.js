Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function QuickAttackUnitVO() {
    return e.call(this) || this;
  }
  n.__extends(QuickAttackUnitVO, e);
  return QuickAttackUnitVO;
}(require("./347.js").SoldierUnitVO);
exports.QuickAttackUnitVO = a;
o.classImplementsInterfaces(a, "IInventoryVO", "IShopVO", "ICostVO");