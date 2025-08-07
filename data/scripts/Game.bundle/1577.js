Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./31.js");
var s = require("./67.js");
var r = require("./19.js");
var l = require("./540.js");
var c = require("./40.js");
var u = createjs.Point;
var d = function (e) {
  function AutoRecruitmentCostComponent(t, i = false) {
    var n = this;
    n._costs = new h.AutoRecruitmentCosts();
    n._areCopyCosts = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._areCopyCosts = i;
    return n;
  }
  n.__extends(AutoRecruitmentCostComponent, e);
  AutoRecruitmentCostComponent.prototype.update = function () {
    this.destroyCollectableRenderList();
    var e = new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_COST_LIST, this.costs.priceType != l.AutoRecruitmentPriceEnum.TOOLS ? AutoRecruitmentCostComponent.ICON_DIMENSION_BIG : AutoRecruitmentCostComponent.ICON_DIMENSION_SMALL);
    e.costTextfield.enableMarkOnNotEnough = !this.areCopyCosts;
    p.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(this, new s.CollectableRenderClipsList(this.disp, "mc_resource"), this.costs.costs, e, null, function onPostRenderFunc(e) {
      if (this.areCopyCosts) {
        var t = e.clips.itemMc.parent.getChildByName(e.clips.itemMc.name + "Background");
        if (t) {
          t.visible = !e.clips.itemMc.visible;
        }
      }
    });
    p.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new a.CollectableRenderClips(this.disp.mc_double), this.costs.duplicatingCosts, new r.CollectableRenderOptions(r.CollectableRenderOptions.SET_COST_LIST, AutoRecruitmentCostComponent.ICON_DIMENSION_BIG));
    this.disp.mc_doubleBackground.visible = !(this.disp.mc_double.visible = this.costs.duplicatingCosts.amount > 0);
  };
  AutoRecruitmentCostComponent.prototype.updateWithNewCosts = function (e) {
    this._costs = e;
    this.update();
  };
  Object.defineProperty(AutoRecruitmentCostComponent.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCostComponent.prototype, "areCopyCosts", {
    get: function () {
      return this._areCopyCosts;
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCostComponent.__initialize_static_members = function () {
    AutoRecruitmentCostComponent.ICON_DIMENSION_SMALL = new u(20, 20);
    AutoRecruitmentCostComponent.ICON_DIMENSION_BIG = new u(40, 40);
  };
  return AutoRecruitmentCostComponent;
}(c.CastleItemRenderer);
exports.AutoRecruitmentCostComponent = d;
var p = require("./25.js");
var h = require("./646.js");
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();