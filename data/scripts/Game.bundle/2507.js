Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./28.js");
var p = require("./13.js");
var h = require("./4.js");
var g = require("./383.js");
var C = require("./47.js");
var _ = require("./59.js");
var m = require("./8.js");
var f = require("./35.js");
var O = require("./222.js");
var E = function (e) {
  function SubscriptionDialogOffer(t, i) {
    var n = this;
    n._effectItems = [];
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._packageType = i;
    n.init();
    return n;
  }
  n.__extends(SubscriptionDialogOffer, e);
  SubscriptionDialogOffer.prototype.init = function () {
    m.ButtonHelper.initButtons([this.subLayerDisp.btn_buy, this.subLayerDisp.mc_allianceBonus.btn_bonusList], T.ClickFeedbackButtonBackground);
    m.ButtonHelper.initButtons([this.subLayerDisp.btn_loyalty, this.subLayerDisp.btn_monthlyGift], v.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_buy.txt_text, new l.LocalizedTextVO("dialog_subscriptionOverview_buySub_button_copy")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_allianceBonus.btn_bonusList.txt_text, new l.LocalizedTextVO("dialog_subscriptionOverview_allianceBonusButton_copy")).autoFitToBounds = true;
    this._scrollComponent = new y.SimpleScrollComponent(new C.SimpleScrollVO().initByParent(this.subLayerDisp.mc_bonusList.mc_slider).addMouseWheelElements([this.subLayerDisp.mc_bonusList]).addVisualElements([this.subLayerDisp.mc_bonusList.mc_slider]), new _.DynamicSizeScrollStrategyVertical(true));
  };
  SubscriptionDialogOffer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this._scrollComponent.show();
    this.controller.addEventListener(g.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this.controller.addEventListener(g.SubscriptionEvent.ON_SHOP_PACKAGES_RECEIVED, this.bindFunction(this.onShopPackagesReceived));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this.updatePackageInfos();
  };
  SubscriptionDialogOffer.prototype.hide = function () {
    this._scrollComponent.hide();
    this.controller.removeEventListener(g.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this.controller.removeEventListener(g.SubscriptionEvent.ON_SHOP_PACKAGES_RECEIVED, this.bindFunction(this.onShopPackagesReceived));
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    e.prototype.hide.call(this);
  };
  SubscriptionDialogOffer.prototype.updatePackageInfos = function () {
    var e = h.CastleModel.subscriptionData.isPackageActive(this.packageType);
    var t = h.CastleModel.subscriptionData.hasReceivedShopPackage();
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new c.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId(this.packageType.nameTextId))).autoFitToBounds = true;
    this.subLayerDisp.mc_teaser.gotoAndStop(this.getTeaserFrame());
    if (this.subLayerDisp.mc_teaser.icon_duration) {
      this.subLayerDisp.mc_teaser.icon_duration.toolTipText = "loyaltyGift_tt";
    }
    if (this.subLayerDisp.mc_teaser.icon_ww_coins) {
      this.subLayerDisp.mc_teaser.icon_ww_coins.toolTipText = "dialog_subscription_monthlyGift_tt";
    }
    this.subLayerDisp.btn_loyalty.visible = this.packageType == O.SubscriptionPackageEnum.PREMIUM;
    this.subLayerDisp.btn_monthlyGift.visible = this.packageType == O.SubscriptionPackageEnum.PLAYER;
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_loyalty.txt_copy, new c.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_subscriptionHelp_loyaltyGift_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_monthlyGift.txt_copy, new c.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_subscriptionOverview_monthlyGiftButton_copy")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_buyDesc, new l.LocalizedTextVO(e ? "dialog_subscriptionOverview_subscribed_desc" : "dialog_subscriptionOverview_unsubscribed_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_buyPrice, this.getPriceTextVO()).autoFitToBounds = true;
    m.ButtonHelper.enableButton(this.subLayerDisp.btn_buy, !e && t);
    this.subLayerDisp.btn_buy.toolTipText = e ? "dialog_subscriptionOverview_buySub_button_inactive_tooltip" : null;
    this.subLayerDisp.mc_bought.gotoAndStop(e ? 1 : 2);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_boughtDesc, new l.LocalizedTextVO(e ? "dialog_subscriptionOverview_statusField_subscribed_desc" : "dialog_subscriptionOverview_statusField_subscribedNot_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_desc, new l.LocalizedTextVO(this.getDescTextId())).autoFitToBounds = true;
    var i = this.subLayerDisp.mc_allianceBonus;
    if (this.packageType == O.SubscriptionPackageEnum.ALLIANCE) {
      i.visible = true;
      this.textFieldManager.registerTextField(i.txt_title, new l.LocalizedTextVO(this.getAllianceCountTextId(), [h.CastleModel.subscriptionData.allianceSubscriberCount])).autoFitToBounds = true;
      this.textFieldManager.registerTextField(i.txt_desc, new l.LocalizedTextVO(this.getDescTextId()));
    } else {
      i.visible = false;
    }
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_bonusList.txt_title, new l.LocalizedTextVO(this.getEffectTitleTextId())).autoFitToBounds = true;
    if (this._effectItems != null) {
      for (var n = 0, a = this._effectItems; n < a.length; n++) {
        var s = a[n];
        if (s !== undefined) {
          s.destroy();
        }
      }
    }
    var r = this.getEffectItemMc();
    r.removeChildren();
    this._effectItems = [];
    for (var d = h.CastleModel.subscriptionData.getSubscriptionSeriesBuffs(this.packageType, h.CastleModel.subscriptionData.allianceSubscriberCount + 1), g = 0, C = 0; C < d.length; ++C) {
      s = new D.SubscriptionDialogOfferItem(r, d[C], D.SubscriptionDialogOfferItem.ASSET_CLIP_NAME_BONUS_ITEM);
      this._effectItems.push(s);
      s.disp.y = g;
      g += s.dispHeight;
    }
    for (var _ = h.CastleModel.subscriptionData.getSubscriptionRewardsByTypeID(this.packageType.serverId), f = 0; f < _.length; f++) {
      s = new D.SubscriptionDialogOfferItem(r, _.getItemByIndex(f), D.SubscriptionDialogOfferItem.ASSET_CLIP_NAME_BONUS_ITEM);
      this._effectItems.push(s);
      s.disp.y = g;
      g += s.dispHeight;
    }
    var E = u.int(s ? s.dispHeight : 1);
    var y = u.int(o.MathBase.max(g - SubscriptionDialogOffer.EFFECT_MASK_HEIGHT, 0));
    this._scrollComponent.init(0, y, E, E);
    this._scrollComponent.setVisibility(y > 0);
    this._scrollComponent.scrollToValue(0);
  };
  SubscriptionDialogOffer.prototype.updateEffectItemPositions = function () {
    this.getEffectItemMc().y = -this._scrollComponent.currentValue;
  };
  SubscriptionDialogOffer.prototype.getPriceTextVO = function () {
    if (h.CastleModel.subscriptionData.isPackageActive(this._packageType)) {
      var e = h.CastleModel.subscriptionData.getActivePackage(this._packageType);
      var t = new Date();
      t.setTime(t.getTime() + e.getRemainingSeconds() * d.ClientConstTime.SEC_2_MILLISEC);
      return new r.LocalizedDateTimeVO(t, s.DateTimeStyle.SHORT, s.DateTimeStyle.NONE);
    }
    return new c.TextVO(h.CastleModel.subscriptionData.getPriceString(this._packageType));
  };
  SubscriptionDialogOffer.prototype.getTeaserFrame = function () {
    switch (this.packageType) {
      case O.SubscriptionPackageEnum.PLAYER:
        return 1;
      case O.SubscriptionPackageEnum.PREMIUM:
        return 2;
      case O.SubscriptionPackageEnum.ALLIANCE:
        return 3;
      default:
        return 1;
    }
  };
  SubscriptionDialogOffer.prototype.getDescTextId = function () {
    switch (this.packageType) {
      case O.SubscriptionPackageEnum.PLAYER:
        return "dialog_subscriptionOverview_singleSub_1_desc";
      case O.SubscriptionPackageEnum.PREMIUM:
        return "dialog_subscriptionOverview_singleSub_2_desc";
      case O.SubscriptionPackageEnum.ALLIANCE:
        return "dialog_subscriptionOverview_allianceSub_1_desc";
      default:
        return "";
    }
  };
  SubscriptionDialogOffer.prototype.getEffectTitleTextId = function () {
    if (!h.CastleModel.subscriptionData.isPackageActive(this.packageType)) {
      return "dialog_subscriptionOverview_boniActivation_desc";
    }
    switch (this.packageType) {
      case O.SubscriptionPackageEnum.PLAYER:
      case O.SubscriptionPackageEnum.PREMIUM:
        return "dialog_subscriptionOverview_boniPlayer_desc";
      case O.SubscriptionPackageEnum.ALLIANCE:
        return "dialog_subscriptionOverview_boniAlliance_desc";
      default:
        return "";
    }
  };
  SubscriptionDialogOffer.prototype.getAllianceCountTextId = function () {
    if (h.CastleModel.userData.isInAlliance) {
      if (h.CastleModel.subscriptionData.allianceSubscriberCount <= 0) {
        return "dialog_subscriptionOverview_allianceField_memberNone_desc";
      } else {
        return "dialog_subscriptionOverview_allianceField_memberCount_desc";
      }
    } else {
      return "dialog_subscriptionOverview_allianceField_noAlliance_desc";
    }
  };
  SubscriptionDialogOffer.prototype.getEffectItemMc = function () {
    return this.subLayerDisp.mc_bonusList.mc_items.mc_transform;
  };
  SubscriptionDialogOffer.prototype.onClick = function (t) {
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.btn_buy:
          h.CastleModel.subscriptionData.requestSPC(this.packageType);
          break;
        case this.subLayerDisp.mc_allianceBonus.btn_bonusList:
          this.onAllianceBonusListButtonClicked();
          break;
        case this.subLayerDisp.btn_loyalty:
          this.onLoyaltyButtonClicked();
          break;
        case this.subLayerDisp.btn_monthlyGift:
          this.onMonthlyGiftButtonClicked();
      }
    }
  };
  SubscriptionDialogOffer.prototype.onMonthlyGiftButtonClicked = function () {
    var e = this.layoutManager.getDialog(b.SubscriptionDialog);
    if (e) {
      e.openPreselection(b.SubscriptionDialog.TAB_INFO, I.SubscriptionInfoTopicEnum.TOPIC_MONTHLY_GIFT);
    }
  };
  SubscriptionDialogOffer.prototype.onLoyaltyButtonClicked = function () {
    var e = this.layoutManager.getDialog(b.SubscriptionDialog);
    if (e) {
      e.openPreselection(b.SubscriptionDialog.TAB_INFO, I.SubscriptionInfoTopicEnum.TOPIC_LOYALTY);
    }
  };
  SubscriptionDialogOffer.prototype.onAllianceBonusListButtonClicked = function () {
    var e = this.layoutManager.getDialog(b.SubscriptionDialog);
    if (e) {
      e.openPreselection(b.SubscriptionDialog.TAB_INFO, I.SubscriptionInfoTopicEnum.TOPIC_SUBSCRIBED_ALLIANCE_MEMBERS);
    }
  };
  SubscriptionDialogOffer.prototype.onSubscriptionChanged = function (e) {
    this.updatePackageInfos();
  };
  SubscriptionDialogOffer.prototype.onScroll = function () {
    this.updateEffectItemPositions();
  };
  SubscriptionDialogOffer.prototype.onShopPackagesReceived = function (e) {
    this.updatePackageInfos();
  };
  Object.defineProperty(SubscriptionDialogOffer.prototype, "packageType", {
    get: function () {
      return this._packageType;
    },
    enumerable: true,
    configurable: true
  });
  SubscriptionDialogOffer.EFFECT_MASK_HEIGHT = 220;
  return SubscriptionDialogOffer;
}(f.CastleDialogSubLayer);
exports.SubscriptionDialogOffer = E;
var y = require("./95.js");
var b = require("./523.js");
var D = require("./1390.js");
var I = require("./958.js");
var T = require("./121.js");
var v = require("./36.js");
a.classImplementsInterfaces(E, "ICollectableRendererList", "ISublayer");