Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./58.js");
var l = require("./21.js");
var c = require("./255.js");
var u = require("./161.js");
var d = require("./30.js");
var p = require("./29.js");
var h = require("./4.js");
var g = function (e) {
  function StatusIconSpecialOffer() {
    return e.call(this, "Btn_SpecialOffer", new a.TextVO(""), C.AOfferHubBaseStatusIcon.PRIORITY_GLOBAL_PRIME_TIME) || this;
  }
  n.__extends(StatusIconSpecialOffer, e);
  StatusIconSpecialOffer.prototype.addEventListenerForVisibility = function () {
    h.CastleModel.globalOfferData.addEventListener(c.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    h.CastleModel.globalOfferData.addEventListener(c.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    this.controller.addEventListener(u.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onOfferEnded));
  };
  StatusIconSpecialOffer.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.setTooltip("dialog_specialOffer_HappyHourTooltip");
  };
  StatusIconSpecialOffer.prototype.removeEventListenerForVisibility = function () {
    h.CastleModel.globalOfferData.removeEventListener(c.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    h.CastleModel.globalOfferData.removeEventListener(c.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    this.controller.removeEventListener(u.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onOfferEnded));
  };
  StatusIconSpecialOffer.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSpecialOffer.prototype.removeEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconSpecialOffer.prototype.setVisibilityLoaded = function () {
    if (h.CastleModel.userData.userLevel < r.ClientConstLevelRestrictions.MIN_LEVEL_PRIMETIME) {
      this.hide();
    } else {
      this._currentOffer = h.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer();
      if (this._currentOffer && !this._currentOffer.isTimeless) {
        this.show();
      } else {
        this.hide();
      }
    }
  };
  StatusIconSpecialOffer.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      o.CommandController.instance.executeCommand(p.IngameClientCommands.OPEN_OFFER_DIALOG_COMMAND, this._currentOffer);
    }
  };
  StatusIconSpecialOffer.prototype.onTimerUpdate = function (e = null) {
    var t;
    var i = NaN;
    if (this._currentOffer.goldDiscount >= 175) {
      this.icon.gotoAndStop(2);
    } else {
      this.icon.gotoAndStop(1);
    }
    i = e ? e.nowValue : d.CachedTimer.getCachedTimer();
    t = s.int(Math.max(this._currentOffer.remainingDuration(i), 1));
    this.itxt_label.textContentVO.stringValue = _.CastleTimeStringHelper.getEventTimeString(t);
  };
  StatusIconSpecialOffer.prototype.onOfferEnded = function (e) {
    this.setVisibility();
  };
  StatusIconSpecialOffer.prototype.onOfferAdded = function (e) {
    this.setVisibility();
  };
  StatusIconSpecialOffer.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.onTimerUpdate();
  };
  return StatusIconSpecialOffer;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconSpecialOffer = g;
var C = require("./175.js");
var _ = require("./27.js");