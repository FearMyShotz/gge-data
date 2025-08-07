Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./3.js");
var _ = require("./6.js");
var m = require("./16.js");
var f = require("./60.js");
var O = require("./39.js");
var E = require("./1734.js");
var y = require("./103.js");
var b = require("./146.js");
var D = require("./21.js");
var I = require("./199.js");
var T = require("./26.js");
var v = require("./32.js");
var S = require("./67.js");
var A = require("./19.js");
var L = require("./30.js");
var P = require("./666.js");
var M = require("./4.js");
var R = require("./130.js");
var V = require("./27.js");
var x = require("./213.js");
var w = require("./43.js");
var B = require("./24.js");
var F = require("./8.js");
var N = require("./41.js");
var k = require("./11.js");
var U = require("./1735.js");
var G = require("./201.js");
var H = require("./3606.js");
var j = require("./88.js");
var W = createjs.Point;
var Y = function (e) {
  function CastlePaymentRewardSpecialOfferDialog(t = CastlePaymentRewardSpecialOfferDialog.CLASS_NAME) {
    var i = this;
    i._boughtCountOnOpen = 0;
    i._currencyBonus = 0;
    i.rewardItemSet = null;
    i.additionalTeaser = null;
    i.additionalTeaserGGSTF = null;
    i.titleTxt = null;
    i.titleGGSTF = null;
    i.bonusTxt = null;
    i.bonusGGSTF = null;
    i.buyBtn = null;
    i.buyBtnGGSTF = null;
    i.closeBtn = null;
    i.descriptionBar = null;
    i.descriptionGGSTF = null;
    i.endTimeBar = null;
    i.endTimeTxt = null;
    i.colors = [];
    i.timerGGSTF = null;
    i.payCountTxt = null;
    i.payCountGGSTF = null;
    i.progressBar = null;
    i.progressBarGGSTF = null;
    i.remainingPercentageBar = null;
    i.rubiesAmountMC = null;
    i.rubiesAmountGGSTF = null;
    i.okBtn = null;
    i.sendSMSDescGGSTF = null;
    i.sendSMSCodeGGSTF = null;
    i.sendSMSPhoneGGSTF = null;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).setTextIDs();
    i.colors.push(j.CastlePaymentRewardSpecialOfferConstants.PROGRESS_REMAINING_COLOR_1);
    i.colors.push(j.CastlePaymentRewardSpecialOfferConstants.PROGRESS_REMAINING_COLOR_2);
    i.colors.push(j.CastlePaymentRewardSpecialOfferConstants.PROGRESS_REMAINING_COLOR_3);
    i.colors.push(j.CastlePaymentRewardSpecialOfferConstants.PROGRESS_REMAINING_COLOR_4);
    i.colors.push(j.CastlePaymentRewardSpecialOfferConstants.PROGRESS_REMAINING_COLOR_5);
    return i;
  }
  n.__extends(CastlePaymentRewardSpecialOfferDialog, e);
  CastlePaymentRewardSpecialOfferDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.hideOnLoading_0 = function () {
    this.hide();
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onTitleLoaded = function (e) {
    if (e) {
      this.titleTxt = e.currentshownDisplayObject;
    }
    this.titleTxt.name = "TITLE_TXT";
    this.setupComponent(this.titleTxt);
    this.closeBtn = this.setupComponent(this.checkLoad(this.closeBtn, "CloseBtn", "CLOSE_BTN", true));
    switch (this.offerType) {
      case j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_DEFAULT:
        this.bonusTxt = this.setupComponent(this.checkLoad(this.bonusTxt, "BonusTxt", "BONUS_TXT"));
        this.endTimeBar = this.setupComponent(this.checkLoad(this.endTimeBar, "EndTimeBar", "END_TIME_BAR"));
        this.remainingPercentageBar = this.setupComponent(this.checkLoad(this.remainingPercentageBar, "RemainingPercentageBar", "REMAINING_PERCENTAGE_BAR"));
        this.endTimeTxt = this.setupComponent(this.checkLoad(this.endTimeTxt, "EndTimeTxt", "END_TIME_TXT"));
        this.descriptionBar = this.setupComponent(this.checkLoad(this.descriptionBar, "DescriptionBar", "DESCRIPTION_BAR"));
        this.handleHangingDeco(this.descriptionBar);
        if (!!this.isPrivateOffer || !this.dialogProperties || this.dialogProperties.eventVO.eventId != d.EventConst.EVENTTYPE_REACTIVATION_PRIME_DAY) {
          this.additionalTeaser = this.setupComponent(this.checkLoad(this.additionalTeaser, "AdditionalTeaser", "ADDITIONAL_TEASER"));
        }
        this.createRewardItems("REWARDS");
        this.progressBar = this.setupComponent(this.checkLoad(this.progressBar, "ProgressBarLong", "PROGRESS_BAR_LONG"));
        this.progressBar.bkgrArea.visible = false;
        this.buyBtn = this.setupComponent(this.checkLoad(this.buyBtn, "BuyBtnWIcon", "BUY_BTN_W_ICON", true));
        if (!this.isOneTimeOffer) {
          this.payCountTxt = this.setupComponent(this.checkLoad(this.payCountTxt, "PayCountTxt", "PAY_COUNT_TXT"));
        }
        break;
      case j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY:
        this.bonusTxt = this.setupComponent(this.checkLoad(this.bonusTxt, "BonusTxt", "BONUS_TXT"));
        this.endTimeBar = this.setupComponent(this.checkLoad(this.endTimeBar, "EndTimeBar", "END_TIME_BAR"));
        this.endTimeTxt = this.setupComponent(this.checkLoad(this.endTimeTxt, "EndTimeTxt", "END_TIME_TXT"));
        this.handleHangingDeco(this.endTimeBar);
        this.createRewardItems("REWARDS_REAL_CURRENCY");
        this.rubiesAmountMC = this.setupComponent(this.checkLoad(this.rubiesAmountMC, "RubiesAmountMC", "RUBIES_AMOUNT_MC"));
        this.buyBtn = this.setupComponent(this.checkLoad(this.buyBtn, "BuyBtn", "BUY_BTN", true));
        break;
      case j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_SMS:
        this.bonusTxt = this.setupComponent(this.checkLoad(this.bonusTxt, "BonusTxt", "BONUS_TXT"));
        this.endTimeBar = this.setupComponent(this.checkLoad(this.endTimeBar, "EndTimeBar", "END_TIME_BAR"));
        this.remainingPercentageBar = this.setupComponent(this.checkLoad(this.remainingPercentageBar, "RemainingPercentageBar", "REMAINING_PERCENTAGE_BAR"));
        this.endTimeTxt = this.setupComponent(this.checkLoad(this.endTimeTxt, "EndTimeTxt", "END_TIME_TXT"));
        this.descriptionBar = this.setupComponent(this.checkLoad(this.descriptionBar, "DescriptionBar", "DESCRIPTION_BAR"));
        this.handleHangingDeco(this.descriptionBar);
        this.additionalTeaser = this.setupComponent(this.checkLoad(this.additionalTeaser, "PricePerSMS", "PRICE_PER_SMS"));
        this.createRewardItems("REWARDS");
        this.infoSMS = this.setupComponent(this.checkLoad(this.infoSMS, "SMSInfo", "SMS_INFO"));
        this.sendInfoSMS = this.setupComponent(this.checkLoad(this.sendInfoSMS, "SMSSendInfo", "SMS_SEND_INFO", true));
        break;
      case j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH:
      case j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_SMS:
        this.descriptionBar = this.setupComponent(this.checkLoad(this.descriptionBar, "DescriptionBar", "DESCRIPTION_BAR"));
        this.handleHangingDeco(this.descriptionBar);
        this.createRewardItems("REWARDS");
        this.payCountTxt = this.setupComponent(this.checkLoad(this.payCountTxt, "PayCountTxt", "PAY_COUNT_TXT"));
        this.okBtn = this.setupComponent(this.checkLoad(this.okBtn, "OkBtn", "OK_BTN", true));
        break;
      case j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_REAL_CURRENCY:
        this.handleHangingDeco(null);
        this.createRewardItems("REWARDS_REAL_CURRENCY");
        this.rubiesAmountMC = this.setupComponent(this.checkLoad(this.rubiesAmountMC, "RubiesAmountMC", "RUBIES_AMOUNT_MC"));
        this.okBtn = this.setupComponent(this.checkLoad(this.okBtn, "OkBtn", "OK_BTN", true));
    }
    z.CastleLayoutManager.getInstance().hideDialog(J.CastleExternalPreloaderDialog);
    this.customizeAppearenceOfComponents();
    this.setupDialogComponents();
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.createRewardItems = function (e) {
    this.destroyRewardItems();
    this.rewardItemSet = new $.CastlePaymentRewardSpecialOfferItemSet(H.CastlePaymentRewardHelper.getNameOfItemSet(this.rewards.length));
    this.rewardItemSet.componentDisp.name = e;
    this.setupComponent(this.rewardItemSet.componentDisp);
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.checkLoad = function (e, t, i, n = false) {
    var a = e;
    var s = false;
    if (!e) {
      s = n;
      this.temporaryExternalClip = new B.CastleGoodgameExternalClip(t, j.CastlePaymentRewardSpecialOfferConstants.COMPONENTS_ASSET_NAME, null, 0, false);
      (a = this.temporaryExternalClip.currentshownDisplayObject).name = i;
      if (s) {
        this.buttonArray ||= [];
        a.basicButton = new o.BasicButton(a, true);
        this.buttonArray.push(a.basicButton);
      }
    }
    return a;
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.setupComponent = function (e) {
    this.dialogDisp.addChild(e);
    e.x = j.CastlePaymentRewardSpecialOfferConstants[e.name + "_X"] + H.CastlePaymentRewardHelper.getSkinOffsetX(this.skinType);
    e.y = j.CastlePaymentRewardSpecialOfferConstants[e.name + "_Y"] + H.CastlePaymentRewardHelper.getSkinOffsetY(this.skinType);
    return e;
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.setupDialogComponents = function () {
    switch (this.offerType) {
      case j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_DEFAULT:
      case j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY:
        this.endTimeTxt.textArea.textColor = m.ClientConstColor.PRIME_DAY_PERCENTAGE_COLOR;
        if (this.buyBtn) {
          this._buttonPaymentComp = new q.ButtonAddGoldComponent(this.buyBtn);
          this.buyBtn.mouseChildren = false;
        }
        if (this.progressBar) {
          this.progressBar.mouseChildren = false;
        }
        this.addListeners();
        this._boughtCountOnOpen = this.canBeBoughtTimes;
        if (this._buttonPaymentComp) {
          this._buttonPaymentComp.init();
        }
        if (this.remainingPercentageBar) {
          this.remainingPercentageBar.visible = false;
        }
        this.timerGGSTF ||= this.textFieldManager.registerTextField(this.endTimeTxt.textArea, new g.LocalizedTextVO("limitedOffer", []));
        this.timerGGSTF.autoFitToBounds = true;
        this.timerGGSTFLocalizedTextVO = this.timerGGSTF.textContentVO;
        if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO && this.dialogPropertiesPrivateOffer.offerVO.isTimeDisplayedInPercentage) {
          if (this.remainingPercentageBar) {
            this.remainingPercentageBar.visible = true;
          }
          this.timerGGSTFLocalizedTextVO.textId = "limitedOffer";
        } else if (this.isOneTimeOffer) {
          this.timerGGSTFLocalizedTextVO.textId = "dialog_primeday_oneTimeOffer_copy1";
        } else if (!this.isPrivateOffer && this.dialogProperties && this.dialogProperties.eventVO && this.dialogProperties.eventVO.isTimeDisplayedInPercentage) {
          if (this.remainingPercentageBar) {
            this.remainingPercentageBar.visible = true;
          }
          this.timerGGSTFLocalizedTextVO.textId = "limitedOffer";
        }
        this.timerGGSTF.autoFitToBounds = true;
        if (this.rubiesAmountMC) {
          this.rubiesAmountMC.mouseChildren = false;
        }
        this.updateTexts();
        this.updateRewardItems();
        this.updateProgressBar();
        break;
      case j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_SMS:
        this.endTimeTxt.textArea.textColor = m.ClientConstColor.PRIME_DAY_PERCENTAGE_COLOR;
        this.addListeners();
        this.timerGGSTF ||= this.textFieldManager.registerTextField(this.endTimeTxt.textArea, new g.LocalizedTextVO("limitedOffer", []));
        this.timerGGSTF.autoFitToBounds = true;
        this.timerGGSTFLocalizedTextVO = this.timerGGSTF.textContentVO;
        if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer) {
          if (this.dialogPropertiesPrivateOffer.offerVO && this.dialogPropertiesPrivateOffer.offerVO.isTimeDisplayedInPercentage) {
            if (this.remainingPercentageBar) {
              this.remainingPercentageBar.visible = true;
            }
            this.timerGGSTFLocalizedTextVO.textId = "limitedOffer";
            this.timerGGSTF.autoFitToBounds = true;
          }
        } else if (!this.isPrivateOffer && this.dialogProperties && this.dialogProperties.eventVO && this.dialogProperties.eventVO.isTimeDisplayedInPercentage) {
          if (this.remainingPercentageBar) {
            this.remainingPercentageBar.visible = true;
          }
          this.timerGGSTFLocalizedTextVO.textId = "limitedOffer";
          this.timerGGSTF.autoFitToBounds = true;
        }
        this.infoSMS.visible = false;
        this.updateTexts();
        this.updateRewardItems();
        break;
      case j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH:
      case j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_SMS:
      case j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_REAL_CURRENCY:
        this.updateTexts();
        this.updateRewardItems();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.remainingEventTimeInSeconds <= 0) {
      this.hide();
    }
    this.setTextIDs();
    if (this.offerType != j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_DEFAULT && this.offerType != j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY || this.isPrivateOffer || !M.CastleModel.privateOfferData.isHiddenEvent(this.eventID)) {
      k.CastleExternalDialog.dialogHandler.registerDialogsWithType(J.CastleExternalPreloaderDialog, new G.CastleExternalPreloaderDialogProperties(this.hideOnLoading_0), false, w.CastleDialogConsts.PRIORITY_TOP, 0, w.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
      if (this.titleTxt) {
        this.onTitleLoaded(null);
      } else {
        this.temporaryExternalClip = new B.CastleGoodgameExternalClip("TitleTxt", j.CastlePaymentRewardSpecialOfferConstants.COMPONENTS_ASSET_NAME, null, 0, false);
        if (this.temporaryExternalClip.isLoaded) {
          this.onTitleLoaded(this.temporaryExternalClip);
        } else {
          this.temporaryExternalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.onTitleLoaded), 3);
        }
      }
    } else {
      this.hide();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.addListeners = function () {
    M.CastleModel.specialEventData.addEventListener(T.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    M.CastleModel.specialEventData.addEventListener(T.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onUpdateEvent));
    M.CastleModel.privateOfferData.addEventListener(R.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    this.controller.addEventListener(v.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onPaymentUpdate));
    M.CastleModel.timerData.addEventListener(D.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onPaymentUpdate = function (e) {
    try {
      if (this.boughtC2SinceLastStep >= this.currentC2ForReward) {
        this.hide();
      }
    } catch (e) {
      this.hide();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.removeListeners = function () {
    M.CastleModel.specialEventData.removeEventListener(T.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    M.CastleModel.specialEventData.removeEventListener(T.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onUpdateEvent));
    M.CastleModel.privateOfferData.removeEventListener(R.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
    this.controller.removeEventListener(v.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onPaymentUpdate));
    M.CastleModel.timerData.removeEventListener(D.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.hideLoaded = function (t = null) {
    this.destroyRewardItems();
    if (this._buttonPaymentComp) {
      this._buttonPaymentComp.destroy();
    }
    this.removeListeners();
    this.destroyComponents();
    e.prototype.hideLoaded.call(this, t);
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.destroyComponents = function () {
    if (this.additionalTeaser) {
      if (this.additionalTeaserGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.additionalTeaserGGSTF);
      }
      this.additionalTeaserGGSTF = null;
      this.dialogDisp.removeChild(this.additionalTeaser);
    }
    this.additionalTeaser = null;
    if (this.titleTxt) {
      if (this.titleGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.titleGGSTF);
      }
      this.titleGGSTF = null;
      this.dialogDisp.removeChild(this.titleTxt);
    }
    this.titleTxt = null;
    if (this.bonusTxt) {
      if (this.bonusGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.bonusGGSTF);
      }
      this.bonusGGSTF = null;
      this.dialogDisp.removeChild(this.bonusTxt);
    }
    this.bonusTxt = null;
    if (this.buyBtn) {
      this.buyBtn.basicButton = null;
      if (this.buyBtnGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.buyBtnGGSTF);
      }
      this.buyBtnGGSTF = null;
      this.dialogDisp.removeChild(this.buyBtn);
    }
    this.buyBtn = null;
    if (this.closeBtn) {
      this.closeBtn.basicButton = null;
      this.dialogDisp.removeChild(this.closeBtn);
    }
    this.closeBtn = null;
    if (this.descriptionBar) {
      if (this.descriptionGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.descriptionGGSTF);
      }
      this.descriptionGGSTF = null;
      this.dialogDisp.removeChild(this.descriptionBar);
    }
    this.descriptionBar = null;
    if (this.endTimeBar) {
      this.dialogDisp.removeChild(this.endTimeBar);
    }
    this.endTimeBar = null;
    if (this.endTimeTxt) {
      this.timerGGSTFLocalizedTextVO = null;
      if (this.timerGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.timerGGSTF);
      }
      this.timerGGSTF = null;
      this.dialogDisp.removeChild(this.endTimeTxt);
    }
    this.endTimeTxt = null;
    if (this.payCountTxt) {
      if (this.payCountGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.payCountGGSTF);
      }
      this.payCountGGSTF = null;
      this.dialogDisp.removeChild(this.payCountTxt);
    }
    this.payCountTxt = null;
    if (this.progressBar) {
      if (this.progressBarGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.progressBarGGSTF);
      }
      this.progressBarGGSTF = null;
      this.dialogDisp.removeChild(this.progressBar);
    }
    this.progressBar = null;
    if (this.remainingPercentageBar) {
      this.dialogDisp.removeChild(this.remainingPercentageBar);
    }
    this.remainingPercentageBar = null;
    if (this.rubiesAmountMC) {
      if (this.rubiesAmountGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.rubiesAmountGGSTF);
      }
      this.rubiesAmountGGSTF = null;
      this.dialogDisp.removeChild(this.rubiesAmountMC);
    }
    this.rubiesAmountMC = null;
    if (this.okBtn) {
      this.okBtn.basicButton = null;
      this.dialogDisp.removeChild(this.okBtn);
    }
    this.okBtn = null;
    if (this.infoSMS) {
      this.dialogDisp.removeChild(this.infoSMS);
    }
    this.infoSMS = null;
    if (this.sendInfoSMS) {
      if (this.sendSMSDescGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.sendSMSDescGGSTF);
      }
      this.sendSMSDescGGSTF = null;
      if (this.sendSMSCodeGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.sendSMSCodeGGSTF);
      }
      this.sendSMSCodeGGSTF = null;
      if (this.sendSMSPhoneGGSTF) {
        this.textFieldManager.unregisterTextFieldByReference(this.sendSMSPhoneGGSTF);
      }
      this.sendSMSPhoneGGSTF = null;
      this.dialogDisp.removeChild(this.sendInfoSMS);
    }
    this.sendInfoSMS = null;
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.setTextIDs = function () {
    this.titleTextID = "dialog_primeday_specialoffer_title";
    this.descriptionTextID = "dialog_primeday_specialoffer_description";
    this.dialogPrimedaySpecialofferEndTimerTextID = "dialog_primeday_specialoffer_endTimer";
    this.addGoldTextID = "add_Gold";
    this.realCurrencyTextID = "dialog_primeday_realCurrency_additionalRubies";
    this.leftTeaserText = null;
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.updateTexts = function () {
    var e;
    var t;
    var i;
    var n;
    var o = P.CastleHardCurrencyHelper.currencyTextID;
    e = _.int(this.shownOfferBonus);
    this._currencyBonus = this.currencyValue;
    t = this.currentC2ForReward;
    i = _.int(t * (e / 100));
    this.titleGGSTF ||= this.textFieldManager.registerTextField(this.titleTxt.textArea, new g.LocalizedTextVO(this.titleTextID));
    if (this.isOneTimeOffer) {
      this.titleGGSTF.textContentVO.textId = "dialog_primeday_oneTimeOffer_header";
    } else {
      this.titleGGSTF.textContentVO.textId = this.titleTextID;
    }
    this.titleGGSTF.autoFitToBounds = true;
    this.titleGGSTF.verticalAlign = s.GGSVerticalAlign.MIDDLE;
    if (this.additionalTeaser) {
      if (!this.additionalTeaserGGSTF) {
        this.additionalTeaserGGSTF = this.textFieldManager.registerTextField(this.additionalTeaser.textArea, new g.LocalizedTextVO(this.leftTeaserText, false));
        this.additionalTeaser.textArea.defaultCacheScale = 2;
        N.CastleMovieClipHelper.uncacheSafe(this.additionalTeaser.textArea);
        this.additionalTeaser.textArea.doCache(0, 2);
      }
      if (!this.leftTeaserText) {
        var a = o == O.ClientConstTextIds.C2 ? "privateOffer_valueShort_rubies" : "privateOffer_valueShort";
        var r = this.additionalTeaserGGSTF.textContentVO;
        r.textId = a;
        if (this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_SMS) {
          r.textId = "dialog_primeday_smsOffer_messageCost";
          r.textReplacements = [new C.TextVO(this.smsPriceInMajorCurrencyUnit), o];
        } else {
          r.textId = a;
          r.textReplacements = [this._currencyBonus, o];
        }
      }
      this.additionalTeaserGGSTF.autoFitToBounds = true;
      this.additionalTeaserGGSTF.verticalAlign = s.GGSVerticalAlign.MIDDLE;
    }
    if (this.buyBtn) {
      this.buyBtnGGSTF ||= this.textFieldManager.registerTextField(this.buyBtn.txt_text, new g.LocalizedTextVO(this.addGoldTextID));
      if (this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY) {
        this.buyBtnGGSTF.textContentVO.textReplacements = [this.dialogProperties.eventVO.realPrice];
      }
      if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO) {
        this._buttonPaymentComp.targetMC.disp.toolTipText = "";
      }
    }
    if (this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_DEFAULT || this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_SMS) {
      if (this.hasTimer) {
        this.updateWithTimer();
      }
    }
    if (this.bonusTxt) {
      this.bonusGGSTF ||= this.textFieldManager.registerTextField(this.bonusTxt.textArea, new g.LocalizedTextVO(""));
      this.bonusGGSTF.autoFitToBounds = true;
      if (this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY || this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_REAL_CURRENCY) {
        if (P.CastleHardCurrencyHelper.currencyFactor != P.CastleHardCurrencyHelper.RUBIES2EUROS_FACTOR && this.dialogProperties.eventVO.realPrice) {
          this.bonusGGSTF.textContentVO.textId = "dialog_primeday_specialoffer_bonus";
          var l = /([0-9]+[,.][0-9]{2})/g.exec(this.dialogProperties.eventVO.realPrice)[0];
          l = l.replace(",", ".");
          var c = Number(l);
          var u = _.int((this.currencyValue + c) / c * 100);
          this.bonusGGSTF.textContentVO.textReplacements = [new h.LocalizedNumberVO(u)];
        } else {
          this.bonusGGSTF.textContentVO.textId = "dialog_primeday_realCurrency_bonus_general";
        }
      } else if (!this.isPrivateOffer && this.dialogProperties && this.dialogProperties.eventVO.eventId == d.EventConst.EVENTTYPE_REACTIVATION_PRIME_DAY) {
        var m = o == O.ClientConstTextIds.C2 ? "privateOffer_valueShort_rubies" : "privateOffer_valueShort";
        this.bonusGGSTF.textContentVO.textId = m;
        this.bonusGGSTF.textContentVO.textReplacements = [this._currencyBonus, o];
      } else if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO) {
        if (o == O.ClientConstTextIds.C2) {
          this.bonusGGSTF.textContentVO.textId = "privateOffer_valueLong_rubies";
          this.bonusGGSTF.textContentVO.textReplacements = [new h.LocalizedNumberVO(this._currencyBonus), o];
        } else {
          this.bonusGGSTF.textContentVO.textId = "privateOffer_valueLong";
          this.bonusGGSTF.textContentVO.textReplacements = [new h.LocalizedNumberVO(this._currencyBonus), o];
        }
      } else {
        this.bonusGGSTF.textContentVO.textId = "dialog_primeday_specialoffer_bonus";
        this.bonusGGSTF.textContentVO.textReplacements = [new h.LocalizedNumberVO(e)];
      }
      this.bonusGGSTF.autoFitToBounds = true;
    }
    if (this.payCountTxt) {
      this.payCountGGSTF ||= this.textFieldManager.registerTextField(this.payCountTxt.textArea, new g.LocalizedTextVO(""));
      this.payCountGGSTF.autoFitToBounds = true;
      if (this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH || this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_REAL_CURRENCY && this.canBeBoughtTimes <= 0 || this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_SMS) {
        this.payCountGGSTF.textContentVO.textId = "";
      } else if (this.canBeBoughtTimes == 1) {
        this.payCountGGSTF.textContentVO.textId = "dialog_primeday_specialoffer_charges_singular";
      } else {
        this.payCountGGSTF.textContentVO.textId = "dialog_primeday_specialoffer_charges";
        this.payCountGGSTF.textContentVO.textReplacements = [this.canBeBoughtTimes];
      }
    }
    if (this.rubiesAmountMC) {
      this.rubiesAmountGGSTF ||= this.textFieldManager.registerTextField(this.rubiesAmountMC.valueTxt, new g.LocalizedTextVO(""));
      if (this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY) {
        this.rubiesAmountGGSTF.textContentVO.textId = this.realCurrencyTextID;
        this.rubiesAmountGGSTF.textContentVO.textReplacements = [this.dialogProperties.eventVO.realPrice];
      } else {
        this.rubiesAmountGGSTF.textContentVO.textId = "dialog_timeSkip_fullSkipPrice_plural";
        this.rubiesAmountGGSTF.textContentVO.textReplacements = [this.rubiesAmountMCValue];
      }
    }
    if (this.descriptionBar) {
      this.descriptionGGSTF ||= this.textFieldManager.registerTextField(this.descriptionBar.textArea, new g.LocalizedTextVO(""));
      (n = this.descriptionGGSTF.textContentVO).textId = this.descriptionTextID;
      if (this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_SMS) {
        var f = p.Localize.text(o);
        n.textReplacements = [this._currencyBonus + f, this.smsPriceInMajorCurrencyUnit + f];
        this.descriptionGGSTF.autoFitToBounds = true;
      } else if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO) {
        n.textReplacements = [new h.LocalizedNumberVO(this.currentC2ForReward, false)];
      } else if (this.shownOfferBonus == 0) {
        n.textId = "dialog_primeday_specialoffer_hideValue_description";
        n.textReplacements = [new h.LocalizedNumberVO(t, false)];
      } else {
        n.textReplacements = [new h.LocalizedNumberVO(t, false), new h.LocalizedNumberVO(i, false)];
      }
      if (this.descriptionInfoTextID) {
        var E = this.properties;
        if (E && E.shoppingCartEventVO) {
          var y = E.shoppingCartEventVO.cartsPaid > 1 ? this.descriptionInfoTextID : "dialog_rewardsReceived_purchasedTotal_singular_desc";
          this.descriptionGGSTF.text += "\n" + p.Localize.text(y, [E.shoppingCartEventVO.cartsPaid]);
        }
      }
    }
    if (this.sendInfoSMS) {
      this.sendSMSDescGGSTF ||= this.textFieldManager.registerTextField(this.sendInfoSMS.descTxt, new g.LocalizedTextVO(""));
      this.sendSMSDescGGSTF.autoFitToBounds = true;
      this.sendSMSDescGGSTF.textContentVO.textId = "dialog_primeday_smsOffer_sendMessage_decription";
      this.sendSMSCodeGGSTF ||= this.textFieldManager.registerTextField(this.sendInfoSMS.codeTxt, new g.LocalizedTextVO("", false));
      this.sendSMSCodeGGSTF.autoFitToBounds = true;
      this.sendSMSCodeGGSTF.textContentVO.textId = "dialog_primeday_smsOffer_sendMessage_code_decription";
      this.sendSMSCodeGGSTF.textContentVO.textReplacements = [this.rewardCode];
      this.sendSMSPhoneGGSTF ||= this.textFieldManager.registerTextField(this.sendInfoSMS.phoneTxt, new g.LocalizedTextVO("", false));
      this.sendSMSPhoneGGSTF.autoFitToBounds = true;
      this.sendSMSPhoneGGSTF.textContentVO.textId = "dialog_primeday_smsOffer_sendMessage_phoneNumber_decription";
      this.sendSMSPhoneGGSTF.textContentVO.textReplacements = [this.phoneNumber];
    }
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "hasTimer", {
    get: function () {
      var e = false;
      if (!this.isPrivateOffer && this.dialogProperties.eventVO && this.dialogProperties.eventVO.isTimeDisplayedInPercentage) {
        e = true;
      }
      return !this.isOneTimeOffer && (this.isPrivateOffer && !!this.dialogPropertiesPrivateOffer.offerVO || this.remainingEventTimeInSeconds <= K.PaymentrewardEventVO.REMAINING_TIME_ALERT || e);
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferDialog.prototype.updateWithTimer = function () {
    var e = false;
    if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer) {
      if (this.dialogPropertiesPrivateOffer.offerVO && this.dialogPropertiesPrivateOffer.offerVO.isTimeDisplayedInPercentage) {
        e = true;
        this.displayTimeInPercentage(this.dialogPropertiesPrivateOffer.offerVO.startTimestamp, this.dialogPropertiesPrivateOffer.offerVO.endTimestamp);
      }
    } else if (!this.isPrivateOffer && this.dialogProperties && this.dialogProperties.eventVO && this.dialogProperties.eventVO.isTimeDisplayedInPercentage) {
      e = true;
      this.displayTimeInPercentage(this.dialogProperties.eventVO.startTimestamp, this.dialogProperties.eventVO.endTimestamp);
    }
    if (!e) {
      this.timerGGSTFLocalizedTextVO.textId = this.dialogPrimedaySpecialofferEndTimerTextID;
      this.timerGGSTFLocalizedTextVO.textReplacements = [V.CastleTimeStringHelper.getEventTimeString(this.remainingEventTimeInSeconds)];
      this.timerGGSTF.autoFitToBounds = true;
    }
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "isOneTimeOffer", {
    get: function () {
      return this.isPrivateOffer && !!this.dialogPropertiesPrivateOffer && !!this.dialogPropertiesPrivateOffer.offerVO && this.dialogPropertiesPrivateOffer.offerVO.isOneTimeOffer;
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferDialog.prototype.displayTimeInPercentage = function (e, t) {
    var i = _.int(e);
    var n = _.int(t);
    var o = L.CachedTimer.getCachedTimer();
    var a = x.CastleMathHelper.clamp(this.calculateRemainingPercentage(x.CastleMathHelper.clamp((n - o) / (n - i), 0, 1)), 0.01, 1);
    this.setRemainingPercentageTime(a);
    this.timerGGSTFLocalizedTextVO.textId = "dialog_primeday_timelessPrimeday_amount";
    this.timerGGSTFLocalizedTextVO.textReplacements = [_.int(a * 100)];
    this.timerGGSTF.autoFitToBounds = true;
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.calculateRemainingPercentage = function (e) {
    var t = 1 - e;
    if (t > 0.9) {
      return (t * -99 + 99) / 109.091;
    } else {
      return (1 / (Math.pow(t + 0.0033, 2) + 0.01) + 9.2) / 109.091;
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.setRemainingPercentageTime = function (e) {
    if (this.remainingPercentageBar) {
      this.remainingPercentageBar.bar.scaleX = e;
      var t = new r.ColorTransform();
      t.color = this.colors[Math.min(this.colors.length - 1, Math.floor((1 - e) * this.colors.length))];
      this.remainingPercentageBar.bar.useFilters([new createjs.ColorFilter(t.redMultiplier, t.greenMultiplier, t.blueMultiplier, t.alphaMultiplier, t.redOffset, t.greenOffset, t.blueOffset, t.alphaOffset)]);
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.updateProgressBar = function () {
    if (this.progressBar) {
      var e = this.currentC2ForReward;
      var t = this.boughtC2SinceLastStep;
      this.progressBarGGSTF ||= this.textFieldManager.registerTextField(this.progressBar.textArea, new g.LocalizedTextVO("", false));
      this.progressBarGGSTF.autoFitToBounds = true;
      this.progressBarGGSTF.textContentVO.textId = "value_proportional_value";
      this.progressBarGGSTF.textContentVO.textReplacements = [new h.LocalizedNumberVO(t, false), new h.LocalizedNumberVO(e, false)];
      this.progressBar.mc_background.width = t / e * j.CastlePaymentRewardSpecialOfferConstants.PROGRESSBAR_END_WIDTH;
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.updateRewardItems = function () {
    if (this.rewardItemSet && this.rewardItemSet.disp) {
      X.CollectableRenderHelper.displayMultipleItemsComplete(this, new S.CollectableRenderClipsList(this.rewardItemSet.componentDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info").addEquipmentBgMcs("parent.mc_equipmentBackground"), this.rewards, new A.CollectableRenderOptions(A.CollectableRenderOptions.SET_ADVANCED, new W(j.CastlePaymentRewardSpecialOfferConstants.REWARD_ICON_WIDTH, j.CastlePaymentRewardSpecialOfferConstants.REWARD_ICON_WIDTH)));
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.destroyRewardItems = function () {
    if (this.rewardItemSet) {
      if (this.rewardItemSet.componentDisp && this.rewardItemSet.componentDisp.parent) {
        this.rewardItemSet.componentDisp.parent.removeChild(this.rewardItemSet.componentDisp);
      }
      this.rewardItemSet.destroy();
      this.rewardItemSet = null;
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onOfferRemoved = function (e) {
    if (this.isPrivateOffer && e.offerVO.id == this.dialogPropertiesPrivateOffer.offerVO.id) {
      M.CastleModel.privateOfferData.removeEventListener(R.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onOfferRemoved));
      this.hide();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == this.eventID) {
      var t = z.CastleLayoutManager.getInstance().getDialog(Z.CastleRecruitInfoDialog);
      if (t) {
        t.hide();
      }
      this.hide();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onUpdateEvent = function (e) {
    if (e.specialEventVO.eventId == this.eventID) {
      if (this.canBeBoughtTimes <= 0 || this._boughtCountOnOpen > this.canBeBoughtTimes) {
        this.hide();
      } else {
        this.updateProgressBar();
        this.updateTexts();
        if (this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_FINISH_REAL_CURRENCY || this.offerType == j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_REAL_CURRENCY) {
          this.createRewardItems("REWARDS_REAL_CURRENCY");
        } else {
          this.createRewardItems("REWARDS");
        }
        this.updateRewardItems();
      }
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onTimerUpdate = function (e) {
    if (this.hasTimer) {
      this.updateWithTimer();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onClick = function (t) {
    if (F.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      if (this.buyBtn == t.target) {
        this._buttonPaymentComp.onClickButton(this.paymentSourceId, this.paymentCXFSourceId, this.getShopTab());
      } else if (this.closeBtn == t.target) {
        if (this.isOneTimeOffer) {
          k.CastleExternalDialog.dialogHandler.registerDefaultDialogs(Q.CastleYesNoOrangeWarningDialog, new U.CastleYesNoOrangeWarningDialogProperties("dialog_primeday_oneTimeOffer_confirm_header", "dialog_primeday_oneTimeOffer_confirm_copy", this.bindFunction(this.cancelOneTimeOffer)), false, w.CastleDialogConsts.PRIORITY_TOP, w.CastleDialogConsts.DIALOG_TYPE_MODAL);
        } else {
          this.hide();
        }
      } else if (this.okBtn == t.target) {
        this.hide();
      }
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.getShopTab = function () {
    return _.int(u.instanceOfClass(this, "CastlePaymentRewardSpecialOfferRealCurrencyPrimeDayDialog") ? b.CastleOpenShopExecutor.SHOP_TAB_ONE_TIME_SPECIAL_OFFER : b.CastleOpenShopExecutor.SHOP_TAB_RUBIES);
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.cancelOneTimeOffer = function () {
    var e = -1;
    if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO) {
      e = _.int(this.dialogPropertiesPrivateOffer.offerVO.id);
    }
    M.CastleModel.smartfoxClient.sendCommandVO(new E.C2SOneTimeOfferCancelled(e));
    this.hide();
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.onMouseOver = function (t) {
    e.prototype.onCursorOver.call(this, t);
    this.controller.dispatchEvent(y.EventInstanceMapper.getEvent(I.CastleDialogEvent, I.CastleDialogEvent.MOUSE_ON_DIALOG));
    if (t.target == this.buyBtn && t.target.toolTipText != "") {
      this.layoutManager.tooltipManager.show(t.target.toolTipText, t.target);
    } else if (a.BasicToolTipManager.TOOLTIP_LABEL in t.target && t.target.toolTipText) {
      this.layoutManager.tooltipManager.showWithScale(t.target.toolTipText, H.CastlePaymentRewardHelper.getIconWidth(this.rewards.length), H.CastlePaymentRewardHelper.getIconHeight(this.rewards.length), t.target);
    } else if (t.target instanceof l.TextField && t.target.selectable) {
      this.layoutManager.customCursor.hideCustomCursor();
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.hide = function () {
    this.destroyRewardItems();
    e.prototype.hide.call(this);
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "phoneNumber", {
    get: function () {
      return this.dialogPropertiesPrivateOffer.offerVO.premiumSmsVO.callNumber;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "rewardCode", {
    get: function () {
      return this.dialogPropertiesPrivateOffer.offerVO.premiumSmsVO.premiumSmsCode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "smsPriceInMajorCurrencyUnit", {
    get: function () {
      if (this.dialogPropertiesPrivateOffer.offerVO.premiumSmsVO) {
        return p.Localize.integer(parseFloat(this.dialogPropertiesPrivateOffer.offerVO.premiumSmsVO.price) / 100);
      } else {
        return "error";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "paymentSourceId", {
    get: function () {
      return b.CastleOpenShopExecutor.SOURCE_PAYMENT_REWARD_SPECIAL_OFFER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "paymentCXFSourceId", {
    get: function () {
      return ee.CXFSourceTrackingConstants.SOURCE_PAYMENT_REWARD_SPECIAL_OFFER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "canBeBoughtTimes", {
    get: function () {
      if (this.isPrivateOffer) {
        return 1;
      } else {
        return this.dialogProperties.eventVO.maxBuyCount - this.dialogProperties.eventVO.getBoughtCount();
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "shownOfferBonus", {
    get: function () {
      if (this.isPrivateOffer) {
        return P.CastleHardCurrencyHelper.currencyFactor;
      } else if (this.dialogProperties && this.dialogProperties.eventVO && this.dialogProperties.eventVO.firstReward) {
        return this.dialogProperties.eventVO.firstReward.shownOfferBonus;
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "currencyValue", {
    get: function () {
      if (this.dialogProperties && this.dialogProperties.eventVO && this.dialogProperties.eventVO.firstReward.shownValue) {
        return this.dialogProperties.eventVO.firstReward.shownValue;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "eventID", {
    get: function () {
      if (this.isPrivateOffer) {
        return this.dialogPropertiesPrivateOffer.offerVO.id;
      } else {
        return this.dialogProperties.eventVO.eventId;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "remainingEventTimeInSeconds", {
    get: function () {
      if (this.isPrivateOffer) {
        return this.dialogPropertiesPrivateOffer.offerVO.remainingSeconds;
      } else {
        return this.dialogProperties.eventVO.remainingEventTimeInSeconds;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "currentC2ForReward", {
    get: function () {
      if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO) {
        var e = this.dialogPropertiesPrivateOffer.offerVO.getQuestConditionByName(f.ClientConstOffer.QUEST_CONDITION_PAYMENT_MIN_WITH_UPDATE);
        if (e) {
          return e.neededValue;
        }
      } else if (this.dialogProperties && this.dialogProperties.eventVO && this.dialogProperties.eventVO.firstReward.c2ForReward) {
        return this.dialogProperties.eventVO.firstReward.c2ForReward;
      }
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "boughtC2SinceLastStep", {
    get: function () {
      if (this.isPrivateOffer && this.dialogPropertiesPrivateOffer.offerVO.getQuestConditionByName(f.ClientConstOffer.QUEST_CONDITION_PAYMENT_MIN_WITH_UPDATE)) {
        return this.dialogPropertiesPrivateOffer.offerVO.getQuestConditionByName(f.ClientConstOffer.QUEST_CONDITION_PAYMENT_MIN_WITH_UPDATE).currentValue;
      } else {
        return this.dialogProperties.eventVO.boughtC2 % this.currentC2ForReward;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "rewards", {
    get: function () {
      if (this.isPrivateOffer) {
        return this.dialogPropertiesPrivateOffer.offerVO.getTotalRewardListFromOfferVO();
      } else {
        return this.dialogProperties.eventVO.firstReward.rewardList;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "isPrivateOffer", {
    get: function () {
      return u.instanceOfClass(this.properties, "CastlePrivateOfferDialogProperties");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "dialogPropertiesPrivateOffer", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "rubiesAmountMCValue", {
    get: function () {
      return 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "offerType", {
    get: function () {
      return j.CastlePaymentRewardSpecialOfferConstants.SPECIAL_OFFER_DEFAULT;
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferDialog.prototype.handleHangingDeco = function (e) {
    if (e || !this.dialogDisp.hangingDeco) {
      if (this.dialogDisp.hangingDeco) {
        this.dialogDisp.hangingDeco.visible = true;
        this.dialogDisp.hangingDeco.y = e.y + e.height;
      }
    } else {
      this.dialogDisp.hangingDeco.visible = false;
    }
  };
  CastlePaymentRewardSpecialOfferDialog.prototype.customizeAppearenceOfComponents = function () {
    H.CastlePaymentRewardHelper.customizeSkinComponents(this.skinType, this.titleTxt, this.closeBtn, this.bonusTxt, this.rewardItemSet.componentDisp, this.buyBtn, this.payCountTxt, this.additionalTeaser, this.descriptionBar, this.progressBar, this.rubiesAmountMC);
  };
  Object.defineProperty(CastlePaymentRewardSpecialOfferDialog.prototype, "skinType", {
    get: function () {
      return j.CastlePaymentRewardSpecialOfferConstants.SKIN_DEFAULT;
    },
    enumerable: true,
    configurable: true
  });
  CastlePaymentRewardSpecialOfferDialog.NAME = "CastlePaymentRewardSpecialOffer";
  CastlePaymentRewardSpecialOfferDialog.CLASS_NAME = "CastlePaymentRewardSpecialOffer";
  CastlePaymentRewardSpecialOfferDialog.showOfferIDsInTitle = false;
  return CastlePaymentRewardSpecialOfferDialog;
}(k.CastleExternalDialog);
exports.CastlePaymentRewardSpecialOfferDialog = Y;
var K = require("./816.js");
var z = require("./17.js");
var q = require("./428.js");
var X = require("./25.js");
var Q = require("./1080.js");
var J = require("./154.js");
var Z = require("./115.js");
var $ = require("./3644.js");
var ee = require("./108.js");
c.classImplementsInterfaces(Y, "ICollectableRendererList");