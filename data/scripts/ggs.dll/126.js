Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./190.js");
var s = require("./48.js");
var r = require("./127.js");
var o = require("./191.js");
var l = require("./477.js");
var u = createjs.MovieClip;
var c = createjs.Event;
var _ = createjs.Rectangle;
var d = createjs.Container;
var m = function (e) {
  function AbstractDisplayObjectClip() {
    var t = e.call(this) || this;
    t._clipBounds = new _();
    t.recycleAsset = true;
    t.addEventListener(c.REMOVED_FROM_STAGE, t.bindFunction(t.handleRemovedFromStage));
    return t;
  }
  i.__extends(AbstractDisplayObjectClip, e);
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "isInteractive", {
    set: function (e) {
      this.mouseChildren = e;
      this.mouseEnabled = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "colorData", {
    set: function (e) {
      this._clipColor = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "clipLayerInfo", {
    get: function () {
      return this._clipLayerInfo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "clipBounds", {
    get: function () {
      return this._clipBounds;
    },
    enumerable: true,
    configurable: true
  });
  AbstractDisplayObjectClip.prototype.initCurrentClip = function (e) {
    if (e) {
      this.currentDisplayObject = l.assetsPool.obtain(e);
      var t = this.currentDisplayObject;
      if (this._clipColor && this._clipColor.length > 0) {
        for (var n = 0, i = this._clipColor; n < i.length; n++) {
          i[n].colorClip(t);
        }
      }
      if (t instanceof u && t.framesLoaded >= 1) {
        this._endFrame = t.framesLoaded;
        if (this.hasSubLayer) {
          for (var a = 0; a < t.numChildren - 1; a++) {
            var s = t.getChildAt(a);
            if (s instanceof u) {
              this._endFrame = Math.max(this._endFrame, s.framesLoaded);
            }
          }
        }
      } else {
        this._endFrame = 1;
      }
      if (this._running) {
        this.play();
      } else {
        this.stop();
      }
      this.refreshBounds(this.currentDisplayObject);
      if (t instanceof u) {
        t.gotoAndStop(1);
      }
      this.jumpToFrame(1);
      this.addChild(this.currentDisplayObject);
    }
  };
  AbstractDisplayObjectClip.prototype.jumpToFrame = function (e) {
    if (e > 0) {
      this._currentFrame = e;
      var t = this.currentDisplayObject;
      if (t instanceof u) {
        t.gotoAndStop(this._currentFrame);
        if (this.hasSubLayer) {
          for (var n = 0; n < t.numChildren; n++) {
            var i = t.getChildAt(n);
            if (i instanceof u) {
              i.gotoAndStop(this._currentFrame % i.totalFrames == 0 ? i.totalFrames : this._currentFrame % i.totalFrames);
            }
          }
        }
        if (this._animationColorChange && this._clipColor && this._clipColor.length > 0) {
          for (var a = 0, r = this._clipColor; a < r.length; a++) {
            r[a].colorClip(this.currentDisplayObject);
          }
        }
      }
    } else {
      var o = "cannot jump to frame. invalid frame number: " + e;
      s.fatal(o);
    }
  };
  AbstractDisplayObjectClip.prototype.handleRemovedFromStage = function (e) {
    if (this._clipSizeComponent) {
      this._clipSizeComponent.clipSizeChanged.removeAll();
    }
    this.removeEventListener(c.REMOVED_FROM_STAGE, this.bindFunction(this.handleRemovedFromStage));
    this.stop();
  };
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "clipSizeComponent", {
    get: function () {
      return this._clipSizeComponent;
    },
    set: function (e) {
      this._clipSizeComponent = e;
      if (this._clipSizeComponent) {
        this._clipSizeComponent.setImageSize(this, this._clipBounds);
        this._clipSizeComponent.clipSizeChanged.dispatch(this);
      }
    },
    enumerable: true,
    configurable: true
  });
  AbstractDisplayObjectClip.prototype.addToClipBounds = function (e) {
    this._clipBounds = this._clipBounds.union(e);
  };
  AbstractDisplayObjectClip.prototype.refreshBounds = function (e) {
    this._clipBounds = new _();
    if (e instanceof u) {
      if (e.children.length === 0) {
        e.gotoAndStop(1);
      }
      this.addToClipBounds(e.getBounds(null));
    } else if (e instanceof d) {
      this.addToClipBounds(e.getBounds());
    }
    if (this._clipSizeComponent) {
      this._clipSizeComponent.setImageSize(this, this._clipBounds);
      this._clipSizeComponent.clipSizeChanged.dispatch(this);
    }
  };
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "currentshownDisplayObject", {
    get: function () {
      return this.currentDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "animationColorChange", {
    get: function () {
      return this._animationColorChange;
    },
    set: function (e) {
      this._animationColorChange = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractDisplayObjectClip.prototype, "clipColor", {
    get: function () {
      return this._clipColor;
    },
    set: function (e) {
      this._clipColor = e;
    },
    enumerable: true,
    configurable: true
  });
  AbstractDisplayObjectClip.prototype.renderSingleFrame = function (e) {
    AbstractDisplayObjectClip.containerRegPointFinder.addChild(e);
    AbstractDisplayObjectClip.regPointFinder = AbstractDisplayObjectClip.containerRegPointFinder.getBounds();
    AbstractDisplayObjectClip.containerRegPointFinder.removeChild(e);
    this.addToClipBounds(AbstractDisplayObjectClip.regPointFinder);
    var t = Math.ceil(e.width);
    var n = Math.ceil(e.height);
    var i = e.children.length > 0 && e.children[0].scaleX < 1 ? t / 2 : 0;
    var a = e.children.length > 0 && e.children[0].scaleY < 1 ? n / 2 : 0;
    var s = -Math.floor(AbstractDisplayObjectClip.regPointFinder.x) + i;
    t += Math.ceil(Math.abs(s + AbstractDisplayObjectClip.regPointFinder.x));
    var o = -Math.floor(AbstractDisplayObjectClip.regPointFinder.y) + a;
    n += Math.ceil(Math.abs(o + AbstractDisplayObjectClip.regPointFinder.y));
    var l = new r.FlattenedImage(t, n, s, o, undefined, true);
    if (e.children.length > 0) {
      e.cache(-s, -o, t, n);
    } else {
      e.cache(0, 0, e.width, e.height);
    }
    l.draw(e);
    e.uncache();
    return l;
  };
  AbstractDisplayObjectClip.prototype.convertMovieClip = function (e) {
    return o.ClipSourceOptimizer.ClipMCToBitmaps(e, this, this.renderSingleFrame);
  };
  AbstractDisplayObjectClip.prototype.dispose = function () {
    if (this.currentDisplayObject && this.recycleAsset) {
      l.assetsPool.recycle(this.currentDisplayObject);
    }
    e.prototype.dispose.call(this);
  };
  AbstractDisplayObjectClip.containerRegPointFinder = new d();
  AbstractDisplayObjectClip.regPointFinder = new _();
  return AbstractDisplayObjectClip;
}(a.AbstractGoodgameClip);
exports.AbstractDisplayObjectClip = m;