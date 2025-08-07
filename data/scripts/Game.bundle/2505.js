Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./40.js");
var p = require("./95.js");
var h = require("./47.js");
var g = require("./59.js");
var C = function (e) {
  function SubscriptionDialogInfoPageLoyalty(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(SubscriptionDialogInfoPageLoyalty, e);
  SubscriptionDialogInfoPageLoyalty.prototype.init = function () {
    this._scrollComponent = new p.SimpleScrollComponent(new h.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new g.DynamicSizeScrollStrategyVertical(true));
  };
  SubscriptionDialogInfoPageLoyalty.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
  };
  SubscriptionDialogInfoPageLoyalty.prototype.onHide = function () {
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  SubscriptionDialogInfoPageLoyalty.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  SubscriptionDialogInfoPageLoyalty.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.removeEventListener.call(this);
  };
  SubscriptionDialogInfoPageLoyalty.prototype.fillContent = function () {
    _.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_text, new s.LocalizedTextVO("dialog_subscriptionHelp_loyaltyGift_text_1"));
    _.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_duration, new r.TextVO(c.TextHelper.toUpperCaseLocaSafe(a.Localize.text("runTime"))));
    _.CastleComponent.textFieldManager.registerTextField(this.getItemMc().txt_c2, new r.TextVO(c.TextHelper.toUpperCaseLocaSafe(a.Localize.text("gold"))));
    for (var e = 0; e < 6; e++) {
      _.CastleComponent.textFieldManager.registerTextField(this.getItemMc()["txt_month" + e], new s.LocalizedTextVO("month" + (e == 5 ? "_plus" : ""), [e + 1]));
      _.CastleComponent.textFieldManager.registerTextField(this.getItemMc()["txt_value" + e], new s.LocalizedTextVO("value_percentage_add", [u.CastleModel.subscriptionData.loyaltyBonusByMonth[e]]));
    }
    var t = l.int(Math.max(0, this.getItemMc().height - SubscriptionDialogInfoPageLoyalty.ITEM_MASK_HEIGHT));
    this._scrollComponent.init(0, t, 5, 5);
    this._scrollComponent.setVisibility(t > 0);
    this._scrollComponent.scrollToValue(0);
  };
  SubscriptionDialogInfoPageLoyalty.prototype.getItemMc = function () {
    return this.disp.mc_info;
  };
  SubscriptionDialogInfoPageLoyalty.prototype.onScroll = function () {
    this.getItemMc().y = -this._scrollComponent.currentValue;
  };
  SubscriptionDialogInfoPageLoyalty.ITEM_MASK_HEIGHT = 334;
  return SubscriptionDialogInfoPageLoyalty;
}(d.CastleItemRenderer);
exports.SubscriptionDialogInfoPageLoyalty = C;
var _ = require("./14.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");