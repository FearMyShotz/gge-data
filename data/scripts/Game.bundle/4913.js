Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./23.js");
var o = require("./57.js");
var a = function () {
  function MysteryBoxRewardsAnimationHandler() {
    this._countCompletedAnimations = 0;
    this.animationCompleteSignal = new o.Signal();
  }
  MysteryBoxRewardsAnimationHandler.prototype.playAnimation = function (e) {
    this._rewardItems = e;
    if (e) {
      var t;
      var i = 3 / MysteryBoxRewardsAnimationHandler.ANIMATION_FPS;
      var o = 0;
      for (var a = 0; a < e.length; a++) {
        (t = e[a]).alpha = 0;
        t.scaleX = t.scaleY = 0.1;
        t.visible = true;
        n.TweenLite.to(t, 5 / MysteryBoxRewardsAnimationHandler.ANIMATION_FPS, {
          alpha: 1,
          scaleX: 1,
          scaleY: 1,
          onComplete: this.bindFunction(this.stopAnimation),
          delay: o
        });
        o += i;
      }
    }
  };
  MysteryBoxRewardsAnimationHandler.prototype.stopAnimation = function () {
    this._countCompletedAnimations++;
    if (this._countCompletedAnimations == this._rewardItems.length) {
      n.TweenLite.delayedCall(0.8, this.bindFunction(this.dispatchComplete));
    }
  };
  MysteryBoxRewardsAnimationHandler.prototype.dispatchComplete = function () {
    this.animationCompleteSignal.dispatch();
    this._countCompletedAnimations = 0;
  };
  MysteryBoxRewardsAnimationHandler.ANIMATION_FPS = 24;
  return MysteryBoxRewardsAnimationHandler;
}();
exports.MysteryBoxRewardsAnimationHandler = a;