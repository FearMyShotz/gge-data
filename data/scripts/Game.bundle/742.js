Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./1.js");
var s = require("./23.js");
var r = require("./1372.js");
var l = function (e) {
  function AdvancedProgressBar(t = null, i = null) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this).changeStrategy = i || AdvancedProgressBar.DEFAULT_BEHAVIOUR;
    return n;
  }
  n.__extends(AdvancedProgressBar, e);
  AdvancedProgressBar.prototype.fromTo = function (e, t) {
    this.applyMask();
    s.TweenMax.fromTo(this.disp.mask, this._changeBehaviour.duration, this._changeBehaviour.getFromVars(e), this._changeBehaviour.getToVars(t));
  };
  AdvancedProgressBar.prototype.to = function (e) {
    this.applyMask();
    s.TweenMax.to(this.disp.mask, this._changeBehaviour.duration, this._changeBehaviour.getToVars(e));
  };
  AdvancedProgressBar.prototype.scale = function (e) {
    this.applyMask();
    s.TweenMax.to(this.disp.mask, 0, this._changeBehaviour.getToVars(e));
  };
  Object.defineProperty(AdvancedProgressBar.prototype, "changeStrategy", {
    set: function (e) {
      this._changeBehaviour = e;
    },
    enumerable: true,
    configurable: true
  });
  AdvancedProgressBar.prototype.kill = function () {
    s.TweenMax.killTweensOf(this.disp.mask);
  };
  Object.defineProperty(AdvancedProgressBar.prototype, "currentProgress", {
    get: function () {
      this.applyMask();
      return this._changeBehaviour.getCurrentProgress(this.disp);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvancedProgressBar.prototype, "isTweening", {
    get: function () {
      return s.TweenMax.isTweening(this.disp.mask);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AdvancedProgressBar.prototype, "getOriginBarWidth", {
    get: function () {
      return this.disp.bitmap_1.width;
    },
    enumerable: true,
    configurable: true
  });
  AdvancedProgressBar.__initialize_static_members = function () {
    AdvancedProgressBar.DEFAULT_BEHAVIOUR = new r.HorizontalProgressBehaviour();
  };
  return AdvancedProgressBar;
}(o.BasicProgressBar);
exports.AdvancedProgressBar = l;
a.classImplementsInterfaces(l, "MovieClip");
l.__initialize_static_members();