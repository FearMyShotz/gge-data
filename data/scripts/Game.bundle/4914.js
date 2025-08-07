Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./48.js");
var a = require("./68.js");
var s = require("./9.js");
var r = require("./20.js");
var l = require("./8.js");
var c = require("./11.js");
var u = require("./6.js");
var d = require("./550.js");
var p = require("./404.js");
var h = require("./1664.js");
var g = require("./3.js");
var C = require("./13.js");
var _ = require("./4915.js");
var m = require("./4.js");
var f = require("./2.js");
var O = require("./19.js");
var E = require("./67.js");
var y = require("./25.js");
var b = require("./23.js");
var D = require("./16.js");
var I = require("./52.js");
var T = createjs.Point;
var v = function (e) {
  function MysteryBoxOpeningDialog() {
    var t = e.call(this, MysteryBoxOpeningDialog.NAME) || this;
    t._pagesToRewardItemsMap = new Map();
    t._currentPage = 1;
    t._maxPages = 1;
    t._countRewardAnimations = 1;
    t._isAnimatingRewardsPages = false;
    return t;
  }
  n.__extends(MysteryBoxOpeningDialog, e);
  MysteryBoxOpeningDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    l.ButtonHelper.initButtons([this.dialogDisp.btn_confirm, this.dialogDisp.btn_open_another, this.dialogDisp.btn_left, this.dialogDisp.btn_right], r.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_confirm.txt_label, new g.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_mysteryBoxSystem_mysteryBoxHUB_confirm"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_open_another.txt_label, new g.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("dialog_mysteryBoxSystem_mysteryBoxHUB_openAnotherBox"))).autoFitToBounds = true;
    this.dialogDisp.btn_confirm.txt_label.mouseEnabled = false;
    this.dialogDisp.btn_open_another.txt_label.mouseEnabled = false;
    this._animationBoxOpeningHandler = new h.MysteryBoxOpeningAnimationHandler(this.dialogDisp.mc_animation_box);
    this._animationRewardsHandler = new _.MysteryBoxRewardsAnimationHandler();
    this.dialogDisp.icon_key_progress.mouseChildren = false;
    this.dialogDisp.icon_key_progress.toolTipText = "dialog_mysteryBoxSystem_keyDraws_basics_tooltip";
    this.dialogDisp.hud_deco_darkbrown_circle_32.mouseChildren = false;
    this.dialogDisp.hud_deco_darkbrown_circle_32.toolTipText = "dialog_mysteryBoxSystem_keyDraws_basics_tooltip";
    this.bg.alpha = 0.65;
  };
  MysteryBoxOpeningDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._isFirstTimeFill = false;
    this._wasBarFilled = false;
    this.updateOpenBoxTooltip();
    var i = this.dialogProperties.oldProgressValue;
    var n = m.CastleModel.lootBoxData.getMysteryKeyProgressMax();
    this.dialogDisp.mc_progress.mc_bar.scaleX = Math.min(i / n, 1);
    this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_copy, new g.LocalizedTextVO("numbersXY", [i, n]));
    this.dialogDisp.key_tooltip_area.toolTipText = "currency_name_" + this.getKeyNameByKeyId(this.dialogProperties.selectedKey);
    this.dialogDisp.icon_key.gotoAndStop(this.getKeyIconByKeyId(this.dialogProperties.selectedKey));
    this._iTxtKeysAmount = this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new g.LocalizedNumberVO(0));
    this.updateKeyAmount();
    this._currentPage = 1;
    this._countRewardAnimations = 1;
    this._maxPages = Math.ceil(this.dialogProperties.rewards.length / MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE);
    this._animationBoxOpeningHandler.animationCompleteSignal.add(this.bindFunction(this.OnAnimationBoxOpeningComplete));
    this._animationRewardsHandler.animationCompleteSignal.add(this.bindFunction(this.OnAnimationRewardsComplete));
    var o = m.CastleModel.lootBoxData.xml.getHighestCategoryForRewards(this.dialogProperties.tombolaId, this.dialogProperties.rewardIds);
    this._animationBoxOpeningHandler.startAnimation(this.dialogProperties.boxName, this.dialogProperties.boxRarity, o);
    this.distributeRewardItemsToPages();
    this.populateRewards();
    this.dialogDisp.btn_left.visible = false;
    this.dialogDisp.btn_right.visible = false;
    this.dialogDisp.btn_confirm.mouseChildren = false;
    this.dialogDisp.btn_open_another.mouseChildren = false;
    l.ButtonHelper.enableButton(this.dialogDisp.btn_confirm, false);
    l.ButtonHelper.enableButton(this.dialogDisp.btn_open_another, false);
  };
  MysteryBoxOpeningDialog.prototype.getKeyIconByKeyId = function (e) {
    var t = 0;
    switch (e) {
      case I.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON:
        t = 1;
        break;
      case I.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE:
        t = 2;
        break;
      case I.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC:
        t = 3;
        break;
      case I.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY:
        t = 4;
    }
    return t;
  };
  MysteryBoxOpeningDialog.prototype.getKeyNameByKeyId = function (e) {
    var t = "";
    switch (e) {
      case I.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON:
        t = "CommonMysteryBoxKey";
        break;
      case I.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE:
        t = "RareMysteryBoxKey";
        break;
      case I.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC:
        t = "EpicMysteryBoxKey";
        break;
      case I.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY:
        t = "LegendaryMysteryBoxKey";
    }
    return t;
  };
  MysteryBoxOpeningDialog.prototype.updateKeysInfo = function () {
    var e = false;
    if (this.dialogDisp.mc_progress.mc_bar.scaleX >= 1) {
      this.dialogDisp.mc_progress.useFilters(a.BitmapFilterHelper.FILTER_GLOW_STANDARD, false);
      this.dialogDisp.icon_key_progress.useFilters(a.BitmapFilterHelper.FILTER_GLOW_STANDARD, false);
      e = true;
    }
    if (this.dialogProperties.barTimesFilled > 0) {
      this._wasBarFilled = true;
      if (e) {
        b.TweenLite.delayedCall(1, this.bindFunction(this.updateKeysProgress));
      } else {
        this.updateKeysProgress();
      }
    }
    this.dialogProperties.barTimesFilled--;
  };
  MysteryBoxOpeningDialog.prototype.updateKeysProgress = function () {
    var e;
    var t;
    var i;
    var n;
    var o = this.dialogProperties.progressValue;
    var s = m.CastleModel.lootBoxData.getMysteryKeyProgressMax();
    var r = 0.5;
    if (this.dialogProperties.barTimesFilled > 0) {
      if (this.dialogProperties.progressValue == 0 && this._isFirstTimeFill) {
        o = s - 1;
        e = 0;
        this.dialogDisp.mc_progress.mc_bar.scaleX = Math.min(e / s, 1);
        this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_copy, new g.LocalizedTextVO("numbersXY", [e, s]));
        n = s;
      } else {
        e = o = this.dialogProperties.oldProgressValue;
        this.dialogDisp.mc_progress.mc_bar.scaleX = Math.min(e / s, 1);
        this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_copy, new g.LocalizedTextVO("numbersXY", [e, s]));
        n = s - o;
      }
      this.dialogDisp.mc_progress.useFilters(a.BitmapFilterHelper.NO_FILTER, false);
      this.dialogDisp.icon_key_progress.useFilters(a.BitmapFilterHelper.NO_FILTER, false);
      i = 1;
      t = s;
      r = s - 1 > this.dialogProperties.oldProgressValue ? 3 : 0.5;
    } else {
      if (this._wasBarFilled && this.dialogProperties.progressValue != 0) {
        e = 0;
        this.dialogDisp.mc_progress.useFilters(a.BitmapFilterHelper.NO_FILTER, false);
        this.dialogDisp.icon_key_progress.useFilters(a.BitmapFilterHelper.NO_FILTER, false);
        this.dialogDisp.mc_progress.mc_bar.scaleX = 0;
        r = 3;
        n = o;
      } else {
        e = o - 1;
      }
      i = Math.min(o / s, 1);
      t = o;
      if (!this._wasBarFilled) {
        n = 1;
      }
    }
    var l = {
      value: e
    };
    b.TweenLite.to(l, r, {
      value: t,
      onUpdateParams: [l],
      onUpdate: this.bindFunction(this.updateValues),
      ease: b.SteppedEase.config(n)
    });
    b.TweenLite.to(this.dialogDisp.mc_progress.mc_bar, r, {
      scaleX: i,
      onComplete: this.bindFunction(this.updateKeysInfo)
    });
    this._isFirstTimeFill = true;
  };
  MysteryBoxOpeningDialog.prototype.updateValues = function (e) {
    var t = u.int(e.value);
    if (t <= m.CastleModel.lootBoxData.getMysteryKeyProgressMax()) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_progress.txt_copy, new g.LocalizedTextVO("numbersXY", [t, m.CastleModel.lootBoxData.getMysteryKeyProgressMax()]));
    }
  };
  MysteryBoxOpeningDialog.prototype.updateKeyAmount = function () {
    var e = 0;
    if (this.dialogProperties.selectedKey > I.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON) {
      e = m.CastleModel.currencyData.getAmountById(this.dialogProperties.selectedKey);
      this._iTxtKeysAmount.textContentVO.numberValue = e;
      this._iTxtKeysAmount.color = e <= 0 ? D.ClientConstColor.GENERIC_BRIGHT_RED : D.ClientConstColor.GENERIC_WHITE;
      this.dialogDisp.txt_amount.visible = true;
      this.dialogDisp.icon_infinity.visible = false;
    } else {
      this.dialogDisp.txt_amount.visible = false;
      this.dialogDisp.icon_infinity.visible = true;
    }
  };
  MysteryBoxOpeningDialog.prototype.OnAnimationBoxOpeningComplete = function () {
    this._animationRewardsHandler.playAnimation(this.getRewardItemsForPage(this._currentPage));
    if (this._countRewardAnimations == 1) {
      this._countRewardAnimations = this._pagesToRewardItemsMap.size;
    }
    this.updateKeysProgress();
    this.updateKeyAmount();
  };
  MysteryBoxOpeningDialog.prototype.resetRewardItems = function () {
    var e;
    for (var t = 1; t <= MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE; t++) {
      for (var i = 1; i <= t; i++) {
        e = this.dialogDisp["mc_animation_rewards" + t + "_" + i];
        f.MovieClipHelper.clearMovieClip(e.mc_icon);
        e.visible = false;
      }
    }
  };
  MysteryBoxOpeningDialog.prototype.distributeRewardItemsToPages = function () {
    this._pagesToRewardItemsMap.clear();
    var e;
    var t = this.dialogProperties.rewards.length;
    var i = 1;
    for (var n = 0; n < this._maxPages; n++) {
      e = t < MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE ? t : MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE;
      this._pagesToRewardItemsMap.set(i, this.createRewardsArrayForPage(e));
      i++;
      t -= e;
    }
  };
  MysteryBoxOpeningDialog.prototype.createRewardsArrayForPage = function (e) {
    var t;
    var i = [];
    for (var n = 1; n <= e; n++) {
      if (t = this.dialogDisp["mc_animation_rewards" + e + "_" + n]) {
        i.push(t);
      }
    }
    return i;
  };
  MysteryBoxOpeningDialog.prototype.getRewardItemsForPage = function (e) {
    return this._pagesToRewardItemsMap.get(e);
  };
  MysteryBoxOpeningDialog.prototype.OnAnimationRewardsComplete = function () {
    if (this._countRewardAnimations > 1) {
      this._countRewardAnimations--;
      this._currentPage++;
      this._isAnimatingRewardsPages = true;
      b.TweenLite.delayedCall(1, this.bindFunction(this.switchPage));
    } else {
      this._countRewardAnimations = 1;
      this._isAnimatingRewardsPages = false;
      l.ButtonHelper.enableButton(this.dialogDisp.btn_left, true);
      l.ButtonHelper.enableButton(this.dialogDisp.btn_right, true);
      l.ButtonHelper.enableButton(this.dialogDisp.btn_confirm, true);
      var e = m.CastleModel.lootBoxData.getLootBoxesForCurrentType(this.dialogProperties.boxName, this.dialogProperties.boxRarity).length;
      var t = m.CastleModel.currencyData.getAmountById(this.dialogProperties.selectedKey);
      var i = m.CastleModel.currencyData.getXmlCurrencyById(this.dialogProperties.selectedKey).rareness == 1;
      l.ButtonHelper.enableButton(this.dialogDisp.btn_open_another, e > 0 && (t > 0 || i));
    }
  };
  MysteryBoxOpeningDialog.prototype.onClick = function (t) {
    if (l.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_confirm:
          this.hide();
          s.CastleDialogHandler.getInstance().registerDefaultDialogs(p.RewardHubMainDialog, new d.RewardHubDialogProperties(false, p.RewardHubMainDialog.TAB_MYSTERY_BOXES));
          break;
        case this.dialogDisp.btn_open_another:
          this.openAnotherBox();
          break;
        case this.dialogDisp.btn_left:
          this._currentPage--;
          this.switchPage();
          break;
        case this.dialogDisp.btn_right:
          this._currentPage++;
          this.switchPage();
      }
    }
  };
  MysteryBoxOpeningDialog.prototype.switchPage = function () {
    l.ButtonHelper.enableButton(this.dialogDisp.btn_left, !this._isAnimatingRewardsPages);
    l.ButtonHelper.enableButton(this.dialogDisp.btn_right, !this._isAnimatingRewardsPages);
    if (this._currentPage > 1) {
      this.dialogDisp.btn_left.visible = true;
    } else {
      this.dialogDisp.btn_left.visible = false;
    }
    if (this._currentPage < this._maxPages) {
      this.dialogDisp.btn_right.visible = true;
    } else {
      this.dialogDisp.btn_right.visible = false;
    }
    this.populateRewards();
    this._animationRewardsHandler.playAnimation(this.getRewardItemsForPage(this._currentPage));
  };
  MysteryBoxOpeningDialog.prototype.populateRewards = function () {
    this.resetRewardItems();
    var e = new o.CollectableList();
    for (var t = 0; t < MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE; t++) {
      e.addItem(this.dialogProperties.rewards.getItemByIndex((this._currentPage - 1) * MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE + t));
    }
    y.CollectableRenderHelper.displayMultipleItemsComplete(this, new E.CollectableRenderClipsList().createByItemMcList(this.getRewardItemsForPage(this._currentPage)).addItemMcs("mc_item").addInfoBtns("parent.btn_info").addBuildingLevelMc("mc_item.mc_buildingLevel"), e, new O.CollectableRenderOptions(O.CollectableRenderOptions.SET_DEFAULT, new T(60, 60)), null, this.bindFunction(this.afterRenderFunc));
  };
  MysteryBoxOpeningDialog.prototype.afterRenderFunc = function (e) {
    if (e.itemVE) {
      e.itemVE.iconContainer.uncacheAllChildren();
    }
  };
  MysteryBoxOpeningDialog.prototype.updateOpenBoxTooltip = function () {
    if (m.CastleModel.lootBoxData.getLootBoxesForCurrentType(this.dialogProperties.boxName, this.dialogProperties.boxRarity).length <= 0) {
      this.dialogDisp.btn_open_another.toolTipText = g.Localize.text("dialog_mysteryBoxSystem_mysteryBoxHUB_openAnotherBox_noMoreBoxes");
    } else if (m.CastleModel.currencyData.getAmountById(this.dialogProperties.selectedKey) <= 0 && m.CastleModel.currencyData.getXmlCurrencyById(this.dialogProperties.selectedKey).rareness != 1) {
      this.dialogDisp.btn_open_another.toolTipText = g.Localize.text("dialog_mysteryBoxSystem_mysteryBoxHUB_openAnotherBox_noMoreKeys");
    } else {
      this.dialogDisp.btn_open_another.toolTipText = g.Localize.text("dialog_mysteryBoxSystem_keyDraws_basics_tooltip");
    }
  };
  MysteryBoxOpeningDialog.prototype.openAnotherBox = function () {
    m.CastleModel.lootBoxData.openLootBox(this.dialogProperties.boxId, this.dialogProperties.selectedKey, false);
    this.hideLoaded();
  };
  MysteryBoxOpeningDialog.prototype.hideLoaded = function (t = null) {
    this._animationBoxOpeningHandler.animationCompleteSignal.remove(this.bindFunction(this.OnAnimationBoxOpeningComplete));
    this._animationRewardsHandler.animationCompleteSignal.remove(this.bindFunction(this.OnAnimationRewardsComplete));
    this._animationBoxOpeningHandler.reset();
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(MysteryBoxOpeningDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  MysteryBoxOpeningDialog.NAME = "MysteryBoxOpening";
  MysteryBoxOpeningDialog.MAX_REWARDS_PER_PAGE = 6;
  return MysteryBoxOpeningDialog;
}(c.CastleExternalDialog);
exports.MysteryBoxOpeningDialog = v;