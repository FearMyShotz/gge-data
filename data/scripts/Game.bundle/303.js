Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4.js");
var r = require("./145.js");
var l = function (e) {
  function AFactionBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AFactionBuildingVE, e);
  AFactionBuildingVE.prototype.createAdditionalClips = function () {
    e.prototype.createAdditionalClips.call(this);
    if (this.buildingVO.buildingState.isFunctionally) {
      this.additionalClips.addClips(r.IsoAdditionalClipEnum.CAMP_FIRE);
    }
  };
  AFactionBuildingVE.prototype.getDispClipColor = function () {
    var e = [];
    e.push(new o.ClipColor("flag", c.CrestHelper.getPlayerOrFactionCrest(s.CastleModel.areaData.activeOwnerInfo).colorsTwo));
    return e;
  };
  AFactionBuildingVE.prototype.getFlagClipColor = function () {
    var e = [];
    e.push(new o.ClipColor("flag", c.CrestHelper.getPlayerOrFactionCrest(this.isoRenderer.isoData.areaData.areaInfo.ownerInfo).colorsFour));
    return e;
  };
  return AFactionBuildingVE;
}(require("./62.js").ABasicBuildingVE);
exports.AFactionBuildingVE = l;
var c = require("./61.js");
a.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");