Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function SlumBuildingPartBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SlumBuildingPartBuildingVE, e);
  SlumBuildingPartBuildingVE.prototype.createDisp = function () {
    var e = this.getAssetClipName();
    this.dispComponent.addClip(this.loadExternalClip(e, e));
  };
  SlumBuildingPartBuildingVE.prototype.getAssetClipName = function () {
    return this.vo.name + "_" + this.vo.group + "_" + this.vo.getAreaKingdomName() + "_" + this.slumBuildingVO.necessarySlumLevel + (this.slumBuildingVO.necessarySlumLevel > 0 && this.slumBuildingVO.isDamaged ? "_damaged" : "");
  };
  SlumBuildingPartBuildingVE.prototype.getScreenPos = function () {
    return this.parentVE.isoRenderer.camera.getScreenPosByGridPosDelta(this.partVO.posOffset);
  };
  SlumBuildingPartBuildingVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    this.parentVE.updateDispBounds();
  };
  Object.defineProperty(SlumBuildingPartBuildingVE.prototype, "slumBuildingVO", {
    get: function () {
      return this.partVO;
    },
    enumerable: true,
    configurable: true
  });
  return SlumBuildingPartBuildingVE;
}(require("./1614.js").ASlumBuildingPartVE);
exports.SlumBuildingPartBuildingVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");