Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./145.js");
var s = function (e) {
  function SlumBuildingPartCharacterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SlumBuildingPartCharacterVE, e);
  SlumBuildingPartCharacterVE.prototype.createDisp = function () {
    var e = "Slumdog_Surroundings_" + this.vo.getAreaKingdomName();
    this.dispComponent.addClip(this.loadExternalClip(e, e));
  };
  SlumBuildingPartCharacterVE.prototype.createAdditionalClips = function () {
    if (this.isoRenderer.isoData.areaData.isMyArea) {
      this.additionalClips.addClips(a.IsoAdditionalClipEnum.EXCLAMATION_MARK3);
    }
  };
  SlumBuildingPartCharacterVE.prototype.getScreenPos = function () {
    return this.parentVE.isoRenderer.camera.getScreenPosByGridPosDelta(this.partVO.posOffset);
  };
  SlumBuildingPartCharacterVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    this.parentVE.updateDispBounds();
  };
  return SlumBuildingPartCharacterVE;
}(require("./1614.js").ASlumBuildingPartVE);
exports.SlumBuildingPartCharacterVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");