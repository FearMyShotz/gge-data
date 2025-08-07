Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1483.js");
var s = function (e) {
  function LookoutTowerVO() {
    var t = e.call(this) || this;
    t._name = "Palisadetower";
    return t;
  }
  n.__extends(LookoutTowerVO, e);
  Object.defineProperty(LookoutTowerVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.GuardTowerVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LookoutTowerVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.GuardTowerVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LookoutTowerVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.GuardTowerVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LookoutTowerVO.prototype, "hasTowerBase", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.GuardTowerVO.prototype, "hasTowerBase").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return LookoutTowerVO;
}(a.GuardTowerVO);
exports.LookoutTowerVO = s;
o.classImplementsInterfaces(s, "IShopVO", "ICostVO", "IInventoryVO");