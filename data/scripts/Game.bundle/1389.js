Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./84.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./383.js");
var d = require("./956.js");
var p = require("./957.js");
var h = require("./222.js");
var g = function (e) {
  function SubscriptionDialogInfo(t) {
    return e.call(this, t) || this;
  }
  n.__extends(SubscriptionDialogInfo, e);
  SubscriptionDialogInfo.prototype.init = function () {
    e.prototype.init.call(this);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new a.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_subscriptionInfo_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_subTitlePlayer, new s.LocalizedTextVO(h.SubscriptionPackageEnum.PLAYER.nameTextId)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_subTitlePremium, new s.LocalizedTextVO(h.SubscriptionPackageEnum.PREMIUM.nameTextId)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_subTitleAlliance, new s.LocalizedTextVO(h.SubscriptionPackageEnum.ALLIANCE.nameTextId)).autoFitToBounds = true;
    this.topics.init(this.getTopics(), SubscriptionDialogInfo.TOPIC_ASSET_CLIP_NAME, _.SubscriptionDialog.NAME, SubscriptionDialogInfo.TOPIC_MASK_HEIGHT);
    this.addPage(SubscriptionDialogInfo.PAGE_EFFECTS, f.SubscriptionDialogInfoPageEffects, this.subLayerDisp.mc_pages.mc_page1);
    this.addPage(SubscriptionDialogInfo.PAGE_CANCEL, m.SubscriptionDialogInfoPageCancel, this.subLayerDisp.mc_pages.mc_page2);
    this.addPage(SubscriptionDialogInfo.PAGE_TEXT, C.InfoCatalogPageScrollText, this.subLayerDisp.mc_pages.mc_page3);
    this.addPage(SubscriptionDialogInfo.PAGE_LOYALTY, O.SubscriptionDialogInfoPageLoyalty, this.subLayerDisp.mc_pages.mc_page4);
  };
  SubscriptionDialogInfo.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.controller.addEventListener(u.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    this.updateCheckmarks();
  };
  SubscriptionDialogInfo.prototype.hide = function () {
    this.controller.removeEventListener(u.SubscriptionEvent.ON_SUBSCRIPTION_CHANGED, this.bindFunction(this.onSubscriptionChanged));
    e.prototype.hide.call(this);
  };
  SubscriptionDialogInfo.prototype.updateCheckmarks = function () {
    this.setCheckmark(this.subLayerDisp.mc_statusPlayer, h.SubscriptionPackageEnum.PLAYER);
    this.setCheckmark(this.subLayerDisp.mc_statusPremium, h.SubscriptionPackageEnum.PREMIUM);
    this.setCheckmark(this.subLayerDisp.mc_statusAlliance, h.SubscriptionPackageEnum.ALLIANCE);
  };
  SubscriptionDialogInfo.prototype.setCheckmark = function (e, t) {
    e.gotoAndStop(c.CastleModel.subscriptionData.isPackageActive(t) ? 1 : 2);
  };
  SubscriptionDialogInfo.prototype.updateInfoPage = function (e, t) {
    switch (t.topicType) {
      case E.SubscriptionInfoTopicEnum.TOPIC_SUBSCRIBED_ALLIANCE_MEMBERS:
        e.fillContent(t);
        break;
      case E.SubscriptionInfoTopicEnum.TOPIC_LOYALTY:
        e.fillContent();
        break;
      default:
        e.fillContent("dialog_subscriptionHelp_" + t.topicType.name + "_text_1");
    }
  };
  SubscriptionDialogInfo.prototype.getTopics = function () {
    var e = [];
    for (var t = 0, i = r.CastleEnum.getEnumListByClass(E.SubscriptionInfoTopicEnum); t < i.length; t++) {
      var n = i[t];
      if (n != E.SubscriptionInfoTopicEnum.TOPIC_SUBSCRIBED_ALLIANCE_MEMBERS) {
        e.push(new p.InfoCatalogTopicVO(n, "dialog_subscriptionHelp_" + n.name + "_header"));
      }
    }
    var o = c.CastleModel.subscriptionData.getRequiredMembersThreshold(h.SubscriptionPackageEnum.ALLIANCE);
    n = E.SubscriptionInfoTopicEnum.TOPIC_SUBSCRIBED_ALLIANCE_MEMBERS;
    if (o != null) {
      for (var a = 0, s = o; a < s.length; a++) {
        var l = s[a];
        if (l !== undefined) {
          var u = l == 1 ? "dialog_subscriptionHelp_subscribedOneMember_header" : "dialog_subscriptionHelp_subscribedMultiMembers_header";
          e.push(new p.InfoCatalogTopicVO(n, u, [l], l));
        }
      }
    }
    return e;
  };
  SubscriptionDialogInfo.prototype.onSubscriptionChanged = function (e) {
    this.updateCheckmarks();
  };
  SubscriptionDialogInfo.TOPIC_ASSET_CLIP_NAME = "Subscription_Info_Topic_Item";
  SubscriptionDialogInfo.TOPIC_MASK_HEIGHT = 332;
  SubscriptionDialogInfo.PAGE_EFFECTS = "pageEffects";
  SubscriptionDialogInfo.PAGE_LOYALTY = "pageLoyalty";
  SubscriptionDialogInfo.PAGE_MONTHLY_GIFT = "pageMonthlyGift";
  SubscriptionDialogInfo.PAGE_CANCEL = "pageCancel";
  SubscriptionDialogInfo.PAGE_TEXT = "pageText";
  return SubscriptionDialogInfo;
}(d.AModernInfoCatalogDialogSublayer);
exports.SubscriptionDialogInfo = g;
var C = require("./750.js");
var _ = require("./523.js");
var m = require("./2504.js");
var f = require("./2505.js");
var O = require("./2506.js");
var E = require("./958.js");
o.classImplementsInterfaces(g, "ICollectableRendererList", "ISublayer");