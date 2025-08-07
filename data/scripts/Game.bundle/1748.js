Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./60.js");
var h = require("./28.js");
var g = require("./3659.js");
var C = require("./146.js");
var _ = require("./67.js");
var m = require("./19.js");
var f = require("./13.js");
var O = require("./4.js");
var E = require("./130.js");
var y = require("./271.js");
var b = require("./8.js");
var D = require("./11.js");
var I = require("./551.js");
var T = require("./3660.js");
var v = require("./3661.js");
var S = require("./1749.js");
var A = createjs.TimerEvent;
var L = createjs.Point;
var P = function (e) {
  function CastlePrivatePrimeDayOfferDynamicDialog() {
    var t = this;
    t.startIndex = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastlePrivatePrimeDayOfferDynamicDialog.NAME) || this;
  }
  n.__extends(CastlePrivatePrimeDayOfferDynamicDialog, e);
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._popoverComponent = new x.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(new y.SimplePopoverConfig("StatusPopover"));
    this._requestTimer = new s.Timer(CastlePrivatePrimeDayOfferDynamicDialog.REQUEST_TIMEOUT, 1);
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_left, this.dialogDisp.btn_right]);
    b.ButtonHelper.initButtons([this.dialogDisp.btn_redeem, this.dialogDisp.btn_buy_free, this.dialogDisp.btn_addC2, this.dialogDisp.btn_buy], F.ClickFeedbackButton);
    this.dialogDisp.btn_buy_free.mouseChildren = this.dialogDisp.btn_buy.mouseChildren = this.dialogDisp.btn_addC2.mouseChildren = this.dialogDisp.btn_redeem.mouseChildren = false;
    this.dialogDisp.btn_buy.visible = false;
    this.dialogDisp.btn_buy_free.visible = false;
    this.dialogDisp.btn_addC2.visible = false;
    this.dialogDisp.mc_progressbar.visible = false;
    this.dialogDisp.mc_voucherCode.visible = false;
    this.dialogDisp.btn_redeem.visible = false;
    this.startIndex = 0;
    if (this.dialogCustomization) {
      if (this.isChestOffer) {
        this.dialogDisp.btn_buy.visible = this.chestOfferCost.costC2 > 0;
        this.dialogDisp.btn_buy_free.visible = this.chestOfferCost.costC2 == 0;
        this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_value, new c.LocalizedNumberVO(this.chestOfferCost.costC2));
        this.textFieldManager.registerTextField(this.dialogDisp.btn_buy_free.txt_value, new r.TextVO(f.TextHelper.toUpperCaseLocaSafe(u.Localize.text("dialog_kingdomStart_prebuiltCastle_chooseCastle_forFree"))));
      }
      if (this.isPrimeDayOffer && !this.isVoucherOffer) {
        this.dialogDisp.btn_addC2.visible = true;
        this.dialogDisp.mc_progressbar.visible = true;
        this.addGoldComp = new V.ButtonAddGoldComponent(this.dialogDisp.btn_addC2);
        this.textFieldManager.registerTextField(this.dialogDisp.btn_addC2.txt_value, new l.LocalizedTextVO("xRubies", [this.dialogCustomization.RM.A]));
      }
      if (this.isVoucherOffer) {
        this.defaultInputText = u.Localize.text("dialog_voucherOffer_enterCode");
        this.dialogDisp.mc_voucherCode.visible = true;
        this.dialogDisp.btn_redeem.visible = true;
        this.textFieldManager.registerTextField(this.dialogDisp.btn_redeem.txt_label, new l.LocalizedTextVO("dialog_voucherOffer_redeemCode"));
        this.itxt_inputCode = this.textFieldManager.registerTextField(this.dialogDisp.mc_voucherCode.txt_code, new r.TextVO(u.Localize.text("dialog_voucherOffer_enterCode")));
        this.itxt_inputCode.restrict = "A-Z a-z 0-9";
        this.itxt_inputCode.focusIn.add(this.bindFunction(this.onFocusIn));
        this.itxt_inputCode.focusOut.add(this.bindFunction(this.onFocusOut));
        this.itxt_inputCode.change.add(this.bindFunction(this.onTextInput));
        this.onTextInput(null);
      }
      new T.SkinBotPPDDExternal(this.dialogDisp.mc_skin_bg, this.skinID, this.botSkinTexts, this.bindFunction(this.onClose));
      this.topSkinPart = new v.SkinTopPPDDExternal(this.dialogDisp.mc_skin_top_left, this.skinID, this.dialogProperties.offerVO);
      new I.PPDDExternalPart(this.dialogDisp.mc_teaserImage, this.teaserImageID);
      new B.LeftRightEyeCatcherPPDDExternal(this.dialogDisp.mc_leftEyeCatcher, this.leftEyeCatcherID, this.leftEyeCatcherTexts, this.leftCurrencyEnum);
      new B.LeftRightEyeCatcherPPDDExternal(this.dialogDisp.mc_rightEyeCatcher, this.rightEyeCatcherID, this.rightEyeCatcherTexts, this.rightCurrencyEnum);
      new S.TopEyeCatcherPPDDExternal(this.dialogDisp.mc_topEyeCatcher, this.topEyeCatcherID);
      this.showRewards();
      this.updateProgress();
      O.CastleModel.privateOfferData.addEventListener(E.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
      O.CastleModel.privateOfferData.removeEventListener(E.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, this.bindFunction(this.onOfferUpdated));
      this._popoverComponent.onShow();
      e.prototype.removeEventListenerOnHide.call(this);
    } else {
      this.hide();
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onOfferUpdated = function (e) {
    if (e.offerVO.id == this.dialogProperties.offerVO.id) {
      this.updateProgress();
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.updateProgress = function () {
    if (this.isPrimeDayOffer) {
      this.dialogDisp.mc_progressbar.mc_bar.scaleX = this.primeDayQuestCondition.currentValue / this.primeDayQuestCondition.neededValue;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_progressbar.txt_value, new l.LocalizedTextVO("numbersXY", [this.primeDayQuestCondition.currentValue, this.primeDayQuestCondition.neededValue]));
    }
  };
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "primeDayQuestCondition", {
    get: function () {
      return this.dialogProperties.offerVO.getQuestConditionByName(p.ClientConstOffer.QUEST_CONDITION_PAYMENT_MIN_WITH_UPDATE);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    O.CastleModel.privateOfferData.removeEventListener(E.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    O.CastleModel.privateOfferData.removeEventListener(E.PrivateOfferDataEvent.PRIVATE_OFFER_UPDATED, this.bindFunction(this.onOfferUpdated));
    this._popoverComponent.onHide();
    this._requestTimer.reset();
    if (this.itxt_inputCode) {
      this.itxt_inputCode.focusIn.remove(this.bindFunction(this.onFocusIn));
      this.itxt_inputCode.focusOut.remove(this.bindFunction(this.onFocusOut));
      this.itxt_inputCode.change.remove(this.bindFunction(this.onTextInput));
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onFocusIn = function (e) {
    if (this.itxt_inputCode.text == this.defaultInputText) {
      this.itxt_inputCode.clearText();
    }
    this.itxt_inputCode.setSelection(0, this.itxt_inputCode.text.length);
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onFocusOut = function (e) {
    if (this.itxt_inputCode.text == "") {
      this.itxt_inputCode.textContentVO.stringValue = this.defaultInputText;
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onTextInput = function (e) {
    if (this.itxt_inputCode.text.length > 0 && this.itxt_inputCode.text != this.defaultInputText) {
      b.ButtonHelper.enableButton(this.dialogDisp.btn_redeem, true);
      this.dialogDisp.btn_redeem.toolTipText = null;
    } else {
      b.ButtonHelper.enableButton(this.dialogDisp.btn_redeem, false);
      this.dialogDisp.btn_redeem.toolTipText = "dialog_voucherOffer_redeemCode_tt";
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onOfferRemoved = function (e) {
    if (e.offerVO.id == this.dialogProperties.offerVO.id) {
      this.hide();
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.setHighLights = function () {
    for (var e = 0; e < CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN; e++) {
      if (this.activeRewardList && this.activeRewardList["mc_item" + e]) {
        this.activeRewardList["mc_item" + e].gotoAndStop(1);
      }
    }
    if (this.dialogCustomization.HL) {
      for (var t = 0; t < this.dialogCustomization.HL.length; t++) {
        var i = d.int(this.dialogCustomization.HL[t]);
        if (i >= this.startIndex && i < this.startIndex + CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN) {
          i = d.int(i % CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN);
          if (this.activeRewardList["mc_item" + i]) {
            this.activeRewardList["mc_item" + i].gotoAndStop(2);
          }
        }
      }
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.showRewards = function () {
    var e;
    this.setHighLights();
    e = this.listNormalVisible ? new L(53, 53) : new L(97, 97);
    this.dialogDisp.listNormal.visible = this.listNormalVisible;
    this.dialogDisp.list1.visible = this.list1Visible;
    this.dialogDisp.list2.visible = this.list2Visible;
    this.dialogDisp.list3.visible = this.list3Visible;
    var t = new _.CollectableRenderClipsList(this.activeRewardList, "mc_item");
    t.addInfoBtns("btn_info", this.activeRewardList, true);
    var i = new m.CollectableRenderOptions(m.CollectableRenderOptions.SET_ADVANCED, e);
    i.tooltip.showEquipmentCountdown = false;
    w.CollectableRenderHelper.displayMultipleItemsComplete(this, t, this.rewardsFiltered, i, this.bindFunction(this.afterRenderFunc), this.bindFunction(this.afterRenderFunc));
    this.updateScrollButtons();
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.afterRenderFunc = function (e) {
    var t;
    if (!!e.itemVO && (e.itemVO.itemType == M.CollectableEnum.EQUIPMENT_UNIQUE || e.itemVO.itemType == M.CollectableEnum.EQUIPMENT_RARENESS || e.itemVO.itemType == M.CollectableEnum.RELIC_EQUIPMENT || e.itemVO.itemType == M.CollectableEnum.EQUIPMENT_UNIQUE_ENCHANTED)) {
      t = e.getRenderer(m.CollectableRenderOptions.ICON_TRANSFORM);
      if (e.itemVO.itemType == M.CollectableEnum.EQUIPMENT_UNIQUE) {
        t.transform.offset.x = 0;
      } else {
        t.transform.offset.x = 1;
      }
      t.transform.offset.y = this.list1Visible ? 13 : 6;
    }
    if (e.itemVO && e.itemVO.itemType == M.CollectableEnum.BUILDING && this.listNormalVisible) {
      (t = e.getRenderer(m.CollectableRenderOptions.ICON_TRANSFORM)).transform.offset.y = 1;
    }
  };
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "activeRewardList", {
    get: function () {
      if (this.listNormalVisible) {
        return this.dialogDisp.listNormal;
      } else if (this.list1Visible) {
        return this.dialogDisp.list1;
      } else if (this.list2Visible) {
        return this.dialogDisp.list2;
      } else if (this.list3Visible) {
        return this.dialogDisp.list3;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "listNormalVisible", {
    get: function () {
      return this.allRewards.length > 3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "list1Visible", {
    get: function () {
      return this.allRewards.length == 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "list2Visible", {
    get: function () {
      return this.allRewards.length == 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "list3Visible", {
    get: function () {
      return this.allRewards.length == 3;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.updateScrollButtons = function () {
    this.dialogDisp.btn_left.visible = this.startIndex > 0;
    this.dialogDisp.btn_right.visible = this.allRewards.length > this.startIndex + CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN;
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.scrollLeft = function () {
    this.setStartIndex(this.startIndex - CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN);
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.scrollRight = function () {
    this.setStartIndex(this.startIndex + CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN);
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.setStartIndex = function (e) {
    this.startIndex = e;
    this.showRewards();
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (b.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_buy:
        case this.dialogDisp.btn_buy_free:
          O.CastleModel.privateOfferData.sendOfferPay(this.dialogProperties.offerVO.id, 0);
          break;
        case this.dialogDisp.btn_addC2:
          this.addGoldComp.onClickButton(C.CastleOpenShopExecutor.SOURCE_PRIVATE_PRIME_DAY_OFFER, N.CXFSourceTrackingConstants.SOURCE_PRIVATE_PRIME_DAY_OFFER);
          break;
        case this.dialogDisp.btn_left:
          this.scrollLeft();
          break;
        case this.dialogDisp.btn_right:
          this.scrollRight();
          break;
        case this.dialogDisp.btn_redeem:
          this.redeemVoucherCode();
      }
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.redeemVoucherCode = function () {
    this._requestTimer.reset();
    if (this.itxt_inputCode) {
      O.CastleModel.smartfoxClient.sendCommandVO(new g.C2SRedeemVoucherVO(this.itxt_inputCode.text));
      this._requestTimer.addEventListener(A.TIMER_COMPLETE, this.bindFunction(this.onCodeTimeOut));
      this._requestTimer.start();
      var e = this._popoverComponent.config;
      e.waitDuration = CastlePrivatePrimeDayOfferDynamicDialog.REQUEST_TIMEOUT / h.ClientConstTime.SEC_2_MILLISEC;
      e.useClickArea = false;
      e.closeOnClick = false;
      this._popoverComponent.resetTimer();
      var t = this._popoverComponent.getAssetDisp();
      t.mc_icon.gotoAndStop(CastlePrivatePrimeDayOfferDynamicDialog.POPOVER_PENDING);
      this.textFieldManager.registerTextField(t.txt_text, new l.LocalizedTextVO("codeCheck")).autoFitToBounds = true;
      this._popoverComponent.startSequence();
    }
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.showInvalidCodePopover = function () {
    var e = this._popoverComponent.config;
    e.waitDuration = 5;
    e.useClickArea = true;
    e.closeOnClick = true;
    this._popoverComponent.resetTimer();
    var t = this._popoverComponent.getAssetDisp();
    t.mc_icon.gotoAndStop(CastlePrivatePrimeDayOfferDynamicDialog.POPOVER_ALERT);
    this.textFieldManager.registerTextField(t.txt_text, new l.LocalizedTextVO("codeInvalid")).autoFitToBounds = true;
    this._popoverComponent.startSequence();
  };
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onCodeTimeOut = function (e) {
    this.showInvalidCodePopover();
    this._requestTimer.reset();
  };
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "rewardsFiltered", {
    get: function () {
      var e = new R.CollectableList();
      for (var t = this.startIndex; t < this.startIndex + CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN; t++) {
        if (t < this.allRewards.length) {
          e.addItem(this.allRewards.getItemByIndex(t));
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "allRewards", {
    get: function () {
      return this.dialogProperties.offerVO.getTotalRewardListFromOfferVO();
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.onClose = function () {
    this.topSkinPart.onHide();
    this.hide();
  };
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "skinID", {
    get: function () {
      return String(this.dialogCustomization.SID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "teaserImageID", {
    get: function () {
      return "PivatePrimeDayDynamicDialog_TeaserImage_" + this.dialogCustomization.TSID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "topEyeCatcherID", {
    get: function () {
      return String(this.dialogCustomization.TEID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "leftEyeCatcherID", {
    get: function () {
      return String(this.dialogCustomization.LEID ? this.dialogCustomization.LEID.ID : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "rightEyeCatcherID", {
    get: function () {
      return String(this.dialogCustomization.REID ? this.dialogCustomization.REID.ID : -1);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "leftCurrencyEnum", {
    get: function () {
      return CastlePrivatePrimeDayOfferDynamicDialog.getCollectableEnum(this.dialogCustomization.LEID ? this.dialogCustomization.LEID.ICON : null);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "rightCurrencyEnum", {
    get: function () {
      return CastlePrivatePrimeDayOfferDynamicDialog.getCollectableEnum(this.dialogCustomization.REID ? this.dialogCustomization.REID.ICON : null);
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeDayOfferDynamicDialog.getCollectableEnum = function (e) {
    switch (e) {
      case "icon_hc_rubi_rm":
        return M.CollectableEnum.C2;
    }
    return null;
  };
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "botSkinTexts", {
    get: function () {
      return [new l.LocalizedTextVO(this.dialogCustomization.TID), new l.LocalizedTextVO(this.dialogCustomization.STID)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "isUsingRealMoney", {
    get: function () {
      return this.dialogCustomization.RM.T == 1;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeDayOfferDynamicDialog.prototype.getByButtonText = function () {
    if (this.isPrimeDayOffer) {
      if (this.isUsingRealMoney) {
        return new l.LocalizedTextVO("You are not prepared!");
      } else {
        return new l.LocalizedTextVO("xRubies", [this.dialogCustomization.RM.A]);
      }
    } else if (this.isChestOffer) {
      return new l.LocalizedTextVO("buy");
    } else {
      return null;
    }
  };
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "rightEyeCatcherTexts", {
    get: function () {
      if (!this.dialogCustomization.REID) {
        return null;
      }
      if (!this.dialogCustomization.REID.TXT) {
        return null;
      }
      var e = [];
      if (this.dialogCustomization.REID.TXT.TXT0) {
        e.push(new l.LocalizedTextVO(this.dialogCustomization.REID.TXT.TXT0.ID, this.dialogCustomization.REID.TXT.TXT0.A));
      }
      if (this.dialogCustomization.REID.TXT.TXT1) {
        e.push(new l.LocalizedTextVO(this.dialogCustomization.REID.TXT.TXT1.ID, this.dialogCustomization.REID.TXT.TXT1.A));
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "leftEyeCatcherTexts", {
    get: function () {
      if (!this.dialogCustomization.LEID) {
        return null;
      }
      if (!this.dialogCustomization.LEID.TXT) {
        return null;
      }
      var e = [];
      if (this.dialogCustomization.LEID.TXT.TXT0) {
        e.push(new l.LocalizedTextVO(this.dialogCustomization.LEID.TXT.TXT0.ID, this.dialogCustomization.LEID.TXT.TXT0.A));
      }
      if (this.dialogCustomization.LEID.TXT.TXT1) {
        e.push(new l.LocalizedTextVO(this.dialogCustomization.LEID.TXT.TXT1.ID, this.dialogCustomization.LEID.TXT.TXT1.A));
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "chestOfferCost", {
    get: function () {
      if (this.dialogProperties.offerVO.descriptions && this.dialogProperties.offerVO.descriptions[0]) {
        return this.dialogProperties.offerVO.descriptions[0].get("costCurrencyPremium");
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "isChestOffer", {
    get: function () {
      return this.chestOfferCost != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "isPrimeDayOffer", {
    get: function () {
      return this.primeDayQuestCondition != null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "isVoucherOffer", {
    get: function () {
      return this.dialogProperties.offerVO.descriptions && this.dialogCustomization.RM.T == 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "dialogCustomization", {
    get: function () {
      try {
        return this.dialogProperties.offerVO.descriptions[0].get("visualComponents").visuals.get("questDialog").dialogCustomization;
      } catch (e) {
        a.error("false configured offer: ID:" + this.dialogProperties.offerVO.id + "\noffer description:" + (this.dialogProperties.offerVO.descriptions ? this.dialogProperties.offerVO.descriptions[0] : "undefinded") + "\n" + e.stack);
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePrivatePrimeDayOfferDynamicDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrivatePrimeDayOfferDynamicDialog.NAME = "CastlePrivatePrimeDayDynamicDialog_I";
  CastlePrivatePrimeDayOfferDynamicDialog.OFFER_NAME = "CastlePrivatePrimeDayDynamicDialog";
  CastlePrivatePrimeDayOfferDynamicDialog.POPOVER_PENDING = 2;
  CastlePrivatePrimeDayOfferDynamicDialog.POPOVER_ALERT = 3;
  CastlePrivatePrimeDayOfferDynamicDialog.REQUEST_TIMEOUT = 5000;
  CastlePrivatePrimeDayOfferDynamicDialog.REWARDS_ON_SCREEN = 12;
  return CastlePrivatePrimeDayOfferDynamicDialog;
}(D.CastleExternalDialog);
exports.CastlePrivatePrimeDayOfferDynamicDialog = P;
o.classImplementsInterfaces(P, "ICollectableRendererList");
var M = require("./12.js");
var R = require("./48.js");
var V = require("./428.js");
var x = require("./294.js");
var w = require("./25.js");
var B = require("./3662.js");
var F = require("./36.js");
var N = require("./107.js");