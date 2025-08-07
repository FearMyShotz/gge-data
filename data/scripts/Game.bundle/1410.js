Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./21.js");
var c = require("./4.js");
var u = function () {
  function CastleCooldownComponent(e, t, i, n, o) {
    this.totalTime = 0;
    this.currentTime = 0;
    this.cooldownComponent = e;
    this.onTimeUpFunction = t;
    this.currentTime = i;
    this.totalTime = n;
    this.itxt_cooldown_title = this.textFieldManager.registerTextField(e.text_cooldown_title, new s.LocalizedTextVO(o));
    this._itxt_cooldown_time = this.textFieldManager.registerTextField(e.text_cooldown, new r.TextVO(""));
  }
  CastleCooldownComponent.prototype.addEventListenerOnShow = function () {
    c.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.on1SecTimer));
  };
  CastleCooldownComponent.prototype.removeEventListenerOnHide = function () {
    c.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.on1SecTimer));
  };
  CastleCooldownComponent.prototype.on1SecTimer = function (e = null) {
    this._itxt_cooldown_time.textContentVO.stringValue = o.TimeStringHelper.getTimeToString(this.currentTime, o.TimeStringHelper.TWO_TIME_FORMAT, a.Localize.text);
    this.cooldownComponent.mc_progressBar.scaleX = Math.max(0, (this.totalTime - this.currentTime) / this.totalTime);
    this.currentTime--;
    if (this.currentTime < 0) {
      this.onTimeUpFunction();
    }
  };
  CastleCooldownComponent.prototype.updateTime = function (e) {
    this.currentTime = e;
    this.on1SecTimer();
  };
  Object.defineProperty(CastleCooldownComponent.prototype, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCooldownComponent.prototype, "itxt_cooldown_time", {
    get: function () {
      return this._itxt_cooldown_time;
    },
    enumerable: true,
    configurable: true
  });
  return CastleCooldownComponent;
}();
exports.CastleCooldownComponent = u;