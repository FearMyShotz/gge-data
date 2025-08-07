Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./40.js");
var c = require("./95.js");
var u = require("./47.js");
var d = require("./59.js");
var p = require("./222.js");
var h = function (e) {
  function SubscriptionDialogInfoPageEffects(t) {
    var i = this;
    i._items = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(SubscriptionDialogInfoPageEffects, e);
  SubscriptionDialogInfoPageEffects.prototype.init = function () {
    this._scrollComponent = new c.SimpleScrollComponent(new u.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new d.DynamicSizeScrollStrategyVertical(true));
  };
  SubscriptionDialogInfoPageEffects.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
  };
  SubscriptionDialogInfoPageEffects.prototype.onHide = function () {
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  SubscriptionDialogInfoPageEffects.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  SubscriptionDialogInfoPageEffects.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  SubscriptionDialogInfoPageEffects.prototype.fillContent = function (e) {
    var t = s.int(e.data);
    g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new a.LocalizedTextVO(t == 1 ? "dialog_subscriptionHelp_subscribedOneMember_text_1" : "dialog_subscriptionHelp_subscribedMultiMembers_text_1", e.textReplacements));
    if (this._items != null) {
      for (var i = 0, n = this._items; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.destroy();
        }
      }
    }
    this._items = [];
    var l = this.getItemMc();
    l.removeChildren();
    var c = r.CastleModel.subscriptionData.getSubscriptionSeriesBuffs(p.SubscriptionPackageEnum.ALLIANCE, t);
    var u = 0;
    if (c != null) {
      for (var d = 0, h = c; d < h.length; d++) {
        var _ = h[d];
        if (_ !== undefined) {
          (o = new C.SubscriptionDialogOfferItem(l, _, C.SubscriptionDialogOfferItem.ASSET_CLIP_NAME_INFO_ITEM)).disp.y = u;
          u += s.int(o.dispHeight);
          this._items.push(o);
        }
      }
    }
    for (var m = 0, f = r.CastleModel.subscriptionData.getSubscriptionRewardsByTypeID(p.SubscriptionPackageEnum.ALLIANCE.serverId).list; m < f.length; m++) {
      var O = f[m];
      if (O !== undefined) {
        (o = new C.SubscriptionDialogOfferItem(l, O, C.SubscriptionDialogOfferItem.ASSET_CLIP_NAME_INFO_ITEM)).disp.y = u;
        u += o.dispHeight;
        this._items.push(o);
      }
    }
    var E = s.int(o ? o.dispHeight : 1);
    var y = s.int(Math.max(0, u - SubscriptionDialogInfoPageEffects.ITEM_MASK_HEIGHT));
    this._scrollComponent.init(0, y, E, E);
    this._scrollComponent.setVisibility(y > 0);
    this._scrollComponent.scrollToValue(0);
  };
  SubscriptionDialogInfoPageEffects.prototype.getItemMc = function () {
    return this.disp.mc_items.mc_transform;
  };
  SubscriptionDialogInfoPageEffects.prototype.onScroll = function () {
    this.getItemMc().y = -this._scrollComponent.currentValue;
  };
  SubscriptionDialogInfoPageEffects.ITEM_MASK_HEIGHT = 280;
  return SubscriptionDialogInfoPageEffects;
}(l.CastleItemRenderer);
exports.SubscriptionDialogInfoPageEffects = h;
o.classImplementsInterfaces(h, "ICollectableRendererList");
var g = require("./14.js");
var C = require("./1390.js");