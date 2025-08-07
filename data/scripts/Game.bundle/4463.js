Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./23.js");
var p = require("./31.js");
var h = require("./19.js");
var g = function (e) {
  function CastleLuckyWheelJackpotCard(t, i, n, o, a = null) {
    var r = this;
    r._index = 0;
    r._isAnimating = false;
    CONSTRUCTOR_HACK;
    (r = e.call(this, t) || this)._index = i;
    r._eventVO = o;
    s.GoodgameTextFieldManager.getInstance().registerTextField(r.card.mc_ribbon.txt_price, new c.LocalizedTextVO("dialog_luckyWheel_yourPrice")).autoFitToBounds = true;
    r._clickCallBack = n;
    r._animationCompletedCallBack = a;
    return r;
  }
  n.__extends(CastleLuckyWheelJackpotCard, e);
  CastleLuckyWheelJackpotCard.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    this.scaleCard(1);
    if (!this._isAnimating) {
      this._clickCallBack(this._index);
    }
  };
  CastleLuckyWheelJackpotCard.prototype.isClosed = function () {
    return this.card.closedCard.visible;
  };
  CastleLuckyWheelJackpotCard.prototype.setClosed = function () {
    var e = u.int(this._eventVO.currentWinClass);
    if (this._eventVO.hasLevelUp) {
      e -= 1;
    }
    this.card.closedCard.jackpotLevelTF.defaultCacheScale = 2;
    s.GoodgameTextFieldManager.getInstance().registerTextField(this.card.closedCard.jackpotLevelTF, new l.LocalizedNumberVO(e), new r.InternalGGSTextFieldConfigVO(true)).mouseEnabled = false;
    this.card.mc_ribbon.visible = false;
    this.card.mc_glow.visible = false;
    this.card.closedCard.visible = true;
    this.card.openCard.visible = false;
    this.card.closedCard.actLikeButton = true;
  };
  CastleLuckyWheelJackpotCard.prototype.setOpened = function (e = null) {
    this.card.mc_ribbon.visible = false;
    this.card.mc_glow.visible = false;
    this.card.closedCard.visible = false;
    this.card.openCard.visible = true;
    this.updateReward(e);
  };
  CastleLuckyWheelJackpotCard.prototype.updateReward = function (e = null) {
    if (this._rewardRenderer) {
      this._rewardRenderer.destroy();
    }
    if (e) {
      var t = this.card.openCard.mc_reward;
      var i = new h.CollectableRenderOptions(h.CollectableRenderOptions.SET_DEFAULT);
      i.textfield.verticalAlign = m.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      this._rewardRenderer = _.CollectableRenderHelper.displaySingleItem(new p.CollectableRenderClips(t).addIconMc(t.mc_iconHolder).addTextfield(t.txt_amount).addInfoBtn(this.card.openCard.btn_info), e, i);
    }
  };
  CastleLuckyWheelJackpotCard.prototype.setWinningAppearance = function () {
    this.card.mc_ribbon.visible = true;
    this.card.mc_glow.visible = true;
  };
  CastleLuckyWheelJackpotCard.prototype.setAnimation = function (e, t, i, n) {
    this._isAnimating = true;
    var o = 360;
    if (e == this.x) {
      o = 0;
    }
    o *= e > this.x ? -1 : 1;
    var a = 0;
    a = n ? 1 : 0;
    this._cardTween = d.TweenMax.to(this.card, 0.5, {
      x: e,
      rotation: o,
      yoyo: i,
      repeat: 1,
      delay: t,
      repeatDelay: a,
      onComplete: this.bindFunction(this.onCompleteAnimation),
      onStart: this.bindFunction(this.onStartAnimation),
      onRepeat: this.bindFunction(this.onRepeatAnimation)
    });
  };
  CastleLuckyWheelJackpotCard.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    this.scaleCard(1);
    C.CastleLayoutManager.getInstance().customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  CastleLuckyWheelJackpotCard.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    if (this.isClosed() == 1 && this._isAnimating == 0) {
      this.scaleCard(1.1);
      C.CastleLayoutManager.getInstance().customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleLuckyWheelJackpotCard.prototype.onRepeatAnimation = function () {
    var e = u.int(u.int(Math.random() * 3));
    this.disp.parent.setChildIndex(this.disp, e);
  };
  CastleLuckyWheelJackpotCard.prototype.onStartAnimation = function () {
    this.setClosed();
  };
  CastleLuckyWheelJackpotCard.prototype.onCompleteAnimation = function () {
    this._isAnimating = false;
    if (this._animationCompletedCallBack) {
      this._animationCompletedCallBack();
    }
  };
  CastleLuckyWheelJackpotCard.prototype.scaleCard = function (e) {
    if (this._cardScaleTween) {
      this._cardScaleTween.kill();
    }
    this._cardScaleTween = null;
    this._cardScaleTween = d.TweenMax.to(this.card, 0.1, {
      scaleX: e,
      scaleY: e
    });
  };
  Object.defineProperty(CastleLuckyWheelJackpotCard.prototype, "x", {
    get: function () {
      return this.card.x;
    },
    set: function (e) {
      this.card.x = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelJackpotCard.prototype, "y", {
    get: function () {
      return this.card.y;
    },
    set: function (e) {
      this.card.y = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelJackpotCard.prototype, "card", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLuckyWheelJackpotCard.prototype, "index", {
    get: function () {
      return this._index;
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelJackpotCard.prototype.destroy = function () {
    this._cardTween.kill();
    if (this._cardScaleTween) {
      this._cardScaleTween.kill();
    }
    this._cardScaleTween = null;
    e.prototype.destroy.call(this);
  };
  return CastleLuckyWheelJackpotCard;
}(a.FlashUIComponent);
exports.CastleLuckyWheelJackpotCard = g;
var C = require("./17.js");
var _ = require("./25.js");
var m = require("./42.js");