Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./39.js");
var c = require("./21.js");
var u = require("./26.js");
var d = require("./32.js");
var p = require("./4.js");
var h = require("./8.js");
var g = function (e) {
  function CastleLuckyWheelGuaranteedJackpotDialog() {
    var t = this;
    t.willShowDialogAgain = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleLuckyWheelGuaranteedJackpotDialog.NAME) || this;
  }
  n.__extends(CastleLuckyWheelGuaranteedJackpotDialog, e);
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.closeBtn, this.dialogDisp.cancelBtn, this.dialogDisp.acceptBtn]);
    this.checkmarkComponent = new _.CastleLuckyWheelCheckboxWrapper(this.dialogDisp.checkmarkComponent);
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this.willShowDialogAgain = p.CastleModel.luckyWheelData.showGuaranteedJackpotDialog;
    this.checkmarkComponent.isEnabled = !this.willShowDialogAgain;
    this.setTexts();
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    p.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    p.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.addEventListener(d.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onTicketUpdate));
    this.controller.addEventListener(d.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyUpdate));
    this.checkmarkComponent.addEventListenerOnShow();
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    p.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    p.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.removeEventListener(d.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onTicketUpdate));
    this.controller.removeEventListener(d.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyUpdate));
    this.checkmarkComponent.removeEventListenersOnHide();
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.onUserCurrencyUpdate = function (e) {
    this.colorizeTexts();
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.onTicketUpdate = function (e) {
    this.colorizeTexts();
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    }
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.onTimerTick = function (e) {
    if (this.eventVO.remainingEventTimeInSeconds < C.LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN) {
      h.ButtonHelper.enableButton(this.dialogDisp.acceptBtn, false);
    }
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.titleTxt, new s.LocalizedTextVO("dialog_luckyWheel_guaranteedJackpot_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.descTxt, new s.LocalizedTextVO("dialog_luckyWheel_guaranteedJackpot_copy", [p.CastleModel.luckyWheelData.jackpotC2Price, p.CastleModel.luckyWheelData.jackpotTicketPrice]));
    this.textFieldManager.registerTextField(this.dialogDisp.notAgainTxt, new s.LocalizedTextVO("dialog_luckyWheel_guaranteedJackpot_dontShow"));
    this._ticketPriceText = this.textFieldManager.registerTextField(this.dialogDisp.ticketsTxt, new a.LocalizedNumberVO(p.CastleModel.luckyWheelData.jackpotTicketPrice));
    this._c2PriceText = this.textFieldManager.registerTextField(this.dialogDisp.rubbiesTxt, new a.LocalizedNumberVO(p.CastleModel.luckyWheelData.jackpotC2Price));
    this.colorizeTexts();
    this.dialogDisp.ticketPriceTooltipArea.toolTipText = "tooltip_tickets";
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.colorizeTexts = function () {
    if (this.eventVO.hasEnoughRubiesToBuyJackpot) {
      this._c2PriceText.color = r.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      this._c2PriceText.color = r.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
    this.dialogDisp.c2PriceTooltipArea.toolTipText = l.ClientConstTextIds.C2;
    if (this.eventVO.hasEnoughTicketsToBuyJackpot) {
      this._ticketPriceText.color = r.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      this._ticketPriceText.color = r.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
  };
  CastleLuckyWheelGuaranteedJackpotDialog.prototype.onClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.closeBtn:
        case this.dialogDisp.cancelBtn:
          this.hide();
          break;
        case this.dialogDisp.acceptBtn:
          this.willShowDialogAgain = !this.checkmarkComponent.isEnabled;
          this.eventVO.willShowDialogAgain = this.willShowDialogAgain;
          this.dialogProperties.clickAcceptCallback();
      }
    }
  };
  Object.defineProperty(CastleLuckyWheelGuaranteedJackpotDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelGuaranteedJackpotDialog.prototype, "eventVO", {
    get: function () {
      return this.dialogProperties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelGuaranteedJackpotDialog.__initialize_static_members = function () {
    CastleLuckyWheelGuaranteedJackpotDialog.NAME = "CastleLuckyWheelGuaranteedJackpotDialog";
  };
  return CastleLuckyWheelGuaranteedJackpotDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleLuckyWheelGuaranteedJackpotDialog = g;
var C = require("./474.js");
var _ = require("./1146.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");
g.__initialize_static_members();