Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./6.js");
var l = require("./8.js");
var c = require("./41.js");
var u = require("./112.js");
var d = require("./222.js");
var p = function (e) {
  function SubscriptionDialog() {
    return e.call(this, SubscriptionDialog.NAME) || this;
  }
  n.__extends(SubscriptionDialog, e);
  SubscriptionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    l.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_player, this.dialogDisp.btn_tab_premium, this.dialogDisp.btn_tab_alliance, this.dialogDisp.btn_tab_info]);
    l.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], _.ClickFeedbackButton);
    this.dialogDisp.btn_help.mouseChildren = false;
    this.dialogDisp.btn_close.mouseChildren = false;
    this._subLayer = new Map();
    this._subLayer.set(SubscriptionDialog.TAB_PLAYER, new C.SubscriptionDialogOffer(this.dialogDisp.tab_player, d.SubscriptionPackageEnum.PLAYER));
    this._subLayer.set(SubscriptionDialog.TAB_PREMIUM, new C.SubscriptionDialogOffer(this.dialogDisp.tab_premium, d.SubscriptionPackageEnum.PREMIUM));
    this._subLayer.set(SubscriptionDialog.TAB_ALLIANCE, new C.SubscriptionDialogOffer(this.dialogDisp.tab_alliance, d.SubscriptionPackageEnum.ALLIANCE));
    this._subLayer.set(SubscriptionDialog.TAB_INFO, new g.SubscriptionDialogInfo(this.dialogDisp.tab_info));
    this.dialogDisp.btn_tab_player.toolTipText = d.SubscriptionPackageEnum.PLAYER.nameTextId;
    this.dialogDisp.btn_tab_premium.toolTipText = d.SubscriptionPackageEnum.PREMIUM.nameTextId;
    this.dialogDisp.btn_tab_alliance.toolTipText = d.SubscriptionPackageEnum.ALLIANCE.nameTextId;
    this.dialogDisp.btn_tab_info.toolTipText = "dialog_subscriptionInfo_title";
    this.dialogDisp.btn_help.toolTipText = "help";
  };
  SubscriptionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.openPreselection(this.dialogProperties.preselectedTab, this.dialogProperties.infoTabTopic);
    s.CastleModel.subscriptionData.requestGSC();
  };
  SubscriptionDialog.prototype.openPreselection = function (e, t) {
    if (e) {
      this.changeCategory(e);
      if (e == SubscriptionDialog.TAB_INFO && t) {
        var i = this._subLayer.get(SubscriptionDialog.TAB_INFO);
        i.topics.selectByType(t);
        i.topics.scrollToTopic(t);
      }
    } else {
      this.changeCategory(SubscriptionDialog.TAB_PLAYER);
    }
  };
  SubscriptionDialog.prototype.changeCategory = function (t) {
    function updateButton(e, t) {
      e.gotoAndStop(r.int(t ? 2 : 1));
    }
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(t), []);
      updateButton(this.dialogDisp.btn_tab_player, this._currentCategory == SubscriptionDialog.TAB_PLAYER);
      updateButton(this.dialogDisp.btn_tab_premium, this._currentCategory == SubscriptionDialog.TAB_PREMIUM);
      updateButton(this.dialogDisp.btn_tab_alliance, this._currentCategory == SubscriptionDialog.TAB_ALLIANCE);
      updateButton(this.dialogDisp.btn_tab_info, this._currentCategory == SubscriptionDialog.TAB_INFO);
    }
  };
  SubscriptionDialog.prototype.getHelpTextId = function () {
    switch (this._currentCategory) {
      case SubscriptionDialog.TAB_PLAYER:
        return "help_subscriptionOverview_singleSub_1";
      case SubscriptionDialog.TAB_PREMIUM:
        return "help_subscriptionOverview_singleSub_2";
      case SubscriptionDialog.TAB_ALLIANCE:
        return "help_subscriptionOverview_allianceSub_1";
      case SubscriptionDialog.TAB_INFO:
        return "help_subscriptionOverview_subscriptionInfo";
      default:
        return "";
    }
  };
  SubscriptionDialog.getTabBySubscription = function (e) {
    switch (e) {
      case d.SubscriptionPackageEnum.PLAYER:
        return SubscriptionDialog.TAB_PLAYER;
      case d.SubscriptionPackageEnum.PREMIUM:
        return SubscriptionDialog.TAB_PREMIUM;
      case d.SubscriptionPackageEnum.ALLIANCE:
        return SubscriptionDialog.TAB_ALLIANCE;
      default:
        return SubscriptionDialog.TAB_INFO;
    }
  };
  SubscriptionDialog.prototype.onClick = function (t) {
    t.target = c.CastleMovieClipHelper.getFirstMovieClipParent(t.target);
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_player:
          this.changeCategory(SubscriptionDialog.TAB_PLAYER);
          break;
        case this.dialogDisp.btn_tab_premium:
          this.changeCategory(SubscriptionDialog.TAB_PREMIUM);
          break;
        case this.dialogDisp.btn_tab_alliance:
          this.changeCategory(SubscriptionDialog.TAB_ALLIANCE);
          break;
        case this.dialogDisp.btn_tab_info:
          this.changeCategory(SubscriptionDialog.TAB_INFO);
          break;
        case this.dialogDisp.btn_help:
          h.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text(this.getHelpTextId()));
      }
    }
  };
  Object.defineProperty(SubscriptionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SubscriptionDialog.NAME = "Subscription_WishingWell";
  SubscriptionDialog.TAB_PLAYER = "tab_player";
  SubscriptionDialog.TAB_PREMIUM = "tab_premium";
  SubscriptionDialog.TAB_ALLIANCE = "tab_alliance";
  SubscriptionDialog.TAB_INFO = "tab_info";
  return SubscriptionDialog;
}(u.CastleExternalSubLayerDialog);
exports.SubscriptionDialog = p;
var h = require("./11.js");
var g = require("./1389.js");
var C = require("./2507.js");
var _ = require("./36.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");