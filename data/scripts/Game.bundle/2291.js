Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./100.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./16.js");
var h = require("./914.js");
var g = require("./2292.js");
var C = require("./37.js");
var _ = require("./48.js");
var m = require("./31.js");
var f = require("./19.js");
var O = require("./44.js");
var E = require("./13.js");
var y = require("./4.js");
var b = require("./14.js");
var D = require("./20.js");
var I = require("./8.js");
var T = require("./25.js");
var v = require("./381.js");
var S = require("./382.js");
var A = createjs.Point;
var L = function (e) {
  function OptionsDialogNewsletterItem(t) {
    var i = e.call(this, new (c.getDefinitionByName("CastleOptions_NewsletterItem"))(), t) || this;
    i._achievedBonusAlready = false;
    i._isSubscribed = false;
    I.ButtonHelper.initButtons([i.contentMC.mc_with_rewards.btn_ok, i.contentMC.mc_no_rewards.btn_ok], D.ClickFeedbackButtonHover);
    b.CastleComponent.textFieldManager.registerTextField(i._headerMC.txt_default, new u.LocalizedTextVO("dialog_newsletterConfirm_header"), new r.InternalGGSTextFieldConfigVO(true));
    b.CastleComponent.textFieldManager.registerTextField(i._headerMC.mc_open.txt_selected, new u.LocalizedTextVO("dialog_newsletterConfirm_header"), new r.InternalGGSTextFieldConfigVO(true));
    b.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_with_rewards.btn_ok.txt_label, new d.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_accountInfo_newsletterRequest_button")), new r.InternalGGSTextFieldConfigVO(true));
    b.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_no_rewards.btn_ok.txt_label, new d.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_accountInfo_newsletterRequest_button")), new r.InternalGGSTextFieldConfigVO(true));
    b.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_with_rewards.txt_header, new u.LocalizedTextVO("dialog_options_newsletter_desc1"), new r.InternalGGSTextFieldConfigVO(true));
    i._isSubscribed = y.CastleModel.playerEmailData.hasNewsletterSubscription;
    i._achievedBonusAlready = y.CastleModel.playerEmailData.gotNewsletterReward;
    return i;
  }
  n.__extends(OptionsDialogNewsletterItem, e);
  OptionsDialogNewsletterItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.contentMC.mc_with_rewards.visible = false;
    this.contentMC.mc_no_rewards.visible = false;
    this.contentMC.mc_no_rewards.cbx_newsletter.visible = true;
    b.CastleComponent.controller.addEventListener(C.CastleServerMessageArrivedEvent.MNS_ARRIVED, this.bindFunction(this.onStatusArrived));
    y.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetNewsletterSubscriptionStatusVO());
  };
  OptionsDialogNewsletterItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    if (this._linkComponent) {
      this._linkComponent.dispose();
    }
  };
  OptionsDialogNewsletterItem.prototype.onStatusArrived = function (e) {
    b.CastleComponent.controller.removeEventListener(C.CastleServerMessageArrivedEvent.MNS_ARRIVED, this.bindFunction(this.onStatusArrived));
    this._isSubscribed = e.params[0];
    this._achievedBonusAlready = e.params[1];
    this.updateSignal.dispatch();
  };
  OptionsDialogNewsletterItem.prototype.updateItem = function () {
    e.prototype.updateItem.call(this);
    this.disp.visible = y.CastleModel.userData.hasValidatedEmail && !this._isSubscribed && !a.EnvGlobalsHandler.globals.loginIsKeyBased && !a.EnvGlobalsHandler.globals.isOnSpecialServer && !O.SpecialServerHelper.isOnKeyLoginToNormalLoginServer;
    this.contentMC.mc_no_rewards.btn_ok.visible = false;
    if (this._isSubscribed && this._achievedBonusAlready) {
      this.contentMC.mc_no_rewards.visible = true;
      this.contentMC.mc_no_rewards.cbx_newsletter.visible = false;
      this.contentMC.mc_with_rewards.btn_ok.visible = false;
      this._linkComponent = new v.LinkComponent(this.contentMC.mc_no_rewards.mc_link, "", "");
    } else if (!this._isSubscribed && this._achievedBonusAlready) {
      this.contentMC.mc_no_rewards.visible = true;
      this.contentMC.mc_no_rewards.cbx_newsletter.mouseChildren = false;
      this._checkboxMC = this.contentMC.mc_no_rewards.cbx_newsletter;
      this._checkboxNewsletter = new o.CheckBoxButton(this.contentMC.mc_no_rewards.cbx_newsletter, true);
      this._checkboxNewsletter.deselected();
      this._linkComponent = new v.LinkComponent(this.contentMC.mc_no_rewards.mc_link, "", "");
      this.updateOkButton();
    } else {
      this.contentMC.mc_with_rewards.visible = true;
      this.contentMC.mc_no_rewards.visible = false;
      this.contentMC.mc_with_rewards.cbx_newsletter.mouseChildren = false;
      this._checkboxMC = this.contentMC.mc_with_rewards.cbx_newsletter;
      this._checkboxNewsletter = new o.CheckBoxButton(this.contentMC.mc_with_rewards.cbx_newsletter, true);
      this._checkboxNewsletter.deselected();
      this._linkComponent = new v.LinkComponent(this.contentMC.mc_with_rewards.mc_link, "", "");
      this.updateRewardsComponent();
      this.updateOkButton();
    }
    this.updateLinkComponent();
    this.updateMask();
  };
  OptionsDialogNewsletterItem.prototype.updateLinkComponent = function () {
    var e = u.Localize.text("dialog_options_newsletter_desc2");
    if (this._isSubscribed && this._achievedBonusAlready) {
      e = u.Localize.text("dialog_accountInfo_newsletterSubscription_playerIsSubscribed_copy");
    } else if (!this._isSubscribed && this._achievedBonusAlready) {
      e = u.Localize.text("dialog_accountInfo_newsletterSubscriptionNoReward_copy");
    }
    var t = "";
    if (s.EnvironmentProvider.instance.current.data.languageCode == "ar") {
      t = "https://www.goodgamestudios.com/terms_ar/#privacy";
    }
    this._linkComponent.colorData = [p.ClientConstColor.DEFAULT_SUBSCRIPTION, p.ClientConstColor.DEFAULT_SUBSCRIPTION, p.ClientConstColor.DEFAULT_SUBSCRIPTION];
    this._linkComponent.verticalAlign = a.GGSVerticalAlign.TOP;
    this._linkComponent.update(t, e);
  };
  OptionsDialogNewsletterItem.prototype.updateRewardsComponent = function () {
    var e = new _.CollectableList();
    y.CastleModel.newsletterData.newsletterVOs.forEach(function (t) {
      e.addList(y.CastleModel.rewardData.getListById(t.rewardID));
    });
    var t = new m.CollectableRenderClips(this.contentMC.mc_with_rewards.mc_reward.mc_item).addInfoBtn(this.contentMC.mc_with_rewards.mc_reward.btn_info);
    var i = new f.CollectableRenderOptions(f.CollectableRenderOptions.SET_BASIC, new A(136, 132));
    T.CollectableRenderHelper.displaySingleItemComplete(this, t, e.getItemByIndex(0), i);
  };
  OptionsDialogNewsletterItem.prototype.updateOkButton = function () {
    this.contentMC.mc_no_rewards.btn_ok.visible = true;
    I.ButtonHelper.enableButton(this.contentMC.mc_with_rewards.btn_ok, this._checkboxNewsletter.isSelected && y.CastleModel.userData.hasValidatedEmail);
    I.ButtonHelper.enableButton(this.contentMC.mc_no_rewards.btn_ok, this._checkboxNewsletter.isSelected && y.CastleModel.userData.hasValidatedEmail);
    if (y.CastleModel.userData.hasValidatedEmail) {
      if (this._checkboxNewsletter.isSelected) {
        this.contentMC.mc_with_rewards.btn_ok.toolTipText = null;
        this.contentMC.mc_no_rewards.btn_ok.toolTipText = null;
      } else {
        this.contentMC.mc_no_rewards.btn_ok.toolTipText = "dialog_options_subscribe_checkBox_tooltip";
        this.contentMC.mc_with_rewards.btn_ok.toolTipText = "dialog_options_subscribe_checkBox_tooltip";
      }
    } else {
      this.contentMC.mc_no_rewards.btn_ok.toolTipText = "dialog_options_subscribe_saveAccount_tooltip";
      this.contentMC.mc_with_rewards.btn_ok.toolTipText = "dialog_options_subscribe_saveAccount_tooltip";
    }
  };
  OptionsDialogNewsletterItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (I.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.contentMC.mc_with_rewards.btn_ok:
        case this.contentMC.mc_no_rewards.btn_ok:
          y.CastleModel.smartfoxClient.sendCommandVO(new g.C2SNewsletterSubscriptionVO());
          b.CastleComponent.controller.addEventListener(C.CastleServerMessageArrivedEvent.MNS_ARRIVED, this.bindFunction(this.onStatusArrived));
          y.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetNewsletterSubscriptionStatusVO());
          break;
        case this._checkboxMC:
          this._checkboxNewsletter.toggleSelected();
          this.updateOkButton();
      }
    }
  };
  Object.defineProperty(OptionsDialogNewsletterItem.prototype, "contentHeight", {
    get: function () {
      return (this.contentMC.mc_with_rewards.visible ? this.contentMC.mc_with_rewards : this.contentMC.mc_no_rewards).height;
    },
    enumerable: true,
    configurable: true
  });
  return OptionsDialogNewsletterItem;
}(S.AOptionsDialogCollapsibleItem);
exports.OptionsDialogNewsletterItem = L;
l.classImplementsInterfaces(L, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");