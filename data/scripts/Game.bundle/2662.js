Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./6.js");
var r = function (e) {
  function DecorationForgeSelectTargetDialogOrderButton(t = null, i = false) {
    var n = this;
    n._isActive = false;
    n._isArrowUp = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, i) || this).updateActiveState();
    return n;
  }
  n.__extends(DecorationForgeSelectTargetDialogOrderButton, e);
  DecorationForgeSelectTargetDialogOrderButton.prototype.setActive = function (e) {
    this._isActive = e;
    this.updateActiveState();
  };
  DecorationForgeSelectTargetDialogOrderButton.prototype.updateActiveState = function () {
    this.disp.gotoAndStop(s.int(this._isActive ? 2 : 1));
    this.updateArrow();
  };
  DecorationForgeSelectTargetDialogOrderButton.prototype.setArrow = function (e) {
    this._isArrowUp = e;
    this.updateArrow();
  };
  DecorationForgeSelectTargetDialogOrderButton.prototype.updateArrow = function () {
    var e = o.castAs(this.disp.getChildByName("mc_arrow"), "MovieClip");
    if (e) {
      e.gotoAndStop(s.int(this._isArrowUp ? 1 : 2));
    }
  };
  DecorationForgeSelectTargetDialogOrderButton.prototype.onRollOut = function (e) {
    this._disp.scaleX = this._disp.scaleY = this.initScale;
  };
  Object.defineProperty(DecorationForgeSelectTargetDialogOrderButton.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectTargetDialogOrderButton.prototype, "isArrowUp", {
    get: function () {
      return this._isArrowUp;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeSelectTargetDialogOrderButton;
}(require("./121.js").ClickFeedbackButtonBackground);
exports.DecorationForgeSelectTargetDialogOrderButton = r;
a.classImplementsInterfaces(r, "MovieClip");