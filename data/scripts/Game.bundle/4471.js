Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./8.js");
var u = function (e) {
  function CastleLuckyWheelFeatureButton(t, i) {
    var n = this;
    n.buttonType = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, true) || this).buttonType = i;
    n.setupButtonEvents();
    n.setupButton();
    return n;
  }
  n.__extends(CastleLuckyWheelFeatureButton, e);
  CastleLuckyWheelFeatureButton.prototype.setupButtonEvents = function () {
    switch (this.buttonType) {
      case CastleLuckyWheelFeatureButton.INCREASE_WIN_CLASS_BTN:
        this.luckyWheelData.addEventListener(d.LuckyWheelData.SHOW_INCREASE_WIN_CLASS_DIALOG_CHANGE, this.bindFunction(this.setupButton));
        break;
      case CastleLuckyWheelFeatureButton.GUARANTEED_JACKPOT_BTN:
        this.luckyWheelData.addEventListener(d.LuckyWheelData.SHOW_GUARANTEED_JACKPOT_DIALOG_CHANGE, this.bindFunction(this.setupButton));
    }
  };
  CastleLuckyWheelFeatureButton.prototype.removeButtonEvents = function () {
    switch (this.buttonType) {
      case CastleLuckyWheelFeatureButton.INCREASE_WIN_CLASS_BTN:
        this.luckyWheelData.removeEventListener(d.LuckyWheelData.SHOW_INCREASE_WIN_CLASS_DIALOG_CHANGE, this.bindFunction(this.setupButton));
        break;
      case CastleLuckyWheelFeatureButton.GUARANTEED_JACKPOT_BTN:
        this.luckyWheelData.removeEventListener(d.LuckyWheelData.SHOW_GUARANTEED_JACKPOT_DIALOG_CHANGE, this.bindFunction(this.setupButton));
    }
  };
  CastleLuckyWheelFeatureButton.prototype.setupButton = function (e = null) {
    switch (this.buttonType) {
      case CastleLuckyWheelFeatureButton.INCREASE_WIN_CLASS_BTN:
        if (this.luckyWheelData.showIncreaseWinClassDialog) {
          this.disp.gotoAndStop(1);
          this.disp.toolTipText = {
            t: "dialog_luckyWheel_increaseClass_tooltip",
            p: [this.luckyWheelData.currentWinClass + 1]
          };
        } else {
          this.disp.gotoAndStop(2);
          c.ButtonHelper.enableButton(this.disp, !this.luckyWheelData.isMaxIncreaseWinClass);
          this.disp.basicButton.mouseEnabled = true;
          if (this.luckyWheelData.isMaxIncreaseWinClass) {
            this.disp.toolTipText = "dialog_luckyWheel_increaseClassMax_tooltip";
          } else {
            this.disp.toolTipText = {
              t: "dialog_luckyWheel_increaseClassRubies_tooltip",
              p: [this.luckyWheelData.currentWinClass + 1, this.luckyWheelData.increaseWinClassC2]
            };
          }
        }
        break;
      case CastleLuckyWheelFeatureButton.GUARANTEED_JACKPOT_BTN:
        if (this.luckyWheelData.showGuaranteedJackpotDialog) {
          this.disp.gotoAndStop(1);
          this.disp.toolTipText = "dialog_luckyWheel_guaranteedJackpot_tooltip";
        } else {
          if (this.disp.currentFrame != 2) {
            this.disp.gotoAndStop(2);
            this.txtButtonInfo = this.textFieldManager.registerTextField(this.disp.ticketsTxt, new r.LocalizedNumberVO(this.luckyWheelData.jackpotTicketPrice));
          } else {
            this.txtButtonInfo.textContentVO = new r.LocalizedNumberVO(this.luckyWheelData.jackpotTicketPrice);
          }
          this.disp.toolTipText = {
            t: "dialog_luckyWheel_guaranteedJackpotCosts_tooltip",
            p: [this.luckyWheelData.jackpotC2Price, this.luckyWheelData.jackpotTicketPrice]
          };
        }
    }
  };
  Object.defineProperty(CastleLuckyWheelFeatureButton.prototype, "luckyWheelData", {
    get: function () {
      return l.CastleModel.luckyWheelData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelFeatureButton.prototype, "textFieldManager", {
    get: function () {
      return a.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelFeatureButton.__initialize_static_members = function () {
    CastleLuckyWheelFeatureButton.INCREASE_WIN_CLASS_BTN = 0;
    CastleLuckyWheelFeatureButton.GUARANTEED_JACKPOT_BTN = 1;
  };
  return CastleLuckyWheelFeatureButton;
}(o.BasicButton);
exports.CastleLuckyWheelFeatureButton = u;
var d = require("./474.js");
s.classImplementsInterfaces(u, "MovieClip");
u.__initialize_static_members();