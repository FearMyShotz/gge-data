Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./524.js");
var s = require("./82.js");
var r = require("./47.js");
var l = require("./59.js");
var c = require("./301.js");
var u = createjs.Point;
var d = function (e) {
  function TempServerSimpleRewardsComponent(t, i = true, n = true, o = 7, a = new u(15, 15)) {
    return e.call(this, t, i, n, o, a) || this;
  }
  n.__extends(TempServerSimpleRewardsComponent, e);
  TempServerSimpleRewardsComponent.prototype.init = function () {
    this._numberOfItems = 0;
    for (var e = 0; this.disp.getChildByName("mc_item" + e) != null; ++e) {
      this._numberOfItems++;
    }
    this._scrollComponent = new s.ModernSliderScrollComponent(new r.SimpleScrollVO().initByParent(this.disp), new l.DynamicSizeScrollStrategyVertical());
    this._rewardAlign = new a.ItemCenterAlignComponent(this.disp, "mc_item", true);
  };
  return TempServerSimpleRewardsComponent;
}(c.SeasonLeagueSimpleRewardsComponent);
exports.TempServerSimpleRewardsComponent = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");