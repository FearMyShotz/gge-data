Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./1267.js");
var u = require("./179.js");
var d = require("./50.js");
var p = require("./12.js");
var h = require("./45.js");
var g = require("./48.js");
var C = require("./31.js");
var _ = require("./104.js");
var m = require("./19.js");
var f = require("./46.js");
var O = require("./13.js");
var E = require("./4.js");
var y = require("./9.js");
var b = require("./24.js");
var D = require("./20.js");
var I = require("./76.js");
var T = require("./78.js");
var v = require("./77.js");
var S = require("./8.js");
var A = require("./25.js");
var L = require("./415.js");
var P = createjs.Point;
var M = createjs.MouseEvent;
var R = require("./23.js");
var V = require("./23.js");
var x = require("./167.js");
var w = require("./594.js");
var B = require("./206.js");
var F = require("./164.js");
var N = require("./903.js");
var k = require("./2239.js");
var U = function (e) {
  function GeneralsHubRewardsComponent(t) {
    var i = e.call(this, t) || this;
    i.MAX_REWARD_ITEMS = 4;
    i.completeCounter = 0;
    i._allTest = 100;
    i.pausePayButton = false;
    i.doorMC = i.disp.parent.mc_door_opened;
    i.heroMC = i.disp.parent.mc_silhouette;
    i.collRenderList = new _.CollectableRendererList();
    i.collRenderRewards = [];
    for (var n = 0; n < i.MAX_REWARD_ITEMS; n++) {
      i.collRenderRewards.push(new _.CollectableRendererList());
    }
    S.ButtonHelper.initButtons([i.dialogDisp.mc_payedOffering.btn_start_paid, i.dialogDisp.mc_payedOffering.btn_minus, i.dialogDisp.mc_payedOffering.btn_plus, i.dialogDisp.mc_payedOffering.btn_max, i.dialogDisp.mc_payedOffering.btn_buyToken, i.dialogDisp.mc_freeOffering.btn_confirm], D.ClickFeedbackButtonHover, 1);
    i.inputTextField = new w.SelectInputFieldComponent(i.dialogDisp.mc_payedOffering.mc_pickerTxt, i.bindFunction(i.onPercentValueInput), "1");
    i.inputTextField.searchField.restrict = "0-9";
    i.elementsToHideWhileRewardsShowing = [i.disp.parent.btn_cinematics];
    i.textFieldManager.registerTextField(i.dialogDisp.mc_drawnRewardsAmounts.txt_copy1, new r.LocalizedTextVO("rewards_colon"));
    i.textFieldManager.registerTextField(i.dialogDisp.mc_drawnRewardsAmounts.txt_copy2, new r.LocalizedTextVO("offerings_colon"));
    return i;
  }
  n.__extends(GeneralsHubRewardsComponent, e);
  Object.defineProperty(GeneralsHubRewardsComponent.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsHubRewardsComponent.prototype, "currentInventoryAmountOfferingCurrency", {
    get: function () {
      return E.CastleModel.currencyData.getAmountById(E.CastleModel.generalsData.lastPayedQuestCurrency);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubRewardsComponent.prototype.onCurrenciesUpdated = function () {
    if (!(E.CastleModel.generalsData.lastPayedQuestCurrency <= 0) && !!this.currentQuestVO) {
      this.setSelectedAmount(o.MathBase.clamp(this.currentInventoryAmountOfferingCurrency, 0, this.maxOfferings));
      this.updateButtons();
    }
  };
  GeneralsHubRewardsComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (S.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.mc_payedOffering.btn_start_paid:
          o.BasicModel.smartfoxClient.sendCommandVO(new c.C2SSpinCharacterTombolaVO(this.currentQuestVO.characterID, E.CastleModel.generalsData.lastPayedQuestCurrency, 0, this.selectedAmount));
          S.ButtonHelper.enableButton(this.dialogDisp.mc_payedOffering.btn_start_paid, false);
          this.pausePayButton = true;
          break;
        case this.dialogDisp.mc_freeOffering.btn_confirm:
          o.BasicModel.smartfoxClient.sendCommandVO(new c.C2SSpinCharacterTombolaVO(this.currentQuestVO.characterID, E.CastleModel.generalsData.lastPayedQuestCurrency, 1, 1));
          break;
        case this.dialogDisp.mc_payedOffering.btn_minus:
          this.setSelectedAmount(this.selectedAmount > 1 ? this.selectedAmount - 1 : 1);
          break;
        case this.dialogDisp.mc_payedOffering.btn_plus:
          this.setSelectedAmount(this.selectedAmount < this.maxOfferings ? this.selectedAmount + 1 : this.maxOfferings);
          break;
        case this.dialogDisp.mc_payedOffering.btn_max:
          this.setSelectedAmount(this.maxOfferings);
          break;
        case this.dialogDisp.mc_payedOffering.btn_buyToken:
          var i = new x.CastleGenericBuyDialogProperties();
          i.eventPackageVO = this.getTokenPackageVO();
          i.buyType = s.PackageConst.BUY_TYPE_OFFERINGS;
          y.CastleDialogHandler.getInstance().registerDefaultDialogs(B.ModernPackageShopBuyDialog, i);
      }
    }
  };
  GeneralsHubRewardsComponent.prototype.getTokenPackageVO = function () {
    return this.currentQuestVO.getPackageVOForCurrencyID(E.CastleModel.generalsData.lastPayedQuestCurrency);
  };
  Object.defineProperty(GeneralsHubRewardsComponent.prototype, "maxOfferings", {
    get: function () {
      return Math.min(s.TombolaConst.BATCH_OPENING_SPIN_CAP, this.currentInventoryAmountOfferingCurrency);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubRewardsComponent.prototype.onPercentValueInput = function () {
    var e = o.MathBase.clamp(this.selectedAmount, 1, this.maxOfferings);
    this.setSelectedAmount(e);
  };
  GeneralsHubRewardsComponent.prototype.setSelectedAmount = function (e) {
    this.inputTextField.updateText(e.toString());
    this.updateButtons();
  };
  Object.defineProperty(GeneralsHubRewardsComponent.prototype, "selectedAmount", {
    get: function () {
      return parseInt(this.inputTextField.text);
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubRewardsComponent.prototype.updateButtons = function () {
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_payedOffering.btn_start_paid.txt_label, new r.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_gachaPayout_drawAgain_button")));
    o.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.mc_freeOffering.btn_confirm.txt_label, new r.TextVO(O.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_gachaPayout_freeDraw_button")));
    var e = this.currentQuestVO.availableQuests > 0 && E.CastleModel.generalsData.lastPayedQuestCurrency == this.currentQuestVO.getTombolaOfferingCurrencyIDByTombolaID(this.currentQuestVO.freeOpeningTombolaID);
    this.dialogDisp.mc_payedOffering.visible = !e;
    this.dialogDisp.mc_freeOffering.visible = e;
    var t = h.CollectableHelper.createVO(p.CollectableEnum.GENERIC_CURRENCY, 1, E.CastleModel.generalsData.lastPayedQuestCurrency);
    var i = new m.CollectableRenderOptions(m.CollectableRenderOptions.ICON, new P(38, 38));
    i.icon.useDropShadowIcon = true;
    var n = new m.CollectableRenderOptions(m.CollectableRenderOptions.ICON, new P(54, 54));
    var a = new C.CollectableRenderClips().addIconMc(this.dialogDisp.mc_payedOffering.btn_start_paid.mc_icon);
    var s = new C.CollectableRenderClips().addIconMc(this.dialogDisp.mc_payedOffering.mc_icon);
    var c = new C.CollectableRenderClips().addIconMc(this.dialogDisp.mc_freeOffering.mc_icon);
    A.CollectableRenderHelper.displaySingleItemComplete(this.collRenderList, a, t, i);
    A.CollectableRenderHelper.displaySingleItemComplete(this.collRenderList1, s, t, n);
    A.CollectableRenderHelper.displaySingleItemComplete(this.collRenderList2, c, t, n);
    S.ButtonHelper.enableButton(this.dialogDisp.mc_payedOffering.btn_start_paid, this.currentInventoryAmountOfferingCurrency > 0 && this.selectedAmount > 0 && !this.pausePayButton);
    S.ButtonHelper.enableButton(this.dialogDisp.mc_payedOffering.btn_minus, this.currentInventoryAmountOfferingCurrency > 0);
    S.ButtonHelper.enableButton(this.dialogDisp.mc_payedOffering.btn_plus, this.currentInventoryAmountOfferingCurrency > 0);
    S.ButtonHelper.enableButton(this.dialogDisp.mc_payedOffering.btn_max, this.currentInventoryAmountOfferingCurrency > 0);
    this.dialogDisp.mc_payedOffering.mc_pickerTxt.mouseChildren = this.currentInventoryAmountOfferingCurrency > 0;
    if (this.currentInventoryAmountOfferingCurrency <= 0) {
      this.inputTextField.searchField.color = l.ClientConstColor.MODERN_RED;
    } else {
      this.inputTextField.searchField.color = l.ClientConstColor.MODERN_DEFAULT;
    }
    this.dialogDisp.mc_payedOffering.btn_start_paid.toolTipText = S.ButtonHelper.isButtonEnabled(this.dialogDisp.mc_payedOffering.btn_start_paid) || this.pausePayButton ? null : {
      t: "dialog_generals_inn_gachaPayout_drawAgain_noMoreOfferings_tooltip",
      p: [t.getNameTextId()]
    };
    this.dialogDisp.mc_payedOffering.btn_buyToken.toolTipText = {
      t: "dialog_generals_inn_buyOffering_placeholder_tooltip",
      p: [t.getNameTextId()]
    };
    this.dialogDisp.mc_payedOffering.btn_buyToken.visible = !!this.getTokenPackageVO();
  };
  GeneralsHubRewardsComponent.prototype.onRewardsGained = function (e) {
    this.completeCounter = 0;
    this.currentQuestVO = e.params[0];
    var t = e.params[1];
    this._allTest = 100;
    this.pausePayButton = false;
    this.updateButtons();
    var i = [];
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      var a = o.R;
      var s = new g.CollectableList();
      var r = o.A ? o.A : 1;
      if (o.RR) {
        for (var l = 0; l < r; l++) {
          s.addList(d.CollectableManager.parser.s2cParamList.createList(o.RR), E.CastleModel.generalsData.lastPayedQuestCurrencyAmount > 1);
        }
      } else if (o.RW) {
        for (var c = 0; c < r; c++) {
          s.addList(E.CastleModel.rewardData.getListByIdArray(o.RW, E.CastleModel.generalsData.lastPayedQuestCurrencyAmount > 1));
        }
      }
      for (var u = 0; u < s.length; u++) {
        i.push({
          R: a,
          RW: s.getItemByIndex(u)
        });
      }
    }
    i.sort(this.bindFunction(this.sortByRarity));
    var p = E.CastleModel.generalsData.lastPayedQuestCurrencyAmount > 1;
    this.dialogDisp.parent.mouseChildren = p;
    this.dialogDisp.mc_rewards.visible = !p;
    this.dialogDisp.mc_rewards2.visible = p;
    if (p) {
      this.showRewardCount();
      this.showRewardMultiList(i);
    } else {
      this.hideRewardCount();
      this.showRewardsBig(i);
    }
    if (this.dialogDisp.visible) {
      this.onOverlayShow();
    } else {
      this.startGainAnimation();
    }
  };
  GeneralsHubRewardsComponent.prototype.sortByRarity = function (e, t) {
    if (!a.instanceOfClass(e.RW, "CollectableItemGenericCurrencyVO") && a.instanceOfClass(t.RW, "CollectableItemGenericCurrencyVO")) {
      return 1;
    }
    if (a.instanceOfClass(e.RW, "CollectableItemGenericCurrencyVO") && !a.instanceOfClass(t.RW, "CollectableItemGenericCurrencyVO")) {
      return -1;
    }
    if (a.instanceOfClass(e.RW, "CollectableItemGenericCurrencyVO") && a.instanceOfClass(t.RW, "CollectableItemGenericCurrencyVO")) {
      if (e.RW.isInIdRange(E.CastleModel.currencyData.getGeneralItemsIdRange()) && !t.RW.isInIdRange(E.CastleModel.currencyData.getGeneralItemsIdRange())) {
        return -1;
      }
      if (!e.RW.isInIdRange(E.CastleModel.currencyData.getGeneralItemsIdRange()) && t.RW.isInIdRange(E.CastleModel.currencyData.getGeneralItemsIdRange())) {
        return 1;
      }
      if (e.RW.isInIdRange(E.CastleModel.currencyData.getGeneralItemsIdRange()) && t.RW.isInIdRange(E.CastleModel.currencyData.getGeneralItemsIdRange())) {
        return t.RW.id - e.RW.id;
      }
    }
    return t.R - e.R;
  };
  GeneralsHubRewardsComponent.prototype.randomSort = function (e, t) {
    return o.MathBase.random(-1, 1);
  };
  GeneralsHubRewardsComponent.prototype.showRewardsBig = function (e) {
    var t = e.slice(0, this.MAX_REWARD_ITEMS);
    t.sort(this.bindFunction(this.randomSort));
    this.shownRewards = t;
    for (var i = 0; i < this.MAX_REWARD_ITEMS; i++) {
      var n = this.dialogDisp.mc_rewards["mc_item" + i];
      var a = t.length > i ? t[i].RW : null;
      if (this.showCurrencyAsGeneral(a)) {
        this.showGeneralReward(n, a, i);
      } else {
        this.showNormalReward(n, a, i);
      }
      n = this.dialogDisp["mc_animation" + i];
      o.MovieClipHelper.clearMovieClip(n);
    }
  };
  GeneralsHubRewardsComponent.prototype.showNormalReward = function (e, t, i) {
    e.visible = false;
    e.mc_item.visible = true;
    if (t) {
      o.MovieClipHelper.clearMovieClip(e.mc_general);
      o.MovieClipHelper.clearMovieClip(e.mc_icon);
      var n = new m.CollectableRenderOptions(m.CollectableRenderOptions.SET_ADVANCED, new P(173, 173));
      n.icon.unitLevelDimension = new P(70, 70);
      n.icon.unitLevelOffset = new P(-70, -70);
      var a = new C.CollectableRenderClips(e.mc_item.mc_item).addIconMc(e.mc_item.mc_item.mc_icon).addBuildingLevelMc(e.mc_item.mc_item.mc_buildingLevel).addTextfieldBgMc(e.mc_item.mc_item.text_bg).addTextfield(e.mc_item.mc_item.txt_text).addInfoBtn(e.mc_item.btn_info);
      o.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_copy, new r.LocalizedTextVO(t.getNameTextId())).visible = false;
      o.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_title, new r.LocalizedTextVO(t.getNameTextId())).visible = false;
      A.CollectableRenderHelper.displaySingleItemComplete(this.collRenderRewards[i], a, t, n);
    }
  };
  GeneralsHubRewardsComponent.prototype.showGeneralReward = function (e, t, i) {
    e.visible = false;
    e.mc_item.visible = false;
    if (t) {
      var n = E.CastleModel.generalsData.getGeneralXMLVOByTokenID(t.id);
      var a = n.generalID;
      o.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_copy, new r.LocalizedTextVO(t.getNameTextId())).visible = false;
      o.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_title, new r.LocalizedTextVO(n.nameTextID)).visible = false;
      o.MovieClipHelper.clearMovieClip(e.mc_general);
      o.MovieClipHelper.clearMovieClip(e.mc_icon);
      if (N.GeneralsHubDialog.showTokensInsteadOfGenerals) {
        var s = new C.CollectableRenderClips(e.mc_icon).addIconMc(e.mc_icon);
        var l = new m.CollectableRenderOptions(m.CollectableRenderOptions.SET_ADVANCED, new P(250, 250));
        A.CollectableRenderHelper.displaySingleItemComplete(this.collRenderRewards[i], s, t, l);
      } else {
        e.mc_general.addChild(F.GeneralsHelper.getGeneralClip(a, true, 1));
      }
      e.mc_general.mouseChildren = false;
      e.mc_icon.mouseChildren = false;
      e.mc_general.toolTipText = e.mc_icon.toolTipText = n.nameTextID;
    }
  };
  GeneralsHubRewardsComponent.prototype.startGainAnimation = function () {
    this.doorMC.visible = false;
    this.heroMC.visible = false;
    V.TweenMax.fromTo(this.doorMC, 0, {
      visible: false
    }, {
      visible: true,
      delay: 0.5,
      repeat: 1
    });
    V.TweenMax.fromTo(this.heroMC, 0, {
      visible: false
    }, {
      visible: true,
      delay: 0.5,
      repeat: 1
    });
    V.TweenMax.fromTo(this.dialogDisp, 0, {
      visible: false
    }, {
      visible: true,
      delay: 1.5,
      repeat: 1,
      onComplete: this.bindFunction(this.onOverlayShow)
    });
  };
  GeneralsHubRewardsComponent.prototype.onOverlayShow = function () {
    var e = [];
    this.setSelectedAmount(o.MathBase.clamp(this.currentInventoryAmountOfferingCurrency, 0, s.TombolaConst.BATCH_OPENING_SPIN_CAP));
    this.doorMC.visible = false;
    this.heroMC.visible = false;
    this.elementsToHideWhileRewardsShowing.forEach(function (e) {
      e.visible = false;
    });
    if (E.CastleModel.generalsData.lastPayedQuestCurrencyAmount > 1) {
      this.animateRewardList();
    } else {
      for (var t = 0; t < this.shownRewards.length; t++) {
        var i = undefined;
        var n = this.dialogDisp.mc_rewards["mc_animation" + t];
        o.MovieClipHelper.clearMovieClip(n);
        this.shownRewards[t].RW;
        if (this.shownRewards[t].R && this.shownRewards[t].R > 0) {
          switch (this.shownRewards[t].R) {
            case 1:
              i = "_Common";
              break;
            case 2:
              i = "_Rare";
              break;
            case 3:
              i = "_Epic";
              break;
            case 4:
              i = "_Legendary";
          }
        } else {
          i = "_Common";
        }
        e.push(n);
        var a = new b.CastleGoodgameExternalClip("RewardAnimation" + i, f.IsoHelper.view.getAssetFileURL("Rewards_Animation"), null, 24, false);
        n.addChild(a);
        a.doWhenLoaded(this.bindFunction(this.onLoaded));
        n.visible = true;
        n.alpha = i == "_Common" ? 0.9 : 1;
      }
      var r = 0;
      for (t = 0; t < this.shownRewards.length; t++, r += 0.2) {
        V.TweenMax.fromTo(e[t], 0, {}, {
          delay: r,
          repeat: 1,
          onComplete: this.bindFunction(this.onStartSingleRewardAnim),
          onCompleteParams: [e[t], this.dialogDisp.mc_rewards["mc_item" + t]]
        });
      }
    }
  };
  GeneralsHubRewardsComponent.prototype.isCrurrencyForGeneral = function (e) {
    return !!e && e.itemType == p.CollectableEnum.GENERIC_CURRENCY && E.CastleModel.generalsData.getGeneralXMLVOByTokenID(e.id) != null;
  };
  GeneralsHubRewardsComponent.prototype.showCurrencyAsGeneral = function (e) {
    if (!e) {
      return false;
    }
    if (e.itemType != p.CollectableEnum.GENERIC_CURRENCY) {
      return false;
    }
    var t = E.CastleModel.generalsData.getGeneralXMLVOByTokenID(e.id);
    if (!t) {
      return false;
    }
    var i = E.CastleModel.generalsData.playerGenerals.get(t.generalID);
    var n = E.CastleModel.currencyData.getAmountById(e.id);
    return (!i || !i.isUnlocked) && n >= t.rarity.unlockCosts || !!i && !!i.isUnlocked && !!(i.requiredShards > 0) && !!(n >= i.requiredShards);
  };
  GeneralsHubRewardsComponent.prototype.onLoaded = function (e) {
    e.currentshownDisplayObject.scaleX = 1.8;
    e.currentshownDisplayObject.scaleY = 2.2;
    e.currentshownDisplayObject.gotoAndStop(0);
  };
  GeneralsHubRewardsComponent.prototype.onStartSingleRewardAnim = function (e, t) {
    if (e.getChildAt(0)) {
      e.getChildAt(0).currentshownDisplayObject.gotoAndPlay(1);
    }
    t.alpha = 0;
    t.visible = true;
    V.TweenMax.fromTo(t, 0.5, {
      alpha: 0,
      scaleY: 1.2
    }, {
      alpha: 1,
      scaleY: 1,
      ease: R.Linear.easeInOut,
      onComplete: this.bindFunction(this.onAnimationComplete)
    });
  };
  GeneralsHubRewardsComponent.prototype.onAnimationComplete = function () {
    this.completeCounter++;
    if (this.completeCounter >= this.shownRewards.length) {
      this.dialogDisp.parent.mouseChildren = true;
      this.doorMC.visible = false;
      this.heroMC.visible = false;
    }
  };
  GeneralsHubRewardsComponent.prototype.showRewardMultiList = function (e) {
    o.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_rewards2.mc_items);
    this.dialogDisp.parent.mouseChildren = false;
    var t = new v.InfiniteScrollListOptions(k.GeneralsHubDialogIMultiRewardItem, "GeneralsHubRewardRow", N.GeneralsHubDialog.NAME);
    t.itemPaddingY = 54;
    t.useSmoothScroll = true;
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    this._list = new T.InfiniteScrollListComponent(new I.InfiniteScrollListClips(this.dialogDisp.mc_rewards2).addSliderMc(this.dialogDisp.mc_rewards2.mc_slider).addMouseWheelAreaMc(this.dialogDisp.mc_rewards2).addItemMc(this.dialogDisp.mc_rewards2.mc_items), t);
    this._list.onShow();
    var i = [];
    var n = 0;
    for (var a = 0; a < e.length; a++) {
      if (i.length < n + 1) {
        i.push({
          rewards: []
        });
      }
      if (i[n].rewards.length >= 4) {
        n++;
        i.push({
          rewards: []
        });
      }
      i[n].rewards.push(e[a]);
    }
    this._list.updateWithNewData(i);
    this._list.onShow();
  };
  GeneralsHubRewardsComponent.prototype.animateRewardList = function () {
    var e = 0;
    for (var t = 0; t < this._list.items.length; t++) {
      if (this._list.items[t].isVisible) {
        for (var i = 0; i < 4; i++) {
          var n = this._list.items[t].getItemMc()["mc_item" + i];
          var o = this._list.items[t].getItemMc()["mc_icon" + i];
          V.TweenMax.fromTo(n, 0.5, {
            alpha: 0
          }, {
            alpha: 1,
            ease: R.Linear.easeInOut,
            delay: e
          });
          V.TweenMax.fromTo(o, 0.5, {
            alpha: 0
          }, {
            alpha: 1,
            ease: R.Linear.easeInOut,
            delay: e
          });
          e += 0.1;
        }
      }
    }
    V.TweenMax.fromTo(this.dialogDisp.parent, 0, {}, {
      mouseChildren: true,
      delay: 2
    });
  };
  GeneralsHubRewardsComponent.prototype.showRewardCount = function () {
    this.dialogDisp.mc_drawnRewardsAmounts.visible = true;
    this.dialogDisp.mc_payedOffering.x = -this.dialogDisp.mc_drawnRewardsAmounts.width / 2;
    var e = E.CastleModel.generalsData.lastPayedQuestCurrencyAmount;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_drawnRewardsAmounts.txt_amount1, new r.LocalizedNumberVO(e * 4));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_drawnRewardsAmounts.txt_amount2, new r.LocalizedNumberVO(e));
  };
  GeneralsHubRewardsComponent.prototype.hideRewardCount = function () {
    this.dialogDisp.mc_drawnRewardsAmounts.visible = false;
    this.dialogDisp.mc_payedOffering.x = 0;
  };
  GeneralsHubRewardsComponent.prototype.show = function () {
    e.prototype.show.call(this);
    this.doorMC.visible = false;
    this.heroMC.visible = false;
    this.disp.visible = false;
    for (var t = 0; t < this.MAX_REWARD_ITEMS; t++) {
      this.dialogDisp.mc_rewards["mc_animation" + t].visible = false;
    }
    E.CastleModel.generalsData.addEventListener(u.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onRewardsGained));
    this.disp.addEventListener(M.CLICK, this.bindFunction(this.onClick));
  };
  GeneralsHubRewardsComponent.prototype.hide = function () {
    e.prototype.hide.call(this);
    E.CastleModel.generalsData.removeEventListener(u.GeneralsEvent.GENERALS_HUB_REWARDS, this.bindFunction(this.onRewardsGained));
    this.disp.removeEventListener(M.CLICK, this.bindFunction(this.onClick));
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
  };
  GeneralsHubRewardsComponent.prototype.reshowElements = function () {
    this.elementsToHideWhileRewardsShowing.forEach(function (e) {
      e.visible = true;
    });
  };
  return GeneralsHubRewardsComponent;
}(L.BasicIngameUIComponent);
exports.GeneralsHubRewardsComponent = U;