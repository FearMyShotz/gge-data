Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./482.js");
var s = function (e) {
  function TreasureChestBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TreasureChestBuildingVO, e);
  Object.defineProperty(TreasureChestBuildingVO.prototype, "isMovable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AIsoObjectVO.prototype, "isMovable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TreasureChestBuildingVO.prototype.getInfoTooltipLine2 = function () {
    return "";
  };
  Object.defineProperty(TreasureChestBuildingVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureChestBuildingVO.prototype, "isClickAvailable", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TreasureChestBuildingVO.prototype, "isBuildingGroundViewAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVO.prototype, "isBuildingGroundViewAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return TreasureChestBuildingVO;
}(a.ABasicBuildingVO);
exports.TreasureChestBuildingVO = s;
var r = require("./309.js");
o.classImplementsInterfaces(s, "IShopVO", "ICostVO", "IInventoryVO");