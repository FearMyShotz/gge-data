Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./190.js");
var s = require("./30.js");
var r = require("./48.js");
var o = require("./59.js");
var l = createjs.Bitmap;
var u = createjs.Event;
var c = createjs.Point;
var _ = function (e) {
  function GoodgameBitmapClip(t, n = 24, i = true) {
    var a = e.call(this) || this;
    a._bmpImage = new l("");
    a.autoDispose = true;
    a._isInteractive = false;
    a._copiedBitmapFrame = [];
    a.animationManager = o.GoodgameBitmapEngine.instance.animationManager;
    a.mouseChildren = false;
    a.mouseEnabled = false;
    a.source = t;
    a.targetFps = n;
    a._running = i;
    a._startFrame = 1;
    a.addEventListener(u.REMOVED_FROM_STAGE, a.bindFunction(a.handleRemovedFromStage));
    if (a.clipSizeComponent) {
      a.clipSizeComponent.setImageSize(a, a.source.clipBounds);
    }
    return a;
  }
  i.__extends(GoodgameBitmapClip, e);
  Object.defineProperty(GoodgameBitmapClip.prototype, "bmpImage", {
    get: function () {
      return this._bmpImage;
    },
    set: function (e) {
      this._bmpImage = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClip.prototype, "frameStrip", {
    get: function () {
      if (this.source) {
        return this.source.frameStrip;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClip.prototype, "interactiveComponent", {
    get: function () {
      return this._interactiveComponent;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapClip.prototype.dispose = function () {
    if (this._clipSizeComponent) {
      this._clipSizeComponent.destroy();
    }
    if (this._interactiveComponent) {
      this._interactiveComponent.dispose();
    }
    this._copiedBitmapFrame.forEach(function (e) {
      if (e && e.parent) {
        e.parent = null;
      }
    });
    if (this._copiedBitmapFrame.length) {
      this._copiedBitmapFrame = [];
    }
  };
  Object.defineProperty(GoodgameBitmapClip.prototype, "clipSizeComponent", {
    set: function (e) {
      this._clipSizeComponent = e;
      if (this._clipSizeComponent) {
        this._clipSizeComponent.setImageSize(this, this.source.clipBounds);
        this._clipSizeComponent.clipSizeChanged.dispatch(this);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClip.prototype, "isInteractive", {
    get: function () {
      return this._isInteractive;
    },
    set: function (e) {
      if (!e && this._interactiveComponent) {
        this._interactiveComponent.dispose();
        this._interactiveComponent = null;
      }
      this._isInteractive = e;
      this.mouseChildren = false;
      this.mouseEnabled = this._isInteractive;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapClip.prototype.init = function () {
    if (this.frameStrip) {
      this._endFrame = this.frameStrip.frameAmount;
      if (this.frameStrip.hasMultipleFrames && this._running) {
        this.play();
      } else {
        this.gotoAndStop(1);
      }
    }
  };
  GoodgameBitmapClip.prototype.isHit = function (e, t) {
    var n = new c(e, t);
    n = this.bmpImage.globalToLocal(n.x, n.y);
    GoodgameBitmapClip.HIT_TEST_POINT.x = n.x;
    GoodgameBitmapClip.HIT_TEST_POINT.y = n.y;
    return false;
  };
  GoodgameBitmapClip.prototype.handleRemovedFromStage = function (e) {
    if (this.autoDispose) {
      this.dispose();
    }
    this.stop();
    this.removeEventListener(u.REMOVED_FROM_STAGE, this.bindFunction(this.handleRemovedFromStage));
  };
  GoodgameBitmapClip.prototype.jumpToFrame = function (e) {
    if (this.frameStrip) {
      if (this.frameStrip && e > 0) {
        var t = this._currentFrame !== e || !this.currentFrameImage;
        this._currentFrame = e;
        this.frameIndex = this._currentFrame - 1;
        this.currentFrameImage = this.frameStrip.getFrame(Math.min(this.frameIndex, this.frameStrip.frameAmount - 1));
        if (!this.currentFrameImage) {
          return;
        }
        this._bmpImage = this.currentFrameImage;
        this.bmpImage.smoothing = o.GoodgameBitmapEngine.instance.smoothing;
        this.bmpImage.pixelSnapping = o.GoodgameBitmapEngine.instance.pixelSnapping;
        this.children.splice(0, 1);
        if (this.bmpImage.parent) {
          if (this.bmpImage.parent != this) {
            if (this._copiedBitmapFrame[e]) {
              this.children.push(this._copiedBitmapFrame[e]);
            } else {
              var n = this.bmpImage.clone();
              n.parent = this;
              this.children.push(n);
              if (e > 1 || this._copiedBitmapFrame.length > 2) {
                this._copiedBitmapFrame[e] = n;
              }
            }
          } else {
            this.children.push(this.bmpImage);
          }
        } else {
          this.children.push(this.bmpImage);
          this.bmpImage.parent = this;
        }
        if (t && this.onFrameChangedCallback != null) {
          this.onFrameChangedCallback();
        }
      } else {
        if (e === 0) {
          return;
        }
        var i = "cannot jump to frame. invalid frame number: " + e;
        r.fatal(i);
      }
    }
  };
  GoodgameBitmapClip.prototype.traceDebugLog = function () {
    s.debug("GoodgameBitmapClip traceDebugLog+++++++++++++++++++++++++++++++");
    s.debug("\t\t contains( bmpImage )=" + this.contains(this.bmpImage));
    s.debug("\t\t animationManager=" + this.animationManager);
    s.debug("\t\t mouseChildren=" + this.mouseChildren);
    s.debug("\t\t source=" + this.source);
    s.debug("\t\t _running=" + this._running);
    s.debug("\t\t _startFrame=" + this._startFrame);
    s.debug("\t\t _currentFrame=" + this._currentFrame);
    s.debug("\t\t frameIndex=" + this.frameIndex);
    s.debug("\t\t currentFrameImage=" + this.currentFrameImage);
    s.debug("\t\t targetFps=" + this._tagetFps);
    s.debug("\t\t\t\t source.cacheId=" + this.source.cacheId);
    s.debug("\t\t\t\t source.clipBounds=" + this.source.clipBounds);
    s.debug("\t\t\t\t source.colorID=" + this.source.colorID);
    s.debug("\t\t\t\t source.layerInfo=" + this.source.layerInfo);
    s.debug("\t\t\t\t source.scaleFactor=" + this.source.scaleFactor);
    s.debug("\t\t\t\t tsource.cacheId=" + this.source.cacheId);
    s.debug("\t\t\t\t source.frameStrip=" + this.source.frameStrip);
    s.debug("\t\t\t\t\t\t source.frameStrip.frameAmount=" + this.source.frameStrip.frameAmount);
  };
  GoodgameBitmapClip.BASE_POINT = new c();
  GoodgameBitmapClip.HIT_TEST_POINT = new c();
  return GoodgameBitmapClip;
}(a.AbstractGoodgameClip);
exports.GoodgameBitmapClip = _;