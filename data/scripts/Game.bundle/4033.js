Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./21.js");
var l = function (e) {
  function StatusIconOfferHub() {
    var t = this;
    t._iconCount = 0;
    t._isAnyNewOffer = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, "Btn_OfferHub", "txt_label", null, 1) || this;
  }
  n.__extends(StatusIconOfferHub, e);
  StatusIconOfferHub.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.itxt_count = this.textFieldManager.registerTextField(this.icon.icon_count.txt_label, new s.NumberVO(0));
  };
  StatusIconOfferHub.prototype.setVisibilityLoaded = function () {
    this.show();
  };
  StatusIconOfferHub.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconOfferHub.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
  };
  StatusIconOfferHub.prototype.onTimerUpdate = function (e = null) {
    this.updateCounter();
  };
  StatusIconOfferHub.prototype.mirrorFirstHubIcon = function (e) {
    this.firstHubIcon = e;
    if (e) {
      if (!this.visible) {
        this.show();
      }
      this.iconClip.doWhenLoaded(this.bindFunction(this.loadInnerIcon));
    } else if (this.visible) {
      this.hide();
    }
  };
  StatusIconOfferHub.prototype.loadInnerIcon = function (e = null) {
    if (this.firstHubIcon) {
      if (this._innerIconClip) {
        var t = this._innerIconClip.currentshownDisplayObject ? this._innerIconClip.currentshownDisplayObject.txt_label : null;
        if (t) {
          this.textFieldManager.unregisterTextField(t);
        }
        o.MovieClipHelper.clearMovieClip(this.icon.mc_icon);
        this._innerIconClip.dispose();
      }
      this._innerIconClip = c.ACastleStatusIcon.getAsExternalClip(this.firstHubIcon.innerIconClassName);
      this._innerIconClip.doWhenLoaded(this.bindFunction(this.onInnerIconClipLoaded));
    }
  };
  StatusIconOfferHub.prototype.onInnerIconClipLoaded = function (t = null) {
    this.firstHubIcon.customizeInnerIconClip(t);
    e.prototype.onInnerIconClipLoaded.call(this, t);
    this.addAndResizeInnerIcon();
    this.updateCache();
  };
  StatusIconOfferHub.prototype.onClick = function (e = null) {
    if (e && !a.currentBrowserInfo.isTouchEvent(e)) {
      this.firstHubIcon.onClick();
    }
  };
  Object.defineProperty(StatusIconOfferHub.prototype, "iconCount", {
    get: function () {
      return this._iconCount;
    },
    set: function (e) {
      this._iconCount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(StatusIconOfferHub.prototype, "isAnyNewOffer", {
    get: function () {
      return this._isAnyNewOffer;
    },
    set: function (e) {
      this._isAnyNewOffer = e;
    },
    enumerable: true,
    configurable: true
  });
  StatusIconOfferHub.prototype.updateCounter = function () {
    this.icon.icon_new.visible = this._isAnyNewOffer;
    this.icon.icon_count.visible = !this._isAnyNewOffer;
    if (this.itxt_count.textContentVO) {
      this.itxt_count.textContentVO.numberValue = this._iconCount;
    }
    this.updateCache();
  };
  return StatusIconOfferHub;
}(require("./175.js").AOfferHubBaseStatusIcon);
exports.StatusIconOfferHub = l;
var c = require("./109.js");