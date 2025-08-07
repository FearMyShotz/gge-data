Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./336.js");
var s = require("./773.js");
var r = function (e) {
  function EmptyTowerVO() {
    var t = e.call(this) || this;
    t._name = "Empty";
    t._group = "Tower";
    t._rotationType = a.IsoObjectRotationEnum._4GfxFor4Dir;
    return t;
  }
  n.__extends(EmptyTowerVO, e);
  Object.defineProperty(EmptyTowerVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ATowerVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EmptyTowerVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ATowerVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EmptyTowerVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ATowerVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return EmptyTowerVO;
}(s.ATowerVO);
exports.EmptyTowerVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");