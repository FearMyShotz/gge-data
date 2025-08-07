Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./122.js");
var r = require("./65.js");
var l = function (e) {
  function ADefenceBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ADefenceBuildingVO, e);
  ADefenceBuildingVO.prototype.getShopIconURL = function (e) {
    return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("Castlewall");
  };
  Object.defineProperty(ADefenceBuildingVO.prototype, "isMovable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AIsoObjectVO.prototype, "isMovable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADefenceBuildingVO.prototype, "canBeRotated", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AEffectBuildingVO.prototype, "canBeRotated").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADefenceBuildingVO.prototype, "isHoverGlowAvailable", {
    get: function () {
      return this.isSelectionEnabled;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AEffectBuildingVO.prototype, "isHoverGlowAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADefenceBuildingVO.prototype, "isInfoTooltipAvailable", {
    get: function () {
      return this.isSelectionEnabled;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AEffectBuildingVO.prototype, "isInfoTooltipAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADefenceBuildingVO.prototype, "isRingmenuAvailable", {
    get: function () {
      return this.isSelectionEnabled;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AEffectBuildingVO.prototype, "isRingmenuAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADefenceBuildingVO.prototype, "isSelectionEnabled", {
    get: function () {
      return !c.Iso.renderer.strategies.currentStrategy.isActive(s.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ADefenceBuildingVO.prototype, "isBuildingGroundViewAvailable", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AEffectBuildingVO.prototype, "isBuildingGroundViewAvailable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ADefenceBuildingVO;
}(r.AEffectBuildingVO);
exports.ADefenceBuildingVO = l;
var c = require("./34.js");
var u = require("./309.js");
a.classImplementsInterfaces(l, "IShopVO", "ICostVO", "IInventoryVO");