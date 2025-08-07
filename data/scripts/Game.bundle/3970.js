Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./674.js");
var r = function (e) {
  function DailyGoldButton(t, i) {
    var n = this;
    n._day = 0;
    n._defaultButtonYPos = 0;
    n._isGoldDays = false;
    n._currentRewardDay = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, i, DailyGoldButton.TYPE_NORMAL, false) || this)._day = n._currentRewardDay = t;
    n._defaultButtonYPos = i.y;
    n._goldTextGGSTextField = o.GoodgameTextFieldManager.getInstance().registerTextField(i.gold_text_container.gold_text, new a.LocalizedTextVO("day_with_value", [n._currentRewardDay + 1]));
    return n;
  }
  n.__extends(DailyGoldButton, e);
  Object.defineProperty(DailyGoldButton.prototype, "day", {
    get: function () {
      return this._day;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyGoldButton.prototype, "currentRewardDay", {
    set: function (e) {
      this._currentRewardDay = e;
      this.updateState();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyGoldButton.prototype, "isGoldDays", {
    get: function () {
      return this._isGoldDays;
    },
    set: function (e) {
      this._isGoldDays = e;
      this._defaultState = this._isGoldDays ? DailyGoldButton.TYPE_SPECIAL : DailyGoldButton.TYPE_NORMAL;
      this.updateState();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyGoldButton.prototype, "selected", {
    get: function () {
      return Object.getOwnPropertyDescriptor(s.DailyLoginBonusStateButton.prototype, "selected").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.DailyLoginBonusStateButton.prototype, "selected").set.call(this, e);
      this.updateState();
    },
    enumerable: true,
    configurable: true
  });
  DailyGoldButton.prototype.updateState = function () {
    switch (this.defaultState) {
      case DailyGoldButton.TYPE_NORMAL:
      case DailyGoldButton.TYPE_NORMAL_TODAY:
        this.changeTo(this.selected ? DailyGoldButton.TYPE_NORMAL_TODAY : DailyGoldButton.TYPE_NORMAL);
        break;
      case DailyGoldButton.TYPE_SPECIAL:
      case DailyGoldButton.TYPE_SPECIAL_TODAY:
        this.changeTo(this.selected ? DailyGoldButton.TYPE_SPECIAL_TODAY : DailyGoldButton.TYPE_SPECIAL);
    }
    this.button.y = this.selected ? this._defaultButtonYPos - 5 : this._defaultButtonYPos;
    this._goldTextGGSTextField.textContentVO.textId = this._currentRewardDay > 6 ? "dialog_loginBonus_daySevenPlus" : "day_with_value";
    this._goldTextGGSTextField.textContentVO.textReplacements = [this._currentRewardDay + 1];
  };
  DailyGoldButton.__initialize_static_members = function () {
    DailyGoldButton.TYPE_NORMAL = 1;
    DailyGoldButton.TYPE_NORMAL_TODAY = 2;
    DailyGoldButton.TYPE_SPECIAL = 3;
    DailyGoldButton.TYPE_SPECIAL_TODAY = 4;
  };
  return DailyGoldButton;
}(s.DailyLoginBonusStateButton);
exports.DailyGoldButton = r;
r.__initialize_static_members();