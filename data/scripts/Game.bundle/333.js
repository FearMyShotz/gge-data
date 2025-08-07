Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./21.js");
var s = require("./220.js");
var r = require("./4.js");
var l = require("./1839.js");
var c = require("./27.js");
var u = function (e) {
  function ACastleBoosterStatusIcon(t, i = null, n = o.int(d.ACastleStatusIcon.PRIORITY_MIDDLE), a = true) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(ACastleBoosterStatusIcon, e);
  ACastleBoosterStatusIcon.prototype.onAddedToStage = function (e) {
    this.icon.parent.parent.updateCacheIfCached();
  };
  ACastleBoosterStatusIcon.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  ACastleBoosterStatusIcon.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(a.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  ACastleBoosterStatusIcon.prototype.setVisibilityLoaded = function () {
    if (this.checkVisbilityCondition() == 1) {
      this.iconDisp.addEventListener(createjs.Event.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
      this.show();
    } else {
      this.hide();
      this.controller.dispatchEvent(new l.BoosterDataEvent(l.BoosterDataEvent.BOOSTER_REMOVED));
      this.iconDisp.removeEventListener(createjs.Event.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    }
  };
  ACastleBoosterStatusIcon.prototype.addEventListenerForVisibility = function () {
    r.CastleModel.boostData.addEventListener(s.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataUpdated));
  };
  ACastleBoosterStatusIcon.prototype.removeEventListenerForVisibility = function () {
    r.CastleModel.boostData.removeEventListener(s.CastleResourceBoosterEvent.BOOSTERDATA_REFRESHED, this.bindFunction(this.onBoosterDataUpdated));
  };
  ACastleBoosterStatusIcon.prototype.onBoosterDataUpdated = function (e) {
    this.setVisibility();
  };
  ACastleBoosterStatusIcon.prototype.onTimerUpdate = function (e = null) {
    var t = 0;
    if (this.boosterVO) {
      t = o.int(this.boosterVO.remainingTimeInSeconds);
    }
    this.itxt_label.textContentVO.stringValue = c.CastleTimeStringHelper.getEventTimeString(t);
    this.setVisibility();
    if (!this.icon.stage) {
      this.icon.parent.parent.updateCacheIfCached();
    }
  };
  Object.defineProperty(ACastleBoosterStatusIcon.prototype, "boosterVO", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  ACastleBoosterStatusIcon.prototype.checkVisbilityCondition = function () {
    return false;
  };
  ACastleBoosterStatusIcon.prototype.disposeLoaded = function () {
    if (this.iconDisp) {
      this.iconDisp.removeEventListener(createjs.Event.ADDED_TO_STAGE, this.bindFunction(this.onAddedToStage));
    }
    e.prototype.disposeLoaded.call(this);
  };
  return ACastleBoosterStatusIcon;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.ACastleBoosterStatusIcon = u;
var d = require("./110.js");