Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1020.js");
var s = function (e) {
  function FactionGateGateVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionGateGateVO, e);
  Object.defineProperty(FactionGateGateVO.prototype, "usesColorFourCrest", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.BasicGateVO.prototype, "usesColorFourCrest").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionGateGateVO;
}(a.BasicGateVO);
exports.FactionGateGateVO = s;
o.classImplementsInterfaces(s, "IShopVO", "ICostVO", "IInventoryVO");