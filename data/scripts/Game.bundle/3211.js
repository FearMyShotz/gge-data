Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./640.js");
var r = function (e) {
  function EmptyTowerVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EmptyTowerVE, e);
  EmptyTowerVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName, this.baseClipAssetFileName));
  };
  EmptyTowerVE.prototype.createAdditionalClips = function () {};
  Object.defineProperty(EmptyTowerVE.prototype, "assetClipName", {
    get: function () {
      var e = a.int(this.towerVO.isoData.objects.defences.currentWallLevel);
      if (this.isTransparent) {
        return "Basic_Towerbase_Transparent" + this.getIsoEventSkinSkinSuffix(e);
      } else {
        return "Basic_Tower_CornerLevel" + e + "_" + this.getDirectionAssetIndex() + this.getIsoEventSkinSkinSuffix(e);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ATowerVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EmptyTowerVE.prototype.getDirectionAssetIndex = function () {
    switch (this.towerVO.rotation) {
      case 0:
        return 0;
      case 1:
        return 3;
      case 2:
        return 1;
      case 3:
        return 2;
      default:
        return 0;
    }
  };
  return EmptyTowerVE;
}(s.ATowerVE);
exports.EmptyTowerVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");