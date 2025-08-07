Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./2.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./4444.js");
var h = require("./37.js");
var g = require("./21.js");
var C = require("./26.js");
var _ = require("./13.js");
var m = require("./4.js");
var f = require("./27.js");
var O = require("./9.js");
var E = require("./8.js");
var y = require("./11.js");
var b = require("./4445.js");
var D = require("./4446.js");
var I = createjs.TimerEvent;
var T = function (e) {
  function FortuneTellerEventDialog() {
    return e.call(this, FortuneTellerEventDialog.NAME) || this;
  }
  n.__extends(FortuneTellerEventDialog, e);
  FortuneTellerEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    E.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_info], A.ClickFeedbackButtonHover);
    E.ButtonHelper.initButtons([this.dialogDisp.btn_buy], L.ClickFeedbackButton);
    this.idleAnimation = new b.FortuneTellerEventDialogIdleAnimation(this.dialogDisp);
    this.rewardAnimation = new D.FortuneTellerEventDialogRewardAnimation(this.dialogDisp);
  };
  FortuneTellerEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(_.TextHelper.toUpperCaseLocaSafeTextId("divination_main_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_top, new c.LocalizedTextVO("divination_main_topreward"));
    this.tf_top_amount = this.textFieldManager.registerTextField(this.dialogDisp.txt_top_amount, new u.LocalizedNumberVO());
    this.tf_price_amount = this.textFieldManager.registerTextField(this.dialogDisp.btn_buy.txt_value, new u.LocalizedNumberVO());
    this.idleAnimation.show();
    this.rewardAnimation.hide();
    this.updateDialog(false);
  };
  FortuneTellerEventDialog.prototype.onRewardArrived = function (e) {
    this.rewardAnimation.show(e.params[0].getItemByIndex(0));
  };
  FortuneTellerEventDialog.prototype.updateDialog = function (e) {
    if (this.eventVO) {
      var t = new a.Timer(1800, 1);
      t.addEventListener(I.TIMER_COMPLETE, this.bindFunction(this.onTimer));
      t.start();
      if (e) {
        E.ButtonHelper.delayEnableButton(this.dialogDisp.btn_buy, this.canBuyPrize, 2200);
      } else {
        E.ButtonHelper.enableButton(this.dialogDisp.btn_buy, this.canBuyPrize);
        this.updateText();
      }
    } else {
      this.hide();
    }
  };
  FortuneTellerEventDialog.prototype.onTimer = function (e) {
    e.target.removeEventListener(I.TIMER_COMPLETE, this.bindFunction(this.onTimer));
    this.updateText();
  };
  FortuneTellerEventDialog.prototype.updateText = function () {
    if (this.canBuyPrize) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_chances, new c.LocalizedTextVO("divination_main_chances", [this.eventVO.tryCount, m.CastleModel.fortuneTeller.maxTriesPerDay]));
    }
    if (this.tf_top_amount.textContentVO) {
      this.tf_top_amount.textContentVO.numberValue = this.topRewardAmount;
    }
    if (this.tf_price_amount.textContentVO) {
      this.tf_price_amount.textContentVO.numberValue = this.currentFortuneTellerClassVO.c2Cost;
    }
  };
  Object.defineProperty(FortuneTellerEventDialog.prototype, "canBuyPrize", {
    get: function () {
      return this.eventVO && this.eventVO.tryCount <= m.CastleModel.fortuneTeller.maxTriesPerDay;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FortuneTellerEventDialog.prototype, "topRewardAmount", {
    get: function () {
      var e = d.int(this.currentFortuneTellerClassVO.topRewardID);
      return m.CastleModel.rewardData.getCopiedListById(e).getItemByIndex(0).amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FortuneTellerEventDialog.prototype, "currentFortuneTellerClassVO", {
    get: function () {
      return m.CastleModel.fortuneTeller.getFortuneTellerClassByCount(this.canBuyPrize ? this.eventVO.tryCount : 1);
    },
    enumerable: true,
    configurable: true
  });
  FortuneTellerEventDialog.prototype.addEventListenerOnShow = function () {
    m.CastleModel.timerData.addEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    m.CastleModel.fortuneTeller.addEventListener(h.CastleServerMessageArrivedEvent.FORTUNE_TELLER_REWARD_ARRIVED, this.bindFunction(this.onRewardArrived));
    m.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
    m.CastleModel.specialEventData.addEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
  };
  FortuneTellerEventDialog.prototype.removeEventListenerOnHide = function () {
    m.CastleModel.timerData.removeEventListener(g.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    m.CastleModel.fortuneTeller.removeEventListener(h.CastleServerMessageArrivedEvent.FORTUNE_TELLER_REWARD_ARRIVED, this.bindFunction(this.onRewardArrived));
    m.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
    m.CastleModel.specialEventData.removeEventListener(C.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventUpdate));
  };
  FortuneTellerEventDialog.prototype.onEventUpdate = function (e) {
    if (S.instanceOfClass(e.specialEventVO, "FortuneTellerEventVO")) {
      this.updateDialog(true);
    }
  };
  FortuneTellerEventDialog.prototype.onTimerUpdate = function (e) {
    if (!this.canBuyPrize) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_chances, new c.LocalizedTextVO("divination_main_next", [f.CastleTimeStringHelper.getShortTimeString(this.eventVO.secondsTillDailyReset())]));
    }
  };
  FortuneTellerEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.idleAnimation.hide();
    this.rewardAnimation.hide();
  };
  FortuneTellerEventDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (E.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_info:
          O.CastleDialogHandler.getInstance().registerDialogs(v.FortuneTellerEventRewardInfoDialog);
          break;
        case this.dialogDisp.btn_buy:
          E.ButtonHelper.enableButton(this.dialogDisp.btn_buy, false);
          s.BasicModel.smartfoxClient.sendCommandVO(new p.C2SBuyFortuneTellerPackageVO());
      }
    }
  };
  Object.defineProperty(FortuneTellerEventDialog.prototype, "eventVO", {
    get: function () {
      return m.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_FORTUNE_TELLER);
    },
    enumerable: true,
    configurable: true
  });
  FortuneTellerEventDialog.NAME = "FortuneTellerEvent";
  return FortuneTellerEventDialog;
}(y.CastleExternalDialog);
exports.FortuneTellerEventDialog = T;
var v = require("./4447.js");
o.classImplementsInterfaces(T, "ICollectableRendererList");
var S = require("./1.js");
var A = require("./20.js");
var L = require("./36.js");