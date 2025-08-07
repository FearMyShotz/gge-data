Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./39.js");
var a = require("./146.js");
var s = require("./107.js");
var r = require("./32.js");
var l = require("./12.js");
var c = require("./45.js");
var u = require("./31.js");
var d = require("./104.js");
var p = require("./19.js");
var h = require("./15.js");
var g = require("./85.js");
var C = require("./4.js");
var _ = require("./52.js");
var m = require("./9.js");
var f = require("./25.js");
var O = require("./11.js");
var E = require("./8.js");
var y = require("./20.js");
var b = require("./3.js");
var D = require("./2198.js");
var I = require("./430.js");
var T = require("./2233.js");
var v = require("./2236.js");
var S = require("./2238.js");
var A = require("./2240.js");
var L = require("./2242.js");
var P = require("./1269.js");
var M = createjs.Point;
var R = function (e) {
  function GeneralsHubDialog() {
    var t = e.call(this, GeneralsHubDialog.NAME) || this;
    t.backgroundAlpha = 1;
    t.AMOUNT_OF_CURRENCIES_PER_ROW = 5;
    return t;
  }
  n.__extends(GeneralsHubDialog, e);
  GeneralsHubDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    E.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_overview, this.dialogDisp.btn_info, this.dialogDisp.btn_cinematics, this.dialogDisp.item_rubies.btn_payment, this.dialogDisp.item_rubies.btn_payment, this.dialogDisp.mc_offerings.btn_close, this.dialogDisp.mc_offerings.btn_open], y.ClickFeedbackButtonHover, 1);
    this.itxt_c2 = this.textFieldManager.registerTextField(this.dialogDisp.item_rubies.txt_text, new g.CastleLocalizedNumberVO(C.CastleModel.currencyData.c2Amount, {
      compactThreshold: o.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    this.itxt_t0 = this.textFieldManager.registerTextField(this.dialogDisp.mc_offerings.item_0.txt_text, new g.CastleLocalizedNumberVO(0, {
      compactThreshold: o.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    this.itxt_t1 = this.textFieldManager.registerTextField(this.dialogDisp.mc_offerings.item_1.txt_text, new g.CastleLocalizedNumberVO(0, {
      compactThreshold: o.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    this.itxt_t2 = this.textFieldManager.registerTextField(this.dialogDisp.mc_offerings.item_2.txt_text, new g.CastleLocalizedNumberVO(0, {
      compactThreshold: o.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
      compactFractionalDigits: 2
    }));
    this.itxt_overviewCounter = this.textFieldManager.registerTextField(this.dialogDisp.btn_overview.mc_bubble.txt_number, new g.CastleLocalizedNumberVO(0));
    this.dialogDisp.item_rubies.btn_payment.toolTipText = "add_Gold";
    this.dialogDisp.btn_help.toolTipText = "help";
    this.dialogDisp.mc_offerings.btn_open.toolTipText = "dialog_generals_inn_offeringsCounter_foldOut_tooltip";
    this.dialogDisp.mc_offerings.btn_close.toolTipText = "dialog_generals_inn_offeringsCounter_foldIn_tooltip";
    this.dialogDisp.btn_overview.toolTipText = "panel_action_generals_overview";
    this.dialogDisp.mc_king_hover.visible = false;
    this.dialogDisp.mc_knight_hover.visible = false;
    this.dialogDisp.mc_princess_hover.visible = false;
    this.setAmbientAnimations();
    this.setCharactersAnimations();
    this.questsComponent = new A.GeneralsHubQuestsComponent(this.dialogDisp);
    this.rewardsComponent = new S.GeneralsHubRewardsComponent(this.dialogDisp.mc_rewards);
    this.fillItemIcon(this.dialogDisp.mc_offerings.item_0, _.ClientConstCurrency.ID_FAT_KING_TOKEN);
    this.fillItemIcon(this.dialogDisp.mc_offerings.item_1, _.ClientConstCurrency.ID_KNIGHT_TOKEN);
    this.fillItemIcon(this.dialogDisp.mc_offerings.item_2, _.ClientConstCurrency.ID_PRINCESS_TOKEN);
    var i = 0;
    for (var n = 1; n <= 3; n++) {
      var a = C.CastleModel.generalsData.getGeneralsHubQuestVOByCharacterID(n);
      for (var s = 0; s < this.AMOUNT_OF_CURRENCIES_PER_ROW; s++) {
        var r = this.dialogDisp.mc_offerings["itemAdd_" + (n - 1) + "_" + s];
        var l = a.getTombolaOfferingCurrencyID(s + 1);
        r.visible = false;
        r.bg.alpha = 0.7;
        if (l > 0) {
          this.fillItemIcon(r, l);
          i++;
        }
      }
    }
    this.dialogDisp.mc_offerings.btn_open.visible = i > 0;
    this.dialogDisp.mc_offerings.btn_close.visible = false;
    this.generalHubIntroductionHandler = new T.GeneralHubIntroductionHandler(this.dialogDisp, this.charactersAnimationsHandler, this.questsComponent);
    this.generalHubIntroductionHandler.initGeneralIntroductionElements();
  };
  GeneralsHubDialog.prototype.fillItemIcon = function (e, t) {
    var i = C.CastleModel.currencyData.getAmountById(t);
    var n = c.CollectableHelper.createVO(l.CollectableEnum.GENERIC_CURRENCY, i, t);
    var o = new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_ICON, new M(36, 36));
    o.tooltip.useAmount = false;
    var a = new u.CollectableRenderClips(e).addIconMc(e.mc_icon);
    f.CollectableRenderHelper.displaySingleItemComplete(new d.CollectableRendererList(), a, n, o);
  };
  GeneralsHubDialog.prototype.setAmbientAnimations = function () {
    this.ambientAnimationsHandler = new L.AmbientAnimationsHandler(this.dialogDisp);
    this.ambientAnimationsHandler.loadAnimations();
  };
  GeneralsHubDialog.prototype.setCharactersAnimations = function () {
    this.charactersAnimationsHandler = new P.CharactersAnimationsHandler(this.dialogDisp);
    this.charactersAnimationsHandler.loadAnimations();
  };
  GeneralsHubDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.ambientAnimationsHandler.isLoaded) {
      this.ambientAnimationsHandler.startAnimations();
    }
    if (this.charactersAnimationsHandler.isLoaded) {
      this.charactersAnimationsHandler.startAnimations();
    }
    this.rewardsComponent.show();
    C.CastleModel.generalsData.requestQuestUpdateData();
    this.controller.addEventListener(r.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.fillResources));
    h.CastleBasicController.getInstance().addEventListener(r.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.fillResources));
    this.fillResources();
    this.charactersAnimationsHandler.animationsLoadedSignal.add(this.bindFunction(this.onCharactersAnimationsLoaded));
    this.questsComponent.show();
    this.dialogDisp.mc_silhouette.visible = false;
    this.dialogDisp.mc_door_opened.visible = false;
    this.generalHubIntroductionHandler.onShow();
    this.foldInCurrencies();
  };
  GeneralsHubDialog.prototype.foldOutCurrencies = function () {
    for (var e = 0; e <= 2; e++) {
      this.dialogDisp.mc_offerings["item_" + e].bg.alpha = 0.7;
    }
    for (var t = 1; t <= 3; t++) {
      for (var i = 0; i < this.AMOUNT_OF_CURRENCIES_PER_ROW; i++) {
        var n = this.dialogDisp.mc_offerings["itemAdd_" + (t - 1) + "_" + i];
        n.visible = n.mc_icon.numChildren > 0;
      }
    }
    this.dialogDisp.mc_offerings.btn_close.visible = true;
  };
  GeneralsHubDialog.prototype.foldInCurrencies = function () {
    for (var e = 0; e <= 2; e++) {
      this.dialogDisp.mc_offerings["item_" + e].bg.alpha = 0.3;
    }
    for (var t = 1; t <= 3; t++) {
      for (var i = 0; i < this.AMOUNT_OF_CURRENCIES_PER_ROW; i++) {
        this.dialogDisp.mc_offerings["itemAdd_" + (t - 1) + "_" + i].visible = false;
      }
    }
    this.dialogDisp.mc_offerings.btn_close.visible = false;
  };
  GeneralsHubDialog.prototype.fillResources = function (e = null) {
    this.itxt_c2.textContentVO.numberValue = C.CastleModel.currencyData.c2Amount;
    this.itxt_t0.textContentVO.numberValue = C.CastleModel.currencyData.getAmountById(_.ClientConstCurrency.ID_FAT_KING_TOKEN);
    this.itxt_t1.textContentVO.numberValue = C.CastleModel.currencyData.getAmountById(_.ClientConstCurrency.ID_KNIGHT_TOKEN);
    this.itxt_t2.textContentVO.numberValue = C.CastleModel.currencyData.getAmountById(_.ClientConstCurrency.ID_PRINCESS_TOKEN);
    for (var t = 1; t <= 3; t++) {
      var i = C.CastleModel.generalsData.getGeneralsHubQuestVOByCharacterID(t);
      for (var n = 0; n < this.AMOUNT_OF_CURRENCIES_PER_ROW; n++) {
        var a = this.dialogDisp.mc_offerings["itemAdd_" + (t - 1) + "_" + n];
        var s = i.getTombolaOfferingCurrencyID(n + 1);
        if (a.mc_icon.numChildren > 0) {
          this.textFieldManager.registerTextField(a.txt_text, new g.CastleLocalizedNumberVO(C.CastleModel.currencyData.getAmountById(s), {
            compactThreshold: o.ClientConstTextIds.C1C2_COMPACT_THRESHOLD,
            compactFractionalDigits: 2
          }));
        }
      }
    }
    this.rewardsComponent.onCurrenciesUpdated();
    this.updateOverviewCounter();
  };
  GeneralsHubDialog.prototype.onCharactersAnimationsLoaded = function () {
    this.charactersAnimationsHandler.animationHoveredSignal.add(this.bindFunction(this.onAnimationHovered));
    this.charactersAnimationsHandler.animationUnhoveredSignal.add(this.bindFunction(this.onAnimationUnhovered));
  };
  GeneralsHubDialog.prototype.onAnimationHovered = function (e) {
    this.questsComponent.toggleShowHideElement(e, true);
  };
  GeneralsHubDialog.prototype.onAnimationUnhovered = function (e) {
    this.questsComponent.toggleShowHideElement(e, false);
  };
  GeneralsHubDialog.prototype.updateOverviewCounter = function () {
    var e = C.CastleModel.generalsData.getAmountOfUnlockOrUpgradeableGeneral();
    this.dialogDisp.btn_overview.mc_bubble.visible = e > 0;
    this.itxt_overviewCounter.textContentVO.numberValue = e;
  };
  GeneralsHubDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.charactersAnimationsHandler.animationsLoadedSignal.remove(this.bindFunction(this.onCharactersAnimationsLoaded));
    this.controller.removeEventListener(r.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.fillResources));
    h.CastleBasicController.getInstance().removeEventListener(r.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.fillResources));
    this.ambientAnimationsHandler.reset();
    this.charactersAnimationsHandler.reset();
    this.rewardsComponent.hide();
    this.generalHubIntroductionHandler.onHide();
    this.questsComponent.hide();
  };
  GeneralsHubDialog.prototype.onClick = function (t) {
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          if (this.rewardsComponent.disp.visible) {
            this.rewardsComponent.disp.visible = false;
            this.rewardsComponent.reshowElements();
          } else {
            this.hide();
          }
          break;
        case this.dialogDisp.btn_info:
          m.CastleDialogHandler.getInstance().registerDialogs(v.GeneralsHubInfoDialog);
          break;
        case this.dialogDisp.item_rubies.btn_payment:
          a.CastleOpenShopExecutor.open(a.CastleOpenShopExecutor.SOURCE_GENERAL_HUB, s.CXFSourceTrackingConstants.SOURCE_GENERALS_HUB);
          break;
        case this.dialogDisp.btn_help:
          O.CastleExternalDialog.dialogHandler.showHelper("", b.Localize.text("help_generals_inn_01"));
          break;
        case this.dialogDisp.btn_cinematics:
          m.CastleDialogHandler.getInstance().registerDialogs(D.GeneralIntroductionCinematicsPlaylistDialog);
          break;
        case this.dialogDisp.mc_offerings.btn_close:
          this.foldInCurrencies();
          break;
        case this.dialogDisp.mc_offerings.btn_open:
          this.foldOutCurrencies();
          break;
        case this.dialogDisp.btn_overview:
          this.hide();
          m.CastleDialogHandler.getInstance().registerDefaultDialogs(I.GeneralsOverviewDialog);
      }
    }
  };
  GeneralsHubDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var e = 1;
      if (this.disp.stage.stageHeight < e * 1440) {
        e = this.disp.stage.stageHeight / 1080;
      }
      if (this.disp.stage.stageWidth / this.disp.stage.stageHeight < 4 / 3) {
        e = Math.min(1, Math.min(e, this.disp.stage.stageWidth / 1440));
      }
      e = Math.min(e, 1);
      this.disp.x = this.disp.stage.stageWidth * 0.5;
      this.disp.y = this.disp.stage.stageHeight * 0.5;
      this.disp.scaleX = this.disp.scaleY = e;
      this.disp.x = this.disp.x | 0;
      this.disp.y = this.disp.y | 0;
      var t = Math.min(this.disp.stage.stageWidth, e * 1920) * 0.5 / e;
      var i = Math.min(this.disp.stage.stageHeight, e * 1440) * 0.5 / e;
      var n = 22 - i + this.dialogDisp.btn_close.height / 2;
      this.dialogDisp.btn_overview.x = 22 - t + 48;
      this.dialogDisp.btn_overview.y = n;
      this.dialogDisp.btn_info.x = 22 - t + this.dialogDisp.btn_info.width / 2;
      this.dialogDisp.btn_info.y = this.dialogDisp.btn_overview.y + 88;
      this.dialogDisp.btn_cinematics.x = this.dialogDisp.btn_info.x;
      this.dialogDisp.btn_cinematics.y = this.dialogDisp.btn_info.y + 83;
      this.dialogDisp.btn_close.x = t - 22 - this.dialogDisp.btn_close.width / 2;
      this.dialogDisp.btn_close.y = n;
      this.dialogDisp.btn_help.x = this.dialogDisp.btn_close.x - this.dialogDisp.btn_close.width / 2 - this.dialogDisp.btn_help.width / 2;
      this.dialogDisp.btn_help.y = n;
      this.dialogDisp.item_rubies.x = this.dialogDisp.btn_help.x - this.dialogDisp.btn_help.width / 2 - 60 - this.dialogDisp.item_rubies.width / 2;
      this.dialogDisp.item_rubies.y = n;
      this.dialogDisp.mc_offerings.x = this.dialogDisp.item_rubies.x - this.dialogDisp.item_rubies.width / 2 - 33 - this.dialogDisp.mc_offerings.width;
      this.dialogDisp.mc_offerings.y = n - this.dialogDisp.btn_info.height / 2;
      this.dialogDisp.mc_rewards.mc_freeOffering.y = this.dialogDisp.mc_rewards.mc_drawnRewardsAmounts.y = this.dialogDisp.mc_rewards.mc_payedOffering.y = i - 22 - this.dialogDisp.mc_rewards.mc_freeOffering.height / 2;
      this.dialogDisp.mc_rewards.mc_rewards.scaleX = this.dialogDisp.mc_rewards.mc_rewards.scaleY = Math.min(1, t * 2 / 1902);
      this.dialogDisp.mc_rewards.mc_rewards2.mc_slider.x = this.dialogDisp.btn_close.x + this.dialogDisp.btn_close.width / 2 - this.dialogDisp.mc_rewards.mc_rewards2.x - this.dialogDisp.mc_rewards.mc_rewards2.mc_slider.width;
      GeneralsHubDialog.showTokensInsteadOfGenerals = this.dialogDisp.mc_rewards.mc_rewards.height < 707.247261 && e < 0.55556 || this.dialogDisp.stage.stageWidth < this.dialogDisp.stage.stageHeight * 1.3;
      this.dialogDisp.mc_rewards.mc_rewards.y = this.dialogDisp.mc_rewards.mc_freeOffering.y - this.dialogDisp.mc_rewards.mc_freeOffering.height / 2 - Math.max(22, 44 / this.dialogDisp.mc_rewards.mc_rewards.scaleX) - this.dialogDisp.mc_rewards.mc_rewards.scaleX * 820 / 2;
    }
  };
  GeneralsHubDialog.NAME = "GeneralsHub_6";
  GeneralsHubDialog.showTokensInsteadOfGenerals = false;
  return GeneralsHubDialog;
}(O.CastleExternalDialog);
exports.GeneralsHubDialog = R;