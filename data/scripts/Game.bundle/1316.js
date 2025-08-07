Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./23.js");
var o = require("./23.js");
var a = function () {
  function CastleCraftingNewItemAnimation() {}
  CastleCraftingNewItemAnimation.prototype.playAnimation = function (e, t) {
    this.finishedCallback = e;
    this.animatedMC = t;
    this.animatedMC.scaleX = this.animatedMC.scaleY = 0;
    this.animatedMC.alpha = 0;
    this.growMc();
  };
  CastleCraftingNewItemAnimation.prototype.growMc = function () {
    if (this.animatedMC) {
      o.TweenMax.to(this.animatedMC, 0.25, {
        scaleX: 1.2,
        scaleY: 1.2,
        alpha: 1,
        ease: n.Linear.easeNone,
        onComplete: this.bindFunction(this.shrinkToNormalSize)
      });
    } else {
      this.shrinkToNormalSize();
    }
  };
  CastleCraftingNewItemAnimation.prototype.shrinkToNormalSize = function () {
    if (this.animatedMC) {
      o.TweenMax.to(this.animatedMC, 0.25, {
        scaleX: 1,
        scaleY: 1,
        ease: n.Linear.easeNone,
        onComplete: this.bindFunction(this.onAnimationFinished)
      });
    } else {
      this.onAnimationFinished();
    }
  };
  CastleCraftingNewItemAnimation.prototype.onAnimationFinished = function () {
    if (this.finishedCallback) {
      this.finishedCallback();
    }
  };
  return CastleCraftingNewItemAnimation;
}();
exports.CastleCraftingNewItemAnimation = a;