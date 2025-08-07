Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./674.js");
var s = function (e) {
  function DailyTabButton(t, i) {
    var n = this;
    n._day = 0;
    n._isGoldDays = false;
    n._currentDay = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, i, DailyTabButton.TYPE_PAST_DAY) || this)._day = t;
    i.toolTipText = o.Localize.text("dialog_loginBonus_box" + (t + 1));
    return n;
  }
  n.__extends(DailyTabButton, e);
  Object.defineProperty(DailyTabButton.prototype, "day", {
    get: function () {
      return this._day;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyTabButton.prototype, "isGoldDays", {
    get: function () {
      return this._isGoldDays;
    },
    set: function (e) {
      this._isGoldDays = e;
      this.updateState();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyTabButton.prototype, "selected", {
    get: function () {
      return Object.getOwnPropertyDescriptor(a.DailyLoginBonusStateButton.prototype, "selected").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.DailyLoginBonusStateButton.prototype, "selected").set.call(this, e);
      this.updateState();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DailyTabButton.prototype, "currentRewardDay", {
    set: function (e) {
      this._currentDay = e;
      this.updateState();
    },
    enumerable: true,
    configurable: true
  });
  DailyTabButton.prototype.updateState = function () {
    this.button.tab_icon.gotoAndStop(this._isGoldDays ? 7 : this.day + 1);
    this.button.toolTipText = o.Localize.text("dialog_loginBonus_box" + (this._isGoldDays ? 7 : this.day + 1));
    if (this.selected) {
      this.changeTo(this._isGoldDays ? DailyTabButton.TYPE_GOLD_DAY : DailyTabButton.TYPE_CURRENT_DAY);
    } else if (this.day < this._currentDay) {
      this.changeTo(this._isGoldDays ? DailyTabButton.TYPE_GOLD_PAST_DAY : DailyTabButton.TYPE_PAST_DAY);
    } else {
      this.changeTo(this._isGoldDays ? DailyTabButton.TYPE_GOLD_NEXT_DAY : DailyTabButton.TYPE_NEXT_DAY);
    }
  };
  DailyTabButton.__initialize_static_members = function () {
    DailyTabButton.TYPE_PAST_DAY = 3;
    DailyTabButton.TYPE_CURRENT_DAY = 2;
    DailyTabButton.TYPE_NEXT_DAY = 1;
    DailyTabButton.TYPE_GOLD_PAST_DAY = 6;
    DailyTabButton.TYPE_GOLD_DAY = 5;
    DailyTabButton.TYPE_GOLD_NEXT_DAY = 4;
  };
  return DailyTabButton;
}(a.DailyLoginBonusStateButton);
exports.DailyTabButton = s;
s.__initialize_static_members();