Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./67.js");
var r = require("./19.js");
var l = function (e) {
  function CastleCenteredRewardRendererListComponent(t, i = null, n = a.int(r.CollectableRenderOptions.SET_DEFAULT), o = null) {
    var s = this;
    s.ITEMNAME = "item";
    s.standardXpos = 0;
    s.itemOffsetPerMissingItem = 0;
    s.renderOption = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this)._componentDisp = t;
    s.rewardHolders = [];
    s.itemDimension = i;
    s.renderOption = n;
    s.preRenderFunc = o;
    for (var l = 0; s.disp[s.ITEMNAME + l];) {
      s.rewardHolders.push(s.disp[s.ITEMNAME + l]);
      l++;
    }
    s.setupCenterRewards();
    return s;
  }
  n.__extends(CastleCenteredRewardRendererListComponent, e);
  CastleCenteredRewardRendererListComponent.prototype.showRewards = function (e) {
    c.CollectableRenderHelper.displayMultipleItemsComplete(this, new s.CollectableRenderClipsList(this.disp, this.ITEMNAME).addItemMcs("mc_item").addInfoBtns("parent.btn_info"), e, new r.CollectableRenderOptions(this.renderOption, this.itemDimension), this.bindFunction(this.preRenderFunc));
    for (var t = 0; t < this.rewardHolders.length; t++) {
      this.disp[this.ITEMNAME + t].visible = e.list.length >= t + 1;
    }
    this.disp.x = this.standardXpos + this.getNeededOffset(e.length);
  };
  CastleCenteredRewardRendererListComponent.prototype.setupCenterRewards = function () {
    this.standardXpos = a.int(this.disp.x);
    this.itemOffsetPerMissingItem = a.int(a.int((this.rewardHolders[1].x - this.rewardHolders[0].x) / 2));
  };
  CastleCenteredRewardRendererListComponent.prototype.getNeededOffset = function (e) {
    return (this.maxItems - e) * this.itemOffsetPerMissingItem;
  };
  Object.defineProperty(CastleCenteredRewardRendererListComponent.prototype, "maxItems", {
    get: function () {
      return this.rewardHolders.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCenteredRewardRendererListComponent.prototype, "disp", {
    get: function () {
      return this._componentDisp;
    },
    enumerable: true,
    configurable: true
  });
  CastleCenteredRewardRendererListComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.disp.x = this.standardXpos;
  };
  return CastleCenteredRewardRendererListComponent;
}(require("./14.js").CastleComponent);
exports.CastleCenteredRewardRendererListComponent = l;
var c = require("./25.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");