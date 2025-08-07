Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./59.js");
var s = require("./497.js");
var r = require("./20.js");
var o = function (e) {
  function GoodgameBitmapClipExternal(t = null, n = 24, i = true, a = null) {
    var s = e.call(this, t, n, i) || this;
    s._clipLoaded = new r.Signal(GoodgameBitmapClipExternal);
    s.init();
    s.sourcePlaceholder = a;
    return s;
  }
  i.__extends(GoodgameBitmapClipExternal, e);
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "clipLoaded", {
    get: function () {
      return this._clipLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "frameStrip", {
    get: function () {
      if (this._currentSource) {
        return this._currentSource.frameStrip;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "startFrame", {
    get: function () {
      if (this._currentSource == this.sourcePlaceholder) {
        return 1;
      } else {
        return this._startFrame;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "endFrame", {
    get: function () {
      if (this._currentSource) {
        if (this._currentSource == this.sourcePlaceholder) {
          return this.sourcePlaceholder.frameStrip.frameAmount;
        } else {
          return this._endFrame;
        }
      } else {
        return 1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "clipSizeComponent", {
    set: function (e) {
      this._clipSizeComponent = e;
      if (this._clipSizeComponent && this._currentSource) {
        this._clipSizeComponent.setImageSize(this, this._currentSource.clipBounds);
        this._clipSizeComponent.clipSizeChanged.dispatch(this);
      }
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapClipExternal.prototype.init = function () {
    var e = this.source;
    this._currentSource = this.sourcePlaceholder;
    if (this._currentSource) {
      this.bmpImage.scaleX = this.bmpImage.scaleY = 1 / this._currentSource.scaleFactor;
    }
    if (e) {
      if (e.isLoaded) {
        this.onLoaded(e);
      } else {
        if (this.sourcePlaceholder) {
          if (this.clipSizeComponent) {
            this.clipSizeComponent.setImageSize(this, this._currentSource.clipBounds);
          }
          this.play();
        }
        e.clipLoadedAndConverted.addOnce(this.bindFunction(this.onLoaded));
      }
    }
  };
  GoodgameBitmapClipExternal.prototype.onLoaded = function (e) {
    if (!a.GoodgameBitmapEngine.instance.debugShowPlaceholder) {
      this._currentSource = this.source;
      this.bmpImage.scaleX = this.bmpImage.scaleY = 1 / this._currentSource.scaleFactor;
      this.sourcePlaceholder = null;
      if (this.clipSizeComponent) {
        this.clipSizeComponent.setImageSize(this, this._currentSource.clipBounds);
        this.clipSizeComponent.clipSizeChanged.dispatch(this);
      }
      this._endFrame = this._currentSource.frameStrip.frameAmount;
      this.jumpToFrame(this._startFrame);
      if (this.frameStrip && this.frameStrip.hasMultipleFrames && this._running) {
        this.play();
      } else {
        this.stop();
      }
      this._clipLoaded.dispatch(this);
    }
  };
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "currentSource", {
    get: function () {
      return this._currentSource;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapClipExternal.prototype.dispose = function () {
    e.prototype.dispose.call(this);
    this.sourcePlaceholder = null;
    this._currentSource = null;
    this._clipLoaded.removeAll();
  };
  Object.defineProperty(GoodgameBitmapClipExternal.prototype, "destroyed", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameBitmapClipExternal.prototype.renew = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    this.sourcePlaceholder = e[0][3];
    this.source = e[0][0];
    this.targetFps = e[0][1];
    this._running = e[0][2];
    this.init();
  };
  GoodgameBitmapClipExternal.prototype.destroy = function () {
    this.dispose();
  };
  return GoodgameBitmapClipExternal;
}(s.GoodgameBitmapClip);
exports.GoodgameBitmapClipExternal = o;