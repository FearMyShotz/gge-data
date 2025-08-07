Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./23.js");
var a = require("./23.js");
var s = require("./4.js");
var r = require("./73.js");
var l = require("./248.js");
var c = createjs.Event;
var u = function () {
  function CastleCraftingAnimationEquipment(e, t) {
    this._currentBlinkIndex = 0;
    this._isAnimationCompleted = false;
    this._effectAnimationTimeout = -1;
    this.ANIMATION_TIME_FACTOR = 0.6;
    this.sublayer = t;
    this.animationGfx = e;
    this._animatedEquip = e;
  }
  CastleCraftingAnimationEquipment.prototype.doAnimation = function (e, t, i) {
    this._slots = this.sublayer.allSlotsOnScreen;
    this._animationFinishedCallback = e;
    this._lockDialogCallback = i;
    this._animatedEquip = t;
    this._animatedEquip.scaleY = this._animatedEquip.scaleY = 0;
  };
  CastleCraftingAnimationEquipment.prototype.doEQAnimation = function (e, t, i) {
    this.setFocusListeners();
    this._isAnimationCompleted = false;
    this.doAnimation(e, r.EquipmentIconHelper.addEquipmentIcon(t, null, 50, 50), i);
    this.doBlinkAnimation(this.ANIMATION_TIME_FACTOR * 0.8);
  };
  CastleCraftingAnimationEquipment.prototype.doGemAnimation = function (e, t, i) {
    this.setFocusListeners();
    this._isAnimationCompleted = false;
    this.doAnimation(e, l.CastleGemRenderer.renderAsset(s.CastleModel.gemData.getGemVO(t[t.length - 1].gemVO.upgradeId)), i);
    this.doBlinkAnimation(this.ANIMATION_TIME_FACTOR * 1);
  };
  CastleCraftingAnimationEquipment.prototype.doBlinkAnimation = function (e) {
    if (this._slots != null) {
      for (var t in this._slots) {
        var i = this._slots[t];
        if (i !== undefined) {
          i.gemVO = null;
        }
      }
    }
    window.setTimeout(this.bindFunction(this.turnOnBlink), this.ANIMATION_TIME_FACTOR * 100);
    window.setTimeout(this.bindFunction(this.turnOnBlink), this.ANIMATION_TIME_FACTOR * 200);
    window.setTimeout(this.bindFunction(this.turnOnBlink), this.ANIMATION_TIME_FACTOR * 300);
    window.setTimeout(this.bindFunction(this.turnOnBlink), this.ANIMATION_TIME_FACTOR * 400);
    window.setTimeout(this.bindFunction(this.turnOnBlink), this.ANIMATION_TIME_FACTOR * 500);
    window.setTimeout(this.bindFunction(this.turnOnBlink), this.ANIMATION_TIME_FACTOR * 600);
    this._effectAnimationTimeout = window.setTimeout(this.bindFunction(this.doEffectAnimation), this.ANIMATION_TIME_FACTOR * 700, e);
  };
  CastleCraftingAnimationEquipment.prototype.doEffectAnimation = function (e) {
    this.animateSlots(e);
    if (this.animationGfx) {
      this.animationGfx.play();
      this.animationGfx.addEventListener(c.ENTER_FRAME, this.bindFunction(this.onEffectAnimationFrame));
    }
  };
  CastleCraftingAnimationEquipment.prototype.onEffectAnimationFrame = function (e) {
    if (this.animationGfx.currentFrame >= this.animationGfx.totalFrames - 5) {
      this.completeAnimation();
    }
    this.animationGfx.gotoAndPlay(this.animationGfx.currentFrame + 1 / this.ANIMATION_TIME_FACTOR);
  };
  CastleCraftingAnimationEquipment.prototype.completeAnimation = function () {
    this._isAnimationCompleted = true;
    this.animationGfx.gotoAndStop(0);
    this.subLayerDisp.slot6.addChild(this._animatedEquip);
    this.animationGfx.removeEventListener(c.ENTER_FRAME, this.bindFunction(this.onEffectAnimationFrame));
    window.removeEventListener("blur", this.bindFunction(this.animationPause));
    window.removeEventListener("focus", this.bindFunction(this.animationResume));
    a.TweenMax.to(this._animatedEquip, this.ANIMATION_TIME_FACTOR * 0.3, {
      alpha: 1,
      scaleX: 1,
      scaleY: 1,
      ease: o.Linear.easeOut,
      onComplete: this.bindFunction(this.onAnimationComplete)
    });
  };
  CastleCraftingAnimationEquipment.prototype.setFocusListeners = function () {
    window.removeEventListener("blur", this.bindFunction(this.animationPause));
    window.removeEventListener("focus", this.bindFunction(this.animationResume));
    window.addEventListener("blur", this.bindFunction(this.animationPause));
    window.addEventListener("focus", this.bindFunction(this.animationResume));
  };
  CastleCraftingAnimationEquipment.prototype.animationPause = function () {
    if (this.animationGfx) {
      this.animationGfx.stop();
      this.animationGfx.removeEventListener(c.ENTER_FRAME, this.bindFunction(this.onEffectAnimationFrame));
    }
    clearTimeout(this._effectAnimationTimeout);
  };
  CastleCraftingAnimationEquipment.prototype.animationResume = function () {
    if (!this._isAnimationCompleted) {
      this.completeAnimation();
    }
  };
  CastleCraftingAnimationEquipment.prototype.animateSlots = function (e = 1.2) {
    a.TweenMax.fromTo(this._slots[0].mc_itemHolder, 0.2, {
      alpha: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      autoAlpha: 0,
      x: 115,
      y: -55,
      scaleX: e,
      scaleY: e,
      ease: o.Linear.easeInOut
    });
    a.TweenMax.fromTo(this._slots[1].mc_itemHolder, 0.2, {
      alpha: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      autoAlpha: 0,
      x: 0,
      y: -105,
      scaleX: e,
      scaleY: e,
      ease: o.Linear.easeInOut
    });
    a.TweenMax.fromTo(this._slots[2].mc_itemHolder, 0.2, {
      alpha: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      autoAlpha: 0,
      x: -115,
      y: -55,
      scaleX: e,
      scaleY: e,
      ease: o.Linear.easeInOut
    });
    a.TweenMax.fromTo(this._slots[3].mc_itemHolder, 0.2, {
      alpha: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      autoAlpha: 0,
      x: -115,
      y: 55,
      scaleX: e,
      scaleY: e,
      ease: o.Linear.easeInOut
    });
    a.TweenMax.fromTo(this._slots[4].mc_itemHolder, 0.2, {
      alpha: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      autoAlpha: 0,
      x: 0,
      y: 105,
      scaleX: e,
      scaleY: e,
      ease: o.Linear.easeInOut
    });
    a.TweenMax.fromTo(this._slots[5].mc_itemHolder, 0.2, {
      alpha: 1,
      x: 0,
      y: 0,
      scaleX: 1,
      scaleY: 1
    }, {
      autoAlpha: 0,
      x: 115,
      y: 55,
      scaleX: e,
      scaleY: e,
      ease: o.Linear.easeInOut
    });
    this.subLayerDisp.slot6.mc_itemHolder.removeChildren();
  };
  CastleCraftingAnimationEquipment.prototype.turnOnBlink = function () {
    if (this.subLayerDisp["mc_connectionBar" + this._currentBlinkIndex]) {
      this.subLayerDisp["mc_connectionBar" + this._currentBlinkIndex].gotoAndStop(2);
      this._currentBlinkIndex++;
    }
  };
  CastleCraftingAnimationEquipment.prototype.onAnimationComplete = function () {
    this._isAnimationCompleted = true;
    a.TweenMax.to(this._animatedEquip, 0.3, {
      alpha: 0,
      y: 200,
      scale: 1,
      ease: o.Linear.easeOut,
      onComplete: this.bindFunction(this.resetAnimation)
    });
  };
  CastleCraftingAnimationEquipment.prototype.clearCenterSlot = function () {
    if (this.animationGfx) {
      this.animationGfx.gotoAndStop(0);
    }
    this.subLayerDisp.slot6.removeChild(this._animatedEquip);
    n.MovieClipHelper.clearMovieClip(this._animatedEquip);
  };
  CastleCraftingAnimationEquipment.prototype.resetAnimation = function () {
    this.clearCenterSlot();
    if (this._animationFinishedCallback) {
      this._animationFinishedCallback();
    }
    for (var e = 0; e < 6; e++) {
      this.subLayerDisp["mc_connectionBar" + e].gotoAndStop(1);
      this._slots[e].mc_itemHolder.x = this._slots[e].mc_itemHolder.y = 0;
      this._slots[e].mc_itemHolder.scaleX = this._slots[e].mc_itemHolder.scaleY = 1;
      this._slots[e].mc_itemHolder.alpha = 1;
      this._slots[e].mc_itemHolder.visible = true;
    }
    this._currentBlinkIndex = 0;
  };
  Object.defineProperty(CastleCraftingAnimationEquipment.prototype, "subLayerDisp", {
    get: function () {
      return this.sublayer.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleCraftingAnimationEquipment.prototype.clearCallBacks = function () {
    this._lockDialogCallback = null;
    this._animationFinishedCallback = null;
  };
  return CastleCraftingAnimationEquipment;
}();
exports.CastleCraftingAnimationEquipment = u;