Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./126.js");
var s = require("./59.js");
var r = require("./198.js");
var o = require("./20.js");
var l = require("./3.js");
var u = createjs.Event;
var c = createjs.MovieClip;
var _ = function (e) {
  function GoodgameDisplayObjectClipExternal(t, n, i = null, a = 24, r = true, l = null, u = false, c = 1, _ = false, d = false) {
    var m = e.call(this) || this;
    m._isLoaded = false;
    m._bitmapClone = [];
    m._clipLoaded = new o.PrioritySignal(GoodgameDisplayObjectClipExternal);
    m.animationManager = s.GoodgameBitmapEngine.instance.animationManager;
    m.sourceClassName = t;
    m.sourcePath = n;
    m.clipColor = i;
    m.targetFps = a;
    m.priority = c;
    m._running = r;
    m.hasSubLayer = u;
    m._delayLoadingUntilFree = d;
    m.animationColorChange = _;
    m._startFrame = 1;
    m.placeholderClass = l;
    if (m._delayLoadingUntilFree) {
      m.delayLoading();
    } else {
      m.initLoading();
    }
    return m;
  }
  i.__extends(GoodgameDisplayObjectClipExternal, e);
  Object.defineProperty(GoodgameDisplayObjectClipExternal.prototype, "isLoaded", {
    get: function () {
      return this._isLoaded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GoodgameDisplayObjectClipExternal.prototype, "clipLoaded", {
    get: function () {
      return this._clipLoaded;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameDisplayObjectClipExternal.prototype.initLoading = function () {
    if (this.canStartLoading()) {
      this.loadClip();
    } else {
      s.GoodgameBitmapEngine.bulkLoader.addEventListener(u.COMPLETE, this.bindFunction(this.delayLoading));
    }
  };
  GoodgameDisplayObjectClipExternal.prototype.canStartLoading = function () {
    return !this._delayLoadingUntilFree || !!s.GoodgameBitmapEngine.bulkLoader.isLoaded(this.sourcePath) || s.GoodgameBitmapEngine.bulkLoader.isFinished;
  };
  GoodgameDisplayObjectClipExternal.prototype.delayLoading = function () {
    s.GoodgameBitmapEngine.bulkLoader.removeEventListener(u.COMPLETE, this.bindFunction(this.delayLoading));
    if (s.GoodgameBitmapEngine.bulkLoader.isLoaded(this.sourcePath)) {
      this.initLoading();
    } else {
      setTimeout(this.bindFunction(this.initLoading), 30);
    }
  };
  GoodgameDisplayObjectClipExternal.prototype.loadClip = function () {
    var e = this.sourcePath.substring(this.sourcePath.lastIndexOf("/") + 1, this.sourcePath.length);
    var t = s.GoodgameBitmapEngine.bulkLoader.addAssetBundle(this.sourcePath, {
      id: e.replace(/--\d+/, ""),
      priority: this.priority
    });
    if (t._isLoaded) {
      this.onLoaded(null);
    } else {
      if (this.placeholderClass) {
        this.initCurrentClip(this.placeholderClass);
      }
      t.addEventListener(u.COMPLETE, this.bindFunction(this.onLoaded));
    }
    s.GoodgameBitmapEngine.bulkLoader.start(s.GoodgameBitmapEngine.numConnections);
  };
  GoodgameDisplayObjectClipExternal.prototype.isPureMoiveClip = function (e) {
    return GoodgameDisplayObjectClipExternal.EM_WALKERS.test(e);
  };
  GoodgameDisplayObjectClipExternal.prototype.onLoaded = function (e) {
    var t;
    if (this.currentDisplayObject) {
      this.removeChild(this.currentDisplayObject);
    }
    if (t = s.GoodgameBitmapEngine.cacheController.bitmapCache.get(this.sourceClassName)) {
      this.recycleAsset = false;
      this.currentDisplayObject = new c();
      this.currentDisplayObject.name = this.sourceClassName;
      if (this._running) {
        this.play();
      } else {
        this.stop();
      }
      this.currentDisplayObject.children.push(t[0]);
      this.animationLength = this._endFrame = t.length;
      this.refreshBounds(this.currentDisplayObject);
      this.addChild(this.currentDisplayObject);
    } else {
      var n;
      if (!(n = l.getDefinitionByNameFromLibrary(this.sourceClassName))) {
        return;
      }
      this.initCurrentClip(n);
      if (this.currentDisplayObject instanceof c && this.isPureMoiveClip(this.sourceClassName) && !s.GoodgameBitmapEngine.cacheController.bitmapCache.get(this.sourceClassName)) {
        s.GoodgameBitmapEngine.cacheController.bitmapCache.set(this.sourceClassName, this.convertMovieClip(this.currentDisplayObject));
        this.addChild(this.currentDisplayObject);
      }
    }
    this._isLoaded = true;
    this._clipLoaded.dispatch(this);
  };
  Object.defineProperty(GoodgameDisplayObjectClipExternal.prototype, "clipLayerInfo", {
    get: function () {
      if (!this._clipLayerInfo && this._isLoaded) {
        this._clipLayerInfo = new r.ClipLayerInfo(this.currentDisplayObject);
      }
      return this._clipLayerInfo;
    },
    enumerable: true,
    configurable: true
  });
  GoodgameDisplayObjectClipExternal.prototype.jumpToFrame = function (t) {
    var n;
    var i;
    if (this.currentDisplayObject && (n = s.GoodgameBitmapEngine.cacheController.bitmapCache.get(this.sourceClassName))) {
      if (this._bitmapClone.length === 0) {
        this.currentDisplayObject.removeAllChildren();
      }
      this.currentDisplayObject.children.splice(0, 1);
      if (!(i = this._bitmapClone[t] ||= n[t - 1].clone()).parent) {
        i.parent = this.currentDisplayObject;
      }
      this.currentDisplayObject.children.push(i);
    } else {
      e.prototype.jumpToFrame.call(this, t);
    }
    if (this.onFrameChangeCallback) {
      this.onFrameChangeCallback();
    }
  };
  GoodgameDisplayObjectClipExternal.prototype.dispose = function () {
    e.prototype.dispose.call(this);
    this._clipLoaded.removeAll();
  };
  GoodgameDisplayObjectClipExternal.prototype.setOnFrameChangeCallback = function (e) {
    this.onFrameChangeCallback = e;
  };
  GoodgameDisplayObjectClipExternal.EM_WALKERS = /(soldier_)|(male_(classic|dessert|eiland|icecream|volcano)|farhat_classic)/i;
  return GoodgameDisplayObjectClipExternal;
}(a.AbstractDisplayObjectClip);
exports.GoodgameDisplayObjectClipExternal = _;