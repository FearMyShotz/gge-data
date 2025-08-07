Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./773.js");
var r = function (e) {
  function FactionEmptyTowerVO() {
    var t = e.call(this) || this;
    t._name = "FactionEmpty";
    t._group = a.ClientConstCastle.GROUP_TOWER;
    return t;
  }
  n.__extends(FactionEmptyTowerVO, e);
  Object.defineProperty(FactionEmptyTowerVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ATowerVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEmptyTowerVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ATowerVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEmptyTowerVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ATowerVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionEmptyTowerVO;
}(s.ATowerVO);
exports.FactionEmptyTowerVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");