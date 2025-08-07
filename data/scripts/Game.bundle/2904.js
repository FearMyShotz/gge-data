Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1021.js");
var s = function (e) {
  function PalisadegateGateVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PalisadegateGateVO, e);
  Object.defineProperty(PalisadegateGateVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.BasicGateVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PalisadegateGateVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.BasicGateVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PalisadegateGateVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.BasicGateVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return PalisadegateGateVO;
}(a.BasicGateVO);
exports.PalisadegateGateVO = s;
o.classImplementsInterfaces(s, "IShopVO", "ICostVO", "IInventoryVO");