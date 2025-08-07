Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./779.js");
var s = function (e) {
  function ATowerVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ATowerVE, e);
  ATowerVE.prototype.onRenderStrategyChanged = function (e) {
    this.updateDisp();
  };
  Object.defineProperty(ATowerVE.prototype, "damageScale", {
    get: function () {
      return 1 + this.buildingVO.damageFactor;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ADefenceBuildingVE.prototype, "damageScale").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ATowerVE.prototype, "towerVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ATowerVE.prototype, "assetFileName", {
    get: function () {
      return "Castlewall" + this.getIsoEventSkinSkinSuffix();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ADefenceBuildingVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ATowerVE.prototype, "baseClipAssetFileName", {
    get: function () {
      return "Castlewall" + this.getIsoEventSkinSkinSuffix(this.towerVO.isoData.objects.defences.currentWallLevel);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ATowerVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Tower;
    },
    enumerable: true,
    configurable: true
  });
  return ATowerVE;
}(a.ADefenceBuildingVE);
exports.ATowerVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");