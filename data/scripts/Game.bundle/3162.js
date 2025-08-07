Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1609.js");
var s = createjs.Point;
var r = function (e) {
  function FoodResourceFieldVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FoodResourceFieldVE, e);
  FoodResourceFieldVE.prototype.getClipDeltaTilePosByIndex = function (e) {
    return new s(this.vo.width * e, 0);
  };
  FoodResourceFieldVE.prototype.getJudgementSpotGridPos = function () {
    return this.expandingResourceFieldVO.pos.add(new s(this.expandingResourceFieldVO.totalWidth - 4, 1));
  };
  return FoodResourceFieldVE;
}(a.AExpandingResourceFieldVE);
exports.FoodResourceFieldVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");