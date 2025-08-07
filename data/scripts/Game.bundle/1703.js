Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./8.js");
var a = require("./11.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./49.js");
var u = require("./3533.js");
var d = require("./282.js");
var p = require("./280.js");
var h = require("./59.js");
var g = require("./281.js");
var C = require("./163.js");
var _ = require("./9.js");
var m = require("./3535.js");
var f = require("./3536.js");
var O = require("./547.js");
var E = require("./403.js");
var y = require("./4.js");
var b = require("./651.js");
var D = require("./809.js");
var I = require("./360.js");
var T = require("./154.js");
var v = require("./201.js");
var S = require("./43.js");
var A = function (e) {
  function RewardHubManageAllDialog() {
    return e.call(this, RewardHubManageAllDialog.NAME) || this;
  }
  n.__extends(RewardHubManageAllDialog, e);
  RewardHubManageAllDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_pick_all.txt_value, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("collectAll")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_unlock_all.txt_value, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("unlockAll")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_rewardHub_manageAll_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_rewardHub_manageAll_desc"));
    o.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_pick_all, this.dialogDisp.btn_unlock_all], c.ClickFeedbackButtonHover);
    this.dialogDisp.btn_close.toolTipText = "generic_btn_close";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    var i = new p.AccordionComponentProperties();
    i.scrollStrategy = h.DynamicSizeScrollStrategyVertical;
    i.disableButtons = true;
    i.scrollStepPixels = 154;
    this._scrollList = new d.DynamicSliderAccordionComponent(this.dialogDisp.mc_items, i);
  };
  RewardHubManageAllDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateItems();
    this._scrollList.show();
    this.updatePurchaseButton();
    I.CastleRewardHubMicroservice.Instance.onRewardsUpdatedSignal.add(this.bindFunction(this.updateDialog));
    I.CastleRewardHubMicroservice.Instance.onUpgradeRewardsSuccessSignal.add(this.bindFunction(this.updateDialog));
    I.CastleRewardHubMicroservice.Instance.upgradeRewardsSignal.add(this.bindFunction(this.onUpgradeRewardsInitiated));
  };
  RewardHubManageAllDialog.prototype.clearDialog = function () {
    this._scrollList.clear();
  };
  RewardHubManageAllDialog.prototype.onUpgradeRewardsInitiated = function () {
    _.CastleDialogHandler.getInstance().registerDialogsWithType(T.CastleExternalPreloaderDialog, new v.CastleExternalPreloaderDialogProperties(null), false, S.CastleDialogConsts.PRIORITY_TOP, 0, S.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  RewardHubManageAllDialog.prototype.updateDialog = function () {
    if (y.CastleModel.rewardHubData.rewardHubVOs.length == 0) {
      this.clearDialog();
      this.hideLoaded();
      return;
    }
    this.layoutManager.hideDialog(T.CastleExternalPreloaderDialog);
    this.dialogProperties.updateItemVOs();
    this.updatePurchaseButton();
    this.updateItems();
  };
  RewardHubManageAllDialog.prototype.updateItems = function () {
    this._scrollList.clear();
    var e = [];
    for (var t = 0, i = this.dialogProperties.listItemVOs; t < i.length; t++) {
      var n = i[t];
      var o = new u.RewardHubManagedListItem(n, RewardHubManageAllDialog.itemProperties, false);
      e.push(o);
    }
    for (var a = 0; a < e.length; a++) {
      this._scrollList.addItem(e[a], a, true);
    }
    this._scrollList.show();
    this._scrollList.scrollToTop();
  };
  RewardHubManageAllDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this._scrollList.hide();
    I.CastleRewardHubMicroservice.Instance.onRewardsUpdatedSignal.remove(this.bindFunction(this.updateDialog));
    I.CastleRewardHubMicroservice.Instance.onUpgradeRewardsSuccessSignal.remove(this.bindFunction(this.updateDialog));
    I.CastleRewardHubMicroservice.Instance.upgradeRewardsSignal.remove(this.bindFunction(this.onUpgradeRewardsInitiated));
  };
  RewardHubManageAllDialog.prototype.onClick = function (t) {
    if (o.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_help:
          a.CastleExternalDialog.dialogHandler.showHelper("generic_help", r.Localize.text("help_rewardHub_manageAll"));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_pick_all:
          this.onPickAllClick();
          break;
        case this.dialogDisp.btn_unlock_all:
          this.onUnlockAllClick();
      }
    }
  };
  RewardHubManageAllDialog.prototype.onPickAllClick = function () {
    _.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleRewardHubPickAllDialog, new f.CastleRewardHubPickAllDialogProperties(this.hasLockedRewards()));
  };
  RewardHubManageAllDialog.prototype.hasLockedRewards = function () {
    var e;
    for (var t = 0; t < this.dialogProperties.listItemVOs.length; t++) {
      e = this.dialogProperties.listItemVOs[t];
      for (var i = 0; i < e.rewardsTiers.length; i++) {
        if (e.rewardsTiers[i].rewardType == D.RewardHubData.REWARD_TYPE_EXTRA && !e.isExtraTierUnlocked) {
          return true;
        }
      }
    }
    return false;
  };
  RewardHubManageAllDialog.prototype.onUnlockAllClick = function () {
    this.calculateUnlockCosts();
    var e = new b.CollectableItemUnlockAllPassVO();
    e.hubRewardIdsToUnlock = this._rewardIdsToUnlock;
    _.CastleDialogHandler.getInstance().registerDialogs(O.SeasonLeagueBuyPassConfirmDialog, new E.SeasonLeagueBuyPassConfirmDialogProperties(e, this._unlockCosts, 0, -1, -1, -1, -1, E.SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_ALL));
  };
  RewardHubManageAllDialog.prototype.updatePurchaseButton = function () {
    this.calculateUnlockCosts();
    if (this._unlockCosts == 0 && this._rewardIdsToUnlock.length == 0) {
      o.ButtonHelper.enableButton(this.dialogDisp.btn_unlock_all, false);
      this.dialogDisp.btn_unlock_all.mouseEnabled = false;
    } else {
      o.ButtonHelper.enableButton(this.dialogDisp.btn_unlock_all, true);
      this.dialogDisp.btn_unlock_all.mouseEnabled = true;
    }
  };
  RewardHubManageAllDialog.prototype.calculateUnlockCosts = function () {
    var e;
    this._unlockCosts = 0;
    this._rewardIdsToUnlock = [];
    for (var t = 0; t < this.dialogProperties.listItemVOs.length; t++) {
      if (!(e = this.dialogProperties.listItemVOs[t]).isExtraTierUnlocked && e.extraTierUnlockCostC2 > 0) {
        this._unlockCosts += e.extraTierUnlockCostC2;
        this._rewardIdsToUnlock.push(e.hubRewardID);
      }
    }
  };
  Object.defineProperty(RewardHubManageAllDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubManageAllDialog.__initialize_static_members = function () {
    RewardHubManageAllDialog.itemProperties = new g.GenericCollapsibleItemProperties(new C.LayoutMargin(0, 6, 0, 0), true, 0.2, 0.2, true);
  };
  RewardHubManageAllDialog.NAME = "CastleRewardHubManageAll";
  return RewardHubManageAllDialog;
}(a.CastleExternalDialog);
exports.RewardHubManageAllDialog = A;
s.classImplementsInterfaces(A, "ICollectableRendererList");
A.__initialize_static_members();