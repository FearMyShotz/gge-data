Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./4457.js");
var p = require("./4458.js");
var h = require("./1910.js");
var g = require("./1911.js");
var C = require("./26.js");
var _ = require("./32.js");
var m = require("./4.js");
var f = require("./190.js");
var O = require("./474.js");
var E = require("./9.js");
var y = require("./8.js");
var b = require("./11.js");
var D = require("./138.js");
var I = require("./135.js");
var T = require("./1912.js");
var v = require("./1145.js");
var S = require("./1144.js");
var A = require("./4471.js");
var L = require("./1915.js");
var P = require("./4472.js");
var M = require("./1916.js");
var R = require("./23.js");
var V = function (e) {
  function CastleLuckyWheelDialog() {
    return e.call(this, CastleLuckyWheelDialog.NAME) || this;
  }
  n.__extends(CastleLuckyWheelDialog, e);
  CastleLuckyWheelDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    y.ButtonHelper.initBasicButtons([this.dialogDisp.btn_toggle_mode, this.dialogDisp.btn_get_tickets, this.dialogDisp.guaranteedJackpotBtn, this.dialogDisp.increaseWinClassBtn]);
    this._btnGuaranteedJackpot = this.dialogDisp.guaranteedJackpotBtn.basicButton = new A.CastleLuckyWheelFeatureButton(this.dialogDisp.guaranteedJackpotBtn, A.CastleLuckyWheelFeatureButton.GUARANTEED_JACKPOT_BTN);
    this._btnIncreaseWinClass = this.dialogDisp.increaseWinClassBtn.basicButton = new A.CastleLuckyWheelFeatureButton(this.dialogDisp.increaseWinClassBtn, A.CastleLuckyWheelFeatureButton.INCREASE_WIN_CLASS_BTN);
    this.dialogDisp.btn_toggle_mode.mc_animation.gotoAndStop(this.dialogDisp.btn_toggle_mode.mc_animation.totalFrames);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_toggle_mode.btn_normal.txt_mode, new r.LocalizedTextVO("dialog_luckyWheel_pro_turnOff")).autoFitToBounds = true;
    this._btnBuyTickets = this.dialogDisp.btn_get_tickets.basicButton;
    this._btnBuyTickets.disp.toolTipText = "dialog_luckyWheel_buyTickets";
    this.dialogDisp.btn_get_tickets.tooltip_get_tickets.toolTipText = "tooltip_tickets";
    this._btnModeToggle = this.dialogDisp.btn_toggle_mode.basicButton;
    this.dialogDisp.btn_toggle_mode.mouseChildren = false;
  };
  CastleLuckyWheelDialog.prototype.updateScoreBarText = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.component_scoreBar.txt_points, new r.LocalizedTextVO("dialog_luckyWheel_description"));
  };
  CastleLuckyWheelDialog.prototype.showLoaded = function (t = null) {
    this.dialogDisp.mc_background.gotoAndStop(1);
    this._tfTickets = this.textFieldManager.registerTextField(this.dialogDisp.btn_get_tickets.tf_ticketcount, new l.LocalizedNumberVO(0));
    this._itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.btn_get_tickets.mc_discount.txt_priceReduction, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE));
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_toggle_mode.btn_pro.txt_mode, new r.LocalizedTextVO("dialog_luckyWheel_pro_turnOn")).autoFitToBounds = true;
    y.ButtonHelper.enableButton(this.dialogDisp.btn_toggle_mode.btn_pro, m.CastleModel.userData.isPayUser);
    if (this.dialogDisp.btn_toggle_mode.cacheCanvas) {
      this.dialogDisp.btn_toggle_mode.updateCache();
    }
    this.dialogDisp.btn_toggle_mode.toolTipText = m.CastleModel.userData.isPayUser ? null : "dialog_luckyWheel_pro_tooltip";
    this.enableBasicButton(this._btnIncreaseWinClass, !this.eventVO.isAtMaxClass);
    this.updateDiscountDisplay();
  };
  CastleLuckyWheelDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(_.CastleUserDataEvent.CHANGE_PAYUSER_INFO, this.bindFunction(this.onPayUserChange));
    m.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    m.CastleModel.specialEventData.addEventListener(_.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.onUserLifetimeSpentChanged));
  };
  CastleLuckyWheelDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(_.CastleUserDataEvent.CHANGE_PAYUSER_INFO, this.bindFunction(this.onPayUserChange));
    m.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    m.CastleModel.specialEventData.removeEventListener(_.CastleUserDataEvent.CHANGE_USER_LIFETIME_SPENT, this.bindFunction(this.onUserLifetimeSpentChanged));
  };
  CastleLuckyWheelDialog.prototype.onPayUserChange = function (e) {
    this.updateToggleButton();
  };
  CastleLuckyWheelDialog.prototype.onUserLifetimeSpentChanged = function (e) {
    this.updateDiscountDisplay();
  };
  CastleLuckyWheelDialog.prototype.onTimerTick = function (t = null) {
    e.prototype.onTimerTick.call(this, t);
    if (u.int(this.eventVO.remainingEventTimeInSeconds) < O.LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN) {
      this.enableBasicButton(this._btnGuaranteedJackpot, false);
      this.enableBasicButton(this._btnIncreaseWinClass, false);
    }
  };
  CastleLuckyWheelDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    } else {
      this.updateDiscountDisplay();
    }
  };
  CastleLuckyWheelDialog.prototype.onRefreshSpecialEvent = function (e) {
    this.updateDiscountDisplay();
  };
  CastleLuckyWheelDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (y.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_toggle_mode:
          if (m.CastleModel.userData.isPayUser) {
            this.changeMode();
          }
          break;
        case this.dialogDisp.btn_get_tickets:
          b.CastleExternalDialog.dialogHandler.registerDefaultDialogs(M.CastleLuckyWheelTicketBuyDialog);
          break;
        case this.dialogDisp.guaranteedJackpotBtn:
          if (this.luckyWheelData.showGuaranteedJackpotDialog) {
            b.CastleExternalDialog.dialogHandler.registerDefaultDialogs(L.CastleLuckyWheelGuaranteedJackpotDialog, new S.CastleLuckyWheelDialogProperties(this.eventVO, this.bindFunction(this.clickedBuyJackpot)));
          } else {
            this.clickedBuyJackpot();
          }
          break;
        case this.dialogDisp.increaseWinClassBtn:
          if (this.luckyWheelData.showIncreaseWinClassDialog) {
            b.CastleExternalDialog.dialogHandler.registerDefaultDialogs(P.CastleLuckyWheelIncreaseWinClassDialog, new S.CastleLuckyWheelDialogProperties(this.eventVO));
          } else {
            m.CastleModel.smartfoxClient.sendCommandVO(new h.C2SLuckyWheelIncreasePrizeClass());
          }
          break;
        case this.dialogDisp.btn_help:
          E.CastleDialogHandler.getInstance().showHelper(c.Localize.text(""), c.Localize.text("dialog_luckyWheel_text_help"));
      }
    }
  };
  CastleLuckyWheelDialog.prototype.clickedBuyJackpot = function () {
    if (this.eventVO.hasEnoughRubiesToBuyJackpot && this.eventVO.hasEnoughTicketsToBuyJackpot) {
      v.CastleLuckyWheelDelayCommandHelper.startCommandDelay();
      m.CastleModel.luckyWheelData.showGuaranteedJackpotDialog = this.eventVO.willShowDialogAgain;
      this._jackPotBought = true;
      m.CastleModel.smartfoxClient.sendCommandVO(new d.C2SLuckyWheelBuyJackpotVO());
    } else if (this.eventVO.hasEnoughRubiesToBuyJackpot) {
      if (!this.eventVO.hasEnoughTicketsToBuyJackpot) {
        b.CastleExternalDialog.dialogHandler.registerDefaultDialogs(M.CastleLuckyWheelTicketBuyDialog);
      }
    } else {
      b.CastleExternalDialog.dialogHandler.registerDefaultDialogs(D.CastleNoMoneyC2Dialog, new I.CastleNoMoneyC2DialogProperties());
    }
  };
  CastleLuckyWheelDialog.prototype.handleNotEnoughTickets = function () {
    b.CastleExternalDialog.dialogHandler.registerDefaultDialogs(M.CastleLuckyWheelTicketBuyDialog);
  };
  CastleLuckyWheelDialog.prototype.startSpin = function () {
    if (m.CastleModel.currencyData.getAmountById(this.eventVO.currencyID) >= 100 && m.CastleModel.userData.isPayUser && !this.eventVO.isProMode) {
      this.dialogDisp.btn_toggle_mode.mc_animation.gotoAndPlay(1);
    }
    m.CastleModel.smartfoxClient.sendCommandVO(new g.C2SLuckyWheelSpinVO(0));
  };
  CastleLuckyWheelDialog.prototype.updateDiscountDisplay = function () {
    var e = m.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_EVENT_PACKAGE_PRIME_SALES);
    if (e && f.EventPackagePrimeSaleEventVO.hasDiscountedPackages(this.eventVO.eventPackagesVO) && e.discount > 0) {
      this.dialogDisp.btn_get_tickets.mc_discount.visible = true;
      this._itxt_discount.textContentVO.textReplacements = [-e.discount];
    } else {
      this.dialogDisp.btn_get_tickets.mc_discount.visible = false;
    }
  };
  CastleLuckyWheelDialog.prototype.enableBasicButton = function (e, t) {
    if (!t) {
      e.resetHoverState();
    }
    if (e != this._btnSpin && e != this._btnGuaranteedJackpot && e != this._btnIncreaseWinClass || !t) {
      if (e == this._btnModeToggle) {
        if (m.CastleModel.userData.isPayUser && !this.component_LuckyWheel.wheelIsTurning && t) {
          e.enableButton = t;
        } else {
          e.enableButton = false;
          e.mouseEnabled = true;
        }
      } else if (e == this._btnIncreaseWinClass) {
        if (this.eventVO.isAtMaxClass || this.component_LuckyWheel.wheelIsTurning || !t) {
          e.enableButton = false;
          e.disp.mouseEnabled = false;
        } else {
          e.enableButton = t;
          e.disp.mouseEnabled = t;
        }
      } else {
        R.TweenMax.delayedCall(0, this.bindFunction(this.enableButtonWithDelay), [e, t]);
        e.disp.mouseEnabled = t;
      }
    } else if (this.eventVO.remainingEventTimeInSeconds > O.LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN || this.component_LuckyWheel.wheelIsTurning) {
      e.enableButton = t;
      e.disp.mouseEnabled = t;
    }
  };
  CastleLuckyWheelDialog.prototype.enableButtonWithDelay = function (e, t) {
    e.enableButton = t;
  };
  CastleLuckyWheelDialog.prototype.changeMode = function () {
    this.changeBtnsStatus(false);
    m.CastleModel.smartfoxClient.sendCommandVO(new p.C2SLuckyWheelChangeModeVO());
  };
  CastleLuckyWheelDialog.prototype.setupFeatureBtns = function () {
    this._btnGuaranteedJackpot.setupButton();
    this._btnIncreaseWinClass.setupButton();
  };
  CastleLuckyWheelDialog.prototype.updateBG = function () {
    e.prototype.updateBG.call(this);
    this.dialogDisp.mc_background.gotoAndStop(this.eventVO.isProMode ? 2 : 1);
    this.dialogDisp.btn_get_tickets.y = this.eventVO.isProMode ? 104 : 95;
    this.dialogDisp.component_spin.y = this.eventVO.isProMode ? 118 : 109;
  };
  CastleLuckyWheelDialog.prototype.updateModeDependentVisuals = function () {
    e.prototype.updateModeDependentVisuals.call(this);
    this.updateToggleButton();
    this.setupFeatureBtns();
  };
  CastleLuckyWheelDialog.prototype.updateToggleButton = function () {
    if (this.eventVO.isProMode) {
      this.dialogDisp.btn_toggle_mode.btn_pro.visible = false;
      this.dialogDisp.btn_toggle_mode.btn_normal.visible = true;
    } else {
      this.dialogDisp.btn_toggle_mode.btn_normal.visible = false;
      this.dialogDisp.btn_toggle_mode.btn_pro.visible = true;
    }
    this.enableBasicButton(this._btnModeToggle, true);
  };
  CastleLuckyWheelDialog.prototype.changeBtnsStatus = function (t) {
    e.prototype.changeBtnsStatus.call(this, t);
    this.enableBasicButton(this._btnModeToggle, t);
    this.enableBasicButton(this._btnBuyTickets, t);
    this.enableBasicButton(this._btnIncreaseWinClass, t && !this.eventVO.isAtMaxClass);
    this.enableBasicButton(this._btnGuaranteedJackpot, t);
  };
  CastleLuckyWheelDialog.NAME = "CastleLuckyWheel";
  return CastleLuckyWheelDialog;
}(T.CastleBasicLuckyWheelDialog);
exports.CastleLuckyWheelDialog = V;
a.classImplementsInterfaces(V, "ICollectableRendererList");