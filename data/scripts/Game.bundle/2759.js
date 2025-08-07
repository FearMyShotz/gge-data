Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./113.js");
var r = require("./1495.js");
var l = createjs.Point;
var c = function (e) {
  function ResourceFieldSpotJudgementVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ResourceFieldSpotJudgementVE, e);
  ResourceFieldSpotJudgementVE.prototype.updateSpot = function () {
    e.prototype.updateSpot.call(this);
    this.updatePosition();
  };
  ResourceFieldSpotJudgementVE.prototype.getVELayerType = function () {
    return s.IsoLayerEnum.ISO_OBJECTS;
  };
  ResourceFieldSpotJudgementVE.prototype.getScreenPos = function () {
    var e = this.getGridPosByFoodResourceFieldType();
    this.spotVO.x = e.x;
    this.spotVO.y = e.y;
    this.spotVO.updateData();
    return this.isoRenderer.camera.getScreenPosByGridPos(e);
  };
  ResourceFieldSpotJudgementVE.prototype.getGridPosByFoodResourceFieldType = function () {
    var e = new l();
    var t = o.castAs(this.isoRenderer.objects.provider.getObjectByType(u.IsoObjectEnum.FOOD_RESOURCE_FIELD), "FoodResourceFieldVE");
    if (t) {
      e = t.getJudgementSpotGridPos();
    }
    return e;
  };
  return ResourceFieldSpotJudgementVE;
}(r.ASpotJudgementVE);
exports.ResourceFieldSpotJudgementVE = c;
var u = require("./80.js");
a.classImplementsInterfaces(c, "ICollectableRendererList", "IIngameUICapable");