Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./305.js");
var r = createjs.MouseEvent;
var l = function (e) {
  function AOfferHubBaseStatusIcon(t, i = "txt_label", n = null, o = a.int(c.ACastleStatusIcon.PRIORITY_LOW), s = null) {
    return e.call(this, t, i, n, o, s) || this;
  }
  n.__extends(AOfferHubBaseStatusIcon, e);
  AOfferHubBaseStatusIcon.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.icon.basicButton.mouseOverScale = 1;
    this.icon.mc_hover.visible = false;
    this.icon.mc_down.visible = false;
    if (this.icon.barItem) {
      this.icon.barItem.visible = false;
    }
  };
  AOfferHubBaseStatusIcon.prototype.setTooltipLoaded = function (e = null) {
    if (this._tooltipParams) {
      this.hitDisp().toolTipText = {
        t: this._tooltipId,
        p: this._tooltipParams
      };
    } else {
      this.hitDisp().toolTipText = this._tooltipId;
    }
  };
  AOfferHubBaseStatusIcon.prototype.onInnerIconClipLoaded = function (e = null) {
    this.customizeInnerIconClip(e);
    this.addAndResizeInnerIcon();
  };
  AOfferHubBaseStatusIcon.prototype.addAndResizeInnerIcon = function () {
    if (this._innerIconClip.isLoaded) {
      this.icon.mc_icon.addChild(this._innerIconClip.currentshownDisplayObject);
      o.MovieClipHelper.scaleDownToFit(this._innerIconClip.currentshownDisplayObject, AOfferHubBaseStatusIcon.INNER_ICON_SIZE, AOfferHubBaseStatusIcon.INNER_ICON_SIZE);
    }
  };
  AOfferHubBaseStatusIcon.prototype.addEventListenerForShowTime = function () {
    e.prototype.addEventListenerForShowTime.call(this);
    this.hitDisp().addEventListener(r.ROLL_OVER, this.bindFunction(this.onMouseOver));
    this.hitDisp().addEventListener(r.ROLL_OUT, this.bindFunction(this.onMouseOut));
    this.hitDisp().addEventListener(r.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.hitDisp().addEventListener(r.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  AOfferHubBaseStatusIcon.prototype.removeEventListenerForShowTime = function () {
    e.prototype.removeEventListenerForShowTime.call(this);
    this.hitDisp().removeEventListener(r.ROLL_OVER, this.bindFunction(this.onMouseOver));
    this.hitDisp().removeEventListener(r.ROLL_OUT, this.bindFunction(this.onMouseOut));
    this.hitDisp().removeEventListener(r.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.hitDisp().removeEventListener(r.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  AOfferHubBaseStatusIcon.prototype.onMouseOver = function (e) {
    this.icon.mc_hover.visible = true;
  };
  AOfferHubBaseStatusIcon.prototype.onMouseOut = function (e) {
    this.icon.mc_hover.visible = false;
    this.icon.mc_down.visible = false;
  };
  AOfferHubBaseStatusIcon.prototype.onMouseDown = function (e) {
    this.icon.mc_hover.visible = false;
    this.icon.mc_down.visible = true;
    this.updateCache();
  };
  AOfferHubBaseStatusIcon.prototype.onMouseUp = function (e) {
    if (this.icon.mc_down.visible) {
      this.onClick();
    }
    this.icon.mc_hover.visible = false;
    this.icon.mc_down.visible = false;
    this.updateCache();
  };
  AOfferHubBaseStatusIcon.prototype.disposeLoaded = function () {
    e.prototype.disposeLoaded.call(this);
    if (this._innerIconClip) {
      this._innerIconClip.dispose();
    }
  };
  AOfferHubBaseStatusIcon.prototype.hitDisp = function () {
    return this.icon;
  };
  AOfferHubBaseStatusIcon.prototype.customizeInnerIconClip = function (e) {};
  AOfferHubBaseStatusIcon.PRIORITY_PRIVATE_PRIME_TIME = 2;
  AOfferHubBaseStatusIcon.PRIORITY_GLOBAL_PRIME_TIME = 3;
  AOfferHubBaseStatusIcon.PRIORITY_PRIVATEOFFER_PRIME_DAY = 5;
  AOfferHubBaseStatusIcon.PRIORITY_PRIVATEOFFER_MULTIREWARD_CHEST = 6;
  AOfferHubBaseStatusIcon.PRIORITY_PRIVATEOFFER_CHEST = 7;
  AOfferHubBaseStatusIcon.PRIORITY_MAIL_GIFT = 8;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_PACKAGES = 21;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_BOOSTER = 22;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_BUILDINGS = 23;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_RELICUS = 24;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_TECHNICUS = 25;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_KL_SEASON_PASS = 26;
  AOfferHubBaseStatusIcon.PRIORITY_PRIMESALE_REVIVE_ALL = 27;
  AOfferHubBaseStatusIcon.PRIORITY_PRIVATE_BESTSELLER_SHOP = 29;
  AOfferHubBaseStatusIcon.PRIORITY_PRIME_DAY_SHOPPINGCART = 31;
  AOfferHubBaseStatusIcon.PRIORITY_PRIME_DAY_TIERED = 32;
  AOfferHubBaseStatusIcon.PRIORITY_PRIME_DAY_EVENT = 33;
  AOfferHubBaseStatusIcon.PRIORITY_ALLIANCE_PRIME_TIME = 40;
  AOfferHubBaseStatusIcon.PRIORITY_ALLIANCE_TIME_CHALLENGE = 41;
  AOfferHubBaseStatusIcon.INNER_ICON_SIZE = 55;
  return AOfferHubBaseStatusIcon;
}(s.ACastleLabeledStatusIcon);
exports.AOfferHubBaseStatusIcon = l;
var c = require("./110.js");