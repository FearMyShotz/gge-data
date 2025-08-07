Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./23.js");
var s = require("./23.js");
var r = function () {
  function FortuneTellerEventDialogIdleAnimation(e) {
    this.smallSparkles = [];
    this.dialogDisp = e;
    for (var t = 0; t < 10; t++) {
      if (this.dialogDisp["mc_small_idle_sparkle" + t]) {
        this.smallSparkles.push(this.dialogDisp["mc_small_idle_sparkle" + t]);
      }
    }
    this.yellowGlow = this.dialogDisp.mc_big_idle_yellow;
    this.orangeGlow = this.dialogDisp.mc_big_idle_orange;
    this.yellowGlow.compositeOperation = o.BlendMode.OVERLAY;
    this.orangeGlow.compositeOperation = o.BlendMode.SCREEN;
    this.yellowGlow.mouseEnabled = false;
    this.orangeGlow.mouseEnabled = false;
  }
  FortuneTellerEventDialogIdleAnimation.prototype.show = function () {
    this.hide();
    this.increaseBigSpark(this.yellowGlow);
    this.increaseBigSpark(this.orangeGlow);
    if (this.smallSparkles != null) {
      for (var e = 0, t = this.smallSparkles; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          s.TweenLite.delayedCall(n.MathBase.random(0, 3, false), this.bindFunction(this.decreaseSmallSpark), [i]);
        }
      }
    }
  };
  FortuneTellerEventDialogIdleAnimation.prototype.decreaseBigSpark = function (e) {
    s.TweenLite.to(e, 2, {
      scaleX: 1,
      scaleY: 1,
      ease: a.Linear.ease,
      onComplete: this.bindFunction(this.increaseBigSpark),
      onCompleteParams: [e]
    });
  };
  FortuneTellerEventDialogIdleAnimation.prototype.increaseBigSpark = function (e) {
    s.TweenLite.to(e, 3, {
      scaleX: 1.4,
      scaleY: 1.4,
      ease: a.Linear.ease,
      onComplete: this.bindFunction(this.decreaseBigSpark),
      onCompleteParams: [e]
    });
  };
  FortuneTellerEventDialogIdleAnimation.prototype.decreaseSmallSpark = function (e) {
    s.TweenLite.to(e, 1.5, {
      alpha: 0,
      rotate: 360,
      scaleX: 0.8,
      scaleY: 0.8,
      ease: a.Linear.easeNone,
      onComplete: this.bindFunction(this.increaseSmallSpark),
      onCompleteParams: [e]
    });
  };
  FortuneTellerEventDialogIdleAnimation.prototype.increaseSmallSpark = function (e) {
    s.TweenLite.to(e, 1.5, {
      alpha: 1,
      rotate: 360,
      scaleX: 1,
      scaleY: 1,
      ease: a.Linear.easeNone,
      onComplete: this.bindFunction(this.decreaseSmallSpark),
      onCompleteParams: [e]
    });
  };
  FortuneTellerEventDialogIdleAnimation.prototype.hide = function () {
    if (this.smallSparkles != null) {
      for (var e = 0, t = this.smallSparkles; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.alpha = 0;
        }
      }
    }
    this.yellowGlow.scaleX = this.yellowGlow.scaleY = 1;
    this.orangeGlow.scaleX = this.orangeGlow.scaleY = 1;
  };
  return FortuneTellerEventDialogIdleAnimation;
}();
exports.FortuneTellerEventDialogIdleAnimation = r;