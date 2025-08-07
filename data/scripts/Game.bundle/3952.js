Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./1832.js");
var l = require("./21.js");
var c = require("./26.js");
var u = require("./4.js");
var d = require("./27.js");
var p = function (e) {
  function StatusIconGoodgamesGift() {
    var t = e.call(this, "GGSGiftIcon", new a.TextVO(""), h.ACastleStatusIcon.PRIORITY_LOWER) || this;
    t.setTooltip("dialog_unpackedGift__tooltip");
    return t;
  }
  n.__extends(StatusIconGoodgamesGift, e);
  StatusIconGoodgamesGift.prototype.setVisibilityLoaded = function () {
    this._eventVO = u.CastleModel.specialEventData.getActiveEventByEventId(o.EventConst.EVENTTYPE_GGS_GIFT);
    if (this.isVisible()) {
      if (this._innerIconClip && this._innerIconClip.isLoaded) {
        this.customizeInnerIconClip(this._innerIconClip);
      }
      this.setCountdownText();
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconGoodgamesGift.prototype.getSkinFrame = function () {
    return 1 + this._eventVO.skinID * 2;
  };
  StatusIconGoodgamesGift.prototype.onClick = function () {
    if (this.isOutOfTutorial()) {
      u.CastleModel.smartfoxClient.sendCommandVO(new r.C2SRequestGoodgamesGift());
    }
  };
  StatusIconGoodgamesGift.prototype.onChangeEvent = function (e) {
    this.setVisibility();
  };
  StatusIconGoodgamesGift.prototype.onTimer = function (e) {
    this.setVisibility();
  };
  StatusIconGoodgamesGift.prototype.onRemoveEvent = function (e) {
    this.setVisibility();
  };
  StatusIconGoodgamesGift.prototype.setCountdownText = function () {
    this.itxt_label.textContentVO.stringValue = d.CastleTimeStringHelper.getEventTimeString(s.int(this._eventVO.remainingEventTimeInSeconds));
  };
  StatusIconGoodgamesGift.prototype.isVisible = function () {
    return !!this._eventVO && this._eventVO.isCollectable() && this.isOutOfTutorial() && !u.CastleModel.privateOfferData.isHiddenEvent(this._eventVO.eventId);
  };
  StatusIconGoodgamesGift.prototype.addEventListenerForVisibility = function () {
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangeEvent));
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  StatusIconGoodgamesGift.prototype.removeEventListenerForVisibility = function () {
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onChangeEvent));
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  StatusIconGoodgamesGift.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  StatusIconGoodgamesGift.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  StatusIconGoodgamesGift.prototype.customizeInnerIconClip = function (t) {
    e.prototype.customizeInnerIconClip.call(this, t);
    if (t && t.isLoaded && this.isVisible()) {
      t.currentshownDisplayObject.mc_bg.gotoAndStop(this.getSkinFrame() + 1);
    }
  };
  return StatusIconGoodgamesGift;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconGoodgamesGift = p;
var h = require("./109.js");