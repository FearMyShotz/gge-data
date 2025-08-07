Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./6.js");
var u = require("./41.js");
var d = createjs.Event;
var p = function (e) {
  function CastleGoodgameExternalClip(t, i, n = null, o = 24, r = true, l = null, c = false, u = 1, d = false, p = false, h = false, g = false) {
    var C = this;
    C.counter = 0;
    C.useCustomFrameUpdate = false;
    C.allowCaching = false;
    CONSTRUCTOR_HACK;
    (C = e.call(this, t, i, n, o, r, l, c, u, d, g) || this).allowCaching = h;
    C.checkRequest(t);
    C.checkRequest(i);
    C.swfSourcePath = i;
    C.useCustomFrameUpdate = p;
    if (C.isLoaded) {
      C.onLoadedAndInitialised(null);
    } else {
      s.GoodgameBitmapEngine.bulkLoader.addEventListener(a.BulkLoader.COMPLETE, C.bindFunction(C.onBulkLoaderComplete));
      C.clipLoaded.addOnceWithPriority(C.bindFunction(C.onLoadedAndInitialised), CastleGoodgameExternalClip.CLIP_LOADED_PRIORITY_STOP_ANIMATIONS);
    }
    return C;
  }
  n.__extends(CastleGoodgameExternalClip, e);
  CastleGoodgameExternalClip.prototype.initCurrentClip = function (t) {
    if (t) {
      var i = t.__fname || t.name;
      o.EnvGlobalsHandler.globals.lastExternalClip = i;
    }
    e.prototype.initCurrentClip.call(this, t);
  };
  CastleGoodgameExternalClip.prototype.jumpToFrame = function (t) {
    if (t != this.currentFrame || this.useCustomFrameUpdate) {
      e.prototype.jumpToFrame.call(this, t);
      if (this.isLoaded && this.allowCaching) {
        this.updateCacheIfCached();
      }
    }
  };
  CastleGoodgameExternalClip.prototype.setAllowCaching = function (e) {
    this.allowCaching = e;
    if (this.isLoaded) {
      this.initCaching();
    }
  };
  CastleGoodgameExternalClip.prototype.onBulkLoaderComplete = function (e) {
    s.GoodgameBitmapEngine.bulkLoader.removeEventListener(a.BulkLoader.COMPLETE, this.bindFunction(this.onBulkLoaderComplete));
  };
  CastleGoodgameExternalClip.prototype.onLoadedAndInitialised = function (e) {
    var t = this.running;
    u.CastleMovieClipHelper.stopAllMovies(this);
    if (this.allowCaching) {
      this.initCaching();
    } else if (t) {
      this.play();
    }
  };
  CastleGoodgameExternalClip.prototype.initCaching = function () {
    this.doCache();
    if (this.cacheCanvas) {
      this.addEventListener(d.ADDED, this.bindFunction(this.updateCacheEventListener));
      this.addEventListener(d.REMOVED, this.bindFunction(this.updateCacheEventListener));
    }
  };
  CastleGoodgameExternalClip.prototype.updateCacheEventListener = function (e) {
    this.updateCacheIfCached();
  };
  CastleGoodgameExternalClip.prototype.checkRequest = function (e) {
    if (!e || e.toLowerCase().indexOf(CastleGoodgameExternalClip.INVALID_SUBSTRING) != -1) {
      throw new Error("failed asset: " + e + "\n" + new Error().stack);
    }
  };
  CastleGoodgameExternalClip.prototype.updateFrame = function (t) {
    if (!this._paused && this.useCustomFrameUpdate) {
      this.counter += t;
      var i = c.int(this.currentFrame);
      if (this.counter > this.timePerFrame) {
        if (++i > this._numFrames) {
          i = 1;
        }
        this.counter = 0;
      }
      this.jumpToFrame(i);
    } else {
      e.prototype.updateFrame.call(this, t);
    }
  };
  CastleGoodgameExternalClip.prototype.gotoAndStop = function (t) {
    if (this.useCustomFrameUpdate) {
      this.stop();
      this._startFrame = t;
      this._endFrame = t;
      this.jumpToFrame(t);
    } else {
      e.prototype.gotoAndStop.call(this, t);
    }
  };
  CastleGoodgameExternalClip.prototype.doWhenLoaded = function (e) {
    if (this.isLoaded) {
      e(this);
    } else {
      this.clipLoaded.addOnce(e);
    }
  };
  CastleGoodgameExternalClip.prototype.play = function () {
    this._paused = false;
    e.prototype.play.call(this);
  };
  CastleGoodgameExternalClip.prototype.stop = function () {
    this._paused = true;
    e.prototype.stop.call(this);
  };
  CastleGoodgameExternalClip.prototype.dispose = function () {
    this.removeEventListener(d.ADDED, this.bindFunction(this.updateCacheEventListener));
    this.removeEventListener(d.REMOVED, this.bindFunction(this.updateCacheEventListener));
    e.prototype.dispose.call(this);
  };
  CastleGoodgameExternalClip.prototype.recolor = function () {
    var e = this.currentDisplayObject;
    if (e && this._clipColor && this._clipColor.length > 0) {
      for (var t = 0, i = this._clipColor; t < i.length; t++) {
        i[t].colorClip(e);
      }
    }
  };
  CastleGoodgameExternalClip.__initialize_static_members = function () {
    CastleGoodgameExternalClip.INVALID_SUBSTRING = "null";
    CastleGoodgameExternalClip.CLIP_LOADED_PRIORITY_STOP_ANIMATIONS = 999;
  };
  return CastleGoodgameExternalClip;
}(r.GoodgameDisplayObjectClipExternal);
exports.CastleGoodgameExternalClip = p;
l.classImplementsInterfaces(p, "Container", "IGoodgameClip");
p.__initialize_static_members();