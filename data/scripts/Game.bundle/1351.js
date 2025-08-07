Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./23.js");
var u = require("./28.js");
var d = require("./1352.js");
var p = require("./21.js");
var h = require("./4.js");
var g = require("./213.js");
var C = require("./8.js");
var _ = createjs.MouseEvent;
var m = function () {
  function TimeSelectionComponent(e, t, i, o = null) {
    this._animateDateSwitch = true;
    this.disp = e;
    this.callbackOnChanged = o;
    this.toolTipNoMoreThanXTime = i;
    this.toolTipNoLessThanXTime = t;
    C.ButtonHelper.initBasicButtons([e.btn_plus_hour, e.btn_minus_hour, e.btn_plus_minute, e.btn_minus_minute, e.btn_plus_date, e.btn_minus_date]);
    this.itxt_hour = n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_hour, new l.TextVO(""));
    this.itxt_hour.maxChars = 2;
    this.itxt_hour.restrict = "0-9";
    this.itxt_hour.tabIndex = TimeSelectionComponent.BASE_TAB_INDEX;
    this.itxt_minutes = n.GoodgameTextFieldManager.getInstance().registerTextField(e.txt_minute, new l.TextVO(""));
    this.itxt_minutes.maxChars = 2;
    this.itxt_minutes.restrict = "0-9";
    this.itxt_minutes.tabIndex = TimeSelectionComponent.BASE_TAB_INDEX + 1;
    this.itxt_date = n.GoodgameTextFieldManager.getInstance().registerTextField(e.mc_date.txt, new l.TextVO(""));
    this._editedDate = new Date();
    this._oldEditDate = new Date();
  }
  TimeSelectionComponent.prototype.show = function (e, t, i) {
    this._timeValidator = new d.TimeRangeValidator(t, i);
    this.disp.addEventListener(_.CLICK, this.bindFunction(this.onClick));
    this.itxt_minutes.focusIn.add(this.bindFunction(this.onTextFieldFocusIn));
    this.itxt_minutes.focusOut.add(this.bindFunction(this.onTextFieldFocusOut));
    this.itxt_minutes.keyUp.add(this.bindFunction(this.onMinuteTyping));
    this.itxt_hour.focusIn.add(this.bindFunction(this.onTextFieldFocusIn));
    this.itxt_hour.focusOut.add(this.bindFunction(this.onTextFieldFocusOut));
    this.itxt_hour.keyUp.add(this.bindFunction(this.onHourTyping));
    h.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondsTick));
    this.reset(e);
  };
  TimeSelectionComponent.prototype.reset = function (e) {
    this._oldEditDate.setTime(this._editedDate.setTime(e));
    this.validateAndUpdate();
  };
  TimeSelectionComponent.prototype.hide = function () {
    this.disp.removeEventListener(_.CLICK, this.bindFunction(this.onClick));
    this.itxt_hour.focusIn.remove(this.bindFunction(this.onTextFieldFocusIn));
    this.itxt_hour.focusOut.remove(this.bindFunction(this.onTextFieldFocusOut));
    this.itxt_hour.keyUp.remove(this.bindFunction(this.onHourTyping));
    this.itxt_minutes.focusIn.remove(this.bindFunction(this.onTextFieldFocusIn));
    this.itxt_minutes.focusOut.remove(this.bindFunction(this.onTextFieldFocusOut));
    this.itxt_minutes.keyUp.remove(this.bindFunction(this.onMinuteTyping));
    h.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondsTick));
  };
  Object.defineProperty(TimeSelectionComponent.prototype, "selectedTime", {
    get: function () {
      return this._editedDate.getTime();
    },
    enumerable: true,
    configurable: true
  });
  TimeSelectionComponent.prototype.onClick = function (e) {
    if (C.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.disp.btn_plus_hour:
          this.adjustTime(u.ClientConstTime.HOURES_2_MILLISEC);
          break;
        case this.disp.btn_minus_hour:
          this.adjustTime(-u.ClientConstTime.HOURES_2_MILLISEC);
          break;
        case this.disp.btn_plus_minute:
          this.adjustTime(u.ClientConstTime.MINUTES_2_MILLISEC);
          break;
        case this.disp.btn_minus_minute:
          this.adjustTime(-u.ClientConstTime.MINUTES_2_MILLISEC);
          break;
        case this.disp.btn_plus_date:
          this._animateDateSwitch = false;
          this.adjustTime(u.ClientConstTime.DAYS_2_MILLISEC);
          this._animateDateSwitch = true;
          break;
        case this.disp.btn_minus_date:
          this._animateDateSwitch = false;
          this.adjustTime(-u.ClientConstTime.DAYS_2_MILLISEC, true);
          this._animateDateSwitch = true;
      }
    }
  };
  TimeSelectionComponent.prototype.onHourTyping = function (e) {
    if (e.key == o.Keyboard.ENTER) {
      if (this.disp.stage.focus == this.disp.txt_hour) {
        document.activeElement.blur();
      }
      var t = this.itxt_hour.text;
      this._editedDate.setHours(g.CastleMathHelper.clamp(parseFloat(t), 0, 23));
      this.validateAndUpdate();
    }
  };
  TimeSelectionComponent.prototype.onMinuteTyping = function (e) {
    if (e.key == o.Keyboard.ENTER) {
      if (this.disp.stage.focus == this.disp.txt_minute) {
        document.activeElement.blur();
      }
      var t = this.itxt_minutes.text;
      this._editedDate.setMinutes(g.CastleMathHelper.clamp(parseFloat(t), 0, 59));
      this.validateAndUpdate();
    }
  };
  TimeSelectionComponent.prototype.onTextFieldFocusIn = function (e) {
    h.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondsTick));
  };
  TimeSelectionComponent.prototype.onTextFieldFocusOut = function (e) {
    var t = e.textContentVO;
    if (e.text.length == 0) {
      e.text = t.stringValue;
      this.validateAndUpdate();
    } else if (e.text != t.stringValue) {
      var i = new a.KeyboardEvent(a.KeyboardEvent.KEY_UP, false, false, 0, o.Keyboard.ENTER);
      if (e == this.itxt_hour) {
        this.onHourTyping(i);
      } else if (e == this.itxt_minutes) {
        this.onMinuteTyping(i);
      }
    }
    h.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onSecondsTick));
  };
  TimeSelectionComponent.prototype.onSecondsTick = function (e) {
    this._oldEditDate.setTime(this._editedDate.getTime());
    this.validateAndUpdate();
  };
  TimeSelectionComponent.prototype.adjustTime = function (e, t = false) {
    this._oldEditDate.setTime(this._editedDate.getTime());
    this._editedDate.setTime(this._editedDate.getTime() + e);
    this.validateAndUpdate(t);
  };
  TimeSelectionComponent.prototype.validateAndUpdate = function (e = false) {
    this._timeValidator.updateCurrentTime();
    this._timeValidator.validateTime(this._editedDate, e);
    this.itxt_date.textContentVO.stringValue = r.Localize.datetime(this._editedDate, s.DateTimeStyle.SHORT, s.DateTimeStyle.NONE);
    this.itxt_hour.textContentVO.stringValue = TimeSelectionComponent.forceTwoDigitFormat(this._editedDate.getHours());
    this.itxt_minutes.textContentVO.stringValue = TimeSelectionComponent.forceTwoDigitFormat(this._editedDate.getMinutes());
    this.updateButtons();
    if (this._animateDateSwitch && this.hasDateChanged) {
      this.playDateChangeAnimation();
    }
    if (this.bindFunction(this.callbackOnChanged)) {
      this.callbackOnChanged();
    }
  };
  TimeSelectionComponent.prototype.updateButtons = function () {
    var e = this._timeValidator.canIncreaseHours(this._editedDate);
    var t = this._timeValidator.canDecreaseHours(this._editedDate);
    var i = this._timeValidator.canIncreaseMinutes(this._editedDate);
    var n = this._timeValidator.canDecreaseMinutes(this._editedDate);
    var o = this._timeValidator.canIncreaseDate(this._editedDate);
    var a = this._timeValidator.canDecreaseDate(this._editedDate);
    this.itxt_hour.selectable = e || t;
    this.itxt_minutes.selectable = i || n;
    TimeSelectionComponent.updateButton(this.disp.btn_plus_hour, e, this.toolTipNoMoreThanXTime);
    TimeSelectionComponent.updateButton(this.disp.btn_minus_hour, t, this.toolTipNoLessThanXTime);
    TimeSelectionComponent.updateButton(this.disp.btn_plus_minute, i, this.toolTipNoMoreThanXTime);
    TimeSelectionComponent.updateButton(this.disp.btn_minus_minute, n, this.toolTipNoLessThanXTime);
    TimeSelectionComponent.updateButton(this.disp.btn_plus_date, o, this.toolTipNoMoreThanXTime);
    TimeSelectionComponent.updateButton(this.disp.btn_minus_date, a, this.toolTipNoLessThanXTime);
  };
  TimeSelectionComponent.prototype.canIncreaseTime = function () {
    return this._timeValidator.canIncreaseHours(this._editedDate) || this._timeValidator.canIncreaseMinutes(this._editedDate) || this._timeValidator.canIncreaseDate(this._editedDate);
  };
  TimeSelectionComponent.updateButton = function (e, t, i) {
    C.ButtonHelper.enableButton(e, t);
    e.toolTipText = t ? "" : i;
  };
  TimeSelectionComponent.forceTwoDigitFormat = function (e) {
    var t = String(e);
    if (t.length == 1) {
      t = "0" + t;
    }
    return t;
  };
  Object.defineProperty(TimeSelectionComponent.prototype, "hasDateChanged", {
    get: function () {
      return this._oldEditDate.getDate() != this._editedDate.getDate() || this._oldEditDate.getMonth() != this._editedDate.getMonth() || this._oldEditDate.getFullYear() != this._editedDate.getFullYear();
    },
    enumerable: true,
    configurable: true
  });
  TimeSelectionComponent.prototype.playDateChangeAnimation = function () {
    c.TweenMax.fromTo(this.disp.mc_date, 0.33, {
      scaleX: 1,
      scaleY: 1
    }, {
      scaleX: 1.1,
      scaleY: 1.1,
      repeat: 3,
      yoyo: true,
      onComplete: this.onCompleteFadeInNowFadeOut
    });
  };
  TimeSelectionComponent.prototype.onCompleteFadeInNowFadeOut = function () {
    if (this.disp != null && this.disp.mc_date != null) {
      c.TweenMax.to(this.disp.mc_date, 0.33, {
        scaleX: 1,
        scaleY: 1
      });
    }
  };
  TimeSelectionComponent.__initialize_static_members = function () {
    TimeSelectionComponent.BASE_TAB_INDEX = 10;
  };
  return TimeSelectionComponent;
}();
exports.TimeSelectionComponent = m;
m.__initialize_static_members();