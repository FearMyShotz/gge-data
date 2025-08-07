Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./13.js");
var l = require("./4.js");
var c = require("./383.js");
var u = require("./42.js");
var d = require("./8.js");
var p = require("./11.js");
var h = require("./955.js");
var g = require("./222.js");
var C = function (e) {
  function SubscriptionTeaserDialog() {
    return e.call(this, SubscriptionTeaserDialog.NAME) || this;
  }
  n.__extends(SubscriptionTeaserDialog, e);
  SubscriptionTeaserDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    d.ButtonHelper.initButton(this.dialogDisp.btn_close, -1, m.ClickFeedbackButton);
    d.ButtonHelper.initButtons([this.dialogDisp.btn_playerShowMe, this.dialogDisp.btn_premiumShowMe, this.dialogDisp.btn_allianceShowMe], f.ClickFeedbackButtonBackground);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_subscriptions_name_generic")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO("dialog_subscriptionTeaser_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_playerTitle, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(g.SubscriptionPackageEnum.PLAYER.nameTextId)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_playerDesc, new s.LocalizedTextVO("dialog_subscriptionTeaser_singleSub_1_info")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_playerPerMonth, new s.LocalizedTextVO("generic_perMonth")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_playerShowMe.txt_text, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_questInfo_showMe")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_premiumTitle, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(g.SubscriptionPackageEnum.PREMIUM.nameTextId)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_premiumDesc, new s.LocalizedTextVO("dialog_subscriptionTeaser_singleSub_2_info")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_premiumPerMonth, new s.LocalizedTextVO("generic_perMonth")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_premiumShowMe.txt_text, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_questInfo_showMe")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceTitle, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId(g.SubscriptionPackageEnum.ALLIANCE.nameTextId)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_allianceDesc, new s.LocalizedTextVO("dialog_subscriptionTeaser_allianceSub_1_info")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_alliancePerMonth, new s.LocalizedTextVO("generic_perMonth")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_allianceShowMe.txt_text, new a.TextVO(r.TextHelper.toUpperCaseLocaSafeTextId("dialog_questInfo_showMe")));
    this.dialogDisp.icon_duration.toolTipText = "loyaltyGift_tt";
    this.dialogDisp.icon_ww_coins.toolTipText = "dialog_subscription_monthlyGift_tt";
  };
  SubscriptionTeaserDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.controller.addEventListener(c.SubscriptionEvent.ON_SHOP_PACKAGES_RECEIVED, this.bindFunction(this.onShopPackagesReceived));
    this.updatePrices();
    l.CastleModel.subscriptionData.requestGSC();
  };
  SubscriptionTeaserDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.controller.removeEventListener(c.SubscriptionEvent.ON_SHOP_PACKAGES_RECEIVED, this.bindFunction(this.onShopPackagesReceived));
  };
  SubscriptionTeaserDialog.prototype.updatePrices = function () {
    this.setPriceTextfield(this.dialogDisp.txt_playerPrice, g.SubscriptionPackageEnum.PLAYER);
    this.setPriceTextfield(this.dialogDisp.txt_premiumPrice, g.SubscriptionPackageEnum.PREMIUM);
    this.setPriceTextfield(this.dialogDisp.txt_alliancePrice, g.SubscriptionPackageEnum.ALLIANCE);
  };
  SubscriptionTeaserDialog.prototype.setPriceTextfield = function (e, t) {
    var i = this.textFieldManager.registerTextField(e, new a.TextVO(l.CastleModel.subscriptionData.getPriceString(t)));
    i.autoFitToBounds = true;
    i.verticalAlign = u.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  SubscriptionTeaserDialog.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_playerShowMe:
          this.onShowMeButtonClicked(_.SubscriptionDialog.TAB_PLAYER);
          break;
        case this.dialogDisp.btn_premiumShowMe:
          this.onShowMeButtonClicked(_.SubscriptionDialog.TAB_PREMIUM);
          break;
        case this.dialogDisp.btn_allianceShowMe:
          this.onShowMeButtonClicked(_.SubscriptionDialog.TAB_ALLIANCE);
      }
    }
  };
  SubscriptionTeaserDialog.prototype.onShowMeButtonClicked = function (e) {
    p.CastleExternalDialog.dialogHandler.registerDialogs(_.SubscriptionDialog, new h.SubscriptionDialogProperties(e));
    this.hide();
  };
  SubscriptionTeaserDialog.prototype.onShopPackagesReceived = function (e) {
    this.updatePrices();
  };
  SubscriptionTeaserDialog.NAME = "SubscriptionTeaser_WishingWell";
  return SubscriptionTeaserDialog;
}(p.CastleExternalDialog);
exports.SubscriptionTeaserDialog = C;
var _ = require("./523.js");
var m = require("./36.js");
var f = require("./121.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");