Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./39.js");
var c = require("./1911.js");
var u = require("./21.js");
var d = require("./26.js");
var p = require("./32.js");
var h = require("./4.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = require("./135.js");
var m = function (e) {
  function CastleLuckyWheelIncreaseWinClassDialog() {
    var t = this;
    t.willShowDialogAgain = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleLuckyWheelIncreaseWinClassDialog.NAME) || this;
  }
  n.__extends(CastleLuckyWheelIncreaseWinClassDialog, e);
  CastleLuckyWheelIncreaseWinClassDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.closeBtn, this.dialogDisp.cancelBtn, this.dialogDisp.acceptBtn]);
    this.checkmarkComponent = new y.CastleLuckyWheelCheckboxWrapper(this.dialogDisp.checkmarkComponent);
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    var i = this.setRewardsDisplayObject();
    this.rewardComp = new O.PaginatedCollectableRenderListWrapper(this.dialogDisp.rewardComponent, this.rewards, this.collectableRenderList, i, this.dialogDisp.btn_left, this.dialogDisp.btn_right, "mc_item", "mc_itemholder", "parent.btn_info", "mc_iconHolder", "txt_amount");
    this.willShowDialogAgain = h.CastleModel.luckyWheelData.showIncreaseWinClassDialog;
    this.checkmarkComponent.isEnabled = !this.willShowDialogAgain;
    this.setTexts();
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    h.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    h.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.addEventListener(p.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onTicketUpdate));
    this.controller.addEventListener(p.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyUpdate));
    this.checkmarkComponent.addEventListenerOnShow();
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    h.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerTick));
    h.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.controller.removeEventListener(p.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onTicketUpdate));
    this.controller.removeEventListener(p.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyUpdate));
    this.checkmarkComponent.removeEventListenersOnHide();
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.onUserCurrencyUpdate = function (e) {
    this.colorizeTexts();
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.onTicketUpdate = function (e) {
    this.colorizeTexts();
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == this.eventVO.eventId) {
      this.hide();
    }
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.onTimerTick = function (e) {
    if (this.eventVO.remainingEventTimeInSeconds < f.LuckyWheelData.MINIMUM_TIME_TO_ENABLE_SPIN) {
      g.ButtonHelper.enableButton(this.dialogDisp.acceptBtn, false);
    }
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.titleTxt, new s.LocalizedTextVO("dialog_luckyWheel_increaseClass_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.descTxt, new s.LocalizedTextVO("dialog_luckyWheel_increaseClass_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.notAgainTxt, new s.LocalizedTextVO("dialog_luckyWheel_increaseClass_dontShow"));
    this._c2PriceText = this.textFieldManager.registerTextField(this.dialogDisp.rubbiesTxt, new a.LocalizedNumberVO(h.CastleModel.luckyWheelData.increaseWinClassC2));
    this.dialogDisp.c2PriceTooltipArea.toolTipText = l.ClientConstTextIds.C2;
    this.colorizeTexts();
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.colorizeTexts = function () {
    if (this.hasEnoughRubies) {
      this._c2PriceText.color = r.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      this._c2PriceText.color = r.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    }
  };
  Object.defineProperty(CastleLuckyWheelIncreaseWinClassDialog.prototype, "hasEnoughRubies", {
    get: function () {
      return h.CastleModel.currencyData.c2Amount >= h.CastleModel.luckyWheelData.increaseWinClassC2;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelIncreaseWinClassDialog.prototype.setRewardsDisplayObject = function () {
    var e = 0;
    if (this.rewards.length == 6) {
      this.dialogDisp.rewardComponent.gotoAndStop(3);
      e = 6;
    } else if (this.rewards.length == 9) {
      this.dialogDisp.rewardComponent.gotoAndStop(2);
      e = 9;
    } else {
      this.dialogDisp.rewardComponent.gotoAndStop(1);
      e = 12;
    }
    return e;
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.closeBtn:
        case this.dialogDisp.cancelBtn:
          this.hide();
          break;
        case this.dialogDisp.acceptBtn:
          this.clickedAccept();
      }
    }
  };
  CastleLuckyWheelIncreaseWinClassDialog.prototype.clickedAccept = function () {
    this.willShowDialogAgain = !this.checkmarkComponent.isEnabled;
    if (this.hasEnoughRubies) {
      h.CastleModel.smartfoxClient.sendCommandVO(new c.C2SLuckyWheelIncreasePrizeClass());
      h.CastleModel.luckyWheelData.showIncreaseWinClassDialog = this.willShowDialogAgain;
      this.hide();
    } else {
      C.CastleExternalDialog.dialogHandler.registerDefaultDialogs(E.CastleNoMoneyC2Dialog, new _.CastleNoMoneyC2DialogProperties());
    }
  };
  Object.defineProperty(CastleLuckyWheelIncreaseWinClassDialog.prototype, "rewards", {
    get: function () {
      return h.CastleModel.luckyWheelData.rewardsIncreaseWinClass;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelIncreaseWinClassDialog.prototype.hideLoaded = function (t = null) {
    this.destroyCollectableRenderList();
    if (this.rewardComp) {
      this.rewardComp.destroy();
    }
    e.prototype.hideLoaded.call(this, t);
  };
  Object.defineProperty(CastleLuckyWheelIncreaseWinClassDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelIncreaseWinClassDialog.prototype, "eventVO", {
    get: function () {
      return this.dialogProperties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelIncreaseWinClassDialog.__initialize_static_members = function () {
    CastleLuckyWheelIncreaseWinClassDialog.NAME = "CastleLuckyWheelIncreaseWinClassDialog";
  };
  return CastleLuckyWheelIncreaseWinClassDialog;
}(C.CastleExternalDialog);
exports.CastleLuckyWheelIncreaseWinClassDialog = m;
var f = require("./475.js");
var O = require("./1061.js");
var E = require("./138.js");
var y = require("./1146.js");
o.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();