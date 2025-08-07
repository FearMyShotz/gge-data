Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./3.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./23.js");
var C = require("./16.js");
var _ = require("./241.js");
var m = require("./21.js");
var f = require("./118.js");
var O = require("./233.js");
var E = require("./26.js");
var y = require("./32.js");
var b = require("./4.js");
var D = require("./475.js");
var I = require("./27.js");
var T = require("./251.js");
var v = require("./546.js");
var S = require("./8.js");
var A = require("./11.js");
var L = require("./1145.js");
var P = require("./4461.js");
var M = require("./1914.js");
var R = require("./4467.js");
var V = require("./4468.js");
var x = require("./1915.js");
var w = require("./4469.js");
var B = require("./4470.js");
var F = require("./4471.js");
var N = require("./4472.js");
var k = function (e) {
  function CastleBasicLuckyWheelDialog(t) {
    var i = this;
    i._currentTicketCount = 0;
    i._currentCoinsAmount = 0;
    i._currentRubiesAmount = 0;
    i._nextRubiesAmount = 0;
    i._nextCoinsAmount = 0;
    i._firstTicketCountUpdateDuringThisSpin = true;
    i._jackPotBought = false;
    i._playerID = 0;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(CastleBasicLuckyWheelDialog, e);
  CastleBasicLuckyWheelDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    S.ButtonHelper.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this.textFieldManager.registerTextField(this.dialogDisp.spin_btn_background.spin_component_background_pro.txt_label, new u.LocalizedTextVO("dialog_luckyWheel_pro"));
    this.dialogDisp.componentLevelTooltip.toolTipText = "dialog_luckyWheel_winclassCurrent";
    this.dialogDisp.component_level.mouseChildren = false;
    this.component_spin = new w.CastleLuckyWheelSpinComponent(this.dialogDisp.component_spin, this.eventVO.eventId);
    this.component_speechbubble = new V.CastleLuckyWheelSpeechbubbleComponent(this.dialogDisp.tf_speechbubble, this.eventVO.eventId);
    this.component_jackpot = new P.CastleLuckyWheelJackpotComponent(this.dialogDisp.component_rewards, this.eventVO);
    this.component_LuckyWheel = new this.mediatorClass(this.dialogDisp.component_wheels, this.eventVO.eventId);
    this.component_LuckyWheel.maxSpeedReachedCallback = this.bindFunction(this.wheelHasReachedMaxSpeed);
    this.component_LuckyWheel.startBreakingCallback = this.bindFunction(this.wheelStartsSlowing);
    this.component_LuckyWheel.wheelStoppedCallback = this.bindFunction(this.wheelStopped);
    this.component_LuckyWheel.awardHasBeenAwardedCallback = this.bindFunction(this.awardHasBeenAwarded);
    this._btnSpin = this.dialogDisp.component_spin.btn_spin.basicButton = this.component_spin.spinButton;
    this.initProgressCircle();
    this.textFieldManager.registerTextField(this.dialogDisp.mc_disabledRanking.txt_rank, new u.LocalizedTextVO("rank"));
    this.dialogDisp.mc_disabledRanking.toolTipText = "dialog_tournament_yourRank";
    this.dialogDisp.mc_disabledRanking.mouseChildren = false;
    this.dialogDisp.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
    this.dialogDisp.mc_storageSpace.mouseChildren = false;
    this.dialogDisp.mc_storageSpaceGem.toolTipText = "dialog_gemSpace_tooltip";
    this.dialogDisp.mc_storageSpaceGem.mouseChildren = false;
  };
  Object.defineProperty(CastleBasicLuckyWheelDialog.prototype, "mediatorClass", {
    get: function () {
      return M.CastleLuckyWheelMediator;
    },
    enumerable: true,
    configurable: true
  });
  CastleBasicLuckyWheelDialog.prototype.initProgressCircle = function () {
    this._dottedProgressCircleComponent = new B.CircularItemDistributor(this.dialogDisp.component_wheels.container_dots);
    var e = N.SomeDistributableItem;
    var t = new F.CircularItemDistributorProperties(e, 72, "LuckyWheelProgressDot", 172, 1, 0.01);
    this._dottedProgressCircleComponent.init(t);
  };
  CastleBasicLuckyWheelDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this._playerID != b.CastleModel.userData.playerID) {
      this._playerID = b.CastleModel.userData.playerID;
      this.component_LuckyWheel.clearReward();
    }
    this.initDisplayedCurrencies();
    b.CastleModel.smartfoxClient.sendCommandVO(new _.C2SPointEventGetPointsVO(this.eventVO.eventId));
    var i = this.eventVO.scoreEventVO.pointThresholds.concat(this.eventVO.scoreEventVO.topX);
    this.component_scoreBar = new R.CastleLuckyWheelScoreBar(this.dialogDisp.component_scoreBar, new v.CastleScoreEventScoreBarProperties(this.eventVO.scoreEventVO.rewardLists, this.eventVO.textIDString, i, this.eventVO.levelLabels), this.eventVO);
    this.dialogDisp.component_level.mc_overlay.alpha = 0;
    this.updateSpeechbubbleAfterModeChange();
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.setSpinButtonState();
    this.onTimerTick();
    this.updateModeDependentVisuals();
    this.updateTotalTicketCount();
    this.updatePreviewTitle();
    this.updateWinClassAndProgress();
    this.updateStorageText();
    this.component_jackpot.startDelayedAutoSwitch();
    this.changeBtnsStatus(true);
    this.enableBasicButton(this.dialogDisp.btn_close.basicButton, true);
    this.component_LuckyWheel.show();
  };
  CastleBasicLuckyWheelDialog.prototype.initDisplayedCurrencies = function () {
    this._currentCoinsAmount = h.int(b.CastleModel.currencyData.c1Amount);
    this._currentRubiesAmount = h.int(b.CastleModel.currencyData.c2Amount);
    this._nextCoinsAmount = h.int(b.CastleModel.currencyData.c1Amount);
    this._nextRubiesAmount = h.int(b.CastleModel.currencyData.c2Amount);
  };
  CastleBasicLuckyWheelDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(y.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onTicketUpdate));
    this.controller.addEventListener(y.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onCurrencyUpdate));
    b.CastleModel.specialEventData.addEventListener(E.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    b.CastleModel.timerData.addEventListener(m.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    this.luckyWheelData.addEventListener(E.CastleSpecialEventEvent.LUCKY_WHEEL_MODE_CHANGED, this.bindFunction(this.onModeChange));
    this.luckyWheelData.addEventListener(E.CastleSpecialEventEvent.LUCKY_WHEEL_AWARDED, this.bindFunction(this.onRewardReceived));
    this.luckyWheelData.addEventListener(E.CastleSpecialEventEvent.LUCKY_WHEEL_BOUGHT_JACKPOT, this.bindFunction(this.onBoughtJackpot));
    this.luckyWheelData.addEventListener(E.CastleSpecialEventEvent.LUCKY_WHEEL_WINCLASS_CHANGED, this.bindFunction(this.onWinClassBought));
    this.controller.addEventListener(f.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    this.controller.addEventListener(O.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    this.component_spin.addEventListenerOnShow();
  };
  CastleBasicLuckyWheelDialog.prototype.onInventorySpace = function (e) {
    this.updateStorageText();
  };
  CastleBasicLuckyWheelDialog.prototype.updateStorageText = function () {
    this.setStorageBar(this.dialogDisp.mc_storageSpace.equipmentBar, b.CastleModel.equipData.filledInventorySpace, b.CastleModel.equipData.playerTotalInventorySpace);
    this.setStorageBar(this.dialogDisp.mc_storageSpaceGem.gemBar, b.CastleModel.gemData.filledInventorySpace, b.CastleModel.gemData.playerTotalInventorySpace);
    this.dialogDisp.mc_storageSpace.toolTipText = p.Localize.text("dialog_equipmentSpace_tooltip") + "\n" + p.Localize.text(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [b.CastleModel.equipData.filledInventorySpace, b.CastleModel.equipData.playerTotalInventorySpace]);
    this.dialogDisp.mc_storageSpaceGem.toolTipText = p.Localize.text("dialog_gemSpace_tooltip") + "\n" + p.Localize.text(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [b.CastleModel.gemData.filledInventorySpace, b.CastleModel.gemData.playerTotalInventorySpace]);
  };
  CastleBasicLuckyWheelDialog.prototype.setStorageBar = function (e, t, i) {
    var n = Math.min(t / i, 1);
    e.scaleX = n;
    var o = new s.ColorTransform();
    o.color = n == 1 ? C.ClientConstColor.GENERIC_BRIGHT_RED : n >= 0.8 ? C.ClientConstColor.GENERIC_BRIGHT_YELLOW : C.ClientConstColor.GENERIC_LIGHT_GREEN;
    e.transform.colorTransform = o;
  };
  CastleBasicLuckyWheelDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.removeEventListener(y.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onTicketUpdate));
    this.controller.removeEventListener(y.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onCurrencyUpdate));
    b.CastleModel.specialEventData.removeEventListener(E.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    b.CastleModel.timerData.removeEventListener(m.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    this.luckyWheelData.removeEventListener(E.CastleSpecialEventEvent.LUCKY_WHEEL_MODE_CHANGED, this.bindFunction(this.onModeChange));
    this.luckyWheelData.removeEventListener(E.CastleSpecialEventEvent.LUCKY_WHEEL_AWARDED, this.bindFunction(this.onRewardReceived));
    this.luckyWheelData.removeEventListener(E.CastleSpecialEventEvent.LUCKY_WHEEL_BOUGHT_JACKPOT, this.bindFunction(this.onBoughtJackpot));
    this.luckyWheelData.removeEventListener(E.CastleSpecialEventEvent.LUCKY_WHEEL_WINCLASS_CHANGED, this.bindFunction(this.onWinClassBought));
    this.controller.removeEventListener(f.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    this.controller.removeEventListener(O.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpace));
    this.component_spin.removeEventListenersOnHide();
  };
  CastleBasicLuckyWheelDialog.prototype.onBoughtJackpot = function (e) {
    this.changeBtnsStatus(false);
    this.enableBasicButton(this.dialogDisp.btn_close.basicButton, false);
    this.component_LuckyWheel.changeWheel(M.CastleLuckyWheelMediator.All_JACKPOT_WHEEL);
    this.component_LuckyWheel.spinWheel();
  };
  CastleBasicLuckyWheelDialog.prototype.onWinClassBought = function (e) {
    this.updateWinClassAndProgress();
    this.updateProgressBars();
  };
  CastleBasicLuckyWheelDialog.prototype.updateSpeechbubbleAfterModeChange = function () {
    if (this.eventVO.isProMode && !this.eventVO.hasVisitedProMode) {
      this.component_speechbubble.state = V.CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_PRO_MODE_FIRST_VISIT;
    } else if (this.eventVO.isProMode || !this.eventVO.isFirstVisitToLuckyWheel && !this.eventVO.hasFreeSpin) {
      this.component_speechbubble.state = V.CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_REGULAR;
    } else {
      this.component_speechbubble.state = V.CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_FIRST_VISIT;
    }
  };
  CastleBasicLuckyWheelDialog.prototype.setSpinButtonState = function () {
    if (!this.component_LuckyWheel.wheelIsTurning) {
      var e = false;
      if (this.luckyProperties && this.eventVO) {
        e = this.eventVO.hasFreeSpin;
      }
      var t = h.int(this.eventVO.ticketCost);
      var i = b.CastleModel.currencyData.getAmountById(this.eventVO.currencyID) >= t;
      if (e && !this.eventVO.isProMode) {
        this._btnSpin.state = x.CastleLuckyWheelSpinButton.STATE_FREE_SPIN;
      } else {
        this._btnSpin.state = i ? x.CastleLuckyWheelSpinButton.STATE_START_SPIN : x.CastleLuckyWheelSpinButton.STATE_NOT_ENOUGH_TICKETS;
      }
    }
  };
  CastleBasicLuckyWheelDialog.prototype.hideLoaded = function (t = null) {
    this.component_jackpot.resetPosition();
    this.component_jackpot.dispose();
    this.component_LuckyWheel.hide();
    this.component_scoreBar.destroy();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleBasicLuckyWheelDialog.prototype.onRewardReceived = function (e) {
    if (!this.eventVO.rewardIsTickets) {
      this.updateTotalTicketCount();
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onModeChange = function (e) {
    this.component_jackpot.update();
    this.component_jackpot.resetPosition();
    this.component_jackpot.startDelayedAutoSwitch();
    this.component_jackpot.changePreviewLevel(0);
    this.updateModeDependentVisuals();
    this.changeBtnsStatus(true);
    this.updateSpeechbubbleAfterModeChange();
  };
  CastleBasicLuckyWheelDialog.prototype.onCurrencyUpdate = function (e) {
    var t = b.CastleModel.currencyData.c1Amount;
    var i = b.CastleModel.currencyData.c2Amount;
    if ((this._currentRubiesAmount < i || this._currentCoinsAmount < t) && (this._jackPotBought || this.component_LuckyWheel.wheelIsTurning)) {
      var n = {
        C1: this._currentCoinsAmount,
        C2: this._currentRubiesAmount
      };
      this.updateCurrency(n);
    } else {
      this._currentCoinsAmount = h.int(t);
      this._currentRubiesAmount = h.int(i);
    }
    this._nextCoinsAmount = h.int(t);
    this._nextRubiesAmount = h.int(i);
  };
  CastleBasicLuckyWheelDialog.prototype.updateCurrency = function (e = null) {
    this.controller.removeEventListener(y.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onCurrencyUpdate));
    var t = e || {
      C1: this._nextCoinsAmount,
      C2: this._nextRubiesAmount
    };
    b.CastleModel.currencyData.parseGCU(t);
    this.controller.addEventListener(y.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onCurrencyUpdate));
    this._currentCoinsAmount = this._nextCoinsAmount;
    this._currentRubiesAmount = this._nextRubiesAmount;
    this._jackPotBought = false;
  };
  CastleBasicLuckyWheelDialog.prototype.onTicketUpdate = function (e) {
    var t = b.CastleModel.currencyData.getAmountById(this.eventVO.currencyID);
    if (this.component_LuckyWheel.wheelIsTurning) {
      if (this.component_LuckyWheel.wheelIsTurning && this._currentTicketCount > t) {
        this.updateTotalTicketCount(false);
      } else {
        this.updateTotalTicketCount(true);
      }
    } else {
      this.updateTotalTicketCount(false);
    }
    this.updateTicketCostsForSpin();
  };
  CastleBasicLuckyWheelDialog.prototype.updateTotalTicketCount = function (e = false) {
    if (!!this._firstTicketCountUpdateDuringThisSpin || !e) {
      this._firstTicketCountUpdateDuringThisSpin = false;
      if (e) {
        if (!this.eventVO.hasFreeSpin || !!this.eventVO.isProMode) {
          this._currentTicketCount -= h.int(this.eventVO.ticketCost);
          this._currentTicketCount = this._currentTicketCount >= 0 ? this._currentTicketCount : 0;
        }
      } else {
        this._currentTicketCount = h.int(b.CastleModel.currencyData.getAmountById(this.eventVO.currencyID));
      }
      this._tfTickets.textContentVO.numberValue = this._currentTicketCount;
      this.setSpinButtonState();
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onTimerTick = function (e = null) {
    var t = h.int(this.eventVO.remainingEventTimeInSeconds);
    I.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_duration.tf_remainingTime, t);
    I.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_duration, t);
    if (t < D.LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN) {
      this.enableBasicButton(this._btnSpin, false);
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onClick = function (e) {
    if (S.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.component_spin.btn_spin:
          this.onWheelAction();
          break;
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onWheelAction = function () {
    switch (this._btnSpin.state) {
      case x.CastleLuckyWheelSpinButton.STATE_FREE_SPIN:
      case x.CastleLuckyWheelSpinButton.STATE_START_SPIN:
        this._firstTicketCountUpdateDuringThisSpin = true;
        this._jackPotBought = false;
        this.changeBtnsStatus(false);
        this.enableBasicButton(this.dialogDisp.btn_close.basicButton, false);
        this.component_LuckyWheel.spinWheel();
        this.luckyWheelData.resetWinningCategory();
        this.component_LuckyWheel.displayShine(false);
        L.CastleLuckyWheelDelayCommandHelper.startCommandDelay();
        this.startSpin();
        break;
      case x.CastleLuckyWheelSpinButton.STATE_STOP_SPIN:
        if (this.luckyWheelData.winningCategoryReceived) {
          this.component_LuckyWheel.stopWheel();
        } else {
          this.luckyWheelData.SGN_LUCKY_CATEGORY_RECEIVED.add(this.bindFunction(this.onWCReceived));
        }
        break;
      case x.CastleLuckyWheelSpinButton.STATE_NOT_ENOUGH_TICKETS:
        this.handleNotEnoughTickets();
    }
  };
  CastleBasicLuckyWheelDialog.prototype.handleNotEnoughTickets = function () {};
  CastleBasicLuckyWheelDialog.prototype.startSpin = function () {};
  CastleBasicLuckyWheelDialog.prototype.updateWinClassAndProgress = function () {
    this.eventVO.isAtMaxClass;
    this.textFieldManager.registerTextField(this.dialogDisp.component_level.txt_level, new c.LocalizedNumberVO(this.eventVO.currentWinClass));
    this.updatePreviewTitle();
    this.component_jackpot.changePreviewLevel(0);
    this.setupFeatureBtns();
  };
  CastleBasicLuckyWheelDialog.prototype.fadeBack = function () {
    g.TweenMax.fromTo(this.dialogDisp.component_level.mc_overlay, 0.1, {
      alpha: 1
    }, {
      alpha: 0
    });
  };
  CastleBasicLuckyWheelDialog.prototype.updatePreviewTitle = function () {
    this.component_jackpot.updateTitle();
  };
  CastleBasicLuckyWheelDialog.prototype.enableBasicButton = function (e, t) {
    if (!t) {
      e.resetHoverState();
    }
    if (e == this._btnSpin && t) {
      if (this.eventVO.remainingEventTimeInSeconds > D.LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN || this.component_LuckyWheel.wheelIsTurning) {
        e.enableButton = t;
        e.disp.mouseEnabled = t;
      }
    } else {
      e.enableButton = t;
      e.disp.mouseEnabled = t;
    }
  };
  CastleBasicLuckyWheelDialog.prototype.awardHasBeenAwarded = function () {
    this.updateJackpotDisplay();
    this.updateCurrency();
  };
  CastleBasicLuckyWheelDialog.prototype.wheelHasReachedMaxSpeed = function () {
    this._btnSpin.state = x.CastleLuckyWheelSpinButton.STATE_STOP_SPIN;
    if (this.component_spin.isAutoSpin) {
      if (this.luckyWheelData.winningCategoryReceived) {
        this.component_LuckyWheel.stopWheel();
      } else {
        this.luckyWheelData.SGN_LUCKY_CATEGORY_RECEIVED.add(this.bindFunction(this.onWCReceived));
      }
    } else {
      this.enableBasicButton(this._btnSpin, true);
    }
  };
  CastleBasicLuckyWheelDialog.prototype.onWCReceived = function () {
    this.component_LuckyWheel.stopWheel();
    this.luckyWheelData.SGN_LUCKY_CATEGORY_RECEIVED.remove(this.bindFunction(this.onWCReceived));
  };
  CastleBasicLuckyWheelDialog.prototype.wheelStartsSlowing = function () {
    this.enableBasicButton(this._btnSpin, false);
  };
  CastleBasicLuckyWheelDialog.prototype.wheelStopped = function () {
    this._firstTicketCountUpdateDuringThisSpin = true;
    this.updateTotalTicketCount();
    this.updatePreviewSets();
    this.updateWinClassAndProgress();
    this.setSpinButtonState();
    this.updateProgressBars();
    this.updateTicketCostsForSpin();
    if (!this.component_LuckyWheel.hasWonJackpot) {
      this.updateJackpotDisplay();
      this.updateCurrency();
    }
    if (!this.eventVO.hasLevelUp) {
      this.component_speechbubble.state = V.CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_WIN;
    }
    this.changeBtnsStatus(true);
    this.enableBasicButton(this.dialogDisp.btn_close.basicButton, true);
  };
  CastleBasicLuckyWheelDialog.prototype.setupFeatureBtns = function () {};
  CastleBasicLuckyWheelDialog.prototype.updateModeDependentVisuals = function () {
    this.updateBG();
    this.updateJackpotDisplay();
    this.updatePreviewSets();
    this.setSpinButtonState();
    this.updateTicketCostsForSpin();
    this.updateProgressBars();
  };
  CastleBasicLuckyWheelDialog.prototype.updateBG = function () {
    this.dialogDisp.spin_btn_background.spin_component_background_normal.visible = !this.eventVO.isProMode;
    this.dialogDisp.spin_btn_background.spin_component_background_pro.visible = this.eventVO.isProMode;
  };
  CastleBasicLuckyWheelDialog.prototype.updateTicketCostsForSpin = function () {
    var e = 0;
    e = this.eventVO.hasFreeSpin && !this.eventVO.isProMode ? 0 : this.eventVO.ticketCost;
    this.component_spin.updateTicketCount(e);
  };
  CastleBasicLuckyWheelDialog.prototype.updateProgressBars = function () {
    this.updateWinClassProgressBar();
    this.updatePointEventScoreBar();
    this.updateLevel();
  };
  CastleBasicLuckyWheelDialog.prototype.updateWinClassProgressBar = function () {
    var e = 0;
    var t = this.eventVO.winClassProgress * 100;
    var i = h.int(this.eventVO.getNeededSpinsForClass(this.eventVO.currentWinClass) - this.eventVO.numSpinsDoneInCurrentClass);
    if (this.eventVO.isAtMaxClass) {
      e = 0;
      t = 100;
    }
    if (this.eventVO.isProMode) {
      i = Math.ceil(i / r.LuckyWheelConst.WINNING_CLASS_PROGRESS_PROMODE);
    }
    this._dottedProgressCircleComponent.highlightItems(e, t, N.SomeDistributableItem.FRAME_PROGRESS, this.getProgressTooltips(i));
    e = t;
    t = Math.min(this.eventVO.nextWinClassProgress * 100, 100);
    this._dottedProgressCircleComponent.highlightItems(e, t, N.SomeDistributableItem.FRAME_ANOUNCED_PROGRESS, this.getProgressTooltips(i));
    if (t < 100) {
      e = t;
      t = 100;
      this._dottedProgressCircleComponent.highlightItems(e, t, N.SomeDistributableItem.FRAME_DEFAULT, this.getProgressTooltips(i));
    }
  };
  CastleBasicLuckyWheelDialog.prototype.updatePointEventScoreBar = function () {
    if (this.component_scoreBar && this.eventVO) {
      var e = [];
      for (var t = 0; t < this.eventVO.scoreEventVO.pointThresholds.length; t++) {
        e.push(this.luckyWheelData.getTotalNeededSpinsForClass(this.eventVO.scoreEventVO.pointThresholds[t]));
      }
      this.component_scoreBar.update(new T.CastleScoreBarProgressVO(this.eventVO.scoreEventVO.ownPoints, this.eventVO.scoreEventVO.ownRank, e, this.eventVO.scoreEventVO.topX));
    }
    this.updateScoreBarText();
    if (this.eventVO.scoreEventVO.ownRank > 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_disabledRanking.txt_value, new c.LocalizedNumberVO(this.eventVO.scoreEventVO.ownRank));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_disabledRanking.txt_value, new d.TextVO("-"));
    }
  };
  CastleBasicLuckyWheelDialog.prototype.updateScoreBarText = function () {};
  CastleBasicLuckyWheelDialog.prototype.updateLevel = function () {
    if (this.eventVO.hasLevelUp) {
      g.TweenMax.fromTo(this.dialogDisp.component_level.mc_overlay, 0.5, {
        alpha: 0
      }, {
        alpha: 1,
        onComplete: this.bindFunction(this.fadeBack)
      });
      this.component_speechbubble.state = V.CastleLuckyWheelSpeechbubbleComponent.SPEECH_STATE_LEVEL_UP;
    }
  };
  CastleBasicLuckyWheelDialog.prototype.getProgressTooltips = function (e) {
    if (e <= 30 && e > 0) {
      if (e != 1) {
        return p.Localize.text("dialog_luckyWheel_progressSpins_tooltip_plural", [e]);
      } else {
        return "dialog_luckyWheel_progressSpins_tooltip_singular";
      }
    } else if (this.eventVO && this.eventVO.isAtMaxClass) {
      return "dialog_luckyWheel_progressSpins_tooltip_max";
    } else {
      return "dialog_luckyWheel_progress_tooltip";
    }
  };
  CastleBasicLuckyWheelDialog.prototype.updatePreviewSets = function () {
    this.component_jackpot.update();
  };
  CastleBasicLuckyWheelDialog.prototype.updateJackpotDisplay = function () {
    this.component_jackpot.update();
  };
  Object.defineProperty(CastleBasicLuckyWheelDialog.prototype, "luckyProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBasicLuckyWheelDialog.prototype, "eventVO", {
    get: function () {
      if (this.luckyProperties) {
        return this.luckyProperties.eventVO;
      } else {
        return b.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_LUCKYWHEEL);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleBasicLuckyWheelDialog.prototype.destroy = function () {
    if (this.component_LuckyWheel) {
      this.component_LuckyWheel.destroy();
    }
    e.prototype.destroy.call(this);
  };
  Object.defineProperty(CastleBasicLuckyWheelDialog.prototype, "luckyWheelData", {
    get: function () {
      return this.eventVO.luckyWheelData;
    },
    enumerable: true,
    configurable: true
  });
  CastleBasicLuckyWheelDialog.prototype.changeBtnsStatus = function (e) {
    this.enableBasicButton(this._btnSpin, e);
  };
  return CastleBasicLuckyWheelDialog;
}(A.CastleExternalDialog);
exports.CastleBasicLuckyWheelDialog = k;
a.classImplementsInterfaces(k, "ICollectableRendererList");