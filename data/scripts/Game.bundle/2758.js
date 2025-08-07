Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1495.js");
var r = createjs.Point;
var l = function (e) {
  function KeepSpotJudgementVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(KeepSpotJudgementVE, e);
  KeepSpotJudgementVE.prototype.updateSpot = function () {
    var e = o.castAs(this.isoRenderer.objects.provider.getObjectByType(c.IsoObjectEnum.KEEP), "KeepBuildingVE");
    if (e && e.spotDisp) {
      e.spotDisp.addChild(this.elementContainer);
    } else {
      this.isoRenderer.layers.getIsoLayer(this.getVELayerType()).addChild(this.elementContainer);
    }
  };
  KeepSpotJudgementVE.prototype.getScreenPos = function () {
    return new r();
  };
  return KeepSpotJudgementVE;
}(s.ASpotJudgementVE);
exports.KeepSpotJudgementVE = l;
var c = require("./80.js");
a.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");