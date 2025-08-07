Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./23.js");
var l = require("./23.js");
var c = require("./57.js");
var u = require("./28.js");
var d = require("./290.js");
var p = require("./8.js");
var h = require("./40.js");
var g = createjs.MovieClip;
var C = createjs.Shape;
var _ = createjs.TimerEvent;
var m = createjs.Point;
var f = function (e) {
  function SimplePopoverComponent(t) {
    var i = e.call(this, t) || this;
    i._dispComponent = new d.DispCreatorComponent();
    i._currentScreenDimension = new m();
    i._currentState = 0;
    i._waitTimer = new a.Timer(100000, 1);
    i._isReady = false;
    i._startTriggered = false;
    i._onAssetLoadedSignal = new c.Signal();
    i._onSequenceCompleteSignal = new c.Signal();
    i._onStateStarted = new c.Signal();
    i._disp = i.initPopDisp(t);
    i._dispComponent.init(i.getDispChild(SimplePopoverComponent.DISP_NAME_ASSET_PLACEHOLDER));
    return i;
  }
  n.__extends(SimplePopoverComponent, e);
  SimplePopoverComponent.prototype.initPopDisp = function (e) {
    this._dialogDisp = e;
    var t = this.createPopoverDisp();
    this._dialogDisp.addChild(t);
    t.visible = false;
    return t;
  };
  SimplePopoverComponent.prototype.init = function (e) {
    this._config = e;
    this._dispComponent.cacheDisp = false;
    this._dispComponent.reset();
    this._isReady = false;
    this.setTimerListener(false);
    this._waitTimer = new a.Timer(this._config.waitDuration * u.ClientConstTime.SEC_2_MILLISEC, 1);
    if (this._config && this._config.assetPos) {
      var t = this.getDispChild(SimplePopoverComponent.DISP_NAME_ASSET_PLACEHOLDER);
      t.x = e.assetPos.x;
      t.y = e.assetPos.y;
    }
    this._dispComponent.onLoadedSignal.add(this.bindFunction(this.onDispClipsLoaded));
    this._dispComponent.switchCreationState(true);
    this._dispComponent.addClip(new o.GoodgameDisplayObjectClipExternal(this._config.assetClipName, O.IsoHelper.view.getAssetFileURL(this._config.assetFileName)));
    this._dispComponent.switchCreationState(false);
  };
  SimplePopoverComponent.prototype.destroy = function () {
    this._onAssetLoadedSignal.removeAll();
    this._onSequenceCompleteSignal.removeAll();
    this.setTimerListener(false);
    this._dispComponent.destroy();
    e.prototype.destroy.call(this);
  };
  SimplePopoverComponent.prototype.onShow = function () {
    this.startState(SimplePopoverComponent.STATE_HIDE);
    e.prototype.onShow.call(this);
  };
  SimplePopoverComponent.prototype.onHide = function () {
    this.startState(SimplePopoverComponent.STATE_HIDE);
    e.prototype.onHide.call(this);
  };
  SimplePopoverComponent.prototype.removeEventListener = function () {
    this.setTimerListener(false);
    e.prototype.removeEventListener.call(this);
  };
  SimplePopoverComponent.prototype.startSequence = function () {
    this.startState(SimplePopoverComponent.STATE_FADE_IN);
  };
  SimplePopoverComponent.prototype.endSequence = function () {
    this.startState(SimplePopoverComponent.STATE_FADE_OUT);
  };
  SimplePopoverComponent.prototype.startState = function (e) {
    this._currentState = e;
    this._startTriggered = true;
    l.TweenMax.killTweensOf(this.disp);
    this.disp.visible = true;
    this.setTimerListener(false);
    this.disp.alpha = 1;
    this._waitTimer.stop();
    this.updateClickArea();
    if (this._isReady) {
      this._dialogDisp.setChildIndex(this.disp, this._dialogDisp.numChildren - 1);
      switch (e) {
        case SimplePopoverComponent.STATE_HIDE:
          this.disp.visible = false;
          break;
        case SimplePopoverComponent.STATE_FADE_IN:
          this.disp.visible = true;
          this.disp.alpha = 0;
          l.TweenMax.to(this.disp, this._config.fadeInDuration, {
            alpha: 1,
            ease: r.Linear.easeIn
          }).eventCallback("onComplete", this.bindFunction(this.onFadeInComplete));
          break;
        case SimplePopoverComponent.STATE_WAIT:
          this.setTimerListener(true);
          this._waitTimer.reset();
          this._waitTimer.start();
          break;
        case SimplePopoverComponent.STATE_FADE_OUT:
          this.disp.visible = true;
          l.TweenMax.to(this.disp, this._config.fadeOutDuration, {
            alpha: 0,
            ease: r.Linear.easeOut
          }).eventCallback("onComplete", this.bindFunction(this.onFadeOutComplete));
      }
      this._onStateStarted.dispatch(e);
    }
  };
  SimplePopoverComponent.prototype.setTimerListener = function (e) {
    if (this._waitTimer) {
      if (e) {
        this._waitTimer.addEventListener(_.TIMER_COMPLETE, this.bindFunction(this.onWaitComplete));
      } else {
        this._waitTimer.removeEventListener(_.TIMER_COMPLETE, this.bindFunction(this.onWaitComplete));
      }
    }
  };
  SimplePopoverComponent.prototype.updateClickArea = function () {
    if (this._dialogDisp.stage) {
      if (this._clickAreaMc.numChildren > 0 && this.config.useClickArea == 0) {
        this._clickAreaMc.removeChildren();
      }
      var e = new m(this._dialogDisp.stage.stageWidth, this._dialogDisp.stage.stageHeight);
      if ((this._currentScreenDimension.x != e.x || this._currentScreenDimension.y != e.y) && (this._currentScreenDimension = e, this._clickAreaMc.removeChildren(), this._config && this._config.useClickArea)) {
        var t = new C();
        t.graphics.beginFill(0, 0.1);
        t.graphics.drawRect(0, 0, this._currentScreenDimension.x, this._currentScreenDimension.y);
        t.graphics.endFill();
        t.setBounds(0, 0, this._currentScreenDimension.x, this._currentScreenDimension.y);
        t.x = -this._currentScreenDimension.x / 2;
        t.y = -this._currentScreenDimension.y / 2;
        this._clickAreaMc.addChild(t);
      }
    }
  };
  SimplePopoverComponent.prototype.createPopoverDisp = function () {
    var e = new g();
    e.name = SimplePopoverComponent.DISP_NAME_TOP_LAYER;
    this._assetPlaceholderMc = new g();
    this._assetPlaceholderMc.name = SimplePopoverComponent.DISP_NAME_ASSET_PLACEHOLDER;
    this._clickAreaMc = new g();
    this._clickAreaMc.name = SimplePopoverComponent.DISP_NAME_CLICK_AREA;
    e.addChild(this._clickAreaMc);
    e.addChild(this._assetPlaceholderMc);
    return e;
  };
  SimplePopoverComponent.prototype.getDispChild = function (e) {
    return this.disp.getChildByName(e);
  };
  SimplePopoverComponent.prototype.getAssetDisp = function () {
    var e = this._dispComponent.firstClip;
    if (e) {
      return e.currentshownDisplayObject;
    } else {
      return null;
    }
  };
  SimplePopoverComponent.prototype.onDispClipsLoaded = function () {
    this._dispComponent.onLoadedSignal.remove(this.bindFunction(this.onDispClipsLoaded));
    this._isReady = true;
    this._onAssetLoadedSignal.dispatch();
    if (this._startTriggered) {
      this.startState(this._currentState);
    }
  };
  SimplePopoverComponent.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      if (this._currentState == SimplePopoverComponent.STATE_WAIT && this.config.closeOnClick) {
        this.endSequence();
      }
    }
  };
  SimplePopoverComponent.prototype.onFadeInComplete = function () {
    if (this._config.waitDuration >= 0) {
      this.startState(SimplePopoverComponent.STATE_WAIT);
    }
  };
  SimplePopoverComponent.prototype.onFadeOutComplete = function () {
    this.startState(SimplePopoverComponent.STATE_HIDE);
    this._startTriggered = false;
    this._onSequenceCompleteSignal.dispatch();
  };
  SimplePopoverComponent.prototype.onWaitComplete = function (e) {
    this.setTimerListener(false);
    this._waitTimer.stop();
    this.startState(SimplePopoverComponent.STATE_FADE_OUT);
  };
  Object.defineProperty(SimplePopoverComponent.prototype, "isReady", {
    get: function () {
      return this._isReady;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimplePopoverComponent.prototype, "currentState", {
    get: function () {
      return this._currentState;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimplePopoverComponent.prototype, "config", {
    get: function () {
      return this._config;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimplePopoverComponent.prototype, "onAssetLoadedSignal", {
    get: function () {
      return this._onAssetLoadedSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimplePopoverComponent.prototype, "onSequenceCompleteSignal", {
    get: function () {
      return this._onSequenceCompleteSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimplePopoverComponent.prototype, "onStateStarted", {
    get: function () {
      return this._onStateStarted;
    },
    enumerable: true,
    configurable: true
  });
  SimplePopoverComponent.prototype.resetTimer = function () {
    this.setTimerListener(false);
    this._waitTimer.reset();
    this._waitTimer = new a.Timer(this._config.waitDuration * u.ClientConstTime.SEC_2_MILLISEC, 1);
  };
  SimplePopoverComponent.prototype.doWhenLoaded = function (e) {
    if (this.isReady) {
      e();
    } else {
      this._onAssetLoadedSignal.addOnce(e);
    }
  };
  SimplePopoverComponent.DISP_NAME_TOP_LAYER = "popover_top";
  SimplePopoverComponent.DISP_NAME_ASSET_PLACEHOLDER = "popover_asset";
  SimplePopoverComponent.DISP_NAME_CLICK_AREA = "popover_clickArea";
  SimplePopoverComponent.STATE_HIDE = 0;
  SimplePopoverComponent.STATE_FADE_IN = 1;
  SimplePopoverComponent.STATE_WAIT = 2;
  SimplePopoverComponent.STATE_FADE_OUT = 3;
  return SimplePopoverComponent;
}(h.CastleItemRenderer);
exports.SimplePopoverComponent = f;
var O = require("./46.js");
s.classImplementsInterfaces(f, "ICollectableRendererList");