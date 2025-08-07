Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./8.js");
var s = require("./110.js");
var r = createjs.MouseEvent;
var l = function (e) {
  function ACustomInteractiveCastleStatusIcon(t, i = o.int(s.ACastleStatusIcon.PRIORITY_LOW), n = false) {
    var a = this;
    a._isExternalLoadedIcon = false;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, i) || this)._isExternalLoadedIcon = n;
    return a;
  }
  n.__extends(ACustomInteractiveCastleStatusIcon, e);
  ACustomInteractiveCastleStatusIcon.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.icon.mouseChildren = true;
    this.icon.mouseEnabled = true;
    if (!this._isExternalLoadedIcon) {
      this.prepareLoadedIcon(this.icon);
    }
  };
  ACustomInteractiveCastleStatusIcon.prototype.prepareLoadedIcon = function (e) {
    this.removeClickListenerToLoadedIcon();
    this._loadedIcon = e;
    this._loadedIcon.addEventListener(r.CLICK, this.bindFunction(this.onIconClicked));
    a.ButtonHelper.initBasicButton(this._loadedIcon);
  };
  ACustomInteractiveCastleStatusIcon.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.removeClickListenerToLoadedIcon();
  };
  ACustomInteractiveCastleStatusIcon.prototype.disposeLoaded = function () {
    e.prototype.disposeLoaded.call(this);
    this.removeClickListenerToLoadedIcon();
  };
  ACustomInteractiveCastleStatusIcon.prototype.removeClickListenerToLoadedIcon = function () {
    if (this._loadedIcon) {
      this._loadedIcon.removeEventListener(r.CLICK, this.bindFunction(this.onIconClicked));
    }
  };
  ACustomInteractiveCastleStatusIcon.prototype.onIconClicked = function (e) {
    if (a.ButtonHelper.isButtonEnabled(e.target)) {
      this.onClick();
    }
  };
  ACustomInteractiveCastleStatusIcon.prototype.createBasicButton = function () {};
  return ACustomInteractiveCastleStatusIcon;
}(s.ACastleStatusIcon);
exports.ACustomInteractiveCastleStatusIcon = l;