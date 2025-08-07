Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./812.js");
var r = require("./4.js");
var l = require("./20.js");
var c = require("./8.js");
var u = function (e) {
  function RewardHubMainDialog() {
    var t = e.call(this, RewardHubMainDialog.NAME) || this;
    t.isSettingTabOpen = false;
    return t;
  }
  n.__extends(RewardHubMainDialog, e);
  RewardHubMainDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    c.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_season, this.dialogDisp.btn_tab_events, this.dialogDisp.btn_tab_mysteryBox]);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], l.ClickFeedbackButtonHover);
    this._subLayer = new Map();
    this._subLayer.set(RewardHubMainDialog.TAB_SEASON_REWARDS, new h.RewardHubMainDialogSeason(this.dialogDisp.sublayer_rewards, this));
    this._subLayer.set(RewardHubMainDialog.TAB_EVENT_REWARDS, new g.RewardHubMainDialogEvents(this.dialogDisp.sublayer_rewards, this));
    this._subLayer.set(RewardHubMainDialog.TAB_MYSTERY_BOXES, new p.RewardHubMainDialogMysteryBoxes(this.dialogDisp.sublayer_mysteryBox, this));
    this.dialogDisp.btn_tab_season.toolTipText = "dialog_rewardHub_pending_header";
    this.dialogDisp.btn_tab_events.toolTipText = "dialog_mysteryBoxSystem_mysteryBoxHUB_header";
    this.dialogDisp.btn_tab_mysteryBox.toolTipText = "dialog_mysteryBoxSystem_mysteryBoxHUB_header";
    this.dialogDisp.btn_tab_events.visible = false;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("dialog_rewardHub_pending_header")));
  };
  RewardHubMainDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.dialogProperties.openStartTab == null || this.dialogProperties.openStartTab == RewardHubMainDialog.TAB_SEASON_REWARDS) {
      this._currentSublayer = this._subLayer.get(RewardHubMainDialog.TAB_SEASON_REWARDS);
      m.CastleRewardHubMicroservice.Instance.onRewardsUpdatedSignal.add(this.bindFunction(this.enableView));
      this.controller.addEventListener(f.CastleServerMessageArrivedEvent.PRE_ARRIVED, this.bindFunction(this.onPREarrived));
      m.CastleRewardHubMicroservice.Instance.pickRewardsSignal.add(this.bindFunction(this.onPickRewardsInitiated));
      this.showLoadingAnimation();
      m.CastleRewardHubMicroservice.Instance.getRewardsSignal.dispatch();
      this.changeCategory(RewardHubMainDialog.TAB_SEASON_REWARDS);
    } else {
      this.changeCategory(this.dialogProperties.openStartTab);
    }
    r.CastleModel.lootBoxData.addEventListener(s.CastleLootBoxDataEvent.INVENTORY_UPDATED, this.bindFunction(this.updateTabButtonAmounts));
    this.updateTabButtonAmounts();
  };
  RewardHubMainDialog.prototype.updateTabButtonAmounts = function () {
    this.setMysteryBoxAmount(r.CastleModel.lootBoxData.allLootBoxAmount());
  };
  RewardHubMainDialog.prototype.onPickRewardsInitiated = function () {
    d.CastleExternalDialog.dialogHandler.registerDialogsWithType(O.CastleExternalPreloaderDialog, new E.CastleExternalPreloaderDialogProperties(null), true, y.CastleDialogConsts.PRIORITY_TOP, 0, y.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  RewardHubMainDialog.prototype.onPREarrived = function (e = null) {
    m.CastleRewardHubMicroservice.Instance.getRewardsSignal.dispatch();
  };
  RewardHubMainDialog.prototype.enableView = function () {
    this.clearLoadingAnimation();
    b.CastleLayoutManager.getInstance().hideDialog(O.CastleExternalPreloaderDialog);
  };
  RewardHubMainDialog.prototype.showLoadingAnimation = function () {
    this._currentSublayer.isLoading = true;
    this.lockDialog();
    var e = new (o.getDefinitionByNameFromLibrary("LoadingAnimation"))();
    e.scaleX = e.scaleY = 3;
    e.x = e.x - e.width / 2;
    this.dialogDisp.mc_loading = e;
    this.dialogDisp.addChild(e);
    setTimeout(this.bindFunction(this.clearLoadingAnimation), 3000);
  };
  RewardHubMainDialog.prototype.clearLoadingAnimation = function () {
    if (this.dialogDisp.mc_loading) {
      if (this._currentSublayer) {
        this._currentSublayer.isLoading = false;
        this._currentSublayer.updateAllInfos();
      }
      this.unLockDialog();
      this.dialogDisp.removeChild(this.dialogDisp.mc_loading);
    }
  };
  RewardHubMainDialog.prototype.setSeasonAmount = function (e) {
    this.dialogDisp.btn_tab_season.mc_new.visible = e > 0;
    this.dialogDisp.btn_tab_season.mc_new1.visible = e > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_season.mc_new.txt_amount, new C.CastleLocalizedNumberVO(e));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_season.mc_new1.txt_amount, new C.CastleLocalizedNumberVO(e));
  };
  RewardHubMainDialog.prototype.setEventAmount = function (e) {
    this.dialogDisp.btn_tab_events.mc_new.visible = e > 0;
    this.dialogDisp.btn_tab_events.mc_new1.visible = e > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_events.mc_new.txt_amount, new C.CastleLocalizedNumberVO(e));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_events.mc_new1.txt_amount, new C.CastleLocalizedNumberVO(e));
  };
  RewardHubMainDialog.prototype.setMysteryBoxAmount = function (e) {
    this.dialogDisp.btn_tab_mysteryBox.mc_new.visible = e > 0;
    this.dialogDisp.btn_tab_mysteryBox.mc_new1.visible = e > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_mysteryBox.mc_new.txt_amount, new C.CastleLocalizedNumberVO(e));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_tab_mysteryBox.mc_new1.txt_amount, new C.CastleLocalizedNumberVO(e));
  };
  RewardHubMainDialog.prototype.changeCategory = function (t) {
    function updateButton(e, t) {
      e.gotoAndStop(t ? 2 : 1);
    }
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(t), [this.dialogProperties.openOnGameStart, this]);
      updateButton(this.dialogDisp.btn_tab_season, this._currentCategory == RewardHubMainDialog.TAB_SEASON_REWARDS);
      updateButton(this.dialogDisp.btn_tab_events, this._currentCategory == RewardHubMainDialog.TAB_EVENT_REWARDS);
      updateButton(this.dialogDisp.btn_tab_mysteryBox, this._currentCategory == RewardHubMainDialog.TAB_MYSTERY_BOXES);
    }
  };
  RewardHubMainDialog.prototype.getHelpTextId = function () {
    if (this._currentCategory == RewardHubMainDialog.TAB_MYSTERY_BOXES) {
      return "help_mysteryBoxSystem_mysteryBoxHUB";
    } else {
      return "help_rewardHub_pending";
    }
  };
  RewardHubMainDialog.prototype.onClick = function (t) {
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_season:
          this.changeCategory(RewardHubMainDialog.TAB_SEASON_REWARDS);
          break;
        case this.dialogDisp.btn_tab_events:
          this.changeCategory(RewardHubMainDialog.TAB_EVENT_REWARDS);
          break;
        case this.dialogDisp.btn_tab_mysteryBox:
          this.changeCategory(RewardHubMainDialog.TAB_MYSTERY_BOXES);
          break;
        case this.dialogDisp.btn_help:
          d.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text(this.getHelpTextId()));
      }
    }
  };
  RewardHubMainDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    m.CastleRewardHubMicroservice.Instance.onRewardsUpdatedSignal.remove(this.bindFunction(this.enableView));
    this.controller.removeEventListener(f.CastleServerMessageArrivedEvent.PRE_ARRIVED, this.bindFunction(this.onPREarrived));
    r.CastleModel.lootBoxData.removeEventListener(s.CastleLootBoxDataEvent.INVENTORY_UPDATED, this.bindFunction(this.updateTabButtonAmounts));
    m.CastleRewardHubMicroservice.Instance.pickRewardsSignal.remove(this.bindFunction(this.onPickRewardsInitiated));
  };
  Object.defineProperty(RewardHubMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubMainDialog.NAME = "CastleRewardHub3";
  RewardHubMainDialog.TAB_SEASON_REWARDS = "tab_season";
  RewardHubMainDialog.TAB_EVENT_REWARDS = "tab_events";
  RewardHubMainDialog.TAB_MYSTERY_BOXES = "tab_mysteryBoxes";
  return RewardHubMainDialog;
}(require("./112.js").CastleExternalSubLayerDialog);
exports.RewardHubMainDialog = u;
var d = require("./11.js");
var p = require("./3431.js");
var h = require("./3434.js");
var g = require("./3539.js");
var C = require("./85.js");
var _ = require("./13.js");
var m = require("./360.js");
var f = require("./37.js");
var O = require("./154.js");
var E = require("./201.js");
var y = require("./43.js");
var b = require("./17.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");