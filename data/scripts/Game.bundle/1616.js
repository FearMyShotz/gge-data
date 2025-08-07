Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = function (e) {
  function GuardTowerVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GuardTowerVE, e);
  GuardTowerVE.prototype.createDisp = function () {
    if (this.guardTowerVO.hasTowerBase) {
      this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.baseClipClassName, this.baseClipAssetFileName));
    }
    if (this.towerVO.level > 0) {
      this.dispComponent.addClip(this.loadExternalClip(this.topClipClassName));
    }
    this.addScaffoldClip();
  };
  Object.defineProperty(GuardTowerVE.prototype, "topClipClassName", {
    get: function () {
      if (this.isTransparent) {
        return "Basic_" + this.vo.group + "_Transparent" + this.getIsoEventSkinSkinSuffix();
      } else {
        return this.vo.getVisualClassName() + this.getIsoEventSkinSkinSuffix();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GuardTowerVE.prototype, "baseClipClassName", {
    get: function () {
      var e = a.int(this.towerVO.isoData.objects.defences.currentWallLevel);
      if (this.isTransparent) {
        return "Basic_Towerbase_Transparent" + this.getIsoEventSkinSkinSuffix(e);
      } else {
        return "Basic_Towerbase_Level" + this.towerVO.isoData.objects.defences.currentWallLevel + this.getIsoEventSkinSkinSuffix(e);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GuardTowerVE.prototype, "guardTowerVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return GuardTowerVE;
}(require("./639.js").ATowerVE);
exports.GuardTowerVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");