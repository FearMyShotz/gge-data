Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./145.js");
var s = function (e) {
  function PUnittentBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PUnittentBuildingVE, e);
  PUnittentBuildingVE.prototype.createAdditionalClips = function () {
    e.prototype.createAdditionalClips.call(this);
    if (this.buildingVO.buildingState.isFunctionally) {
      this.additionalClips.addClips(a.IsoAdditionalClipEnum.CAMP_FIRE);
    }
  };
  return PUnittentBuildingVE;
}(require("./62.js").ABasicBuildingVE);
exports.PUnittentBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");