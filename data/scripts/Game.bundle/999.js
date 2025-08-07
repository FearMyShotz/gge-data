Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./87.js");
var s = require("./482.js");
var r = function (e) {
  function AEventBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AEventBuildingVO, e);
  AEventBuildingVO.prototype.updateData = function () {
    e.prototype.updateData.call(this);
    this._buildingState = a.IsoBuildingStateEnum.BUILD_COMPLETED;
  };
  Object.defineProperty(AEventBuildingVO.prototype, "isoSortOrder", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEventBuildingVO.prototype, "isClickAvailable", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicBuildingVO.prototype, "isClickAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AEventBuildingVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ABasicBuildingVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AEventBuildingVO.prototype.getInfoTooltipLine3 = function () {
    return "";
  };
  Object.defineProperty(AEventBuildingVO.prototype, "isMovable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AIsoObjectVO.prototype, "isMovable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return AEventBuildingVO;
}(s.ABasicBuildingVO);
exports.AEventBuildingVO = r;
var l = require("./309.js");
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");