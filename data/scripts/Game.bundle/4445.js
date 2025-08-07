Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./23.js");
var a = require("./23.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./25.js");
var d = createjs.Point;
var p = function () {
  function FortuneTellerEventDialogRewardAnimation(e) {
    this.showTweens = [];
    this.dialogDisp = e;
    this.yellowGlow = this.dialogDisp.mc_reward_sparkle0;
    this.orangeGlow = this.dialogDisp.mc_reward_sparkle1;
    this.starMC = this.dialogDisp.mc_star;
    this.yellowGlow.compositeOperation = n.BlendMode.OVERLAY;
    this.orangeGlow.compositeOperation = n.BlendMode.SCREEN;
    this.starMC.compositeOperation = n.BlendMode.SCREEN;
    this.yellowGlow.mouseEnabled = false;
    this.orangeGlow.mouseEnabled = false;
    this.starMC.mouseEnabled = false;
  }
  FortuneTellerEventDialogRewardAnimation.prototype.show = function (e) {
    this.hide();
    var t = new l.CollectableRenderClips(this.dialogDisp.mc_item).addIconMc(this.dialogDisp.mc_item.mc_item).addTextfield(this.dialogDisp.mc_item.txt_text);
    var i = new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_RESOURCE_LIST, new d(60, 60));
    i.textfield.useAutoFitToBounds = false;
    u.CollectableRenderHelper.displaySingleItem(t, e, i, null, this.bindFunction(this.onRender));
  };
  FortuneTellerEventDialogRewardAnimation.prototype.onRender = function (e) {
    this.hide();
    this.dialogDisp.mc_item.visible = true;
    this.showTweens.push(r.TweenLite.to(this.yellowGlow, 2, {
      alpha: 1,
      scaleX: 1.5,
      scaleY: 1.5,
      ease: a.Power1.easeOut,
      onComplete: this.bindFunction(this.onShinedIn),
      onCompleteParams: [this.yellowGlow]
    }));
    this.showTweens.push(r.TweenLite.to(this.orangeGlow, 2, {
      alpha: 1,
      scaleX: 1.5,
      scaleY: 1.5,
      ease: a.Power1.easeOut,
      onComplete: this.bindFunction(this.onShinedIn),
      onCompleteParams: [this.orangeGlow]
    }));
    this.showTweens.push(r.TweenLite.to(this.starMC, 2, {
      alpha: 1,
      scaleX: 1.5,
      scaleY: 1.5,
      rotation: 180,
      ease: a.Power1.easeOut,
      onComplete: this.bindFunction(this.onStarIn),
      onCompleteParams: [this.starMC]
    }));
    this.showTweens.push(r.TweenLite.to(this.dialogDisp.mc_item, 0.8, {
      alpha: 1,
      ease: s.Sine.easeOut,
      onComplete: this.bindFunction(this.onRewardIn),
      onCompleteParams: [this.dialogDisp.mc_item],
      delay: 1.2
    }));
    this.showTweens.push(r.TweenLite.to(this.dialogDisp.mc_item, 0.8, {
      scaleX: 1,
      scaleY: 1,
      ease: o.Bounce.easeOut,
      delay: 1.2
    }));
  };
  FortuneTellerEventDialogRewardAnimation.prototype.onShinedIn = function (e) {
    this.showTweens.push(r.TweenLite.to(e, 1, {
      alpha: 0,
      scaleX: 0.8,
      scaleY: 0.8,
      ease: a.Power1.easeOut,
      delay: 1
    }));
  };
  FortuneTellerEventDialogRewardAnimation.prototype.onStarIn = function (e) {
    this.showTweens.push(r.TweenLite.to(e, 1, {
      rotation: 360,
      alpha: 0,
      scaleX: 0.8,
      scaleY: 0.8,
      ease: a.Power1.easeOut,
      delay: 1
    }));
  };
  FortuneTellerEventDialogRewardAnimation.prototype.onRewardIn = function (e) {
    this.showTweens.push(r.TweenLite.to(e, 1, {
      alpha: 0,
      ease: s.Sine.easeOut,
      onComplete: this.bindFunction(this.hide),
      delay: 1
    }));
  };
  FortuneTellerEventDialogRewardAnimation.prototype.hide = function (e = null) {
    for (var t = 0, i = this.showTweens; t < i.length; t++) {
      var n = i[t];
      n.invalidate();
      n.kill();
    }
    this.showTweens = [];
    this.yellowGlow.alpha = 0;
    this.orangeGlow.alpha = 0;
    this.starMC.alpha = 0;
    this.starMC.rotation = 360;
    this.dialogDisp.mc_item.alpha = 0;
    this.dialogDisp.mc_item.visible = false;
    this.dialogDisp.mc_item.scaleX = this.dialogDisp.mc_item.scaleY = 0.6;
    this.yellowGlow.scaleX = this.yellowGlow.scaleY = 0.8;
    this.starMC.scaleX = this.yellowGlow.scaleY = 0.8;
    this.orangeGlow.scaleX = this.orangeGlow.scaleY = 0.8;
  };
  return FortuneTellerEventDialogRewardAnimation;
}();
exports.FortuneTellerEventDialogRewardAnimation = p;